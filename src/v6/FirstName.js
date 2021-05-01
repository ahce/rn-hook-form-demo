import React from 'react';
import {Text, TextInput} from 'react-native';
import {useController, useFormContext} from 'react-hook-form-v6';

const FirstName = () => {
  const {
    control: {fieldsRef},
  } = useFormContext();
  const {
    meta: {invalid},
    field: {onChange, ...rest},
  } = useController({
    name: 'firstName',
    defaultValue: '',
    rules: {required: true},
  });

  return (
    <>
      <TextInput
        {...rest}
        underlineColorAndroid="blue"
        placeholder="First Name"
        returnKeyType="next"
        blurOnSubmit={false}
        onChangeText={onChange}
        onSubmitEditing={() => {
          fieldsRef.current.lastName.ref.focus();
        }}
      />
      <Text>{invalid ? 'This is required' : ' '}</Text>
    </>
  );
};

export default FirstName;
