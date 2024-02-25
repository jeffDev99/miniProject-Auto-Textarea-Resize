let $ = document;
let myText = $.querySelector("#my-text")

myText.addEventListener("input",(e)=>{
    myText.style.height="auto"
    myText.style.height =  e.target.scrollHeight + "px"
})