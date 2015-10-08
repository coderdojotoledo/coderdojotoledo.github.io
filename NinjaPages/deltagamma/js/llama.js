
var canvas = document.getElementById('llama');

var image1 = new Image();
image1.src = 'http://static.comicvine.com/uploads/original/11115/111159183/3804809-0540362983-image.jpg';

var image2 = new Image();
image2.src = 'http://www.rw-designer.com/icon-view/6837.png'

var image3 = new Image();
image3.src = 'http://www.i2clipart.com/cliparts/a/9/4/e/clipart-yaoming-meme-a94e.png'

var enemies = [];

var Heros = [];

var scores = [];

var Enemy1 = function(x, y) {
	this.name = 'Troll';
	this.img = image2;
	this.x = x;
	this.y = y;
};

var Enemy2 = function(x,y) {
	this.name - "Yao";
	this.img = image3;
	this.x = x;
	this.y = y;
}

for(var i = 0; i < 20; i++) {
	var x = Math.floor((Math.random() * window.innerWidth) + 1);
	var y = Math.floor((Math.random() * window.innerHeight) + 1);
	enemies.push(new Enemy1(x, y));
	}
	
for(var i = -420; i < 421; i++) {
	if(i = 420) {
		var snd = new Audio("GETNOSCOPED.mp3");
		snd.play();
	}
}

var ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var x = 0;
var y = 0;

var Hero = document.addEventListener('keydown', function(event) {
	if(event.keyCode === 39) {
		x +=15;
		
	}
	if(event.keyCode === 37) {
		x -=15;
		
	}
	if(event.keyCode === 40) {
		y +=15;
		
	}
	if(event.keyCode === 38) {
		y -=15;
		
	}
});

	setInterval (function() {
		ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(image1, x,y);
		for(var i = 0; i < enemies.length; i++) {
			var enemy = enemies[i];
			ctx.drawImage(enemy1.img, enemy1.x, enemy1.y);
			enemy.x +=5;
			if(enemy.x > window.innerWidth) {
				enemy.x = 0 - enemy.img.width;
			}
		}
	}, 50);
	
	setInterval (function() {
	ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
	ctx.drawImage(image3, x,y);
	for(var i = 0; i < enemies.length; i++) {
		var enemy = enemies[i];
		ctx.drawImage(enemy2.img, enemy2.x, enemy2.y);
		enemy.x -=5;
		if(enemy.x > window.innerWidth) {
				enemy.x = 0 - enemy.img.width;
			}
		}
	}, 50);
