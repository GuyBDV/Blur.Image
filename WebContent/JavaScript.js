/**
 * 
 */

var canvas = document.getElementById("can");
var fileinput = document.getElementById("up");
var image = null;
var imagecopy = null;
var bimage = null;
var min = null;
var max = null;
var ran = null;
var prange = 20;

function upload() {
	image = new SimpleImage(fileinput);
	image.drawTo(canvas);
	imagecopy = new SimpleImage(fileinput);
}

function GetRandom(min, max) {
	ran = Math.floor(Math.random() * (max - min + 1) + min);
	return ran;
}

function blr() {
	var w = image.getWidth(); 
	var h = image.getHeight(); 
	bimage = new SimpleImage(image.getWidth(), image.getHeight());
	for (var pixel of image.values()) {
		var rnum = GetRandom(1, 10);
		if (rnum <= 5) {
			var x = pixel.getX();
			var y = pixel.getY();
			bimage.setPixel(x, y, pixel);
		} else {
			var x1 = pixel.getX();
			var y1 = pixel.getY();
			var xr = GetRandom((x1-prange),(x1+prange));
			if (xr < 0) {
				xr = 0;
			}
			if (xr >= w) {
			  xr = w-1;
			}
			var yr = GetRandom((y1-prange),(y1+prange));
			if (yr < 0) {
				yr = 0;
			}
			if (yr >= h) {
				yr = h-1;
			}
			var bpixel = image.getPixel(xr,yr);
			bimage.setPixel(x1, y1, bpixel);
    }
  }
  bimage.drawTo(canvas);
}

function reset() {
	imagecopy.drawTo(canvas);
	image = new SimpleImage(fileinput);
}


