ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [58.610018, 49.602077],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [58.62, 49.602077]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'xx777x 43RU',
                hintContent: ''
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

        centerOffice = new ymaps.Placemark([58.610018, 49.602077], {
          balloonContent: '',
          iconCaption: 'ATX'
        }, {
          preset: 'islands#greenDotIconWithCaption'
        });


    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(centerOffice);
}
