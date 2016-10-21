var a=1;
var myclock=()=>{
	var d=new Date();
		/*a++;*/
		process.stdout.write("\033[0f");
		process.stdout.write("\033[2J");
		console.log(zeo(d.getHours())+":"+zeo(d.getMinutes())+":"+zeo(d.getSeconds()));
}
function zeo(n){
	if(n<10){
		return "0"+n;
	}else{
		return n;
	}
}
setInterval(myclock,1000)