import { Text, View, StyleSheet } from 'react-native';
import { multiply } from 'rn-canary-gateway';
import { NativeModules } from 'react-native';
import { useEffect } from 'react';

const { RnCanaryGateway } = NativeModules;

const result = multiply(3, 7);

export default function App() {
  useEffect(() => {
    RnCanaryGateway.initialize('your-api-key');
    RnCanaryGateway.sendEvent('test', { message: 'Hello from React Native' });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
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
