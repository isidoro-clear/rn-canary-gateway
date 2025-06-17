import RnCanaryGateway from './NativeRnCanaryGateway';

export function multiply(a: number, b: number): number {
  return RnCanaryGateway.multiply(a, b);
}
