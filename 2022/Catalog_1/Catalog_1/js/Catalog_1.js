document.addEventListener('DOMContentLoaded', () => {

    const filterButton = document.querySelector('.form-control__filter--button');
    const closeFilterButton = document.querySelector('.close');
    const filterPanel = document.querySelector('.catalog-filter');
    const catalogCollection = document.querySelector('.catalog__сollection');


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

});


