document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.gallery');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    btn1.addEventListener('click', () => {
        grid.style.cssText = 'grid-template-columns: repeat(5, 19vw);';
    });
    btn2.addEventListener('click', () => {
        grid.style.cssText = 'grid-template-columns: repeat(4, 24vw);';
    }) ;
    btn3.addEventListener('click', () => {
        grid.style.cssText = 'grid-template-columns: repeat(3, 33vw);';
    });

});
