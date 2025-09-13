const container = document.querySelector("#container");
container.style.cssText = `

	display:flex;
	flex-direction:column;
	align-items:center;
	gap: 1.5rem;

`

const wrapper = document.createElement("div")
wrapper.classList.add("wrapper")


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
			border:1px solid green; 
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
	defaultGrid(dynamicSize);

})

