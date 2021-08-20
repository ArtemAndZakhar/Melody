$(document).ready(function () {
    // функция при наведении мышью на этаж
    var currentFloor = 2; // переменая текущего этажа
    var counterUp = $('.counter-up'); /* кнопка увелечения этажа*/
    var counterDown = $('.counter-down');/* кнопка уменьшения этажа*/
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var floorPath = $(".home-image path"); 
    var viewFlatsButton = $("view-flats");
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этаажей
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.counter').text(currentFloor); // записываем значение этажа справа
    });

    floorPath.on('click', toggleModal); // при клике на этаж открыть окно
    modalCloseButton.on('click', toggleModal); // при клике на крестик закрыть окно
    viewFlatsButton.on('click', toggleModal);
    
    counterUp.on('click', function () { // отслеживаем клик по кнопке вверх
        // console.log('click UP');
        if (currentFloor < 18) { // проверяем значение этажа
            currentFloor++; // увеличиваем этаж на один
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) // форматируем переменную с этажем
            $('.counter').text(usCurrentFloor); // записываем значение этажа справа 
            floorPath.removeClass('current-floor');  // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
        }
    });
    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
        function toggleModal() {
        modal.toggleClass('is-open');
        }
});