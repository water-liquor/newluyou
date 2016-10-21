/*var Person=require("./one.js");
var p=new Person.man("卜莹莹",20);   //模块化
//var p=new global.man("卜莹莹",20);    //全局对象
console.log(p.name+','+p.age);*/
var Person=require("./module");
var p=new Person.man("卜莹莹",22);
console.log(p.name+","+p.age);
console.log("蒋茜茜")