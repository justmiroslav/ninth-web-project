module.exports = {
    getFactorial
  };

function getFactorial(num) {
    if(typeof num === "string") {
        if(isNaN(num)) {
            return "Not a number";
        } else {
            num = Number(num);
        }
    }

    if (!Number.isInteger(num) || num < 0) {
        return "Number must be a positive integer";
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    return num * getFactorial(num - 1);
}
