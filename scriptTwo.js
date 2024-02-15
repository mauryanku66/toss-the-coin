let message = document.querySelector(".message");
let coin   = document.querySelector(".coin");
let flipCoin = document.querySelector("#flipCoin");
const random = ()=>{
    let randval = Math.floor(Math.random()*2);
    
   return randval;
};

function valcheck () {  
    coin.classList.remove("animationHead") ;
    coin.classList.remove("animationTails") ;
    message.innerText = "";

    
   if (random()==0) {
       setTimeout(() => {
           coin.classList.add("animationHead");
       }, 100);
       setTimeout(() => {
        message.innerText = 'HEAD'
       }, 3000);
       
   }
    else{
        setTimeout(() => {
            coin.classList.add("animationTails");
        }, 100);
        setTimeout(() => {
       message.innerText = 'TAIL'
            
        }, 3000);

    }
}
flipCoin.addEventListener("click",valcheck)