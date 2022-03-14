var accordion = document.querySelectorAll('.contentBx');
var circleDown = document.querySelectorAll('.fa-solid');



    accordion.forEach((accord) =>{
        accord.addEventListener('click', function(){
            accord.classList.toggle('active');
        })
    
    })
   

    

