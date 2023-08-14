let shinIn = document.querySelector('.signinButton');
let shinUp = document.querySelector('.signupButton');
let body = document.querySelector('body');

shinUp.onclick = function(){
  body.classList.add('slide');
}
shinIn.onclick = function(){
  body.classList.remove('slide');
}