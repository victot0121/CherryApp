import { View, StatusBar, SafeAreaView, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import SearchComponent from '../../Components/SearchComponent';
import Companies from '../../Components/Companies';
import Estates from '../../Components/Estates';
import SubscriptionCard from '../../Components/SubscriptionCard';
import SidebarNavbar from '../../Components/SidebarNavbar';


export default function Home() {

  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);

  const routernotification = () => {
    router.push('notificationScreen')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1B364F" barStyle="light-content" />
      <View style={styles.containerDiv}>
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Image source={require('../../assets/container.png')} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.containeText}>Receptionizt</Text>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/group.png')} resizeMode="contain" style={styles.profileProfile} />
          <TouchableOpacity onPress={routernotification}>
            <Image source={require('../../assets/leading-icon.png')} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
      <SidebarNavbar show={show} setShow={setShow} />
      <View style={styles.container}>
        <SearchComponent />
      </View>
      <ScrollView contentContainerStyle={styles.formContainer} nestedScrollEnabled={true}>
        <View style={styles.visitingCard}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Visiting made perfect</Text>
            <Text style={styles.subtitleText}>
              Figma ipsum component variant main layer. Figma ipsum component variant.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Try Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={require('../../assets/RectangleHouse.png')} resizeMode="cover" style={styles.houseImage} />
          </View>
        </View>

        {/* Ensure FlatLists inside use nestedScrollEnabled */}
        <Companies />
        <SubscriptionCard />
        <Estates />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  containerDiv: {
    flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: "#1B364F",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: "center",
  },
  containeText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  container: {
    padding: 20,
    height: 110,
    backgroundColor: "#1B364F",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    marginBottom: 40,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginTop: 7,
    justifyContent: 'center',
  },
  profileProfile: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  visitingCard: {
    backgroundColor: "#DDE2E6",
    width: "100%",
    borderRadius: 12,
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#263238",
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 14,
    color: "#455A64",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#356C9D",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  imageWrapper: {
    width: 100,
    height: 80,
    borderRadius: 8,
    overflow: "hidden",
  },
  houseImage: {
    width: "100%",
    height: "100%",
  },

})