const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hrs = date.getHours();
  const sec = date.getSeconds();
  clockTitle.innerText = `${
  hrs < 10 ? `0${hrs}`:hrs}:${
  minutes < 10 ? `0${minutes}` : minutes}:${
  sec < 10 ? `0${sec}` : sec}`;
}

function init(){
  getTime();
  setInterval(getTime,1000);
}

init();