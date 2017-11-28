var price = 1200;
var rate = 0.08;
var message = "円(税込)";
var isInc = false;
if (isInc) {
    console.log(price + message);
}
else {
    console.log(price * (1 + rate) + message);
}
