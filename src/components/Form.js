import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Picker} from 'native-base';
import colors from '../utils/colors';

export default function Form({
  months,
  capital,
  interest,
  setMonths,
  setInterest,
  setCapital,
}) {
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={(e) => setInterest(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.pickerContent}>
        <Picker
          style={picketSelectStyles}
          mode="dropdown"
          selectedValue={months}
          onValueChange={(value) => setMonths(value)}>
          <Picker.Item label="Ingresar meses" value="Ingresar meses" />
          <Picker.Item label="3 meses" value="3" />
          <Picker.Item label="6 meses" value="6" />
          <Picker.Item label="9 meses" value="9" />
          <Picker.Item label="12 meses" value="12" />
          <Picker.Item label="24 meses" value="24" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 40,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
  pickerContent: {
    borderColor: colors.PRIMARY_COLOR,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    paddingRight: 30,
    marginBottom: 30,
  },
});
