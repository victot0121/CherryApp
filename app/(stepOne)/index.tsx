import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import Typography from "../../constants/typography";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import NextButton from "../../Components/NextButton";
import { useRouter } from "expo-router";


export default function Page() {
  const router = useRouter()
  const [step, setStep] = useState(0); // 0: Image, 1: Loading, 2: Main Content
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulating login state

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Keep splash screen visible

        // Show image for 4 seconds
        setTimeout(() => setStep(1), 4000);
        // Show loading for 4 seconds
        setTimeout(() => {
          setStep(2);
          SplashScreen.hideAsync(); // Hide splash screen when ready


           // Check if user is logged in and redirect
           if (isLoggedIn) {
            router.push("subscription");
          }


        }, 8000);
      } catch (error) {
        console.warn(error);
      }
    }
    prepare();
  }, [isLoggedIn]);

  if (step === 0) {
    return (
      <View style={styles.stepOne}>
        <StatusBar backgroundColor="#356C9D" barStyle="light-content" />
        <Image source={require('../../assets/Logo.png')} resizeMode="contain" />
      </View>
    );
  }

  if (step === 1) {
    return (
      <View style={styles.Loadingcontainer}>
        <StatusBar style="auto" />
        <ActivityIndicator size="large" color={Colors.gray.Two} />
        <Text >Loading...</Text>
      </View>
    );
  }

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
          <Text style={styles.contentOne}>Exploring organizations and institutions</Text>
          <Text style={styles.contentTwo}>
            Browse featured institutions, use the search and filter options, discover new places to visit
          </Text>
          {/* Resizable Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/Task management.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
        <NextButton destination="second" />
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
    width: "35%",
    height: 7,
    backgroundColor: Colors.blue,
  },
  skipWord: {
    color: Colors.blue,
  },
  Exploring: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 50,
    marginBottom: 55
  },
  image: {
    width: "100%",
    // aspectRatio: 1,
  }
});


