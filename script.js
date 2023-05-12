let content = document.getElementById("content");
let addStylesBtn = document.getElementById("addStylesBtn");
let removeStylesBtn = document.getElementById("removeStylesBtn");

removeStylesBtn.addEventListener("click" , () => {
    content.classList.remove("contentStyle");
    addStylesBtn.style.display  = "block";
    removeStylesBtn.style.display = "none";
}); 

addStylesBtn.addEventListener("click" , () => {
    content.classList.add("contentStyle");
    removeStylesBtn.style.display = "block";
    addStylesBtn.style.display  = "none";
});  