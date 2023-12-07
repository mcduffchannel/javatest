const tetrisDem = 20;

const outlineIndexA = "0,0 2,0 2,2 0,2:0,0 1,0 1,4 0,4:0,0 4,0 4,1 0,1:0,1 1,1 1,0 3,0 3,1 2,1 2,2 0,2:0,0 1,0 1,1 2,1 2,3 1,3 1,2 0,2:0,0 2,0 2,1 3,1 3,2 1,2 1,1 0,1:1,0 2,0 2,2 1,2 1,3 0,3 0,1 1,1:";
const outlineIndexB = "0,0 1,0 1,2 2,2 2,3 0,3:0,0 3,0 3,1 1,1 1,2 0,2:0,0 2,0 2,3 1,3 1,1 0,1:0,1 2,1 2,0 3,0 3,2 0,2:1,0 2,0 2,3 0,3 0,2 1,2:0,0 1,0 1,1 3,1 3,2 0,2:0,0 2,0 2,1 1,1 1,3 0,3:0,0 3,0 3,2 2,2 2,1 0,1:";
const outlineIndexC = "0,0 3,0 3,1 2,1 2,2 1,2 1,1 0,1:1,0 2,0 2,3 1,3 1,2 0,2 0,1 1,1:1,0 2,0 2,1 3,1 3,2 0,2 0,1 1,1:0,0 1,0 1,1 2,1 2,2 1,2 1,3 0,3";
const outlineIndex = outlineIndexA + outlineIndexB + outlineIndexC;
const outlineList = outlineIndex.split(":");

const divIndexA = "0,1 2,1 1,0 1,1 1,1 1,2:0,1 1,1 0,2 1,2 0,3 1,3:1,0 1,1 2,0 2,1 3,0 3,1:1,1 1,2 1,1 2,1 2,0 2,1:0,1 1,1 1,1 1,2 1,2 2,2:1,0 1,1 1,1 2,1 2,1 2,2:0,2 1,2 1,2 1,1 1,1 2,1:0,1 1,1 0,2 1,2 1,2 1,3:";
const divIndexB = "0,1 1,1 1,1 1,0 2,0 2,1:1,0 1,1 1,1 2,1 1,2 2,2:1,1 1,2 2,1 2,2 2,1 3,1:1,1 2,1 1,2 2,2 1,2 1,3:0,1 1,1 1,0 1,1 2,0 2,1:1,0 1,1 0,1 1,1 0,2 1,2:1,0 1,1 2,0 2,1 2,1 3,1:1,0 1,1 1,1 2,1 2,0 2,1:";
const divIndexC = "1,1 1,2 1,1 2,1 1,2 2,2:1,1 2,1 1,1 1,2 2,1 2,2:0,1 1,1 1,1 1,2 0,2 1,2";
const divIndex = divIndexA + divIndexB + divIndexC;
const divList = divIndex.split(":");

const detailIndex = "M,0,0 L,2.5,2.5 L,17.5,2.5 L,20,0 M,17.5,2.5 L,17.5,17.5 L,20,20 M,17.5,17.5 L,2.5,17.5 L,0,20 M,2.5,17.5 L,2.5,2.5";
const detailList = detailIndex.split(" ");

const layoutIndex = "1,1 2,1 1,2 2,2:1,1 1,2 1,3 1,4:1,1 2,1 3,1 4,1:2,1 3,1 1,2 2,2:1,1 1,2 2,2 2,3:1,1 2,1 2,2 3,2:2,1 2,2 1,2 1,3:1,1 1,2 1,3 2,3:1,2 1,1 2,1 3,1:1,1 2,1 2,2 2,3:1,2 2,2 3,2 3,1:2,1 2,2 2,3 1,3:1,1 1,2 2,2 3,2:2,1 1,1 1,2 1,3:1,1 2,1 3,1 3,2:1,1 2,1 3,1 2,2:1,2 2,1 2,2 2,3:2,1 1,2 2,2 3,2:1,1 1,2 1,3 2,2";
const layoutList = layoutIndex.split(":");

const labelIndex = "A,C,D,B A,B,C,D A,B,C,D A,C,D,B A,B,C,D A,C,D,B A,B,C,D A,B,C,D A,B,C,D C,A,B,D D,A,B,C A,B,D,C A,B,C,D C,B,A,D A,B,C,D A,B,C,D B,A,C,D A,B,C,D A,B,D,C";
const labelList = labelIndex.split(" ");


function evalLayout(tetrisIndex) {
    var labelXY = [];
    var detailOutput = "";
    var outlineOutput = "";
    var dividerOuput = "";
    var demWH = [0, 0];

    var olCoords = outlineList[tetrisIndex].split(" ").map(pair => {
        const [x, y] = pair.split(",");
        return [parseFloat(x), parseFloat(y)];
    });

    for (let i = 0; i < olCoords.length; i++) {
        const [x , y] = olCoords[i];
        outlineOutput = outlineOutput + "L " + (tetrisDem * x) + "," + (tetrisDem * y) + " ";
    };

    outlineOutput = outlineOutput.replace("L", "M");
    outlineOutput = outlineOutput + "Z";

    var divCoords = divList[tetrisIndex].split(" ").map(pair => {
        const [x, y] = pair.split(",");
        return [parseFloat(x), parseFloat(y)];
    });

    for (let i = 0; i < divCoords.length; i++) {
        const [x , y] = divCoords[i];
        dividerOutput = dividerOutput + "M " + (tetrisDem * x) + "," + (tetrisDem * y) + " ";
        i++
        const [xx , yy] = divCoords[i];
        dividerOutput = dividerOutput + "L " + (tetrisDem * xx) + "," + (tetrisDem * yy) + " ";
    };
    
    dividerOutput = dividerOutput + "Z";

    console.log(dividerOutput)
    
    var coordinates = layoutList[tetrisIndex].split(" ").map(pair => {
        const [x, y] = pair.split(",");
        return [parseFloat(x) - 1, parseFloat(y) - 1];
    });

    for (let i = 0; i < coordinates.length; i++) {
        const [x , y] = coordinates[i];

        if (x > demWH[0]) {
            demWH[0] = x;
        }

        if (y > demWH[1]) {
            demWH[1] = y;
        }
        
        switch (labelList[tetrisIndex].split(",")[i]) {
            case "A":
                labelXY.push(((x * tetrisDem) + (tetrisDem / 2)) + " " + ((y * tetrisDem) + (tetrisDem / 2)));
                    break;
            case "B":
                labelXY.push(((x * tetrisDem) + (tetrisDem / 2)) + " " + ((y * tetrisDem) + (tetrisDem / 2)));
                    break;
            case "C":
                labelXY.push(((x * tetrisDem) + (tetrisDem / 2)) + " " + ((y * tetrisDem) + (tetrisDem / 2)));
                    break;
            case "D":
                labelXY.push(((x * tetrisDem) + (tetrisDem / 2)) + " " + ((y * tetrisDem) + (tetrisDem / 2)));
                    break;
        }
        
        for (let z = 0; z < detailList.length; z ++) {
            detailElement = detailList[z].split(",");            
            const [a, b, c] = detailElement;
            detailOutput = detailOutput + a + " " + ((tetrisDem * x) + Number(b)) + "," + ((tetrisDem * y) + Number(c)) + " ";            
        };
    };

    demWH[0] = (demWH[0] + 1) * tetrisDem
    demWH[1] = (demWH[1] + 1) * tetrisDem
    
    console.log(demWH);
    console.log(labelXY);
    console.log(detailOutput);
};


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

var tetrisType = "assets/Tetris-J.svg";
var rotPos = "A";

evalLayout(3);

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

