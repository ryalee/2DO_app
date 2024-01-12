import { useState } from "react";
import { View, StyleSheet } from 'react-native'
import { Calendar } from "react-native-calendars";

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    console.log("Selected day: ", day);
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{ [selectedDate]: {selected: true, marked: true, selectedColor: 'blue'} }}
        style={styles.calendar}   
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  calendar: {
    width: 400,
    height: 370,
    borderRadius: 20,
  },
});

export default CalendarScreen;