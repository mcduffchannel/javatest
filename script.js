public class GlobalData {
    public static detailPoints = "M,0,0 L,2.5,2.5 L,17.5,2.5 L,20,0 M,17.5,2.5 L,17.5,17.5 L,20,20 M,17.5,17.5 L,2.5,17.5 L,0,20 M,2.5,17.5 L,2.5,2.5";
    public static tetrisDem = 20;
    public layout = "1,1 2,1 1,2 2,2";

}

function fetchTemplate(loadType, rotPos) {
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
    result = result.replaceAll('${txtPos}', "0.7071 -0.7071 0.7071 0.7071");
    
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
    var fileName = "tetris.svg"
    downloadLink.href = url;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
}

function enableButtons(svgContent) {
    document.getElementById("rotABtn").disabled = false;
    document.getElementById("rotBBtn").disabled = false;
    document.getElementById("rotCBtn").disabled = false;
    document.getElementById("rotDBtn").disabled = false;
}

function expandPoints(points, dem) {
    
}

function evalLayout() {
    String[] xyLayouts = GlobalData.layout.split(" ");
    for (String coord : xyLayouts) {
        System.out.println(coord);
    }
}


var tetrisType = "assets/Tetris-J.svg";
var rotPos = "A";

evalLayout();

document.getElementById("downloadBtn").addEventListener("click", downloadSVG);
document.getElementById("oBtn").addEventListener("click", function() { 
    rotPos = "A"
    document.getElementById("rotABtn").disabled = true;
    document.getElementById("rotBBtn").disabled = true;
    document.getElementById("rotCBtn").disabled = true;
    document.getElementById("rotDBtn").disabled = true;
    tetrisType = "assets/Tetris-O.svg";
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("iBtn").addEventListener("click", function() {
    rotPos = "A"
    enableButtons();
    document.getElementById("rotCBtn").disabled = true;
    document.getElementById("rotDBtn").disabled = true;
    tetrisType = "assets/test.txt";
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("sBtn").addEventListener("click", function() {
    rotPos = "A"
    enableButtons();
    document.getElementById("rotCBtn").disabled = true;
    document.getElementById("rotDBtn").disabled = true;
    tetrisType = "assets/test.txt";
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("zBtn").addEventListener("click", function() {
    rotPos = "A"
    enableButtons();
    document.getElementById("rotCBtn").disabled = true;
    document.getElementById("rotDBtn").disabled = true;
    tetrisType = "assets/test.txt";
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("lBtn").addEventListener("click", function() {
    rotPos = "A"
    enableButtons();
    tetrisType = "assets/test.txt";
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("jBtn").addEventListener("click", function() {
    rotPos = "A"
    enableButtons();
    tetrisType = "assets/Tetris-J.svg";
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("tBtn").addEventListener("click", function() {
    rotPos = "A"
    enableButtons();
    tetrisType = "assets/test.txt";
    fetchTemplate(tetrisType, rotPos);
});

document.getElementById("rotABtn").addEventListener("click", function() { rotPos = "A"; fetchTemplate(tetrisType, rotPos); });
document.getElementById("rotBBtn").addEventListener("click", function() { rotPos = "B"; fetchTemplate(tetrisType, rotPos); });
document.getElementById("rotCBtn").addEventListener("click", function() { rotPos = "C"; fetchTemplate(tetrisType, rotPos); });
document.getElementById("rotDBtn").addEventListener("click", function() { rotPos = "D"; fetchTemplate(tetrisType, rotPos); });

document.getElementById("fieldLocation").addEventListener("input", () => fetchTemplate(tetrisType, rotPos));
document.getElementById("fieldFName").addEventListener("input", () => fetchTemplate(tetrisType, rotPos));
document.getElementById("fieldLName").addEventListener("input", () => fetchTemplate(tetrisType, rotPos));
document.getElementById("fieldDate").addEventListener("input", () => fetchTemplate(tetrisType, rotPos));

fetchTemplate(tetrisType, rotPos);
