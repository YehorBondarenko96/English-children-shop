const lettersMenuHeader = document.querySelectorAll('.header-menu-home');
const headerMenuForLessonsOne = document.querySelectorAll('.header-menu-for-lessons-one');
const headerMenuForLessonsTwo = document.querySelectorAll('.header-menu-for-lessons-two')



function rotateLetter(value, massif){
    let deg = (massif.length-0.5)/2*(-value);
    for(let item of massif){
        item.style.transform = `rotate(${deg}deg)`;
        deg += value
    }
};

rotateLetter(-10, lettersMenuHeader);
rotateLetter(-8, headerMenuForLessonsOne);
rotateLetter(-6.5, headerMenuForLessonsTwo);