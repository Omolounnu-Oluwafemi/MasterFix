import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomButton from '../../components/CustomButton';
import BackButton from '../../components/BackButton';

const BookingForm = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [openCategory, setCategoryOpen] = useState(false);
  const [category, setCategory] = useState([
    { label: "Consultational", value: "consultational" },
    { label: "Outlet", value: "outlet" },
    { label: "Services", value: "services" },
  ]);

  const BookingSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
  });

  const handleDateConfirm = (date, setFieldValue) => {
    setFieldValue("date", date.toISOString().split("T")[0]); // Set only the date part
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = (time, setFieldValue) => {
    setFieldValue("time", time.toTimeString().split(" ")[0].substring(0, 5)); // Set only the time part (HH:MM)
    setTimePickerVisibility(false);
  };

  return (
    <Formik
      initialValues={{
        description: "",
        category: "",
        date: "",
        time: "",
      }}
      validationSchema={BookingSchema}
      onSubmit={(values) => {
        // console.log("Form values:", values);
        navigation.navigate('Success', { values });
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
        <View style={styles.container}>
          <View style={styles.top}>
            <BackButton text="Back" iconPosition="left" alignSelf="flex-start" onPress={() => navigation.goBack()} />
          </View>
          <Text style={styles.title}>Booking</Text>
          
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, touched.description && errors.description && styles.errorInput]}
            placeholder="Tell us more about this problem"
            value={values.description}
            onChangeText={handleChange("description")}
            multiline={true}
            numberOfLines={4}
            placeholderTextColor="#737373"
            returnKeyType="next"
          />
          {touched.description && errors.description && (
            <Text style={styles.errorText}>{errors.description}</Text>
          )}

          <Text style={styles.label}>Category</Text>
          <DropDownPicker
            open={openCategory}
            value={values.category}
            items={category}
            setOpen={setCategoryOpen}
            setValue={(callback) => {
              const selectedValue = callback(values.category);
              // console.log("Selected category:", selectedValue);
              setFieldValue("category", selectedValue);
            }} 
            setItems={setCategory}
            placeholder="Select a category"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
          />
          {touched.category && errors.category && (
            <Text style={styles.errorText}>{errors.category}</Text>
          )}

          <Text style={styles.dateTime}>Date</Text>
          <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.dateTimeLabel}>
            <Text>{values.date || "Select Date"}</Text>
            <FontAwesome name="calendar" size={20} color="black" />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={(date) => handleDateConfirm(date, setFieldValue)}
            onCancel={() => setDatePickerVisibility(false)}
          />
          {touched.date && errors.date && (
            <Text style={styles.errorText}>{errors.date}</Text>
          )}

          <Text style={styles.dateTime}>Time</Text>
          <TouchableOpacity onPress={() => setTimePickerVisibility(true)} style={styles.dateTimeLabel}>
            <Text>{values.time || "Select Time"}</Text>
            <FontAwesome name="clock-o" size={20} color="black" />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={(time) => handleTimeConfirm(time, setFieldValue)}
            onCancel={() => setTimePickerVisibility(false)}
          />
          {touched.time && errors.time && (
            <Text style={styles.errorText}>{errors.time}</Text>
          )}

          <CustomButton
            title="Book Appointment"
            backgroundColor="#003366"
            TextColor="#fff"
            marginTop={50}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
    color: '#013C69',
    marginTop: 20,
  },
  top: {
    alignItems: 'flex-start',
    padding: 10,
    marginTop: '15%',
    marginLeft: '5%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  dateTime: {
    fontSize: 16,
    marginTop: 20,
  },
  dateTimeLabel: {
    fontSize: 16,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#DEECFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  dropdown: {
    borderColor: "#ccc",
  },
  dropdownContainer: {
    borderColor: "#ccc",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: "red",
  },
});

export default BookingForm;