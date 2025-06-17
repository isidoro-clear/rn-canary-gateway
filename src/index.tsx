import RnCanaryGateway from './NativeRnCanaryGateway';

function multiply(a: number, b: number): number {
  return RnCanaryGateway.multiply(a, b);
}

function initialize(apiKey: string) {
  return RnCanaryGateway.initialize(apiKey);
}

function sendEvent(eventName: string, data: any) {
  return RnCanaryGateway.sendEvent(eventName, data);
}

// Default export with all functions
export default {
  multiply,
  initialize,
  sendEvent,
};
