import RnCanaryGateway from './NativeRnCanaryGateway';

export function multiply(a: number, b: number): number {
  return RnCanaryGateway.multiply(a, b);
}

export function initialize(apiKey: string) {
  return RnCanaryGateway.initialize(apiKey);
}

export function sendEvent(eventName: string, data: any) {
  return RnCanaryGateway.sendEvent(eventName, data);
}

// Default export with all functions
export default {
  multiply,
  initialize,
  sendEvent,
};
