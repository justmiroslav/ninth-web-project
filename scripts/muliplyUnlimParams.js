module.exports = {
    multiplyUnlimParams
  };

function multiplyUnlimParams(a) {
    let result = a;
  
    const helper = (b) => {
        result *= b;
        return helper;
    }
    
    helper.toString = () => {
        return result; 
    }
  
    return helper;
}
