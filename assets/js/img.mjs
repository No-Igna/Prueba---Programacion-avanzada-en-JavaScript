import {animales} from "./response.mjs";

const selector =document.getElementById('animal');
selector.addEventListener("change", async (evento)=>{
  const promesaAnimales=await animales.getData();
  const arrayAnimales=promesaAnimales["animales"];
  const selectedAnimal = evento.target.value;
  const setImg =()=>{
    const nameImg = arrayAnimales.find((evento)=>evento.name===selectedAnimal).imagen;
    const div=document.getElementById('preview');
    div.style.backgroundImage=`url('./assets/imgs/${nameImg}')`
  }
  setImg();
});