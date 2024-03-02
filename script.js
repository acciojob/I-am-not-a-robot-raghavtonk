//your code here
var sectedImg =0;
var imgArr=[]
function imgClick(event){
	console.log(event.target.className);
	sectedImg++;
	if(sectedImg>0){
	restBtn.style.display="block"
}
	if(sectedImg == 2){
		verifyBtn.style.display="block"
	}
	else{
		verifyBtn.style.display="none"
	}
	let classnames = event.target
	imgArr.push(classnames.className)
	classnames.classList.add("selected");
	classnames.removeEventListener("click",imgClick)
	console.log(sectedImg)
}
function resetSelectedImg(){
	sectedImg=0;
	imgArr=[]
	restBtn.style.display="none"
	verifyBtn.style.display="none"
	result.textContent=""
	let imgtag = document.querySelectorAll("img");
	imgtag.forEach((element)=>{
		element.classList.remove("selected");
		element.addEventListener("click",imgClick)
	})
}
function verifySelectedImg(){
	verifyBtn.style.display="none"
	if(imgArr.length == 2){
		if(imgArr[0] === imgArr[1]){
		result.textContent="You are a human. Congratulations!"
		}

	else{
		result.textContent ="We can't verify you as a human. You selected the non-identical tiles. "
	}
}
}
let imgDiv = document.getElementById("images");
let restBtn= document.getElementById("reset");
let verifyBtn = document.getElementById("verify");
let result = document.getElementById("result")

verifyBtn.addEventListener("click",()=>verifySelectedImg())
restBtn.addEventListener("click",()=>resetSelectedImg())
function imgLoad(){
	for(let i = 1; i<=5 ;i++){
		let imgTag = document.createElement("img");
		imgTag.className='img'+i;
		imgTag.addEventListener("click",imgClick)
		imgDiv.appendChild(imgTag);
	}
	let randomNumber= Math.floor(Math.random()*5)+1;
	let imgTag = document.createElement("img");
		imgTag.className='img'+randomNumber;
		imgTag.addEventListener("click",imgClick)
		imgDiv.appendChild(imgTag);
}
imgLoad();
