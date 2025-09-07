const btn = document.querySelectorAll('.items .question')

btn.forEach( function(b){
    b.addEventListener("click", function (){
        let reponse = b.parentElement.children;
        
        reponse[1].classList.toggle('hidden');
        
    })
})
