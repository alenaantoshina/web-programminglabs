function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById('sex').value;
    let greeting;
    if(userAge<= 17) {
        greeting = 'Здравствуй, ';
        if(userSex =='female') {
            greering += 'девочка';
        }
        else {
            greeting += 'мальчик';
        }
    } 
    else {
        greeting = 'Здравствуйте, ';
        if(userSex =='female') {
             greeting +='госпожа';
        }
        else {
             greeting += 'господин';
        }
    }
    alert(greeting + userName + ' ' + userSurname + '\n'
        + 'Ваш возраст: ' + userAge);
    let r = math.round(math.random ()*255);
    let g = math.round(math.random ()*255);
    let b = math.round(math.random ()*255);
    let color = 'rgb(' +  r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = 'color';
}