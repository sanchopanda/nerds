//Yandex.Map
var myMap;
  // Wait till API and DOM are loaded.
  ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[59.939054, 30.319866], // Coordinates of our address
        zoom:17,
        controls: ['zoomControl']
    });

    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    }, {

      iconLayout: 'default#image',

      iconImageHref: 'img/cloud.png',
      // Label size
      iconImageSize: [231, 190],
      // Icon's upper left edge offset to its "leg" (binding point)
      iconImageOffset: [-60, -200]
    });

    myMap.geoObjects.add(myPlacemark);

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };
}

//slider-range
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 20000,
      values: [ 0, 20000 ],
      slide: function( event, ui ) {
        $( "#from" ).val(ui.values[ 0 ]);
        $( "#to" ).val(ui.values[ 1 ]);
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );