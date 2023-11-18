const arr=window.document.querySelector('#arrow')
let ar=window.document.querySelector('#ar')
let menu=window.document.querySelector('#menu')
let msc = new Audio("../sounds/FNAF1.mp3")

let divTxt=[...window.document.querySelectorAll('.txt')]

let main = window.document.querySelector('main')

let theme=window.document.querySelector('#theme')

let terror = false

let bonnie = document.querySelector('#bon')
let chica = document.querySelector('#chi')
let freddy = document.querySelector('#fre')
let foxy = document.querySelector('#fox')
let gfo = document.querySelector('#gfo')
let img1 = document.querySelector('#img1')

let bonnie_f = document.querySelector('#bon_f')
let chica_f = document.querySelector('#chi_f')
let freddy_f = document.querySelector('#fre_f')
let foxy_f = document.querySelector('#fox_f')
let gfo_f = document.querySelector('#gfo_f')
let img1_f = document.querySelector('#img1_f')

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
    
    bonnie.style.display = "none"
    chica.style.display = "none"
    freddy.style.display = "none"
    foxy.style.display = "none"
    gfo.style.display = "none"
    img1.style.display = "none"
    
    bonnie_f.style.display = "block"
    chica_f.style.display = "block"
    freddy_f.style.display = "block"
    foxy_f.style.display = "block"
    img1_f.style.display = "block"

    divTxt.map((el) =>{
      el.style.backgroundColor="var(--cor7)"
      el.style.color="var(--cor10)"
    })
    divTxt[divTxt.length - 1].style.display = 'none'
    
  }else{
    main.style.backgroundColor = "var(--cor1)"

    bonnie_f.style.display = "none"
    chica_f.style.display = "none"
    freddy_f.style.display = "none"
    foxy_f.style.display = "none"
    img1_f.style.display = "none"
    gfo.style.display = "none"
    
    bonnie.style.display = "block"
    chica.style.display = "block"
    freddy.style.display = "block"
    foxy.style.display = "block"
    img1.style.display = "block"
    gfo.style.display = "block"
    
    divTxt.map((el) =>{
      el.style.backgroundColor="var(--cor2)"
      el.style.color="var(--cor4)"
    })
    
    divTxt[divTxt.length - 1].style.display = 'block'
  }
}

toggleMode(false)

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