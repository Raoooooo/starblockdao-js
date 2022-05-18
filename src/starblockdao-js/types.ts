export enum Network {
  Main = "main",
  Rinkeby = "rinkeby",
}

export interface CallbackHandle {
  (arg1: string, arg2: any): void;
}
