var tab_img = ['anh1.jpg','anh2.jpg','anh3.jpg','anh4.jpg','anh5.jpg','anh6.jpg','anh7.jpg'];
var img1 = document.getElementById("picture");
var i = 1;
var x = document.getElementById('heure');
var horaire, gio, minute, seconde;

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
function changeSrc() {
    img1.src = tab_img[i];
    i++;
    if (i >= tab_img.length)
        i = 1;
}
setInterval(changeSrc, 2000);

function heure() {
    horaire = new Date;
    gio = horaire.getHours();
    minute = horaire.getMinutes();
    seconde = horaire.getSeconds();
    if (gio < 10) {
        gio = "0" + gio;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (seconde < 10) {
        seconde = "0" + seconde;
    }
    x.innerHTML = gio + ":" + minute + ":" + seconde;
    setTimeout("heure()",1000)
}
heure();