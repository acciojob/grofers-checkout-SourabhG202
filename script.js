const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements=document.querySelectorAll(".price");
	let total = 0;
	priceElements.forEach(price =>{
		total+=parseFloat(price.textContent);
	});
	const table = document.querySelector("table");
	const newRow = document.createElement("tr");
	const totalcell = document.querySelector("td");
	totalcell.colSpan = 2;
	totalcell.textContent = `Total Price: ₹${total}`;
	totalcell.style.fontWeight = "bold";

	newRow.appendChild(totalcell);
	table.appendChild(newRow);

	getSumBtn.disabled = true;


  
};

getSumBtn.addEventListener("click", getSum);

