console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    // Apply hover effect to images with class "hoverImage"
    $(".hoverImage").on({
        mouseenter: function(){
            $(this).css("transform", "scale(1.1)");
        },
        mouseleave: function(){
            $(this).css("transform", "scale(1)");
        }
    });

    // Apply hover effect to headings
    $("h1, h2, h3").on({
        mouseenter: function(){
            $(this).css("background-color", "lightblue");
        },
        mouseleave: function(){
            $(this).css("background-color", "white");
        },
        click: function(){
            $(this).css("background-color", "purple");
        }
    });

    // Apply hover effect to paragraphs
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightpink");
        },
        mouseleave: function(){
            $(this).css("background-color", "white");
        },
        click: function(){
            $(this).css("background-color", "purple");
        }
    });

     // Apply hover effect to footer
     $(".footerText").on({
        mouseenter: function(){
            $(this).css("background-color", "lightpink");
        },
        mouseleave: function(){
            $(this).css("background-color", "#fdcb7f");
        },
        click: function(){
            $(this).css("background-color", "purple");
        }
    });
    // Apply animation to button on click
    $("#animatedButton").on("click", function() {
        $(this).css("transform", "rotate(360deg)");
    });
});