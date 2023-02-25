const portifolios = [
  {
    imageDesktop: 'assets/portifolio/00-desktop.png',
    imageMobile: 'assets/portifolio/00-mobile.png',
    linkPortifolio: 'https://psychedelic-book.surge.sh/',
    imageAlt: 'Imagem do portifolio do jogo da memória'
  },
  {
    imageDesktop: 'assets/portifolio/01-desktop.png',
    imageMobile: 'assets/portifolio/01-mobile.png',
    linkPortifolio: 'https://fantastic-question.surge.sh/',
    imageAlt: 'Imagem do portifolio to-do list'
  },
  {
    imageDesktop: 'assets/portifolio/02-desktop.png',
    imageMobile: 'assets/portifolio/02-mobile.png',
    linkPortifolio: 'https://probable-substance.surge.sh/',
    imageAlt: 'Imagem do portifolio do jogo da velha'
  },
  {
    imageDesktop: 'assets/portifolio/03-desktop.png',
    imageMobile: 'assets/portifolio/03-mobile.png',
    linkPortifolio: 'https://omniscient-wave.surge.sh/',
    imageAlt: 'Imagem do portifolio utilizando JSON'
  },
  {
    imageDesktop: 'assets/portifolio/04-desktop.png',
    imageMobile: 'assets/portifolio/04-mobile.png',
    linkPortifolio: 'https://industrious-act.surge.sh/',
    imageAlt: 'Imagem do portifolio utilizando API'
  },
  {
    imageDesktop: 'assets/portifolio/05-desktop.png',
    imageMobile: 'assets/portifolio/05-mobile.png',
    linkPortifolio: 'https://humorous-wind.surge.sh/',
    imageAlt: 'Imagem do portifolio validando formulário'
  }
];

let desktop = document.querySelector(".link-interface-desktop");
let mobile = document.querySelector(".link-interface-mobile");
let btn_left = document.querySelector("#btn-left");
let btn_right = document.querySelector("#btn-right");
let btn_submit = document.getElementById("submit-form");
let positionArray = 0;
const arrayLegnth = portifolios.length;
let intervalId;
var isRunning = false;

btn_submit.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementsByTagName('form')[0].submit();
});

// Incializa a pagina
window.onload = function() {
  checkWindowWidth();
  document.querySelector('#screen-portifolio-desktop').src = portifolios[0].imageDesktop;
  document.querySelector('#screen-portifolio-mobile').src = portifolios[0].imageMobile;
  desktop.href = portifolios[0].linkPortifolio;
  mobile.href = portifolios[0].linkPortifolio;
}

// função chamar a função que altera slides no portifólio
function checkWindowWidth() {
  if(!isRunning) {
    isRunning = true;
    changePortfolio();
    intervalId = setTimeout(checkWindowWidth, 5000);
  }
}

// função para alterar slides
function changePortfolio() {
  // Obtém a largura da janela
  const windowWidth = window.innerWidth;
  // Verifica se a largura da janela é menor que 1250px
  if (windowWidth < 1251) {
    document.querySelector('#screen-portifolio-desktop').src = portifolios[positionArray].imageDesktop;
    document.querySelector('#screen-portifolio-mobile').src = portifolios[positionArray].imageMobile;
    desktop.href = portifolios[positionArray].linkPortifolio;
    mobile.href = portifolios[positionArray].linkPortifolio;
    incrementaPosition(positionArray);
  } else {
    clearInterval(intervalId);
  }
  isRunning = false;
}

// botão esquerdo portifólio
btn_left.addEventListener("click", function() {
  decrementaPosition(positionArray);
  document.querySelector('#screen-portifolio-desktop').src = portifolios[positionArray].imageDesktop;
  document.querySelector('#screen-portifolio-mobile').src = portifolios[positionArray].imageMobile;
  desktop.href = portifolios[positionArray].linkPortifolio;
  mobile.href = portifolios[positionArray].linkPortifolio;
});

// botão direito portifólio
btn_right.addEventListener("click", function() {
  incrementaPosition(positionArray);
  document.querySelector('#screen-portifolio-desktop').src = portifolios[positionArray].imageDesktop;
  document.querySelector('#screen-portifolio-mobile').src = portifolios[positionArray].imageMobile;
  desktop.href = portifolios[positionArray].linkPortifolio;
  mobile.href = portifolios[positionArray].linkPortifolio;
});

// incrementa contador
function incrementaPosition(item) {
  if(item === arrayLegnth-1) {
    return positionArray = 0;
  }
  return positionArray++;
}

// decrementa contador
function decrementaPosition(item) {
  if(item === 0) {
    return positionArray = arrayLegnth-1;
  }
  return positionArray--;
}

// submit formulario
document.getElementsByTagName("form")[0].addEventListener("submit", function(event){
  event.preventDefault();
});
