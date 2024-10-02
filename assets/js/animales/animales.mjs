
export class Animal{
  constructor(name,age,img,comment,sound){
    this._name=name;
    this._age=age;
    this._img=img;
    this._comment=comment;
    this._sound=sound;
  }
  get name(){
    return this._name;
  }
  get age(){
    return this._age;
  }
  get img(){
    return this._img;
  }
  get comment(){
    return this._comment;
  }
  set comment(newComment){
    this._comment=newComment;
  }
  get sound(){
    return this._sound;
  }
  set sound(sonido){
    this._sound=sonido;
  }

}