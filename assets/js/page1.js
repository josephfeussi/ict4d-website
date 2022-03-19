window.addEventListener('scroll', reveal);

function revexal(){
    var reveals = document.querySelectorAll('.paralax');

    for (var i=0; i< reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop <windowheight - revealPoint){
            reveals[i].classList.add('activee');
        }else {
            reveals[i].classList.remove('activee');
        }
    }
}