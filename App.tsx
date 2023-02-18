import RootContext from '@myapp/context/RootContext';
import MainNavigator from '@myapp/routes/MainNavigator';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <RootContext>
        <MainNavigator />
      </RootContext>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
