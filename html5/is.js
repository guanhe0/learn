$(document).ready(function(){
	var canvas = document.getElementById('myCanvas');
	var ctx = null;
	if(canvas.getContext){
		ctx = canvas.getContext('2d');
	}	
	var image = new Image();
	image.onload = function(){
		ctx.drawImage(image,0,0);
	}	
	image.src = "./canvas-is/091716-30884.png";
	image.id = "myImage"
	var particles = [];
//	len = $("#myImage").attr("id");
//	alert(len)
	hgt = image.height;
	wid = image.width;

//	alert("height = " + hgt + " wid = " + wid);
	function calculate(){
		var imgData = ctx.getImageData(0,0,hgt,wid);
		var len = imgData.data.length;
		var cols = 100,
			rows = 100;
		var s_width = parseInt(wid/cols),
			s_height = parseInt(hgt/rows);
		var pos = 0;
		var par_x,par_y;
		var data = imgData.data;
		for(var i = 1; i <= cols; i++){
			for(var j = 1; j <= rows; j++){
				pos = [(j*s_height-1)*wid + (i*s_width - 1)]*4;		
				console.log("hello")
				if(data[pos] > 250){
					var particle = {
						x:image.x + i*s_width + (Math.random() - 0.5)*20,
						y:image.y + j*s_height + (Math.random() - 0.5)*20,
						fillStyle:'#006eff'
					}					
					particles.push(particle);
					num = particles.length;
				}
			}
		}
	}
	calculate()
	lh = particles;
	function draw(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		var len = particles.length,curr_partitle = null;
		for(var i = 0; i < len; i++){
			curr_partitle = particles[i];
			if(curr_partitle != null){
				ctx.fillStyle = curr_partitle.fillStyle;
				ctx.fillRect(curr_partitle.x,curr_partitle.y,1,1);				
			}
		}
	}
	draw()
})
