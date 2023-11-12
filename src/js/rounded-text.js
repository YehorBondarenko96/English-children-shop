const lettersMenuHeader = document.querySelectorAll('.header-menu-home');
const headerMenuForLessonsOne = document.querySelectorAll('.header-menu-for-lessons-one');
const headerMenuForLessonsTwo = document.querySelectorAll('.header-menu-for-lessons-two');
const headerMenuForTeachersOne = document.querySelectorAll('.header-menu-for-teachers-one');
const headerMenuForTeachersTwo = document.querySelectorAll('.header-menu-for-teachers-two');
const headerMenuContacts = document.querySelectorAll('.header-menu-contacts');



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
rotateLetter(-8, headerMenuForTeachersOne);
rotateLetter(-6.5, headerMenuForTeachersTwo);
rotateLetter(-9, headerMenuContacts);