document.addEventListener('DOMContentLoaded', () => {

    const filterButton = document.querySelector('.form-control__filter--button');
    const closeFilterButton = document.querySelector('.close');
    const filterPanel = document.querySelector('.catalog-filter');
    const catalogCollection = document.querySelector('.catalog__сollection');
    const body = document.querySelector('body');
    const imgs = document.querySelectorAll('.product__img');


    filterButton.onclick = function () {
        filterPanel.classList.add('filter-open');
        catalogCollection.style.position = ('fixed');
        closeFilterButton.style.display = ('block');
        document.querySelector(".section-catalog").style.pointerEvents = ('none');
        document.querySelector(".section-catalog").style.position = ('fixed');
    }

    closeFilterButton.onclick = function () {
        filterPanel.classList.remove('filter-open');
        catalogCollection.style.position = ('');
        document.querySelector(".section-catalog").style.pointerEvents = ('');
        document.querySelector(".section-catalog").style.position = ('');
        closeFilterButton.style.display = ('none');
    }

    if (imgs.length >= 0) {

        for (let index = 0; index < imgs.length; index++) {
            const img = imgs[index];
            img.addEventListener('click', function (e) {
                this.classList.add('img--open');
                body.classList.add('body--lock');
                setTimeout(asd, 1000);
                body.addEventListener('click', function asd(e){
                    console.log(img);
                    img.classList.remove('img--open');
                    body.classList.remove('body--lock');
                });

            });
        }
    }
});


