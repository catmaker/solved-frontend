// 커피 사이즈 enum 만들기
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SMALL"] = "3000";
    CoffeeSize["MEDIUM"] = "4000";
    CoffeeSize["LARGE"] = "5000";
})(CoffeeSize || (CoffeeSize = {}));
function orderCoffee(size) {
    if (size === CoffeeSize.SMALL) {
        return "3000원";
    }
    else if (size === CoffeeSize.MEDIUM) {
        return "4000원";
    }
    else
        return "5000원";
}
console.log(orderCoffee(CoffeeSize.MEDIUM));
function isValidSize(size) {
    var validSize = ["SMALL", "MEDIUM", "LARGE"];
    if (validSize.includes(size.toUpperCase())) {
        return true;
    }
    else
        return false;
}
console.log(isValidSize("small"));
console.log(isValidSize("extra"));
