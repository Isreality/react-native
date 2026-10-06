import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  Session,
  User,
} from "@supabase/supabase-js";

import { supabase } from "@/lib/supabase";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;

  signUp: (
    name: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;

  signIn: (
    email: string,
    password: string
  ) => Promise<void>;

  signOut: () => Promise<void>;
}

const AuthContext =
  createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] =
    useState<Session | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function initializeSession() {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          console.error(
            "Supabase session error:",
            error
          );
        }

        if (!mounted) return;

        setSession(session);
        setUser(session?.user ?? null);
      } catch (error) {
        console.error(
          "Failed to initialize session:",
          error
        );

        if (mounted) {
          setSession(null);
          setUser(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    initializeSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!mounted) return;

        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function signUp(
    name: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string
  ) {
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            phone_number: phone,
          },
        },
      });

    if (error) {
      throw error;
    }
  }

  async function signIn(
    email: string,
    password: string
  ) {
    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      throw error;
    }
  }

  async function signOut() {
    const { error } =
      await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    setUser(null);
    setSession(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}

// import { supabase } from "@/lib/supabase";
// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// import {
//   Session,
//   User,
// } from "@supabase/supabase-js";

// interface AuthContextType {
//   user: User | null;
//   session: Session | null;
//   loading: boolean;

//   signUp: (
//     name: string,
//     email: string,
//     phone: string,
//     password: string,
//     confirmPassword: string
//   ) => Promise<void>;

//   signIn: (
//     email: string,
//     password: string
//   ) => Promise<void>;

//   signOut: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [session, setSession] = useState<Session | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let mounted = true;

//     const initializeSession = async () => {
//       try {
//         const {
//           data: { session },
//           error,
//         } = await supabase.auth.getSession();

//         if (error) {
//           console.error(
//             "Supabase getSession error:",
//             error
//           );
//         }

//         if (!mounted) return;

//         setSession(session);
//         setUser(session?.user ?? null);
//       } catch (error) {
//         console.error(
//           "Error initializing session:",
//           error
//         );

//         if (mounted) {
//           setSession(null);
//           setUser(null);
//         }
//       } finally {
//         if (mounted) {
//           setLoading(false);
//         }
//       }
//     };

//     initializeSession();

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         if (!mounted) return;

//         setSession(session);
//         setUser(session?.user ?? null);
//         setLoading(false);
//       }
//     );

//     return () => {
//       mounted = false;
//       subscription.unsubscribe();
//     };
//   }, []);

//   const signUp = async (
//     name: string,
//     email: string,
//     phone: string,
//     password: string,
//     confirmPassword: string
//   ): Promise<void> => {
//     if (password !== confirmPassword) {
//       throw new Error("Passwords do not match");
//     }

//     const { error } = await supabase.auth.signUp({
//       email,
//       password,

//       options: {
//         data: {
//           full_name: name,
//           phone_number: phone,
//         },
//       },
//     });

//     if (error) {
//       throw error;
//     }
//   };

//   const signIn = async (
//     email: string,
//     password: string
//   ): Promise<void> => {
//     const { error } =
//       await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//     if (error) {
//       throw error;
//     }
//   };

//   const signOut = async (): Promise<void> => {
//     const { error } = await supabase.auth.signOut();

//     if (error) {
//       throw error;
//     }

//     setUser(null);
//     setSession(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         session,
//         loading,
//         signUp,
//         signIn,
//         signOut,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error(
//       "useAuth must be used inside AuthProvider"
//     );
//   }

//   return context;
// };








