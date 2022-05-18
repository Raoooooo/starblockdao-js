import Web3 from "web3";
import { Protocol } from "./protocol";
import { Network } from "./types";

export class daoport {
  public web3: Web3;
  private _networkName: Network;
  private _protocol: Protocol;

  constructor(provider: Web3["currentProvider"], networkName) {
    this.web3 = new Web3(provider);
    this._networkName = networkName;
    this._protocol = new Protocol(provider, networkName);
  }

  public async deposit(pid: number, tokenIDs: number[]) {
    this._protocol.deposit(pid, tokenIDs);
  }

  public async withdraw(pid: number, tokenIDs: number[]) {}

  public async harvestToken(pid: number, tokenIDs: number[]) {}

  public async pendingToken(pid: number, tokenIDs: number[]) {}
}
