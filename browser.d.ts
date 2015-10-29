import ms = require('ms');

declare function debug (namespace: string): debug.Debugger;

declare module debug {
  export interface Debugger {
    (message: any, ...args: any[]): void;
    enabled: boolean;
    namespace: string;
  }

  export function coerce (value: any): any;
  export function disable (): void;
  export function enable (namespaces: string): void;
  export function enabled (namespace: string): boolean;
  export var humanize: typeof ms;

  // Browser implementation exports.
  export var log: Function;
  export function formatArgs (...args: any[]): any;
  export function save (namespaces?: string): void;
  export function load (): string | void;
  export function useColors (): boolean;
  export function storage (): any;
  export var colors: string[];
}

export = debug;
