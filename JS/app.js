'use strict';

let form=document.getElementById('myform');
let result=document.getElementById('result');
let placeArr=[];

function addPlace(name,place,transport){
    this.name=name;
    this.place=place;
    this.transport=transport;  
    this.img0=`../img/${place}.png`
    this.render();
    placeArr.push(this);
}

addPlace.prototype.render=function(){
    let div=document.createElement('div');
    result.appendChild(div);

    let img=document.createElement('img');
    div.appendChild(img);
    img.src=this.img0;

    let p1=document.createElement('p');
    div.appendChild(p1);
    p1.textContent=`Place Name : ${this.name}`;

    let p2=document.createElement('p');
    div.appendChild(p2);
    p2.textContent=`Trip place : ${this.place}`;

    let p3=document.createElement('p');
    div.appendChild(p3);
    p3.textContent=`Type of transport : ${this.transport}`;
}


form.addEventListener('submit',submiter);

function submiter(event){
    event.preventDefault();
let name=event.target.name.value;
let place=event.target.place.value;
let natransportme=event.target.transport.value;

new addPlace (name,place,natransportme)
setting();
form.reset();

}

function setting(){
    localStorage.setItem('addPlace', JSON.stringify(placeArr));
}

function getting(){
    let stringObj=localStorage.getItem('addPlace');
    let normalObj=JSON.parse(stringObj);

    if (normalObj!==null) {
        for (let i = 0; i < normalObj.length; i++) {
            new addPlace (normalObj[i].name,normalObj[i].place,normalObj[i].natransportme)
            
        }
    }
}

getting();