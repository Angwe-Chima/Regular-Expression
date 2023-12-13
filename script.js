 //  /[+]234[0-9][01][0-9]{8}/g   /* Nigeria phone number */

//  CREATING A REGULAR EXPRESSION
/*
let reg = /[a-z]/gi
// OR
let reg2 = new RegExp(/[a-z]/, 'ig')
*/


const inputs = document.querySelectorAll('input');

const patterns = {
  telephone : /^\d{11}$/,
  username : /^[a-z][a-z\d]{4,11}$/i,
  email :/^[a-z-\d]+@[a-z\d]+[.][a-z]+[.]?[a-z]+?$/,
  password : /^[\w@-]{8,20}$/,
  slug : /^[a-z\d-]{8,20}$/
}

function validate(input, regexPattern){
  return regexPattern.test(input.value);
}


inputs.forEach((input)=>{
  input.addEventListener('keyup', (e)=>{

   let validInput = validate(e.target, patterns[e.target.attributes.name.value]);
    if(validInput){
      e.target.nextSibling.nextSibling.classList.remove('js-red');
      e.target.nextSibling.nextSibling.classList.add('js-green');
    }
    else{
      e.target.nextSibling.nextSibling.classList.add('js-red');
    }
  });
});


let button = document.querySelector('button');
let form = document.querySelector('form');
let section = document.querySelector('section');
let h1 = document.querySelector('h1');
let spans = document.querySelectorAll('span');

section.style.display = 'none';

button.addEventListener('click',()=>{
  const validForm = Array.from(spans).every((span)=> span.classList.contains('js-green'))
  if(validForm){
    form.style.display = 'none';
    section.style.display = 'flex';
    button.style.display = 'none';
    h1.style.display = 'none';

    inputs.forEach((input)=>{
      input.value = '';
    })
  }
  else{
    alert('All input fields must be filled out')
  }
})

