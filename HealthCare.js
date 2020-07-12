import WEB3 from './web3';

 export const address = "0x637BB18724BE770346B202A782Bb92EFAE00C51d";

  export const abi = [
 {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "amountInsuredArr",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x152cd0e1"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "signArr",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1bfcb6aa"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "nameArr",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x3eca153e"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "recordsArr",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x549b39fc"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "signedCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x5f3d8f4a"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "recordCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x900407bc"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "dateArr",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x959ea7ab"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "priceArr",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xada7a006"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "hnameArr",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd2d5ef1a"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_records",
      "outputs": [
        {
          "name": "ID",
          "type": "uint256"
        },
        {
          "name": "price",
          "type": "uint256"
        },
        {
          "name": "testName",
          "type": "string"
        },
        {
          "name": "date",
          "type": "string"
        },
        {
          "name": "hospitalName",
          "type": "string"
        },
        {
          "name": "isValue",
          "type": "bool"
        },
        {
          "name": "pAddr",
          "type": "address"
        },
        {
          "name": "amountInsured",
          "type": "uint256"
        },
        {
          "name": "signed",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xee96b9eb"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "ID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "testName",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "date",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "hospitalName",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "amountInsured",
          "type": "uint256"
        }
      ],
      "name": "recordCreated",
      "type": "event",
      "signature": "0x168e3a8728bc3aee914f438fd0553ab78ecc4115676327b49777f7fe3bc32b32"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "ID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "testName",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "date",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "hospitalName",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "price",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "amountInsured",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "signed",
          "type": "bool"
        }
      ],
      "name": "recordSigned",
      "type": "event",
      "signature": "0x1f81d28f09f9f9506c13995c95ea0d98143fc5214c340bfaf5ce034a8b3d0fa7"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_ID",
          "type": "uint256"
        },
        {
          "name": "_tName",
          "type": "string"
        },
        {
          "name": "_date",
          "type": "string"
        },
        {
          "name": "hName",
          "type": "string"
        },
        {
          "name": "price",
          "type": "uint256"
        },
        {
          "name": "_amountInsured",
          "type": "uint256"
        }
      ],
      "name": "newRecord",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x86b2fb7a"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_ID",
          "type": "uint256"
        }
      ],
      "name": "signRecord",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa508d0ed"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "rec",
          "type": "uint256"
        }
      ],
      "name": "getname",
      "outputs": [
        {
          "name": "NAME",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x0202ace1"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "rec",
          "type": "uint256"
        }
      ],
      "name": "gethname",
      "outputs": [
        {
          "name": "HNAME",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x0312df5a"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "rec",
          "type": "uint256"
        }
      ],
      "name": "getdate",
      "outputs": [
        {
          "name": "DATE",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x21c92bdf"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "rec",
          "type": "uint256"
        }
      ],
      "name": "getprice",
      "outputs": [
        {
          "name": "PRICE",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xbf776928"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "rec",
          "type": "uint256"
        }
      ],
      "name": "getamount",
      "outputs": [
        {
          "name": "AMOUNT",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x006b76db"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "rec",
          "type": "uint256"
        }
      ],
      "name": "getsign",
      "outputs": [
        {
          "name": "SIGN",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3595df1a"
    }
  ]