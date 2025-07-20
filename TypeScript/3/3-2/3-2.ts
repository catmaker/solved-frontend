// 커피 사이즈 enum 만들기

enum CoffeeSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

function orderCoffee(size: CoffeeSize) {
  switch (size) {
    case CoffeeSize.SMALL:
      return "SMALL 사이즈 커피 - 3000원";
    case CoffeeSize.MEDIUM:
      return "MEDIUM 사이즈 커피 - 4000원";
    case CoffeeSize.LARGE:
      return "LARGE 사이즈 커피 - 5000원";
    default:
      return "?";
  }
}

console.log(orderCoffee(CoffeeSize.MEDIUM));

function isValidSize(size: string): boolean {
  let validSize: string[] = ["SMALL", "MEDIUM", "LARGE"];
  if (validSize.includes(size.toUpperCase())) {
    return true;
  } else return false;
}

console.log(isValidSize("small"));
console.log(isValidSize("extra"));
