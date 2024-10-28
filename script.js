var btn = document.querySelectorAll(".buttons");
var colorDiv = document.querySelector(".color-box");
var shape = document.querySelector(".shape");
const shapes = [
    "shield",
    "star",
    "triangle",
    "diamond",
    "pentagon",
    "hexagon",
    "octagon",
    "heart",
    "arrow",
    "parallelogram",
    "crescent",
    "trapezoid",
    "house",
    "cross",
    "chevron",
    "cloud"
];
btn.forEach(e => {
    e.addEventListener("click",(e)=>{
        if(e.target.innerText == "Change Color"){
            var r = Math.ceil(Math.random() * 255);
            var g = Math.ceil(Math.random() * 255);
            var b = Math.ceil(Math.random() * 255);
            colorDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
            
        }
        else if(e.target.innerText == "Change Shape"){
            shape.style.display = "block";
            let idx = Math.floor(Math.random() * shapes.length);
            shape.id = shapes[idx]; 
        }
    })

});