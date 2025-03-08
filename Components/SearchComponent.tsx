import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Import local images
const landmarkEstate = require('../assets/lego.svg.png');
const landmarkEsteem = require('../assets/lenovo.png.png');
const landmarkEstuary = require('../assets/lenovo.png.png');
const landmarkEssay = require('../assets/lenovo.png.png');

const SearchComponent = () => {
    const [searchText, setSearchText] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [results, setResults] = useState([]);
    const router = useRouter();

    const mockData = [
        { id: 1, name: 'Landmark Estate', address: '1234 Oak Street', logo: landmarkEstate, place: "FormScreen" },
        { id: 2, name: 'Landmark Esteem', address: '678 Elm Street', logo: landmarkEsteem, place: "FormScreen" },
        { id: 3, name: 'Landmark Estuary', address: '345 Maple Avenue', logo: landmarkEstuary, place: "FormVisitor" },
        { id: 4, name: 'Landmark Essay', address: '901 Pine Street', logo: landmarkEssay, place: "FormVisitor" },
    ];

    const handleSearch = (text: string) => {
        setSearchText(text);
        setResults(text ? mockData.filter(item => item.name.toLowerCase().includes(text.toLowerCase())) : []);
    };

    const navigateToForm = (item: any) => {
        router.push({ pathname: `/forms/${item.place}`, params: { id: item.id, name: item.name } });
    };


    return (
        <View style={{ padding: 16 }}>
            {/* Search Bar */}
            <TouchableOpacity onPress={() => setIsExpanded(true)} disabled={isExpanded}>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Companies, branches, estates, names...."
                        value={searchText}
                        onFocus={() => setIsExpanded(true)}
                        onChangeText={handleSearch}
                        style={styles.input}
                    />
                    <AntDesign name="search1" size={20} color="gray" style={{ marginRight: 10 }} />
                </View>
            </TouchableOpacity>

            {/* Expanded Search */}
            {isExpanded && (
                <View style={styles.searchResultsContainer}>
                    <View style={styles.searchHeader}>
                        <TouchableOpacity onPress={() => { setIsExpanded(false); setSearchText(''); setResults([]); }}>
                            <AntDesign name="arrowleft" size={24} color="black" style={{ margin: 10 }} />
                        </TouchableOpacity>
                        <TextInput
                            autoFocus
                            value={searchText}
                            onChangeText={handleSearch}
                            placeholder="Search..."
                            style={{ flex: 1, height: 40 }}
                        />
                        {searchText !== '' && (
                            <TouchableOpacity onPress={() => { setSearchText(''); setResults([]); }}>
                                <AntDesign name="close" size={24} color="black" style={{ margin: 10 }} />
                            </TouchableOpacity>
                        )}
                    </View>

                    {/* Search Results */}
                    {results.length > 0 && (
                        <FlatList
                            data={results}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigateToForm(item)}>
                                    <View style={styles.resultItem}>
                                        <Image source={item.logo} style={styles.logo} />
                                        <View>
                                            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                            <Text style={{ color: 'gray' }}>{item.address}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    )}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        paddingHorizontal: 10,
        height: 50,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 12,
    },
    searchResultsContainer: {
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 200,
        zIndex: 99,
    },
    searchHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
});

export default SearchComponent;
