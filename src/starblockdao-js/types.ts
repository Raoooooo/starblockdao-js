export enum Network {
  Main = "main",
  Rinkeby = "rinkeby",
}

export interface CallbackHandle {
  (arg1: any, arg2: any): void;
}
