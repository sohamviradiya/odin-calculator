const screen = document.querySelector('.screen');
const operations_container = document.querySelector('.operations-container');
const digits_container = document.querySelector('.digits-container');

addtoscreen = (string) => {screen.textContent=screen.textContent+string};
pasteonscreen = (string) => screen.textContent=string;
clearscreen = () => screen.textContent="";

key_dict={}

digits_container.childNodes.forEach(element => {
    key_dict[element.textContent]=element;
    element.onclick = () => addtoscreen(element.textContent);
}); 

operations_container.childNodes.forEach(element => {
    key_dict[element.textContent]=element;
    element.onclick = () => addtoscreen(element.textContent);
}); 




