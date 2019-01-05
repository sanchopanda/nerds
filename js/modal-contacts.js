
modal();

function modal(){
  var link = document.querySelector(".contacts__btn");
    var popup = document.querySelector(".modal-contacts");
    var close = document.querySelector(".modal-contacts__close");  
    var form = document.querySelector("#write-us");
    var login = document.querySelector("[name=Name]");    
    var mail = document.querySelector("[name=E-mail]");
    var text = document.querySelector("[name=E-mail]");
    var storage = localStorage.getItem("login");

    link.addEventListener("click", function(event){  
      event.preventDefault();      
      popup.classList.add("modal-contacts--show");  
      if(storage){
        login.value = storage;
        mail.focus();
      }else{
        login.focus();
      }
    });

    close.addEventListener("click", function(event){  
      event.preventDefault();      
      popup.classList.remove("modal-contacts--show");
      popup.classList.remove("modal-contacts--error");
    });

    document.addEventListener("keydown", function (event) {
      if(event.keyCode === 27) popup.classList.remove("modal-contacts--show");
    }); 

    form.addEventListener("submit", function (event) {      
      if(!login.value || !mail.value || !text.value){
        event.preventDefault();        
        popup.classList.add("modal-contacts--error"); 
      }else{
        localStorage.setItem("login", login.value);
      }      
    }); 
}    
    