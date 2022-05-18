import Web3 from "web3";
import { Protocol } from "./protocol";
import { CallbackHandle, Network } from "./types";

export class daoport {
  private _protocol: Protocol;

  constructor(provider: Web3["currentProvider"], networkName) {
    this._protocol = new Protocol(provider, networkName);
  }

  public async deposit(
    pid: number,
    tokenIds: number[],
    handle: CallbackHandle
  ) {
    try {
      const txHash = await this._protocol.deposit(pid, tokenIds);
      handle(txHash, "");
    } catch (error) {
      handle("", error);
    }
  }

  public async withdraw(
    pid: number,
    tokenIds: number[],
    handle: CallbackHandle
  ) {
    try {
      const txHash = await this._protocol.withdraw(pid, tokenIds);
      handle(txHash, "");
    } catch (error) {
      handle("", error);
    }
  }

  public async harvestToken(
    pid: number,
    tokenIds: number[],
    handle: CallbackHandle
  ) {
    try {
      const txHash = await this._protocol.harvestToken(pid, tokenIds);
      handle(txHash, "");
    } catch (error) {
      handle("", error);
    }
  }

  public async pendingToken(
    pid: number,
    tokenIds: number[],
    handle: CallbackHandle
  ) {
    try {
      const isPendingToken = await this._protocol.pendingToken(pid, tokenIds);
      handle(isPendingToken, "");
    } catch (error) {
      handle("", false);
    }
  }
}
