const navBtn=document.getElementById('nav-btn');
const cancelBtn=document.getElementById('cancel-btn');
const sideNav=document.getElementById('sidenav');
const modal=document.getElementById('modal');

const indbtn=document.getElementById('oilbtn');
const outbtn=document.getElementById('gheebtn');
const athkbtn=document.getElementById('chekbtn');

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

oilbtn.addEventListener("click",function(){
	oil.classList.add('ind');
	modal.classList.add('indModal');
});

gheebtn.addEventListener("click",function(){
	ghee.classList.add('out');
	modal.classList.add('outModal');
});

chekbtn.addEventListener("click",function(){
	chekku.classList.add('ath');
	modal.classList.add('athModal');
});


