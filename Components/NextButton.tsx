import { TouchableOpacity, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import Colors from "../constants/colors"; 

interface NextButtonProps {
  destination: string;
}

export default function NextButton({ destination }: NextButtonProps) {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(destination)}>
      <View style={styles.circle}>
        <AntDesign name="arrowright" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: Colors.blue,
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
  },
});
