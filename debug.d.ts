declare function debug (namespace: string): Debugger;

interface Debugger {
  (message: any, ...args: any[]): void;
  enabled: boolean;
  namespace: string;
}

declare module debug {
  export var log: Function;

  export function enable (namespaces: string): void;
  export function disable (): void;
  export function coerce (value: any): any;
  export function enabled (namespace: string): boolean;
}

export = debug;
