import { Redirect } from "expo-router";
import { useAuth } from "@/context/AuthProvider";

export default function Index() {
  const { session } = useAuth();

  if (session) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/login" />;
}

// import { Redirect } from "expo-router";
// import { useAuth } from "@/context/AuthProvider";
// import { useRouter, Link } from 'expo-router';

// import Login from './(auth)/login'


// // const image = <Image source='@/assets/images/react-logo.png' style={{ width: 100, height: 100 }} />;
// // const router = useRouter();

// export default function HomeScreen() {
//   const router = useRouter();

//   return (
//     <Login/>
//   );
// }

// // const styles = StyleSheet.create({ });
