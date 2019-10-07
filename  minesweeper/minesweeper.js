let table = document.querySelector('#table');
let dataset = [];

document.querySelector('#exec').addEventListener('click',function(){
    //내부 먼저 초기화
    table.innerHTML='';
    let hor = parseInt(document.querySelector('#hor').value);
    let ver = parseInt(document.querySelector('#ver').value);
    let mine = parseInt(document.querySelector('#mine').value);

    //지뢰의 위치 뽑기
    let num_list = Array(hor * ver).fill().map(function(item, index){
        return index;
    });
    let shuffle = [];
    while(num_list.length>hor*ver-mine){
        let selected_num = num_list.splice(Math.floor(Math.random() * num_list.length),1)[0];
        shuffle.push(selected_num);
    }

    //지뢰 테이블 만들기
    for(let i=0; i<ver; i++){
        let arr=[];
        let tr = document.createElement('tr');
        dataset.push(arr);
        for(let j=0; j<hor; j++){
            arr.push(1);
            let td = document.createElement('td');
            td.addEventListener('contextmenu',function(e){
                e.preventDefault();
                let parentTr = e.currentTarget.parentNode;
                let parentTable = e.currentTarget.parentNode.parentNode;
                let tdX = Array.prototype.indexOf.call(parentTr.children,e.currentTarget);
                let tdY = Array.prototype.indexOf.call(parentTable.children,parentTr);
                if(e.currentTarget.textContent==='' || e.currentTarget.textContent ==='X'){
                    e.currentTarget.textContent='!';
                }else if(e.currentTarget.textContent==='!'){
                    e.currentTarget.textContent='?';
                }else if(e.currentTarget.textContent==='?'){
                    if(dataset[tdY][tdX]===1){
                        e.currentTarget.textContent='';
                    } else if(dataset[tdY][tdX]==='X'){
                        e.currentTarget.textContent='X';
                    }
                    
                }
            });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    //지뢰 심기
    for (let k=0; k<shuffle.length; k++){
        let ver_pos = Math.floor(shuffle[k]/hor);
        let hor_pos = shuffle[k]%hor;
        table.children[ver_pos].children[hor_pos].textContent="X";
        dataset[ver_pos][hor_pos]="X";
    }
});

