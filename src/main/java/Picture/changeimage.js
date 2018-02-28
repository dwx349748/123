setInterval("loadImage()",3000);//启动定时器
var images =['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
var i = 0;
function loadImage()
{
    i++;
    if(i==5)
    {
        i=0;
    }
    var oImage = document.getElementById("image");
    var oLabel = document.getElementById("info");
    oImage.src ='../image/'+images[i];
    oLabel.innerText = images[i];
};
