# rn-canary-gateway

The Canary Gateway is a lightweight and customizable native Android module designed to integrate seamlessly with React Native apps. It provides a secure and efficient bridge for communicating with the Canary API, handling native-side configuration, authentication, and initialization logic.

## Installation

```sh
npm install rn-canary-gateway
```

## Usage

```js
import RnCanaryGateway from 'rn-canary-gateway';

// Initialize the gateway with your API key
RnCanaryGateway.initialize('your-api-key');

// Send events to the Canary API
RnCanaryGateway.sendEvent('test', { message: 'Hello from React Native' });
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
