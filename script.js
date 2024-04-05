
function insert_Row() {
    let table=document.querySelector("#sampleTable");
	let td1=document.createElement("td");
	let td2=document.createElement("td");
	td1.textContent='New Cell1';
	td2.textContent='New Cell2';
	let tr=table.insertRow(0);
	tr.appendChild(td1);
	tr.appendChild(td2);
}

