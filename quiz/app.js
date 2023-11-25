document.addEventListener("keydown", function (e) {

    let key = e.keyCode;
    console.log(e); 

    if (key === 38 /* TOP */) {
        document.getElementById("left-top").src = "images/theft.jpg";
        document.getElementById("left-bottom").src = "images/white.png";
        setTimeout(() => {
            document.getElementById("right-top").src = "images/white.png";
            document.getElementById("left-top").src = "images/police.jpg";
            setTimeout(end, 500);
          }, 300);    
    }

    if (key === 39 /* RIGHT */) {
        document.getElementById("right-bottom").src = "images/theft.jpg";
        document.getElementById("left-bottom").src = "images/white.png";
        setTimeout(() => {
            document.getElementById("right-top").src = "images/white.png";
            document.getElementById("right-bottom").src = "images/police.jpg";
            setTimeout(end, 500);
          }, 300);
    }
}, { once : true});


function end() {
    const popup = document.querySelector('.popup')
    popup.style.display = 'flex'
}