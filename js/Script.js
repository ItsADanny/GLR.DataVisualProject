alert("binnen");

        var canvasObject = document.getElementById("mijnCanvas");
        var contextObject = canvasObject.getContext("2d");
        
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           var myObj = JSON.parse(this.responseText);
           draw(myObj);
            }
        };
        xmlhttp.open("GET", "/json/Script.txt", true);
        xmlhttp.send();

        
      function draw(myObj){

         // De kubus begint 80 op de x as, 80 op de y as (het bovenste linker puntje), en hij is 300 breed en hoog.
        contextObject.beginPath();
        contextObject.arc(canvasObject.width / 4 * 1, canvasObject.height / 2, myObj.objecten[0].grootte, 0, 2 * Math.PI);
        contextObject.fillStyle = "#FF0000";
        contextObject.fill();
        contextObject.stroke();
        
        contextObject.fillStyle = "#00FF00";
        contextObject.beginPath();
        contextObject.arc(canvasObject.width / 4 * 2, canvasObject.height / 2, myObj.objecten[1].grootte, 0, 2 * Math.PI);
        contextObject.fill();
        contextObject.stroke();

        contextObject.fillStyle = "#0000FF";
        contextObject.beginPath();
        contextObject.arc(canvasObject.width / 4 * 3, canvasObject.height / 2, myObj.objecten[2].grootte, 0, 2 * Math.PI);
        contextObject.fill();
        contextObject.stroke();

        

      }