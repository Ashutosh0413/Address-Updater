let selectedRow = null;
function onFormSubmit(e) {
    e.preventDefault();
    clearErrors();

    let formData = readFormData();
    if (validateFormData(formData)) {
        if (selectedRow === null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        resetForm();
    } else {
        displayError('Please correct the form errors before submitting.');
    }
    return false;
}

function validateFormData(formData) {
    let isValid = true;
    // Validate pinCode using a regular expression for a 6-digit code
    if (!formData.pinCode.match(/^\d{6}$/)) {
        displayError('Please enter a valid 6-digit Pin Code.');
        isValid = false;
    }

    return isValid;
}

function displayError(message) {
    document.getElementById('error-message').textContent = message;
}

function clearErrors() {
    document.getElementById('error-message').textContent = '';
}

//read form data

function readFormData() {
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
    cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`; 
    //Prompt the edit and delete buttons
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("buildingNumber").value = selectedRow.cells[0].innerHTML;
    document.getElementById("buildingName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("city").value = selectedRow.cells[2].innerHTML;
    document.getElementById("landmark").value = selectedRow.cells[3].innerHTML;
    document.getElementById("pinCode").value = selectedRow.cells[4].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.buildingNumber;
    selectedRow.cells[1].innerHTML = formData.buildingName;
    selectedRow.cells[2].innerHTML = formData.city;
    selectedRow.cells[3].innerHTML = formData.landmark;
    selectedRow.cells[4].innerHTML = formData.pinCode;
    let fullAddress = formData.buildingNumber + ' ' + formData.buildingName + ', ' + 'near ' + formData.landmark + formData.city  + '-' + formData.pinCode;
    selectedRow.cells[5].innerHTML = fullAddress;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("buildingNumber").value = '';
    document.getElementById("buildingName").value = '';
    document.getElementById("city").value = '';
    document.getElementById("landmark").value = '';
    document.getElementById("pinCode").value = '';
    selectedRow = null;
}