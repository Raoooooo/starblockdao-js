import Web3 from "web3";
import { Contract } from "web3-eth-contract";
import { Network } from "./types";
import { constants } from "./protocolConstants";
import { masterchef } from "./abi/MasterChef";

export class Protocol {
  public masterChefAbi: {};
  public masterChefContract: {};
  public web3: Web3;
  private _networkName: Network;

  constructor(provider: Web3["currentProvider"], networkName) {
    this.web3 = new Web3(provider);
    this._networkName = networkName;

    const masterChefContractAddress =
      constants.DEPLOYED[networkName].MasterChef;
    this.masterChefAbi = {
      abi: masterchef,
      address: masterChefContractAddress,
    };
    this.masterChefContract = new this.web3.eth.Contract(
      this.masterChefAbi["abi"],
      this.masterChefAbi["address"]
    );
  }

  public async deposit(pid: number, tokenIds: number[]): Promise<string> {
    const account = this.web3.eth.defaultAccount;
    let txHash;
    try {
      const txnData = { from: account };
      txHash = await (this.masterChefContract as Contract).methods
        .deposit(pid, tokenIds)
        .send(txnData);
    } catch (error) {
      console.error(error);
      throw new Error(
        `Failed to deposit transaction: "${
          error instanceof Error && error.message
            ? error.message
            : "user denied"
        }..."`
      );
    }
    return txHash;
  }

  public async withdraw(pid: number, tokenIds: number[]): Promise<string> {
    const account = this.web3.eth.defaultAccount;
    let txHash;
    try {
      const txnData = { from: account };
      txHash = await (this.masterChefContract as Contract).methods
        .withdraw(pid, tokenIds)
        .send(txnData);
    } catch (error) {
      console.error(error);
      throw new Error(
        `Failed to withdraw transaction: "${
          error instanceof Error && error.message
            ? error.message
            : "user denied"
        }..."`
      );
    }
    return txHash;
  }

  public async harvestToken(pid: number, tokenIds: number[]): Promise<string> {
    const account = this.web3.eth.defaultAccount;
    let txHash;
    try {
      const txnData = { from: account };
      txHash = await (this.masterChefContract as Contract).methods
        .harvestToken(pid, tokenIds)
        .send(txnData);
    } catch (error) {
      console.error(error);
      throw new Error(
        `Failed to harvestToken transaction: "${
          error instanceof Error && error.message
            ? error.message
            : "user denied"
        }..."`
      );
    }
    return txHash;
  }

  public async pendingToken(pid: number, tokenIds: number[]): Promise<boolean> {
    const isPendingToken = await (this.masterChefContract as Contract).methods
      .pendingToken(pid, tokenIds)
      .call();
    if (!isPendingToken) {
      throw new Error(`Failed to pendingToken!`);
    }
    return isPendingToken;
  }
}
