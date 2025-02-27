import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, Link } from 'expo-router';

const SubscriptionCard = () => {
  const router = useRouter();

  const routernotification = () => {
    router.push('subscription')
  }


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Subscribe to enjoy more features</Text>
        <Text style={styles.subtitle}>Figma ipsum component variant main</Text>
        <TouchableOpacity style={styles.button} onPress={routernotification}>
          <Text style={styles.buttonText}>View Plans</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SubscriptionCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F7FA', 
  },
  card: {
    width: '100%',
    backgroundColor: '#D1E3F8',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A374D',
    marginBottom: 15,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#3E5060',
    marginBottom: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#356C9D', 
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
}) 