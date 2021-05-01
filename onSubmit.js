import {Alert, Keyboard} from 'react-native';

export default ({firstName, lastName}) => {
  Keyboard.dismiss();
  Alert.alert('', `firstName: ${firstName}\nlastName: ${lastName}`);
};
