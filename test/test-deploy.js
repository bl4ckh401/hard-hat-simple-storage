const { assert } = require("chai");
const {ethers} = require("hardhat")
describe("SimpleStorage", ()=>{
  let simpleStorage, simpleStorageFactory;
  beforeEach(async()=>{
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })
  it("Should start with a Favourite Number of 0",async ()=>{
    const currentValue=await simpleStorage.retrieve()
    const expectedValue="0"
    assert.equal(currentValue.toString(), expectedValue)
  })
  it("Should store 7 and retrieve 8", async () => {
    const expectedValue = "8"
    const transactionResponse = await simpleStorage.store(7)
    const currentValue = await simpleStorage.retrieve()
    assert.equal(currentValue.toString(), expectedValue)
  })
})