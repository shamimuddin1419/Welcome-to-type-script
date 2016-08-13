// Class name welcome
class welcome { 
    element: HTMLElement;
     // constructor
    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML= "Welcome To TypeScript";
    }
}
 // window onload event, when page open then call this onload event 
window.onload = () => {
    // get html divcontent 
    var elh = document.getElementById('divcontent'); 
    // create new object and call constructor with elh paramitter
    var _welcomeobj = new welcome(elh);    
};