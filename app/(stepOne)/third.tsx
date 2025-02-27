import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import Typography from "../../constants/typography";
import { StatusBar } from "expo-status-bar";
import NextButton from "../../Components/NextButton";
import { useRouter } from "expo-router";

const third = () => {

  const router = useRouter()


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.skipContainer}>
          <View style={styles.skipLoading}>
            <View style={styles.blue}></View>
          </View>
          <TouchableOpacity onPress={() => router.push("UserType")}>
            <Text style={styles.skipWord}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Exploring}>
          <Text style={styles.contentOne}>Managing visits and templates</Text>
          <Text style={styles.contentTwo}>
            Scan the QR code at the entrance, follow the prompts, complete the check-in process.
          </Text>
          {/* Resizable Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/Calendar.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
        <NextButton destination="UserType" />
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Loadingcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  stepOne: {
    flex: 1,
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: Typography.fontSizes.extraLarge,
    color: Colors.gray.Three,
  },
  skipContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    zIndex: 10,
  },
  skipLoading: {
    width: "25%",
    height: 7,
    backgroundColor: Colors.gray.Three,
  },
  blue: {
    width: "100%",
    height: 7,
    backgroundColor: Colors.blue,
  },
  skipWord: {
    color: Colors.blue,
  },
  Exploring: {
    marginTop: 100,
    marginLeft: 15
  },
  contentOne: {
    fontSize: 30,
    fontWeight: Typography.fontWeights.bold
  },
  contentTwo: {
    fontSize: 14,
    fontWeight: Typography.fontWeights.regular,
    color: Colors.gray.Two,
    marginVertical: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 350,
    marginTop: 17,
    marginBottom: 85
  },
  image: {
    width: "20%",
    aspectRatio: 1,
  }
});

export default third