const date = document.getElementById('date');
const agecal = document.getElementById('ageCal');
const conten = document.getElementById('conter')



let myDate = new Date;

agecal.addEventListener('submit', function(e) {
    e.preventDefault();

    let sterdate = this.querySelector('input[type="date"]').value;
    let endTime = myDate.getTime();
    let starTime = new Date(sterdate);
    console.log(starTime);
    let timedef = Math.abs(endTime - starTime);
    let sec = Math.floor(timedef / 1000);
    let men = Math.floor(sec / 60);
    let hou = Math.floor(men / 60);
    let day = Math.floor(hou / 24);


    let yer = Math.floor(day / 365);
    let dayme = day - (yer * 365);

    conten.innerHTML = `Hi your age ${yer} year ${dayme} day .`









})