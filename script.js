const container = document.querySelector("#container");
container.style.cssText = `

	display:flex;
	flex-direction:column;
	align-items:center;
	gap: 1.5rem;


`

const wrapper = document.createElement("div")



const header = document.createElement("h1");
header.textContent = "Etch-a-Sketch";
header.style.cssText = `

	font-size: 3rem;
	font-family: 'Comic Neue', 'Comic Sans MS', cursive, sans-serif;
	margin-bottom: 0px;

`

const resetButton = document.createElement("button");
resetButton.textContent = "New Grid";
resetButton.style.cssText = `

	padding: 10px;
	font-size:1.5rem;

`

container.appendChild(header);
container.appendChild(resetButton);
container.appendChild(wrapper);

function defaultGrid(size)
{
	
	wrapper.style.cssText = `
	display:flex;
	flex-wrap:wrap;
	width:400px;
	height:400px`;

	for (let i = 0; i < size * size ; i++)
	{
		const cell = document.createElement("div");
		cell.classList.add("grid-square");
		cell.style.cssText = `
			border:1px solid black; 
			flex: 0 0 calc(100% / ${size});
			height: calc(100% / ${size});
			box-sizing : border-box`;
		wrapper.appendChild(cell);
	}

	
}


defaultGrid(16);

resetButton.addEventListener('click', () => 
{
	wrapper.textContent = "";
	const dynamicSize = parseInt(prompt("Enter your desired grid size"));

	if (dynamicSize < 4 || dynamicSize > 100 )
	{
		alert("Enter a valid size between 4 and 100");
		return
	}

	defaultGrid(dynamicSize);

})

function randomRgb()
{
	const red = Math.floor(Math.random() * 256)
	const green = Math.floor(Math.random() * 256)
	const blue = Math.floor(Math.random() * 256)

	return {red, green, blue};
}

wrapper.addEventListener('mouseover', event => 
{

	const box = event.target;
	const {red, green, blue} = randomRgb(); 
	box.style.background = `rgb(${red}, ${green}, ${blue})`;
})
 
