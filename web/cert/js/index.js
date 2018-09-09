// Template
var template = document.getElementById('show-template').innerHTML;


// Compile and render
var compiled = Template7(template).compile();
var compiledRendered = compiled(cert);

// Insert rendered template
document.getElementById('content-wrap').innerHTML = compiledRendered;

//横屏
/*var evt = "onorientationchange" in window ? "orientationchange" : "resize";
      
window.addEventListener(evt, function() {
console.log(evt);
	var width = document.documentElement.clientWidth;
	var height =  document.documentElement.clientHeight;
	$print =  document.getElementById('container');
	if( width > height ){

		$print.style.width=width;
		$print.style.height=height;
		$print.style.top=0;
		$print.style.left=0;
		$print.style.transform='none';
		$print.style.transformOrigin='50% 50%';
	}
	else{
		$print.style.width=height;
		$print.style.height=width;
		$print.style.top=(height-width)/2 ;
		$print.style.left=0-(height-width)/2 ;
		$print.style.transform='rotate(90deg)';
		$print.style.transformOrigin='50% 50%';
	}

}, false);
*/

//判断手机横竖屏状态：  
   /* window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {  
            if (window.orientation === 180 || window.orientation === 0) {   
               alert('竖屏状态！');  
            }   
            if (window.orientation === 90 || window.orientation === -90 ){   
                alert('横屏状态！');  
            }    
        }, false); */


/*(function () {   
    function resize() {
        var body = document.getElementsByTagName('body')[0];
        var html = document.getElementsByTagName('html')[0];
        var width = html.clientWidth;
        var height =  html.clientHeight;
        var cHeight = document.getElementById('container').scrollHeight;
        console.log("cHeight",cHeight)
        var max = width > height ? width : height;
        var min = width > height ? height : cHeight;
        body.style.width = max + "px";
        body.style.height = min + "px";

    }
    resize();
    window.addEventListener("resize", resize)
})();*/