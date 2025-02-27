import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Image1 from '../assets/hot.jpg'
import Image2 from '../assets/hot2.jpg'
import Image3 from '../assets/hot3.jpg'
import Image4 from '../assets/hot4.jpg'
import Image5 from '../assets/hot5.jpg'
import Image6 from '../assets/hot6.jpg'


const companiesData = [
  { id: '1', image: Image1, name: 'Figma ipsum' },
  { id: '2', image: Image2, name: 'Figma ipsum' },
  { id: '3', image: Image3, name: 'Figma ipsum' },
  { id: '4', image: Image4, name: 'Figma ipsum' },
  { id: '5', image: Image5, name: 'Figma ipsum' },
  { id: '6', image: Image6, name: 'Figma ipsum' },
];

const Companies = () => {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Companies</Text>
        <TouchableOpacity onPress={() => router.push('/companies')}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={companiesData}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.companyText}>{item.name}</Text>
            </View>
          </View>
        )}
        nestedScrollEnabled={true}
      />
    </View>

  )
}

export default Companies

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#263238',
  },
  viewText: {
    fontSize: 14,
    color: '#1E88E5',
  },
  gridContainer: {
    justifyContent: 'space-between',
  },
  card: {
    position: 'relative',
    width: '30%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingVertical: 4,
    alignItems: 'center',
  },
  companyText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
})