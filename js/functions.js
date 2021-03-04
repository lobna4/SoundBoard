
function exp() { //fonction qui englobera toutes les fonctions

    document.addEventListener('keydown', function (e) { // declaration de la fonction e avec l evenement 'keydown'
        let code = e.key; // declare la variable code qui prendra la valeur e.key (=...)
        let monAudio = document.getElementById(code);// declare la varible audios avec id code
        if (!monAudio) return; //si une touche n est pas reliée à un audio alors il n'y aura pas de son

        console.log(monAudio);
        monAudio.previousElementSibling.classList.add("sound-active");// prendra l'elément precedent à mon audio et lui ajoute la classe 'sound-active'
        monAudio.currentTime = 0;// si je r'appuis sur la touche le son reprend à zéro
        monAudio.play();//fait fonctionner mon audio
        monAudio.addEventListener('ended', function (e) { // déclaration de la fonction avec l'événement 'ended' qui permet de mettre fin a la classe sound-active lorsque le son et terminer
            monAudio.previousElementSibling.classList.remove("sound-active");//prendra l'élément precedent a mon audio et lui retire la classe 'sound-active'
        })

    })

}
 
export function all(){// exportera toutes les fonctions
    exp();
}
