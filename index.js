function Nav() {
    var sidepanel = document.getElementById("mySidepanel");
    var menuBtn = document.getElementById("menu-open-close-btn");
    var computedStyle = window.getComputedStyle(sidepanel);

    if (computedStyle.getPropertyValue('height') === "0px") {
        sidepanel.style.height = "250px";
        menuBtn.innerHTML = "close";
    }
    else {
        sidepanel.style.height = "0px";
        menuBtn.innerHTML = "menu";
    }
}

var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px",
        cursor.style.top = e.clientY + "px";
});

//rotate button
function rotate(button) {
    const icon = button.querySelector('span');
    icon.classList.toggle('rotate');
  }

  

//faq
const tabButtons = document.querySelectorAll('.tab-button');
        

tabButtons.forEach((e) => {
    e.addEventListener("click", (e) => {
        if (!e.target.classList.contains('tab-button-active')) {
            e.target.classList.add("tab-button-active");
            e.target.nextElementSibling.style.height = e.target.nextElementSibling.firstElementChild.clientHeight + 0 + "px";
            e.target.nextElementSibling.classList.add("tab-panel-active");
        } else {
            e.target.classList.remove("tab-button-active");
            e.target.nextElementSibling.style.height = "0px";
            e.target.nextElementSibling.classList.remove('tab-panel-active');
        }
    });
});

function openchat(){
    if(document.getElementById('chatbot').style.display=="block"){
        document.getElementById('chatbot').style.display="none"
    }
    else{
        document.getElementById('chatbot').style.display="block"
    }
}