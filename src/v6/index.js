import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {FormProvider, useForm} from 'react-hook-form-v6';

import FirstName from './FirstName';
import LastName from './LastName';
import FormState from '../FormState';
import onSubmit from '../onSubmit';

const Form = () => {
  const form = useForm({mode: 'onChange'});

  return (
    <FormProvider {...form}>
      <FirstName />
      <LastName />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={form.handleSubmit(onSubmit)}>
          Submit
        </Button>
      </View>
      <FormState v6 />
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
});

export default Form;
