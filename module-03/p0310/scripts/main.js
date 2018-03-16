 type = "text/javascript" >
     function createImage() {
         var canvas = document.getElementByled("my_canvas");
         var ctx = canvas.getContext("2d");
         ctx.fillStyle = "rgb(100,0,0)";
         ctx.fillRect(20, 10, 50, 70);
     }