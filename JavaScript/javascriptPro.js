
const backToTop = document.getElementById("backToTop");


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});