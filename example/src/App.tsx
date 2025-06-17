import { Text, View, StyleSheet } from 'react-native';
import RnCanaryGateway from 'rn-canary-gateway';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    RnCanaryGateway.initialize('your-api-key');
    RnCanaryGateway.sendEvent('test', { message: 'Hello from React Native' });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Example App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
