const head=document.getElementById('header')
head.addEventListener("click",change);

function change()
{
	document.getElementById('header').style.background = url("Pics/pic.jpeg");
}
console.log(head)
console.log(head.length)

for(let i=0;i<head.length;i++)
{
	console.log(i)
}

const contacts=document.getElementsByClassName('contacts')
console.log(contacts)
console.log(contacts.length)

for(let x=0;x<contacts.length;x++)
{
	console.log(x)
}

function validname()
{
	let name=document.getElementById('name').value;
	let namereg=new RegExp("^[0-9]")
	if(namereg.test(name))
	{
		name.innerHTML="Invalid Name"
	}
}

tag=document.getElementsByClassName('footer')
tag.addEventListener("click",function(){
tag.style.color="red"});
