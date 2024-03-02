let selectedRow = null;
function onFormSubmit(e){
    e.preventDefault;
    let formData = readFormData();
    if(selectedRow===null){
        insertNewRecord(formData);
    }
    else{

    }
    return false; 

}

//read form data

function readFormData() {\
    //store all the user submitted details as values in an object so it is easier to use them to populate the cells
    let formData = {};
    formData["buildingNumber"] = document.getElementById("buildingNumber").value;
    formData["buildingName"] = document.getElementById("buildingName").value;
    formData["city"] = document.getElementById("city").value;
    formData["landmark"] = document.getElementById("landmark").value;
    formData["pinCode"] = document.getElementById("pinCode").value;
    return formData;
}

//insert data into the table cells
function insertNewRecord(data) {
    let table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.buildingNumber;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.buildingName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.city;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.landmark;
    cell5 = newRow.insertCell(4);
	    cell5.innerHTML = data.pinCode;
    //reading the full address of the user
    let fullAddress = data.buildingNumber + ' ' + data.buildingName + ', ' + 'near ' + data.landmark + data.city  + '-' + data.pinCode;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = fullAddress;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button>Edit</button> <button ">Delete</button>`; //Prompt the edit and delete buttons
}