document.querySelector('#exec').addEventListener('click',function(){
    let hor = parseInt(document.querySelector('#hor').value);
    let ver = parseInt(document.querySelector('#ver').value);
    let mine = parseInt(document.querySelector('#mine').value);
    console.log(hor, ver, mine);

    //지뢰의 위치 뽑기
    let num_list = Array(hor * ver).fill().map(function(item, index){
        return index;
    });
    let shuffle = [];
    while(num_list.length>hor*ver-mine){
        let selected_num = num_list.splice(Math.floor(Math.random() * num_list.length),1)[0];
        shuffle.push(selected_num);
    }
    console.log(shuffle);

    //지뢰 테이블 만들기
    let dataset = [];
    let table = document.querySelector('#table');
    for(let i=0; i<ver; i++){
        let arr=[];
        let tr = document.createElement('tr');
        dataset.push(arr);
        for(let j=0; j<hor; j++){
            arr.push(1);
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    console.log(dataset);

    //지뢰 심기
    for (let k=0; k<shuffle.length; k++){
        let ver_pos = Math.floor(shuffle[k]/hor);
        let hor_pos = shuffle[k]%hor;
        table.children[ver_pos].children[hor_pos].textContent="X";
        dataset[ver_pos][hor_pos]="X";
    }
});