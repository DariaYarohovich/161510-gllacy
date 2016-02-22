
/*=======POPUP_OPEN_CLOSE*/
        
        var open = document.querySelector(".popup-open");
        var popup = document.querySelector(".popup");
        var overlay = document.querySelector(".overlay");
        var closeCross = document.querySelector(".btn-close");
        var login = popup.querySelector("[name=name]");
        

  
        open.addEventListener("click", function(event){
            event.preventDefault();
            popup.classList.add("popup-show");
            overlay.classList.add("overlay-show");
            login.focus();
        });
        
        closeCross.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.remove("popup-show");
            overlay.classList.remove("overlay-show");    

        });
        
        overlay.addEventListener("click", function() {
            popup.classList.remove("popup-show");
            overlay.classList.remove("overlay-show");    

        });
      
        
        
/*============POPUP===============*/
        var fieldName = document.querySelector(".popup input[name=name]");
        var yourNameTip = document.querySelector(".form-tip-name");
        var fieldEmail = document.querySelector(".popup input[name=email]");
        var yourEmailTip = document.querySelector(".form-tip-email");

        fieldName.addEventListener ("focus", function (event) {
        event.preventDefault();
        yourNameTip.classList.add("form-tip-name-show");
        });
        fieldName.addEventListener ("blur", function (event) {
        event.preventDefault();
        yourNameTip.classList.remove("form-tip-name-show");
        });	
        
        fieldEmail.addEventListener("focus", function() {
            yourEmailTip.classList.add("form-tip-email-show");
        });
        fieldEmail.addEventListener("blur", function(){
            yourEmailTip.classList.remove("form-tip-email-show");
        });

        
/*============MAP==========*/
          ymaps.ready(function () {
          var myMap = new ymaps.Map('map', {
                  center: [59.939167,30.327075],
                  zoom: 16,
                  controls: ['zoomControl']
              }, {
                  searchControlProvider: 'yandex#search'
              }),
              myPlacemark = new ymaps.Placemark([59.9386667,30.3230725], {
                  hintContent: 'Глейси',
                  balloonContentHeader: 'Глейси',
                  balloonContent: 'ул. Большая Конюшенная 19/8, Санкт-Петербург'
              }, {
                  iconLayout: 'default#image',
                
                  iconImageHref: 'img/icon_map.png',
                 
                  iconImageSize: [218, 142],
                
                  iconImageOffset: [-40, -140]
              });

          myMap.geoObjects.add(myPlacemark);
          myMap.behaviors.disable('scrollZoom');
      });
      
    