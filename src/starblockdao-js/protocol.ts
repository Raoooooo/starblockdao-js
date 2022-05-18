import Web3 from "web3";
import { CallbackHandle, Network } from "./types";
import { constants } from "./protocolConstants";
import { masterchef } from "./abi/MasterChef";
import { NO } from "@vue/shared";

export class Protocol {
  public MasterChef: {};
  public web3: Web3;
  private _networkName: Network;
  private _handle: CallbackHandle;

  constructor(provider: Web3["currentProvider"], networkName) {
    this.web3 = new Web3(provider);
    this._networkName = networkName;

    const masterChefContractAddress =
      constants.DEPLOYED[networkName].MasterChef;
    this.MasterChef = { abi: masterchef, address: masterChefContractAddress };
  }

  public async deposit(pid: number, tokenIDs: number[]) {
    const account = this.web3.eth.defaultAccount;
    const contract = new this.web3.eth.Contract(
      this.MasterChef["abi"],
      this.MasterChef["address"]
    );

    const txnData = { from: account };
    contract.methods
      .deposit(pid, tokenIDs)
      .send(txnData)
      .then(function (receipt) {
        return this._handle(receipt, "");
      })
      .catch(function (err) {
        return this._handle("", err);
      });
  }

  public async withdraw(pid: number, tokenIDs: number[]) {}

  public async harvestToken(pid: number, tokenIDs: number[]) {}

  public async pendingToken(pid: number, tokenIDs: number[]) {}
}
