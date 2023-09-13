const navBtn=document.getElementById('nav-btn');
const cancelBtn=document.getElementById('cancel-btn');
const sideNav=document.getElementById('sidenav');
const modal=document.getElementById('modal');

const indbtn=document.getElementById('indbtn');
const outbtn=document.getElementById('outbtn');
const athkbtn=document.getElementById('athbtn');

navBtn.addEventListener("click",function(){
	sideNav.classList.add('show');
	modal.classList.add('showModal');
});

cancelBtn.addEventListener("click",function(){
	sideNav.classList.remove('show');
	modal.classList.remove('showModal');
});

windows.addEventListener('click',function(event){
	if(event.target===modal){
		sideNav.classList.remove('show');
		modal.classList.remove('showModal');		
	}
});

indbtn.addEventListener("click",function(){
	ind.classList.add('ind');
	modal.classList.add('indModal');
});

out.btn.addEventListener("click",function(){
	out.classList.add('out');
	modal.classList.add('outModal');
});

athbtn.addEventListener("click",function(){
	ath.classList.add('ath');
	modal.classList.add('athModal');
});


