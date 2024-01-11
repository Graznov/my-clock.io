var now

let arrCloc = [];
let arrHM = "";

let strDate = ''

function addGlobDate(){
  now = new Date();
  let days = ['Воскресенье' ,'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
  strDate = `${days[now.getDay()]} ${now.getDate().toString()} ${month[now.getMonth()]} ${now.getFullYear()} года`
  document.querySelector('.date').innerHTML=strDate
}
addGlobDate()

function addGlobTime() {
  now = new Date();
  arrCloc = [];
  arrHM = ''
  arrCloc.push(now.getHours().toString());
  arrCloc.push(now.getMinutes().toString());
  arrCloc.push(now.getSeconds().toString());

  arrCloc.forEach((e, i) => {
    if (e.length === 1) arrCloc.splice(i, 1, `0${e}`);
  });
  arrHM = arrCloc[0] + arrCloc[1];
  
}

addGlobTime();

function addNumb(it, ind) {
  document
    .querySelectorAll(`.appNumb${ind}`)
    .forEach((e) => e.classList.remove("numbAction"));
  if (it === "0") {
    document.querySelector(`.appNumb${ind}_1`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_2`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_3`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_4`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_6`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_7`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_9`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_10`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_12`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_13`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_14`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_15`).classList.add("numbAction");
  } else if (it === "1") {
    document.querySelector(`.appNumb${ind}_1`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_2`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_5`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_8`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_11`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_13`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_14`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_15`).classList.add("numbAction");
  } else if (it === "2") {
    document.querySelector(`.appNumb${ind}_1`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_2`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_3`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_6`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_7`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_8`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_9`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_10`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_13`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_14`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_15`).classList.add("numbAction");
  } else if (it === "3") {
    document.querySelector(`.appNumb${ind}_1`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_2`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_3`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_6`).classList.add("numbAction");
    // document.querySelector(`.appNumb${ind}_7`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_8`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_9`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_12`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_13`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_14`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_15`).classList.add("numbAction");
  } else if (it === "4") {
    document.querySelector(`.appNumb${ind}_1`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_4`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_3`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_6`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_7`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_8`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_9`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_12`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_15`).classList.add("numbAction");
  } else if (it === "5") {
    document.querySelector(`.appNumb${ind}_1`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_2`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_3`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_4`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_7`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_8`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_9`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_12`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_13`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_14`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_15`).classList.add("numbAction");
  } else if (it === "6") {
    document.querySelector(`.appNumb${ind}_1`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_2`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_3`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_4`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_7`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_8`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_9`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_10`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_12`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_13`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_14`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_15`).classList.add("numbAction");
  } else if (it === "7") {
    document.querySelector(`.appNumb${ind}_1`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_2`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_3`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_6`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_8`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_11`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_14`).classList.add("numbAction");
  } else if (it === "8") {
    document.querySelector(`.appNumb${ind}_1`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_2`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_3`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_4`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_6`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_7`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_8`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_9`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_10`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_12`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_13`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_14`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_15`).classList.add("numbAction");
  } else if (it === "9") {
    document.querySelector(`.appNumb${ind}_1`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_2`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_3`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_4`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_6`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_7`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_8`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_9`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_12`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_13`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_14`).classList.add("numbAction");
    document.querySelector(`.appNumb${ind}_15`).classList.add("numbAction");
  }
}

function setGlobTime() {
  for (let i = 1; i < 5; i++) {
    addNumb(`${arrHM[i - 1]}`, i);
  }

}
setGlobTime();

let sec = arrCloc[2];

function setSecond(second) {

  setGlobTime();
  if(arrCloc[0]==='00' && arrCloc[1]==='00' && second===0) addGlobDate()

  document.querySelectorAll(".appNumbSec").forEach((el, ind) => {
    el.classList.remove("secAction");
    if (second < 10) {
      let secStr = '0'+second
      if (el.textContent === secStr) {
        el.classList.remove("numbAction");
        el.classList.add("secAction");
      }

    } else if (el.textContent === second.toString()) {
      el.classList.remove("numbAction");
      el.classList.add("secAction");
    }
  });

  sec++;
  if (sec === 60) {
    sec = 0;
    addGlobTime();
  }
}

setInterval(() => {
  setSecond(sec);
}, 1000);
