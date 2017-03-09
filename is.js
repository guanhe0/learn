$(document).ready(function(){
	var canvas = document.getElementById('myCanvas');
	var ctx = null;
	var wid = 800,height = 400;
	var x0 = 10,y0 = 10;
	if(canvas.getContext){
		ctx = canvas.getContext('2d');
	//	ctx.fillStyle = 'green'
	//	ctx.fillRect(x0,y0,wid,height)
	}
	var image = new Image();
	image.onload = function(){
		ctx.drawImage(image,x0,y0)


		function calculate(){		
			var imgData = ctx.getImageData(x0,y0,image.width-1,image.height-1);
			console.log(typeof imgData)
			console.log('image_widt == ' + image.width + 'image height == ' + image.height)
			var cols = 100,
				rows = 100;
			var s_width = parseInt(image.width/cols),
				s_height = parseInt(image.height/rows);
			console.log('s_width' + s_width);
			console.log('s_height' + s_height);
			var pos = 0;
			
			var data = imgData.data;
			
			
			
		
			var len = data.length;
			for(var k = 0; k < 20; k++){
		//		console.log('[ ' + k  + '] == ' + data[k]);
			}

			console.log('len = ' + len);
			for(var i = 1; i <= rows; i++){
				for(var j = 1; j <= cols; j++){				
					pos = [(i*s_height-1)*wid + (j*s_width - 1)]*4+3;						
				//	console.log('pos == ' + pos);
					if(pos < len && pos > -1 ){
					//	console.log('[ ' + pos + ' ] == ' + data[pos]);		
						if(parseInt(data[pos]) > 200)
						{	
							var xr = data[pos-2].toString(16);
							var xg = data[pos-1].toString(16);
							var xb = data[pos].toString(16);
						//	console.log('xr = ' + xr + " xg = " + xg + " xb = " + xb)
						//	console.log('xr-len = ' + xr.length)
						//	console.log('xg-len = ' + xg.length)
						//	console.log('xb-len = ' + xb.length)
							if(xr.length < 2){
								xr = '0' + xr
							}
							if(xg.length < 2){
								xg = '0' + xg
							}
							if(xb.length < 2){
								xb = '0' + xb
							}
							var fill = '#' + xr + xg + xb;

							var particle = {
							x: i*s_width + (Math.random() - 0.5)*20,
							y: j*s_height + (Math.random() - 0.5)*20,
							fillStyle:fill
							}					

							particles.push(particle);	
						}			
					}
				}
			}
			
		}
		calculate()
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

	}
	image.src = "./canvas-is/091716-30884.png"
	var particles = [];

})
