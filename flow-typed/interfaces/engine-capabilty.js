//@flow
declare type CapabilityResult = {[capabilityName: string]: any};

declare interface ICapability {
  static runCapability(): void;
  static getCapability(): Promise<CapabilityResult>;
  static setCapabilities(capabilities: {[name: string]: any}): void;
}
