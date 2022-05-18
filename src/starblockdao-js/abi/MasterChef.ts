export const masterchef = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardForEachBlock",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_operationFee",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_harvestFeeRatio",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_harvestFeeToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withSushiTransfer",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_rewardDev",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_rewardLocked",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "emergencyStop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "harvestReward",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "harvestToken",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_harvestFeeRatio",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_harvestFeeToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_feeRatioUpdate",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_feeTokenUpdate",
        type: "bool",
      },
    ],
    name: "setAllPoolHarvestFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_operationFee",
        type: "uint256",
      },
    ],
    name: "setAllPoolOperationFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_harvestFeeDevRatio",
        type: "uint16",
      },
    ],
    name: "setHarvestFeeRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lockBlockNumber",
        type: "uint256",
      },
    ],
    name: "setLockBlockNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_harvestFeeRatio",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_harvestFeeToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_feeRatioUpdate",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_feeTokenUpdate",
        type: "bool",
      },
    ],
    name: "setPoolHarvestFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardForEachBlock",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_rewardDev",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_rewardLocked",
        type: "bool",
      },
    ],
    name: "setPoolInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_operationFee",
        type: "uint256",
      },
    ],
    name: "setPoolOperationFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TokenAmountLike",
        name: "_tokenAmountContract",
        type: "address",
      },
    ],
    name: "setTokenAmountContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardForEachBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withUpdate",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "operationFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "harvestFeeRatio",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "harvestFeeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withSushiTransfer",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "rewardDev",
        type: "bool",
      },
    ],
    name: "Add",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_addSushiPerPool",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_addSushiPerBlock",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withSushiTransfer",
        type: "bool",
      },
    ],
    name: "addRewardForPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "addSushiPerPool",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "addSushiPerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withSushiTransfer",
        type: "bool",
      },
    ],
    name: "AddRewardForPool",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
    ],
    name: "closePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "ClosePool",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "EmergencyStop",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "HarvestToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "harvestFeeDevRatio",
        type: "uint16",
      },
    ],
    name: "SetHarvestFeeRatio",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "harvestFeeRatio",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "harvestFeeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "feeRatioUpdate",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "feeTokenUpdate",
        type: "bool",
      },
    ],
    name: "SetPoolHarvestFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardsOneBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "withUpdate",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "rewardDev",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "rewardLocked",
        type: "bool",
      },
    ],
    name: "SetPoolInfo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "operationFee",
        type: "uint256",
      },
    ],
    name: "SetPoolOperationFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract TokenAmountLike",
        name: "tokenAmountContract",
        type: "address",
      },
    ],
    name: "SetTokenAmountContract",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_buyAddress",
        type: "address",
      },
    ],
    name: "updateBuyAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address payable",
        name: "buyAddress",
        type: "address",
      },
    ],
    name: "UpdateBuyAddress",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_dev1Address",
        type: "address",
      },
    ],
    name: "updateDev1Address",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address payable",
        name: "dev1Address",
        type: "address",
      },
    ],
    name: "UpdateDev1Address",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_dev2Address",
        type: "address",
      },
    ],
    name: "updateDev2Address",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address payable",
        name: "dev2Address",
        type: "address",
      },
    ],
    name: "UpdateDev2Address",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_dev3Address",
        type: "address",
      },
    ],
    name: "updateDev3Address",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address payable",
        name: "dev3Address",
        type: "address",
      },
    ],
    name: "UpdateDev3Address",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "buyAddress",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEV1_FEE_RATIO",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEV1_SUSHI_REWARD_RATIO",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dev1Address",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEV2_FEE_RATIO",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEV2_SUSHI_REWARD_RATIO",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dev2Address",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEV3_FEE_RATIO",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEV3_SUSHI_REWARD_RATIO",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dev3Address",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestFeeDevRatio",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINT_SUSHI_REWARD_RATIO",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingSushi",
    outputs: [
      {
        internalType: "uint256",
        name: "sushiReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIDs",
        type: "uint256[]",
      },
    ],
    name: "pendingToken",
    outputs: [
      {
        internalType: "uint256",
        name: "sushiReward",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardForEachBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accSushiPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewarded",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "operationFee",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "harvestFeeRatio",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "harvestFeeToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "rewardDev",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "rewardLocked",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfos",
    outputs: [
      {
        internalType: "address",
        name: "NFTContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "WNFTContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rewardForEachBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerNFTForEachBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RATIO_BASE",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingPool",
    outputs: [
      {
        internalType: "contract StakingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sushi",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAmountContract",
    outputs: [
      {
        internalType: "contract TokenAmountLike",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
