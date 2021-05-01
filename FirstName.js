import React from 'react';
import {Text, TextInput} from 'react-native';
import {useController, useFormContext} from 'react-hook-form';

const FirstName = () => {
  const {setFocus} = useFormContext();
  const {
    fieldState: {error},
    field: {onChange, ...rest},
  } = useController({name: 'firstName', rules: {required: true}});

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
          setFocus('lastName');
        }}
      />
      <Text>{error ? 'This is required' : ' '}</Text>
    </>
  );
};

export default FirstName;
