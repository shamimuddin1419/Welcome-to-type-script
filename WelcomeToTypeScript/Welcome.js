// Class name welcome
var welcome = (function () {
    // constructor
    function welcome(element) {
        this.element = element;
        this.element.innerHTML = "Welcome To TypeScript";
    }
    return welcome;
}());
// window onload event, when page open then call this onload event 
window.onload = function () {
    // get html divcontent 
    var elh = document.getElementById('divcontent');
    // create new object and call constructor with elh paramitter
    var _welcomeobj = new welcome(elh);
};
//# sourceMappingURL=Welcome.js.map