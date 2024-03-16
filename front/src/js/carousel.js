const imgs = document.getElementById("img-caurosel");
const img = document.querySelectorAll("#img-caurosel img");

let idx = 0;

function caurosel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx *360}px)`;

}

setInterval(caurosel, 1800);