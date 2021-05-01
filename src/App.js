import React, {useState} from 'react';
import {ScrollView, StyleSheet, Switch, Text, View} from 'react-native';

import FormV6 from './v6';
import FormV7 from './v7';

const App = () => {
  const [enableV6, setEnableV6] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.switchContainer}>
        <Text>Enable v6</Text>
        <Switch value={enableV6} onValueChange={setEnableV6} />
      </View>
      {enableV6 ? <FormV6 /> : <FormV7 />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
});

export default App;
