class Carrossel {
  constructor(container,botoes,imgs){
    this.container = document.querySelector(container);
    this.botoes = document.querySelectorAll(botoes)
    this.imgs = imgs;
    this.contador = 1;
  };

  bind(){
    this.mudarImg = this.mudarImg.bind(this);
    this.trocarImgBtn = this.trocarImgBtn.bind(this);
  }

  trocarImgBtn(event){
    
    if(event.target.hasAttribute('1')){
      this.container.innerHTML = this.imgs[0];
      this.contador = 1;
    }
    if(event.target.hasAttribute('2')){
      this.container.innerHTML = this.imgs[1];
      this.contador = 2;
    }
    if(event.target.hasAttribute('3')){
      this.container.innerHTML = this.imgs[2];
      this.contador = 3;
    }
    this.corBotoes();
  }

  addEvento(){
    this.botoes.forEach((botao) => {
      botao.addEventListener('click',this.trocarImgBtn);
    })
  }

  mudarImg(){
    if(this.contador > this.imgs.length -1){
      this.contador = 0;
    }
    this.container.innerHTML = this.imgs[this.contador]; 
    this.contador++;
    this.corBotoes();
    
  }

  tempo(){
      setInterval(this.mudarImg,6000);
  }

  corBotoes(){
    if(this.contador === 1){
      this.botoes[0].classList.add('ativo');
    }else if(this.contador !== 1){
      this.botoes[0].classList.remove('ativo');
    }
    if(this.contador === 2){
      this.botoes[1].classList.add('ativo');
    }else if(!this.contador !== 2){
      this.botoes[1].classList.remove('ativo');
    }
    if(this.contador === 3){
      this.botoes[2].classList.add('ativo');
    }else if(!this.contador !== 3){
      this.botoes[2].classList.remove('ativo');
    }
    console.log(!this.contador)
  }

  init(){
    this.bind();
    this.tempo();
    this.addEvento();
    this.corBotoes();
  }
};

const carrossel = new Carrossel('.container','.botao',[
      '<img src="imagens/1301576.png" alt="">',
      '<img src="imagens/1371356.png" alt="">',
      '<img src="imagens/1378137.png" alt="">'
    ]);
carrossel.init();