function showMenu() {
	let meni = document.getElementById("mobileLink");
	if( meni.style.display === "block"){
		meni.style.display = "none";
	}else{
		meni.style.display = "block";
	}
}

let bandPosition =  document.getElementById('prva').offsetTop;
let logoNavigacija = document.getElementsByClassName('imgNav');


function showLogo(){
if (bandPosition < document.documentElement.scrollTop){
logoNavigacija[0].style.opacity="100";
logoNavigacija[1].style.opacity="100";
}else{
logoNavigacija[0].style.opacity="0";
logoNavigacija[1].style.opacity="0";
}
}
