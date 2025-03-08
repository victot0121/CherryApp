import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface PickProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const Pick: React.FC<PickProps> = ({ title, placeholder, value, onChangeText }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Nigeria',
    flag: '🇳🇬',
    dialCode: '+234',
    code: 'NG',
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countryList = data.map((country: any) => ({
          name: country.name.common,
          flag: country.flag,
          dialCode: country.idd?.root ? country.idd.root + (country.idd.suffixes?.[0] || '') : '',
          code: country.cca2,
        }));
        setCountries(countryList);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.phoneContainer}>
        <Text style={styles.flag}>{selectedCountry.flag}</Text>
        <Picker
          selectedValue={selectedCountry.code}
          style={styles.picker}
          onValueChange={(itemValue) => {
            const newCountry = countries.find((country: any) => country.code === itemValue);
            if (newCountry) setSelectedCountry(newCountry);
          }}
        >
          {countries.map((country: any) => (
            <Picker.Item key={country.code} label={`${country.flag} ${country.dialCode}`} value={country.code} />
          ))}
        </Picker>
        <Text style={styles.countryCode}>{selectedCountry.dialCode}</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0"
          keyboardType="phone-pad"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default Pick;

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    top: -10,
    left: 15,
    fontSize: 12,
    fontWeight: "bold",
    color: "#666",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 5,
    zIndex: 10,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    position: "relative",
  },
  flag: {
    fontSize: 17,
    marginRight: 2,
  },
  picker: {
    height: 40,
    width: 50,
  },
  countryCode: {
    fontSize: 13,
    fontWeight: 'bold',
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
  },
});
