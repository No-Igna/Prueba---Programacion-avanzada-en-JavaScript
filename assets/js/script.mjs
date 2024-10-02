import { Aguila, Leon, Lobo, Oso, Serpiente } from "./animales/animalesHijos.mjs";

const sendForm=document.getElementById('btnRegistrar');
let listaAnimales=[];
sendForm.addEventListener("click",(evento)=>{
  evento.preventDefault();
  const typeAnimal= document.getElementById('animal').value;
  const ageAnimal= document.getElementById('edad').value;
  const commentAnimal= document.getElementById('comentarios').value;
  const previewAnimal= document.getElementById('preview').style.backgroundImage;
  const previewImage=previewAnimal.slice(19,previewAnimal.length-2);

  let newAnimal;
  switch (typeAnimal) {
    case 'Leon':
      newAnimal=new Leon(typeAnimal,ageAnimal,previewImage,commentAnimal);
      break;
    case 'Lobo':
      newAnimal=new Lobo(typeAnimal,ageAnimal,previewImage,commentAnimal);
      break;
    case 'Oso':
      newAnimal=new Oso(typeAnimal,ageAnimal,previewImage,commentAnimal);
      break;
    case 'Serpiente':
      newAnimal=new Serpiente(typeAnimal,ageAnimal,previewImage,commentAnimal);
      break;
    case 'Aguila':
      newAnimal=new Aguila(typeAnimal,ageAnimal,previewImage,commentAnimal);
      break;
    default:
      break;
  }
  if(typeAnimal && ageAnimal && previewAnimal && commentAnimal){
    listaAnimales.push(newAnimal);
    
    animalTable();
    resetForm();
  }else{
    document.getElementById('animales').innerHTML = `<b><font style="color: white; font-size: 24px;">Faltan datos en el registro!</font></b>`;
  }
});

const animalTable = () =>{
  const newCard= document.getElementById('animales');
  newCard.innerHTML="";
  listaAnimales.forEach((evento,i)=>{
    newCard.innerHTML += `
    <div class="px-1 col-3">
      <div class="card my-1">
      <!-- Button trigger modal -->
          <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modalAnimal-${i}">
            <img src='./assets/imgs/${evento.img}' class="card-img-top" alt="${evento.name}">
          </button>
          <div class="card-body">
            <p class="card-text py-0 my-0">
              <button onclick="sonidoAnimal('${i}')" class="btn btn-dark w-100 my-0 py-1">
                <img height="20" src="./assets/imgs/audio.svg">
              </button>
            </p>
          </div>
        </div>
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="modalAnimal-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered w-25">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${evento.name}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="./assets/imgs/${evento.img}" class="img-fluid" alt="${evento.name}">
              <div class="card-body">
                <p class="card-text"><b>Edad:</b><br>${evento.age}</p>
                <p class="card-text"><b>Comentario:</b><br>${evento.comment}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    `;
  })
}
const resetForm=()=>{
  const typeAnimal= document.getElementById('animal');
  const ageAnimal= document.getElementById('edad');
  const commentAnimal= document.getElementById('comentarios');
  const previewAnimal= document.getElementById('preview');

  typeAnimal.selectedIndex=0;
  ageAnimal.selectedIndex=0;
  commentAnimal.value="";
  previewAnimal.style.backgroundImage=`url('./assets/imgs/lion.svg')`;
}
window.sonidoAnimal = (i)=>{
  const animal = listaAnimales[i];
  switch (animal.name) {
    case 'Leon':
      animal.rugir();
      break;
    case 'Lobo':
      animal.aullar();
      break;
    case 'Oso':
      animal.grunir()
      break;
    case 'Serpiente':
      animal.sisear();
      break;
    case 'Aguila':
      animal.chillar();
      break;
    default:
      break;
  }
}
