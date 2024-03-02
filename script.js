
function onFormSubmit(){

}

//read form data

function readFormData() {
    var formData = {};
    formData["buildingNumber"] = document.getElementById("buildingNumber").value;
    formData["buildingName"] = document.getElementById("buildingName").value;
    formData["city"] = document.getElementById("city").value;
    formData["landmark"] = document.getElementById("landmark").value;
    formData["pinCode"] = document.getElementById("pinCode").value;
    return formData;
}