import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from "react-native";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function ModalScreen() {
    const router = useRouter();
    const [selectedDates, setSelectedDates] = useState({ start: null, end: null });
    const [currentMonth, setCurrentMonth] = useState(8); // Default: August
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


    const handleDatePress = (day) => {
        if (!selectedDates.start || (selectedDates.start && selectedDates.end)) {
            setSelectedDates({ start: { day, month: currentMonth, year: currentYear }, end: null });
        } else {
            setSelectedDates({ ...selectedDates, end: { day, month: currentMonth, year: currentYear } });
        }
    };

    const changeMonth = (direction) => {
        let newMonth = currentMonth + direction;
        let newYear = currentYear;
        if (newMonth > 12) {
            newMonth = 1;
            newYear++;
        } else if (newMonth < 1) {
            newMonth = 12;
            newYear--;
        }
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    const renderCalendar = () => {
        const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

        return (
            <View>
                <View style={styles.weekDays}>
                    {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                        <Text key={index} style={styles.weekDayText}>{day}</Text>
                    ))}
                </View>
                <View style={styles.calendarGrid}>
                    {days.map((day) => (
                        <TouchableOpacity
                            key={day}
                            style={[
                                styles.day,
                                selectedDates.start?.day === day ? styles.selectedDay : {},
                                selectedDates.end?.day === day ? styles.selectedDay : {},
                                selectedDates.start && selectedDates.end &&
                                    day > selectedDates.start.day && day < selectedDates.end.day
                                    ? styles.rangeDay
                                    : {},
                            ]}
                            onPress={() => handleDatePress(day)}
                        >
                            <Text
                                style={
                                    selectedDates.start?.day === day || selectedDates.end?.day === day
                                        ? styles.selectedText
                                        : styles.dayText
                                }
                            >
                                {day}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <View style={styles.modalContent}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.dateText}>
                    {selectedDates.start && selectedDates.end
                        ? `Aug ${selectedDates.start.day} - Aug ${selectedDates.end.day}`
                        : "From - Return dates"}
                </Text>
                <View style={styles.monthSelector}>
                    <TouchableOpacity onPress={() => changeMonth(-1)}>
                        <AntDesign name="left" size={20} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.monthText}>{`${months[currentMonth - 1]} ${currentYear}`}</Text>
                    <TouchableOpacity onPress={() => changeMonth(1)}>
                        <AntDesign name="right" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                {renderCalendar()}
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => setSelectedDates({ start: null, end: null })}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.okText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "100%",
        height: "80%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    saveText: {
        fontSize: 16,
        color: "#356C9D",
    },
    dateText: {
        fontSize: 18,
        textAlign: "center",
        marginVertical: 10,
        fontWeight: "bold",
    },
    monthSelector: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginBottom: 10,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    monthText: {
        fontSize: 18,
        marginHorizontal: 20,
    },
    weekDays: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
    },
    weekDayText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    calendarGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 10,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    day: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        borderRadius: 20,
    },
    dayText: {
        fontSize: 16,
    },
    selectedDay: {
        backgroundColor: "#356C9D",
        borderRadius: 20,
    },
    rangeDay: {
        backgroundColor: "#D6EAF8",
    },
    selectedText: {
        color: "white",
        fontWeight: "bold",
    },
    footer: {
        flexDirection: "row",
        gap: 20,
        marginTop: 20,
        justifyContent: "flex-end",
    },
    cancelText: {
        fontSize: 16,
        color: "#356C9D",
    },
    okText: {
        fontSize: 16,
        color: "#356C9D",
    },
});
