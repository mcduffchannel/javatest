//function updateText() {
//    var fieldAValue = document.getElementById("fieldA").value;
//    var fieldBValue = document.getElementById("fieldB").value;
//    document.getElementById("output").innerText = `HELLO ${fieldAValue} YOU ARE ${fieldBValue}`;
//}


// Function to fetch the template from the text file
function fetchTemplate() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Once the text is fetched, call updateText with the template
            updateText(this.responseText.trim());
        }
    };
    xhr.open("GET", "assets/test.txt", true);
    xhr.send();
}

// Function to update the text based on input fields
function updateText(template) {
    var fieldLocationVal = document.getElementById("fieldLocation").value;
    var fieldFNameVal = document.getElementById("fieldFName").value;
    var fieldLNameVal = document.getElementById("fieldLName").value;
    var fieldDateVal = document.getElementById("fieldDate").value;

    // Replace placeholders with actual values
    var result = template.replace('${txtLocation}', fieldLocationVal).replace('${txtFName}', fieldFNameVal).replace('${txtLName}', fieldLNameVal).replace('${txtDate}', fieldDateVal);
    document.getElementById("output").innerText = result;
}

// Add event listeners to the input fields
document.getElementById("fieldLocation").addEventListener("input", function() {
    fetchTemplate();
});
document.getElementById("fieldFName").addEventListener("input", function() {
    fetchTemplate();
});
document.getElementById("fieldLName").addEventListener("input", function() {
    fetchTemplate();
});
document.getElementById("fieldDate").addEventListener("input", function() {
    fetchTemplate();
});

// Initial call to fetch the template
fetchTemplate();
