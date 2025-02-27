import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const LanguageDropdown = () => {
    const [open, setOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const languages = [
        { label: "English", value: "en", icon: () => <Image source={require("../assets/Flag.png")} style={styles.flag} /> },
        { label: "French", value: "fr", icon: () => <Image source={require("../assets/Flag6.png")} style={styles.flag} /> },
        { label: "Spanish", value: "es", icon: () => <Image source={require("../assets/Flag3.png")} style={styles.flag} /> },
        { label: "German", value: "de", icon: () => <Image source={require("../assets/Flag8.png")} style={styles.flag} /> },
        { label: "Japanese", value: "jp", icon: () => <Image source={require("../assets/Flag4.png")} style={styles.flag} /> },
    ];

    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                value={selectedLanguage}
                items={languages}
                setOpen={setOpen}
                setValue={setSelectedLanguage}
                placeholder="Select Language"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
                labelStyle={styles.labelStyle}
                listItemLabelStyle={styles.listItemLabel}
                renderListItem={(props) => (
                    <View style={styles.listItem}>
                        {props.item.icon && props.item.icon()} 
                        <View style={styles.labelWrapper}>
                            <Text style={styles.listItemLabel}>{props.item.label}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default LanguageDropdown;

const styles = StyleSheet.create({
    container: {
        width: 120,
    },
    dropdown: {
        minHeight: 20,
    },
    dropdownContainer: {
        borderColor: "#fff",
        marginTop: 10,
    },
    flag: {
        width: 15,
        height: 12,
        marginRight: 10,
    },
    labelStyle: {
        fontSize: 9,
    },
    listItemLabel: {
        fontSize: 12, 
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    labelWrapper: {
        flex: 1,
    },
});
