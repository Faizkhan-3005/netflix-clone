function validateEmail(){
const email=document.getElementById('email').value.trim();
if(!email){
alert('Please enter an email address.');
return false;
}
alert('Thanks! A confirmation link will be sent to '+email);
document.getElementById('email').value='';
return false;
}