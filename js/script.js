const arr=window.document.querySelector('#arrow')
let ar=window.document.querySelector('#ar')
let menu=window.document.querySelector('#menu')
let msc = new Audio("../sounds/FNAF1.mp3")

let divTxt=[...window.document.querySelectorAll('.txt')]

let main = window.document.querySelector('main')

let theme=window.document.querySelector('#theme')
2
let terror = true

//let divImgs = [...document.querySelectorAll('.img')]

let bonnie = document.querySelector('#bon')
let chica = document.querySelector('#chi')
let freddy = document.querySelector('#fre')
let foxy = document.querySelector('#fox')
let gfo = document.querySelector('#gfo')
let img1 = document.querySelector('#img1')

theme.addEventListener('click', ()=> {
  ar.classList.remove('bi-caret-left-fill')
        ar.classList.add('bi-caret-right-fill')
        
        menu.style.left="calc(0% - 63px)"
        if(terror==true){
          terror = false
        }else{
          terror = true
        }
        
      toggleMode(terror)
})

function toggleMode(arg){
  musica()
  if(arg == false){
    main.style.backgroundColor = "var(--cor6)"
    bonnie.style.backgroundImage = "url('../images/bonnie_pelucia.png')"
    chica.style.backgroundImage = "url('../images/chica_pelucia.png')"
    freddy.style.backgroundImage = "url('../images/freddy_pelucia.png')"
    foxy.style.backgroundImage = "url('../images/foxy_pelucia.png')"
    gfo.style.display = 'none'
    img1.style.backgroundImage = "url('../images/Animatronics_pelucia.png')"
    
    img1.style.backgroundSize = "80%"
    bonnie.style.backgroundSize = "60%"
    chica.style.backgroundSize = "60%"
    freddy.style.backgroundSize = "60%"
    foxy.style.backgroundSize = "60%"
  
    divTxt.map((el) =>{
      el.style.backgroundColor="var(--cor7)"
      el.style.color="var(--cor10)"
    })
    divTxt[divTxt.length - 1].style.display = 'none'
    
  }else{
    
    main.style.backgroundColor = "var(--cor1)"
    img1.style.backgroundImage = "url('../images/fnaf1.1.jpeg')"
    bonnie.style.backgroundImage = "url('../images/Bonnie.jpg')"
    chica.style.backgroundImage = "url('../images/Chica.jpg')"
    freddy.style.backgroundImage = "url('../images/Freddy.png')"
    foxy.style.backgroundImage = "url('../images/Foxy.jpg')"
    gfo.style.display = 'block'
    
    img1.style.backgroundSize = "cover"
    bonnie.style.backgroundSize = "cover"
    chica.style.backgroundSize = "cover"
    freddy.style.backgroundSize = "cover"
    foxy.style.backgroundSize = "cover"
    
    divTxt.map((el) =>{
      el.style.backgroundColor="var(--cor2)"
      el.style.color="var(--cor4)"
    })
    
    divTxt[divTxt.length - 1].style.display = 'block'
  }
}

toggleMode(terror)

window.addEventListener('load',(evt)=>{
  musica()
})

function musica(){
  setTimeout(function(){
    if(terror == true){
      msc.play()
    }else{
      msc.pause()
    }
  }, 1);
}
arr.addEventListener('click', ()=>{
    if(menu.style.left!="0%"){
        ar.classList.remove('bi-caret-right-fill')
        ar.classList.add('bi-caret-left-fill')
        
        menu.style.left="0%"
    }else{
        ar.classList.remove('bi-caret-left-fill')
        ar.classList.add('bi-caret-right-fill')
        
        menu.style.left="calc(0% - 63px)"
    }
})