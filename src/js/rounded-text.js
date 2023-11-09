const lettersMenuHeader = document.querySelectorAll('.letter-menu-headaer');



function rotateLetter(value){
    let deg = (lettersMenuHeader.length - 1)/2*(-value);
    console.log(deg);
    for(let item of lettersMenuHeader){
        item.style.transform = `rotate(${deg}deg)`;
        deg += value
    }
};

rotateLetter(-30);