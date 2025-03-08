import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LanguageDropdown from '../../../Components/NotificationHeader';
import SearchComponent from '../../../Components/SearchComponent';
import { useRouter } from 'expo-router';

const FormScreen = () => {
  const router = useRouter();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Nigeria',
    flag: '🇳🇬',
    dialCode: '+234',
    code: 'NG',
  });
  const [loading, setLoading] = useState(true);

  // Input states
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  // Fetch country data from REST API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        // Filter out necessary fields
        const countryList = data.map((country) => ({
          name: country.name.common,
          flag: country.flag,
          dialCode: country.idd?.root ? country.idd.root + (country.idd.suffixes?.[0] || '') : '',
          code: country.cca2,
        }));

        setCountries(countryList);
        setSelectedCountry(countryList.find((c) => c.code === 'NG') || countryList[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country data:', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Check if all inputs are filled
  const isFormFilled = fullName.trim() !== '' && phoneNumber.trim() !== '' && email.trim() !== '';

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Header */}
      <LanguageDropdown showBack title="Landmark Esteem" />

      {/* Search Component */}
      <View style={[styles.searchContainer, isSearchActive && styles.searchOverlay]}>
        <SearchComponent />
      </View>

      {!loading && (
        <View style={[styles.formContainer, isSearchActive && styles.hiddenForm]}>
          <Text style={styles.title}>Visitor’s Form</Text>

          {/* Full Name */}
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter recipient full name"
            placeholderTextColor="#A0A0A0"
            value={fullName}
            onChangeText={setFullName}
          />

          {/* Mobile Number */}
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.phoneContainer}>
            <Text style={styles.flag}>{selectedCountry.flag}</Text>
            <Picker
              selectedValue={selectedCountry.code}
              style={styles.picker}
              onValueChange={(itemValue) => {
                const newCountry = countries.find((country) => country.code === itemValue);
                if (newCountry) setSelectedCountry(newCountry);
              }}
            >
              {countries.map((country) => (
                <Picker.Item key={country.code} label={`${country.flag} ${country.dialCode}`} value={country.code} />
              ))}
            </Picker>
            <Text style={styles.countryCode}>{selectedCountry.dialCode}</Text>
            <TextInput
              style={styles.phoneInput}
              placeholder="Enter recipient phone number"
              placeholderTextColor="#A0A0A0"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* Email Address */}
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter recipient email address"
            placeholderTextColor="#A0A0A0"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* Submit Button */}
          <TouchableOpacity
            style={[styles.submitButton, isFormFilled && styles.activeSubmitButton]}
            disabled={!isFormFilled}
            onPress={() => {
              if (isFormFilled) {
                router.push('../forms/HomeAddress');
              }
            }}
          >
            <Text style={[styles.submitText, isFormFilled && styles.activeSubmitText]}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FormScreen;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 16,
  },
  searchContainer: {
    marginVertical: 10,
  },
  searchOverlay: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  formContainer: {
    marginTop: 10,
    padding: 16,
  },
  hiddenForm: {
    display: 'none',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  input: {
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 16,
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
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#D0D0D0', // Default grey
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
  },
  activeSubmitButton: {
    backgroundColor: '#356C9D', // Active blue when inputs are filled
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'light',
    color: '#000', // Default black text
  },
  activeSubmitText: {
    color: '#FFFFFF', // White text when active
  },
});
