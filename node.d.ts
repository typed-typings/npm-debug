import ms = require('ms');

declare function debug (namespace: string): debug.Debugger;

declare namespace debug {
  export interface Debugger {
    (message: any, ...args: any[]): void;
    enabled: boolean;
    namespace: string;
    log: Function;
  }

  export function coerce (value: any): any;
  export function disable (): void;
  export function enable (namespaces: string): void;
  export function enabled (namespace: string): boolean;
  export var humanize: typeof ms;

  // Node implementation exports.
  export var log: Function;
  export function formatArgs (...args: any[]): any;
  export function save (namespaces?: string): void;
  export function load (): string | void;
  export function useColors (): boolean;
  export var colors: number[];
}

export = debug;
