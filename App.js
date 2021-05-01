import React from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import {FormProvider, useForm} from 'react-hook-form';

import FirstName from './FirstName';
import LastName from './LastName';
import onSubmit from './onSubmit';

const App = () => {
  const form = useForm({mode: 'onChange'});

  return (
    <FormProvider {...form}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <FirstName />
        <LastName />
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={form.handleSubmit(onSubmit)}>
            Submit
          </Button>
        </View>
      </ScrollView>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default App;
