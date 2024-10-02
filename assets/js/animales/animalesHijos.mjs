import { Animal } from "./animales.mjs";

export class Leon extends Animal{
  constructor(name,age,img,comment,sound){
    super(name,age,img,comment,sound);
  }
  rugir(){
    const player=document.getElementById('player');
    player.setAttribute("src", `./assets/sounds/Rugido.mp3`);
    player.play();
  }
}

export class Lobo extends Animal{
  constructor(name,age,img,comment,sound){
    super(name,age,img,comment,sound);
  }
  aullar(){
    const player=document.getElementById('player');
    player.setAttribute("src", `./assets/sounds/Aullido.mp3`);
    player.play();
  }
}

export class Oso extends Animal{
  constructor(name,age,img,comment,sound){
    super(name,age,img,comment,sound);
  }
  grunir(){
    const player=document.getElementById('player');
    player.setAttribute("src", `./assets/sounds/Grunido.mp3`);
    player.play();
  }
}

export class Serpiente extends Animal{
  constructor(name,age,img,comment,sound){
    super(name,age,img,comment,sound);
  }
  sisear(){
    const player=document.getElementById('player');
    player.setAttribute("src", `./assets/sounds/Siseo.mp3`);
    player.play();
  }
}

export class Aguila extends Animal{
  constructor(name,age,img,comment,sound){
    super(name,age,img,comment,sound);
  }
  chillar(){
    const player=document.getElementById('player');
    player.setAttribute("src", `./assets/sounds/Chillido.mp3`);
    player.play();
  }
}