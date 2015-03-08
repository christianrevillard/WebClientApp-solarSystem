var SolarSystemController = function(drawPlanetInContext)
{
	this.isRunning = true; 
	this.planets = []; 
	this.pixelToMeter = 1e9;
	this.drawStuff = drawPlanetInContext;
};

SolarSystemController.prototype.remove = function(planet)
{
	this.planets = this.planets.filter(function(p){ return p !== planet;});
};

SolarSystemController.prototype.getCanvasXYFromClientXY  = function(canvas, clientXY)
{
	var boundings = canvas.getBoundingClientRect();
	var xy = { 
		x: (clientXY.clientX-boundings.left) * canvas.width/boundings.width - canvas.width/2,
		y: (clientXY.clientY-boundings.top) * canvas.height/boundings.height - canvas.height/2};
	return xy;
};


SolarSystemController.G = 6.673e-11;
