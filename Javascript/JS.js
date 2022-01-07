//jQuery
src="https://code.jquery.com/jquery-3.6.0.slim.js"
        integrity="sha384-fuUlMletgG/KCb0NwIZTW6aMv/YBbXe0Wt71nwLRreZZpesG/N/aURjEZCG6mtYn"
        crossOrigin="anonymous"
src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"


//alert("Welcome to the Website from Rui");

// Change heading:
document.getElementById("myH").innerHTML = "My First Page";


// Change heading:
document.getElementById("myH").innerHTML = "JavaScript Comments";

//jQuery

$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $(".test").slideToggle(300);

    });
});