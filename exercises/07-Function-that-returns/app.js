let dollarToEuro = function(dollarValue) {
	return dollarValue * 0.89;
}
let euroToYen = function(euroValue) {
	return euroValue * 124.15;
}
///***** YOUR CODE BELOW ↓ ******///

const euro = dollarToEuro(137)
const yen = euroToYen(euro)

console.log(yen)