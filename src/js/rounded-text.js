const lettersMenuHeader = document.querySelectorAll('.letter-menu-headaer');



function rotateLetter(value){
    let deg = (lettersMenuHeader.length-0.5)/2*(-value);
    for(let item of lettersMenuHeader){
        item.style.transform = `rotate(${deg}deg)`;
        deg += value
    }
};

rotateLetter(-10);