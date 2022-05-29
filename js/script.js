const screen = document.querySelector('.screen');
const C = document.querySelector('#C');
const digits_container = document.querySelector('.digits-container');

addtoscreen= (string) => {screen.textContent=screen.textContent+string};
pasteonscreen= (string) => screen.textContent=string;
clearscreen = () => screen.textContent="";

C.onclick = () => addtoscreen('Long');