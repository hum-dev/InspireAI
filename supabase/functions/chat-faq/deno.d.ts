declare namespace Deno {
  export interface Env {
    get(key: string): string | undefined;
    set(key: string, value: string): void;
    delete(key: string): void;
    toObject(): { [key: string]: string };
  }
  export const env: Env;
  export const errors: typeof Error;
  export const version: {
    deno: string;
    v8: string;
    typescript: string;
  };
}
