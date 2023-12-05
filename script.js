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

function updateText(template) {
    var fieldLocationVal = document.getElementById("fieldLocation").value;
    var fieldFNameVal = document.getElementById("fieldFName").value;
    var fieldLNameVal = document.getElementById("fieldLName").value;
    var fieldDateVal = document.getElementById("fieldDate").value;

    var result = template.replace('${txtLocation}', fieldLocationVal).replace('${txtFName}', fieldFNameVal).replace('${txtLName}', fieldLNameVal).replace('${txtDate}', fieldDateVal);
    var parser = new DOMParser();
    var doc = parser.parseFromString(result, "image/svg+xml");
    var svgElement = doc.documentElement;

    var svgContainer = document.getElementById("svgOutput");
    svgContainer.innerHTML = '';
    svgContainer.appendChild(svgElement);
    
    document.getElementById("output").innerText = result;
}

function downloadSVG() {
    var svgElement = document.getElementById("svgOutput").innerHTML;
    var blob = new Blob([svgElement], {type: "image/svg+xml"});
    var url = URL.createObjectURL(blob);

    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "tetris.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
}

document.getElementById("downloadBtn").addEventListener("click", downloadSVG);

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

fetchTemplate();
