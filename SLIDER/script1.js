var left = 0;
var timer;

function AutoSlider(){
     timer = setTimeout(function (){
        var polosa = document.getElementById("polosa");
        left = left -128;
        if(left < -512) {
            left = 0;
            clearTimeout(timer);
        }  
       polosa.style.left = left + "px";
       AutoSlider();
    },1000);
}
AutoSlider();