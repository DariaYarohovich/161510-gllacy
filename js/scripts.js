
        //popup open-close
        
        var open = document.querySelector(".popup-open");
        var popup = document.querySelector(".popup");
        var overlay = document.querySelector(".overlay");
        var closeCross = document.querySelector(".btn-close");
        var login = popup.querySelector("[name=name]");
        

  
        open.addEventListener("click", function(event){
            event.preventDefault();
            popup.classList.add("popup-show");
            overlay.classList.add("overlay-show");
            scroll(0,0);
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
      
        
        
        //popup fields tips
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
        
        
