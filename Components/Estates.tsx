import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Image1 from '../assets/es1.jpeg'
import Image2 from '../assets/es2.jpeg'
import Image3 from '../assets/es3.jpeg'
import Image4 from '../assets/es4.jpeg'
import Image5 from '../assets/es5.jpeg'
import Image6 from '../assets/es6.jpeg'


const EstatesData = [
    { id: '1', image: Image1, name: 'Figma ipsum' },
    { id: '2', image: Image2, name: 'Figma ipsum' },
    { id: '3', image: Image3, name: 'Figma ipsum' },
    { id: '4', image: Image4, name: 'Figma ipsum' },
    { id: '5', image: Image5, name: 'Figma ipsum' },
    { id: '6', image: Image6, name: 'Figma ipsum' },
];

const Estates = () => {
    const router = useRouter();


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Estates</Text>
                <TouchableOpacity onPress={() => router.push('/estates')}>
                    <Text style={styles.viewText}>View</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={EstatesData}
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

export default Estates

const styles = StyleSheet.create({
    container: {
        padding: 20,
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