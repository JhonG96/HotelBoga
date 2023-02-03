const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

window.addEventListener("scroll",function(){
    var header = document.querySelector("#head-top");
    header.classList.toggle("down",window.scrollY>100);
})

function url(){
    let checkin = document.getElementById("chekin-date").value;
    let checkout = document.getElementById("chekout-date").value;
    let adult = document.getElementById("adult").value;
    let children = document.getElementById("children").value;
    let rooms = document.getElementById("rooms").value;    
    let final = `https://wa.me/+573102205920?text=Hola,Quiero%20hacer%20una%20reserva%20para%20el%20día%20${checkin}%20y%20salida%20${checkout}%20para${adult}%20adultos%20y%20${children}%20niños%20,me%20gustaría%20${rooms}%20habitaciones`
    document.getElementById('enlace').setAttribute('href', final);
}