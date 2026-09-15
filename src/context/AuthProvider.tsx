import { supabase } from "@/lib/supabase"
import { createContext, useContext, useEffect, useState } from "react"
import { Session, User } from "@supabase/supabase-js"

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    signUp: (name: string, email: string, phone: string, password: string, confirmPassword: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const initializeSession = async () => {
            try {
                const { data: { session: initialSession } } = await supabase.auth.getSession();
                setSession(initialSession);
                setUser(initialSession?.user ?? null);
            } catch (err) {
                console.error("Error initializing session:", err);
            } finally {
                setLoading(false);
            }
        }

        initializeSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, currentSession) => {
                setSession(currentSession);
                setUser(currentSession?.user ?? null);
                setLoading(false);
            }
        );

        return () => {
            subscription.unsubscribe();
        }
    }, [])

    const signUp = async (name: string, email: string, phone: string, password: string, confirmPassword: string): Promise<void> => {
        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        const { error } = await supabase.auth.signUp({ 
            email, 
            password,
            options: {
                data: {
                    full_name: name,
                    phone_number: phone
                }
            }
        })
        if (error) throw error;
    }

    const signIn = async (email: string, password: string): Promise<void> => {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error;
    }

    const signOut = async (): Promise<void> => {
        const { error } = await supabase.auth.signOut()
        if (error) throw error;
    }

    return (
        <AuthContext.Provider value={{ user, session, loading, signUp, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be within AuthProvider")
    }
    return context;
}


// import { supabase } from "@/lib/supabase"
// import { createContext, useContext, useEffect, useState } from "react"
// import { Session, User } from "@supabase/supabase-js"

// interface AuthContextType {
//     user: User | null;
//     session: Session | null;
//     loading: boolean;

//     signUp: (name: string, email: string, phone: string, password: string, confirmPassword: string) => Promise<void>;
//     signIn: (email: string, password: string) => Promise<void>;
//     signOut: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | null>(null)

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//     const [user, setUser] = useState<User | null>(null)
//     const [session, setSession] = useState<Session | null>(null)
//     const [loading, setLoading] = useState<boolean>(true)

//     useEffect(() => {
//         const initializeSession = async () => {
//             const { data: { session: initialSession } } = await supabase.auth.getSession();
//             setSession(initialSession)
//             setUser(initialSession?.user ?? null)
//             setLoading(false)
//         }

//         initializeSession();

//         const { data: { subscription } } = supabase.auth.onAuthStateChange(
//             (_event, currentSession) => {
//                 setSession(currentSession)
//                 setUser(currentSession?.user ?? null)
//                 setLoading(false)
//             }
//         );
//         return () => {
//             subscription.unsubscribe();
//         }
//     }, [])

//     const signUp = async (name: string, email: string, phone: string, password: string, confirmPassword: string): Promise<void> => {
//         if (password !== confirmPassword) {
//             throw new Error("Passwords do not match");
//         }

//         const { error } = await supabase.auth.signUp({ 
//             email, 
//             password,
//             options: {
//                 data: {
//                     full_name: name,
//                     phone_number: phone
//                 }
//             }
//         })
//         if (error) throw error;
//     }

//     const signIn = async (email: string, password: string): Promise<void> => {
//         const { error } = await supabase.auth.signInWithPassword({ email, password })
//         if (error) throw error;
//     }

//     const signOut = async (): Promise<void> => {
//         const { error } = await supabase.auth.signOut()
//         if (error) throw error;
//     }

//     return (
//         <AuthContext.Provider value={{ user, session, loading, signUp, signIn, signOut } as AuthContextType}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export const useAuth = () => {
//     const context = useContext(AuthContext)
//     if (!context) {
//         throw new Error("useAuth must be within AuthProvider")
//     }
//     return context;
// }

