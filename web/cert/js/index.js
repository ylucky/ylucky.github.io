// Template
var template = document.getElementById('show-template').innerHTML;


// Compile and render
var compiled = Template7(template).compile();
var compiledRendered = compiled(cert);

// Insert rendered template
document.getElementById('content-wrap').innerHTML = compiledRendered;

//横屏
(function () {   
    function resize() {
        var body = document.getElementsByTagName('body')[0];
        var html = document.getElementsByTagName('html')[0];
        var width = html.clientWidth;
        var height =  html.clientHeight;
        var max = width > height ? (4/3)*height : width;
        document.getElementById('container').style.width = max + "px";

    }
    resize();
    window.addEventListener("resize", resize)
})();