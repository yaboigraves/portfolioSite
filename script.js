let img1 = Math.floor(Math.random() * 326)
let img2 = Math.floor(Math.random() * 326)


if(img1 < 10){
    img1 = "00" + img1;
}
else if(img1 < 100){
    img1 = "0" + img1;
}

if(img2 < 10){
    img2 = "00" + img2;
}
else if(img2 < 100){
    img2 = "0" + img2;
}

document.getElementById("bg1").style.backgroundImage = "url(./bgs/" + img1 + ".png)";
document.getElementById("bg2").style.backgroundImage = "url(./bgs/" + img2 + ".png)";
document.getElementById("bg2").style.opacity = Math.random() / 4 + 0.3 + "";

document.getElementById


