import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFormContext as useFormContextV7} from 'react-hook-form';
import {useFormContext as useFormContextV6} from 'react-hook-form-v6';

const FormState = ({v6}) => {
  const useFormContext = v6 ? useFormContextV6 : useFormContextV7;
  const {
    formState: {errors, submitCount, isSubmitted, isValid},
  } = useFormContext();

  return (
    <View>
      <Text style={styles.title}>Form State</Text>
      <Text>{`submitCount: ${submitCount}`}</Text>
      <Text>{`error firstName: ${!!errors.firstName}`}</Text>
      <Text>{`error lastName: ${!!errors.lastName}`}</Text>
      <Text>{`isSubmitted: ${isSubmitted}`}</Text>
      <Text>{`isValid: ${isValid}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default FormState;
