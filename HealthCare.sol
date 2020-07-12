pragma solidity^0.5.0;

contract HealthCare {

    address private hospitalAdmin;
    uint public recordCount = 0;
    uint public signedCount = 0;
    struct Record {
        uint256 ID;
        uint256 price;
        string testName;
        string date;
        string hospitalName;
        bool isValue;
        address pAddr;
        mapping (address => uint256) signatures;
        uint256 amountInsured;
        bool signed;
    }

    modifier signOnly {
        require (msg.sender == hospitalAdmin);
        _;
    }

    constructor() public {
        hospitalAdmin = msg.sender;
    }
    
    
    // Mapping to store records
    mapping (uint256=> Record) public _records;
    uint256 [] public recordsArr;
    string [] public nameArr;
    string [] public dateArr;
    uint256 [] public priceArr;
    string [] public hnameArr;
    uint256 [] public amountInsuredArr;
    bool [] public signArr;

    event recordCreated(uint256 ID, string testName, string date, string hospitalName, uint256 price,uint256 amountInsured);
    event recordSigned(uint256 ID, string testName, string date, string hospitalName, uint256 price, uint256 amountInsured, bool signed);
    
    // Create new record
    function newRecord (uint256 _ID, string memory _tName, string memory _date, string memory hName, uint256 price, uint256 _amountInsured) public{
      recordCount++;
        Record storage _newrecord = _records[_ID];

        // Only allows new records to be created
        require(!_records[_ID].isValue);
            _newrecord.pAddr = msg.sender;
            _newrecord.ID = _ID;
            _newrecord.testName = _tName;
            _newrecord.date = _date;
            _newrecord.hospitalName = hName;
            _newrecord.price = price;
            _newrecord.amountInsured=_amountInsured;
            _newrecord.isValue = true;
            _newrecord.signed = false;
        emit  recordCreated(_newrecord.ID, _tName, _date, hName, price,_amountInsured);
      recordsArr.push(_ID);
      nameArr.push(_tName);
      dateArr.push(_date);
      hnameArr.push(hName);
      priceArr.push(price);
      amountInsuredArr.push(_amountInsured);
      signArr.push(false);
    }

    // Function to sign a record 
    function signRecord(uint256 _ID) signOnly public returns(string memory) {
        Record storage records = _records[_ID];
        if(records.amountInsured<records.price){
            return"Insurance not used successfully";
        }
       else
           
        // Checks the aunthenticity of the address signing it
        require(address(0) != records.pAddr);
        require(msg.sender != records.pAddr);
        
        // Doesn't allow the same person to sign twice
        require(records.signatures[msg.sender] != 1);

        records.signatures[msg.sender] = 1;
        records.signed = true;
        signedCount++;

        for(uint256 i=0; i<recordCount; i++){
        if(_ID == recordsArr[i]){
               signArr[i] = true;
        }
        }
        emit  recordSigned(records.ID, records.testName, records.date, records.hospitalName, records.price, records.amountInsured, records.signed);
    }
    function getname(uint256 rec) public returns(string memory NAME){
        Record storage records = _records[rec];
        NAME = records.testName;
    }
    
    function gethname(uint256 rec) public returns(string memory HNAME){
        Record storage records = _records[rec];
        HNAME = records.hospitalName;
    }
    
    function getdate(uint256 rec) public returns(string memory DATE){
        Record storage records = _records[rec];
        DATE = records.date;
    }
    
    function getprice(uint256 rec) public returns(uint256 PRICE){
        Record storage records = _records[rec];
        PRICE = records.price;
    }
    
    function getamount(uint256 rec) public returns(uint256 AMOUNT){
        Record storage records = _records[rec];
        AMOUNT = records.amountInsured;
    }
    
    function getsign(uint256 rec) public returns(bool SIGN){
        Record storage records = _records[rec];
        SIGN = records.signed;
    }
}
    
   