var css = document.querySelector("h3");
var culoare1 = document.querySelector(".culoare1");
var culoare2 = document.querySelector(".culoare2");
var body = document.getElementById("gradient");
// console.log(css);
// console.log(culoare1);
// console.log(culoare2);

culoare1.addEventListener("input",function(){
	body.style.background = 
	"linear-gradient(to right," 
	+ culoare1.value 
	+ " , " 
	+ culoare2.value 
	+ ")";
})

culoare2.addEventListener("input",function(){
	body.style.background = 
	"linear-gradient(to right," 
	+ culoare1.value 
	+ " , " 
	+ culoare2.value 
	+ ")";
})