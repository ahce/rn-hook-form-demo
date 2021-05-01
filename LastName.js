import React from 'react';
import {Text, TextInput} from 'react-native';
import {useController, useFormContext} from 'react-hook-form';

import onSubmit from './onSubmit';

const LastName = () => {
  const {handleSubmit} = useFormContext();
  const {
    fieldState: {error},
    field: {onChange, ...rest},
  } = useController({name: 'lastName', rules: {required: true}});

  return (
    <>
      <TextInput
        {...rest}
        underlineColorAndroid="blue"
        placeholder="Last Name"
        returnKeyType="send"
        blurOnSubmit={false}
        onChangeText={onChange}
        onSubmitEditing={handleSubmit(onSubmit)}
      />
      <Text>{error ? 'This is required' : ' '}</Text>
    </>
  );
};
export default LastName;
