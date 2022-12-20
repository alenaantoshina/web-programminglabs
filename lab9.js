function clickMe(button) {
    if(button.innerHTML =='Щелчок')
       button.innerHTML = 'Спасибо';
else
   button.innerHTML = 'Щелчок';
}
function clickName(button){
    if(button.innerHTML =='Ульяна')
       button.innerHTML = 'Шишкина';
    else
       button.innerHTML = 'Ульяна';
}
function clickName2(button){
    if(button.innerHTML =='Алёна')
       button.innerHTML = 'Антошина';
    else 
       button.innerHTML = 'Алёна';
}
function clickOn(button){
    if(button.innerHTML == 'Нажми меня')
       button.innerHTML = 'Еще раз нажми';
    else if(button.innerHTML == 'Еще раз нажми')
         button.innerHTML = 'Еще';
    else if(button.innerHTML == 'Еще')
         button.innerHTML == 'Начать сначала';
    else button.innerHTML = 'Нажми меня';
}