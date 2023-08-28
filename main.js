const botao = document.querySelectorAll(".tecla");

botao.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        elemento.classList.add("ativa");

        setTimeout(function () {
            elemento.classList.remove("ativa");
        }, 200);

        tocarSom(evento.target.dataset.sound);

    });
});

function tocarSom(som) {
    const id = `#som_tecla_${som}`;
    const idAudio = document.querySelector(id);

    idAudio.pause();
    idAudio.currentTime = 0;
    idAudio.play();
}


document.addEventListener("keypress", (evento) => {
    const keyName = evento.key;

    const stringSeletor = `[data-key="${keyName}"]`;
    const botao = document.querySelector(stringSeletor);

    if (botao !== null) {
        botao.click();
    }

});