

let hor = 4;
let ver = 3;
let colorList = ['red','red','orange','orange','green','green','yellow','yellow','white','white','pink','pink']
let color = [];
let clickFlag = true; 

for(let i=0; colorList.length>0; i++){
    color = color.concat(colorList.splice(Math.floor(Math.random()*colorList.length),1));
}
console.log(color);


function cardSetting (hor, ver){
    clickFlag = false;
    for(let i=0; i<hor*ver; i++){
        let card = document.createElement('div');
        card.className='card';
        let cardInner = document.createElement('div');
        cardInner.className="card-inner";
        let cardFront = document.createElement('div');
        cardFront.className="card-front";
        let cardBack = document.createElement('div');
        cardBack.className="card-back";
        cardBack.style.backgroundColor=color[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        (function(c){
            card.addEventListener('click',function(){
                if(clickFlag){
                    card.classList.toggle('flipped');
                }
            })
        })(card);
        
        document.body.appendChild(card);
    }
    document.querySelectorAll('.card').forEach(function(card, index){
        setTimeout(function(){
            card.classList.add('flipped');
        }, 1000+100*index);
    })
    setTimeout(function(){
        document.querySelectorAll('.card').forEach(function(card, index){
            card.classList.remove('flipped');
        })
        clickFlag = true;
    }, 5000);
}

cardSetting(hor,ver);