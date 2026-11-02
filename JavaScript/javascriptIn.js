
const searchInput = document.querySelector(".srch");
const searchButton = document.querySelector(".btn");




if (searchInput && searchButton) {

    searchButton.addEventListener("click", function () {

        const searchValue = searchInput.value.toLowerCase().trim();


        

        if (searchValue === "") {

            alert("Please enter a wine or product to search.");

            return;
        }


        

        if (
            searchValue.includes("cabernet") ||
            searchValue.includes("cab sav")
        ) {

            window.location.href = "products.html#cabernet";

        }

        else if (
            searchValue.includes("sauvignon") ||
            searchValue.includes("sauv")
        ) {

            window.location.href = "products.html#sauvignon";

        }

        else if (
            searchValue.includes("rose") ||
            searchValue.includes("rosé")
        ) {

            window.location.href = "products.html#rose";

        }

        else if (
            searchValue.includes("shiraz")
        ) {

            window.location.href = "products.html#shiraz";

        }

        else if (
            searchValue.includes("wine") ||
            searchValue.includes("product")
        ) {

            window.location.href = "products.html";

        }

        else {

            alert(
                "Sorry, we couldn't find that product. " +
                "Please try Cabernet, Sauvignon, Rosé or Shiraz."
            );

        }

    });
    
    

    searchInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            searchButton.click();

        }

    });

}


const exploreButton = document.querySelector(".cn");

if (exploreButton) {

    exploreButton.addEventListener("click", function () {

        
        window.location.href = "products.html";

    });

}


const wineCards = document.querySelectorAll(".wine");

wineCards.forEach(function (wine) {

    wine.addEventListener("mouseenter", function () {

        wine.style.transform = "translateX(8px)";

    });


    wine.addEventListener("mouseleave", function () {

        wine.style.transform = "translateX(0)";

    });

});