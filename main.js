var i=0;
function update(){
    var pic=["https://thumbs.dreamstime.com/b/father-portrait-handsome-man-shirt-jeans-sweater-wearing-glasses-cartoon-character-standing-dad-vector-illustration-86364395.jpg"

,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtMPNLRceY2AyJ_gzq7SvJ9ohMyKtRXrOn5EmQPYHohtt8EkKF3NJlS8ByKtPeqDYlt8&usqp=CAU"
,"https://wallpapercave.com/wp/wp6558151.jpg"
,"https://st.depositphotos.com/1767252/1368/v/950/depositphotos_13682809-stock-illustration-girl-sitting-lonely-in-the.jpg"
,"https://cdnb.artstation.com/p/assets/covers/images/009/183/071/medium/vineet-tiwari-alone-boy.jpg?1517559141"];
var names=["father","mother","brother","sister","me"];

if(i>4){i=0;}
var updateimg= pic[i];
var updatename= names[i];
document.getElementById("Img1").src=updateimg;
document.getElementById("name").innerHTML=updatename;
i++
}