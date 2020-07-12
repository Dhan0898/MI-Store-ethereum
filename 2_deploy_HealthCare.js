var HealthCare = artifacts.require("./contracts/HealthCare.sol");

module.exports = function(deployer) {
  deployer.deploy(HealthCare);
};
