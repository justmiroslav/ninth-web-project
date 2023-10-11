const assert = require("chai").assert;
const { multiplyUnlimParams } = require("./muliplyUnlimParams");

describe("multiplyUnlimParams", () => {
    it("should multiply numbers", () => {
        assert.equal("60", multiplyUnlimParams(2)(3)(10).toString());
    });

    it("should handle negative numbers", () => {
        assert.equal("-769072", multiplyUnlimParams(-1)(677)(568)(2).toString());
    });

    it("should return value if it's the only arg", () => {
        assert.equal("3", multiplyUnlimParams(3).toString());
    });
});
