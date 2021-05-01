import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {FormProvider, useForm} from 'react-hook-form';

import FirstName from './FirstName';
import LastName from './LastName';
import onSubmit from '../onSubmit';

const Form = () => {
  const form = useForm({mode: 'onChange'});

  console.log('submitCount', form.formState.submitCount);

  return (
    <FormProvider {...form}>
      <FirstName />
      <LastName />
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={form.handleSubmit(onSubmit)}>
          Submit
        </Button>
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
});

export default Form;
