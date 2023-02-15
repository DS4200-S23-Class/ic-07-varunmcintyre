const data = [55000, 48000, 27000, 66000, 90000];

const FAME_HEIGHT = 100000;
const FRAME_WIDTH = 10000;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50}

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const FRAME = 
d3.select("#vis")
	.append("svg")
		.attr("height", FRAME_HEIGHT)
		.attr("width", FRAME_WIDTH)
		.attr("class", "frame");

const Y_SCALE = d3.scaleLinear()
					.domain([0, VIS_HEIGHT])
					.range([0, (MAX_Y + 10000)]);

// add point
FRAME.selectAll("points")
		.data(data)
		.enter()
		.append("circle")
			.attr("cy", (d) => {return (Y_SCALE(d) + MARGINS.bottom);})
			.attr("cx", 0 + MARGINS.left)
			.attr("r", 20)
			.attr("class", "point");

