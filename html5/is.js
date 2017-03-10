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

	Math.easeInOutExpo = function(t,b,c,d){
		t /= d/2;if(t < 1) return c/2 *Math.pow(2,10*(t-1))+b; t--; return c/2 *(-Math.pow(2,-10*t) + 2) + b;
	}
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
	function draw(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		var len = particles.length,curr_partitle = null;
		var cur_x,cur_y;
		var cur_time = 0,duration = 0,cur_delay = 0;

		for(var i = 0; i < len; i++){
			curr_partitle = particles[i];
			if(curr_partitle.count++ > curr_partitle.cur_delay){
				ctx.fillStyle = curr_partitle.fillStyle;
				cur_time = curr_partitle.cur_time;
				duration = curr_partitle.duration;
				cur_delay = curr_partitle.interval;

				if(particles[len - 1].duration < particles[len - 1].cur_time){
					cancelAnimationFrame(requestId);
					return;
				}else if(cur_time < duration){
					cur_x = Math.easeInOutQuad(cur_time,curr_partitle.x0,curr_partitle.x1 - curr_partitle.x0,duration);
					cur_y = Math.easeInOutQuad(cur_delay,curr_partitle.y0,curr_partitle.y1 - curr_partitle.y0,duration);
					canvas.ctx.fillRect(cur_x,cur_y,1,1);
					curr_partitle.cur_time++;
				}else{
					ctx.fillRect(curr_partitle.x1,curr_partitle.y1,1,1);
				}
			}
			requestId = requestAnimationFrame(draw);
			/*
			if(curr_partitle != null){
				ctx.fillStyle = curr_partitle.fillStyle;
				ctx.fillRect(curr_partitle.x,curr_partitle.y,1,1);				
			}*/
		}
	}	
	var particles = [];
	image.onload = function(){
		ctx.drawImage(image,x0,y0)

		calculate()
		draw()		

	}
	image.src = "./canvas-is/091716-30884.png"
	

})
