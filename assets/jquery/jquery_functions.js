$.ajaxSetup({
  cache: true
});

$(document).ready(function(){
    $(document).show();
    var delay = 2000;
    var url = "https://tuchavshortah.github.io/pages/main.html";
    setTimeout(function () {
        window.location = url;
        }, delay);
    });
});

$(document).ready(function(){
    $("img").hover(
        function(){
            $(this).animate({
                width: '+=100px',
                height: '+=50px'
            }, "slow", "swing");
        },
        function(){
            $(this).animate({
                width: '-=100px',
                height: '-=50px'
            }, "slow", "swing");
        }
    );
});


$(document).ready(function(){
    $("a.navbar-brand").hover(
        function(){
            $(this).animate({opacity: "0.25"}, "fast");
        },
        function(){
            $(this).animate({opacity: "1.0"}, "fast");
        });
});

$(document).ready(function(){
    $("h1.highlight").hover(
        function(){
            $(this).animate({fontSize: "+=10"}, "fast");
        },
        function(){
            $(this).animate({fontSize: "-=10"}, "fast");
        });
});

$(document).ready(function(){
    $("p").hover(
        function(){
            $(this).animate({lineHeight: "+=6px"}, "fast");
        },
        function(){
            $(this).animate({lineHeight: "-=6px"}, "fast");
        });
});
