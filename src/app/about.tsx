import { StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function About() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        
        {/* Title using your theme sizing */}
        <ThemedText type="title" style={styles.title}>
          About This App
        </ThemedText>

        {/* Regular themed paragraph text */}
        <ThemedText style={styles.description}>
          This is Dante's Dark App. Built with Expo and React Native.
        </ThemedText>

        {/* Link to go back home */}
        <Link href="/" asChild>
          <Pressable style={styles.button}>
            <ThemedText style={styles.buttonText}>Go Back Home</ThemedText>
          </Pressable>
        </Link>

      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF', // Or use a color from your theme constants
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
