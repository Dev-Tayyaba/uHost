var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalButton = document.querySelector(".modal__action--negative");
var select = document.querySelectorAll(".plan button");
var togglebutton = document.querySelector(".toggle-button");
var nav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta")

// console.dir(backdrop.style["background-image"]);

for (var i = 0; i < select.length; i++) {
    select[i].addEventListener("click", function() { 
        // modal.style.display = "block";
        // backdrop.style.display = "block"; 
        // modal.className = "open";// This will actually overwise the complete class list
        modal.classList.add("open");
        backdrop.style.display = "block"
        setTimeout(function() {
            backdrop.classList.add("open");
        }, 10);
    });
}

backdrop.addEventListener("click", function() {
    // nav.style.display = "none";
    nav.classList.remove("open");
    closeModal();
});

if (modalButton) {
    modalButton.addEventListener("click", closeModal);
}

function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    if (modal) {
    modal.classList.remove("open");
    }
    
    backdrop.classList.remove("open");
    setTimeout(function() {
        backdrop.style.display = "none";
        }, 200);
};

togglebutton.addEventListener("click" , function() {
    // nav.style.display = "block";
    // backdrop.style.display = "block";
    nav.classList.add("open");
    backdrop.style.display = "block"
    setTimeout(function() {
        backdrop.classList.add("open");
    }, 10);
});

ctaButton.addEventListener("animationstart", function(event) {
    console.log("Animation started", event);
})

ctaButton.addEventListener("animationend", function(event) {
    console.log("Animation ended", event);
})

ctaButton.addEventListener("animationiteration", function(event) {
    console.log("Animation iteration", event);
})