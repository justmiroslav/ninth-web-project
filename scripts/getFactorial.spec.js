const assert = require("chai").assert;
const { getFactorial } = require("./getFactorial");

describe("getFactorial", () => {
    it("should calculate factorial of a number", () => {
        assert.equal(120, getFactorial(5));
    });

    it("should handle string input", () => {
        assert.equal(120, getFactorial("5"));
    });

    it("should return error for invalid input", () => {
        assert.equal("Not a number", getFactorial("blabla"));
    });

    it("should return error for negative input", () => {
        assert.equal("Number must be a positive integer", getFactorial(-5));
    });
});
