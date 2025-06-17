import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

type EventPayload = {
  [key: string]: string | number | boolean;
};

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
  initialize(apiKey: string): void;
  sendEvent(eventName: string, data: EventPayload): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RnCanaryGateway');
