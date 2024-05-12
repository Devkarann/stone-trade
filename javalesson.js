let classbtn = document.querySelector('button');
classbtn.addEventListener('click', inputmsg);

function inputmsg(){
    let votingg =prompt('You are voting for?');
    let a = 0;
    let b=0;
    let c=0;
    if(votingg == '1' ){
        a++;
        classbtn.textContent= ' 1 = '+ a+  '  2 = '  + b + '  3 = '+ c;
        
    }
    else if(votingg == '2'){
        b++;
        classbtn.textContent= '1 = '+ a +'\n'+'2 = '+ b + '\n'+'3 = '+ c;
    }
    else if(votingg == '3'){
        c++;
        classbtn.textContent= '1 = '+ a +'\n'+'2 = '+ b + '\n'+'3 = '+ c;
    }
}
