 window.onload = function(){
    var delay = 5000;
    var url = 'http://tuchavshortah.github.io/pages/main.html';
    setTimeout(function(){
        $(document).prop('title', 'Redirecting...');
        window.location.replace(url);
        }, delay
    );
}
