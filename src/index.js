module.exports = function check(str, bracketsConfig) {
    let map = new Map();
    let stack = [];
    bracketsConfig.forEach(subArray => {
        map.set(subArray[1], subArray[0])
    });
    str.split("").forEach(element => {
        if (stack.length > 0 && stack[stack.length - 1] == map.get(element)) {
            stack.pop();
        } else {
            stack.push(element);
        }
    });
    if (stack.length > 0)
        return false;
    return true;
}
