function animationForm() {
    let arrows =document.querySelectorAll('.fa-arrow-down')
       arrows.forEach(arrow=>{
      arrow.addEventListener('click',()=>{
          let input =arrow.previousElementSibling;
          let parent =arrow.parentElement
          let next =parent.nextElementSibling
        //   check for validation
          if (input.type === 'text' && validationUser(input)) {
              nextFiled(parent,next)
          }else if(input.type === 'email'  && validationEmail(input)){
            nextFiled(parent,next)  
          }else if(input.type === 'password'  && validationUser(input)){
            nextFiled(parent,next)     
          }else{
              parent.style.animation =" shake 0.5s ease "
          }
        //   git rid of animation
          parent.addEventListener('animationend',()=> {
            parent.style.animation ="";
          })
      })
    })
}
function validationUser(user) {
    if (user.value.length < 6) {
        console.log('not engoh');
        
        error("rgb(189, 87, 87)")
    }else{
      
        error('rgb(93, 151, 199)') 
        return true
    }
    
}
function validationEmail(email) {
    let validation=/^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
    if (validation.test(email.value)) {
        error('rgb(93, 151, 199)') 
        return true 
    }else{
        error("rgb(189, 87, 87)")   
    }
    
}

function nextFiled (parent,next) {
    parent.classList.add("innactive") 
    parent.classList.remove('active')
    next.classList.add('active')
}
function error(color) {
    document.body.style.backgroundColor = color
    
}

animationForm() 