import React from 'react';
import {Text, TextInput} from 'react-native';
import {useController, useFormContext} from 'react-hook-form-v6';

import onSubmit from '../onSubmit';

const LastName = () => {
  const {handleSubmit} = useFormContext();
  const {
    meta: {invalid},
    field: {onChange, ...rest},
  } = useController({
    name: 'lastName',
    defaultValue: '',
    rules: {required: true},
  });

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
      <Text>{invalid ? 'This is required' : ' '}</Text>
    </>
  );
};
export default LastName;
