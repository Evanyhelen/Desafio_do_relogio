const saudacao = document.querySelector('.titulo')
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

setInterval(function() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (seg < 10) seg = '0' + seg;

    horas.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;

    if (hr > 06 && hr <=12) {
      saudacao.innerHTML =  "Bom Dia!"
      document.body.style.backgroundImage = "url(../img/manha.jpg)"
      document.body.style.backgroundSize = "cover"

    }else if (hr >12 && hr <=18) {
        saudacao.innerHTML = "Boa Tarde!"
        document.body.style.backgroundImage = "url(../img/tarde.jpg)"
        document.body.style.backgroundSize = "cover"
    }else {
        saudacao.innerHTML = "Boa Noite!"
        document.body.style.backgroundImage = "url(../img/noite.jpg)"
        document.body.style.backgroundSize = "cover"
    }
})

