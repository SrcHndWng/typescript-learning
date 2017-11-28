var price:number = 1200;
var rate:number = 0.08;
var message:string = "円(税込)";
var isInc:boolean = false;

if(isInc){
    console.log(price + message);
}else{
    console.log(price * (1 + rate) + message);
}
