let value;

//veritiplerinin stringe çevirme
value = String(123);
value=String(3.14);
value=String(true);
value=String(false);
value=String(function() {console.log()});

value=(10).toString();

//veritiplerini sayıya çevirme
value=Number("123");
value=Number(null);
value=Number(undefined);
value=Number("hello word");
value=Number(function(){console.log()});
value=Number([1,2,3,4]);

value=Number("3.14");
value=parseFloat("3.14");
value=parseInt("3");


const a="34"+ 53;
const b=34+ 53;
console.log(b);
console.log(typeof b);

console.log(value);
console.log(typeof value)


