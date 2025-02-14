let button = document.getElementById ('button');
let img = document.getElementById ('pic');

button.addEventListener ('click', change)
function change(e) {
    if (button.textContent.includes ('on')) {
        img.src = "On image.jpg";
        button.style.backgroundColor = "green";
        button.textContent = "Turn off";
    }
    else {
        img.src = "Off images.jpg";
        button.textContent = "Turn on";
        button.style.backgroundColor = "red";


    }
}