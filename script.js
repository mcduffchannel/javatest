function fetchTemplate(loadType) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Once the text is fetched, call updateText with the template
            updateText(this.responseText.trim());
        }
    };
    xhr.open("GET", loadType, true);
    xhr.send();
}

function updateText(template) {
    var fieldLocationVal = document.getElementById("fieldLocation").value;
    var fieldFNameVal = document.getElementById("fieldFName").value;
    var fieldLNameVal = document.getElementById("fieldLName").value;
    var fieldDateVal = document.getElementById("fieldDate").value;

    var result = template;
    result = result.replace('${txtLocation}', fieldLocationVal);
    result = result.replace('${txtFName}', fieldFNameVal);
    result = result.replace('${txtLName}', fieldLNameVal);
    result = result.replace('${txtDate}', fieldDateVal);
    
    var parser = new DOMParser();
    var doc = parser.parseFromString(result, "image/svg+xml");
    var svgElement = doc.documentElement;

    var svgContainer = document.getElementById("svgOutput");
    svgContainer.innerHTML = '';
    svgContainer.appendChild(svgElement);
    
    document.getElementById("output").innerText = result;
}

function updateSelectedType() {
    tetrisType = document.getElementById("selection").value;
}

function downloadSVG() {
    var svgElement = document.getElementById("svgOutput").innerHTML;
    var blob = new Blob([svgElement], {type: "image/svg+xml"});
    var url = URL.createObjectURL(blob);

    var downloadLink = document.createElement("a");
    var fileName = fieldFName + "-" + fieldLName + "_tetris.svg"
    downloadLink.href = url;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
}

var tetrisType = "assets/test.txt";

document.getElementById("downloadBtn").addEventListener("click", downloadSVG);
document.getElementById("oBtn").addEventListener("click", function() { tetrisType = "assets/test.txt"; fetchTemplate(tetrisType); });
document.getElementById("iBtn").addEventListener("click", function() { tetrisType = "assets/test.txt"; fetchTemplate(tetrisType); });
document.getElementById("sBtn").addEventListener("click", function() { tetrisType = "assets/test.txt"; fetchTemplate(tetrisType); });
document.getElementById("zBtn").addEventListener("click", function() { tetrisType = "assets/test.txt"; fetchTemplate(tetrisType); });
document.getElementById("lBtn").addEventListener("click", function() { tetrisType = "assets/test.txt"; fetchTemplate(tetrisType); });
document.getElementById("jBtn").addEventListener("click", function() { tetrisType = "assets/test.txt"; fetchTemplate(tetrisType); });
document.getElementById("tBtn").addEventListener("click", function() { tetrisType = "assets/test.txt"; fetchTemplate(tetrisType); });

document.getElementById("fieldLocation").addEventListener("input", () => fetchTemplate(tetrisType));
document.getElementById("fieldFName").addEventListener("input", () => fetchTemplate(tetrisType));
document.getElementById("fieldLName").addEventListener("input", () => fetchTemplate(tetrisType));
document.getElementById("fieldDate").addEventListener("input", () => fetchTemplate(tetrisType));

fetchTemplate(tetrisType);
