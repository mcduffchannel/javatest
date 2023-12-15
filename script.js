const tetrisDem = 30;

const outlineO = "0,0 2,0 2,2 0,2";
const outlineI = "0,0 1,0 1,4 0,4:0,0 4,0 4,1 0,1";
const outlineS = "0,1 1,1 1,0 3,0 3,1 2,1 2,2 0,2:0,0 1,0 1,1 2,1 2,3 1,3 1,2 0,2";
const outlineZ = "0,0 2,0 2,1 3,1 3,2 1,2 1,1 0,1:1,0 2,0 2,2 1,2 1,3 0,3 0,1 1,1";
const outlineL = "0,0 1,0 1,2 2,2 2,3 0,3:0,0 3,0 3,1 1,1 1,2 0,2:0,0 2,0 2,3 1,3 1,1 0,1:0,1 2,1 2,0 3,0 3,2 0,2";
const outlineJ = "1,0 2,0 2,3 0,3 0,2 1,2:0,0 1,0 1,1 3,1 3,2 0,2:0,0 2,0 2,1 1,1 1,3 0,3:0,0 3,0 3,2 2,2 2,1 0,1";
const outlineT = "0,0 3,0 3,1 2,1 2,2 1,2 1,1 0,1:1,0 2,0 2,3 1,3 1,2 0,2 0,1 1,1:1,0 2,0 2,1 3,1 3,2 0,2 0,1 1,1:0,0 1,0 1,1 2,1 2,2 1,2 1,3 0,3";
const outlineIndex = [outlineO, outlineI, outlineS, outlineZ, outlineL, outlineJ, outlineT].join(":");
const outlineList = outlineIndex.split(":");

const divO = "0,1 2,1 1,0 1,1 1,1 1,2";
const divI = "0,1 1,1 0,2 1,2 0,3 1,3:1,0 1,1 2,0 2,1 3,0 3,1";
const divS = "1,1 1,2 1,1 2,1 2,0 2,1:0,1 1,1 1,1 1,2 1,2 2,2";
const divZ = "1,0 1,1 1,1 2,1 2,1 2,2:0,2 1,2 1,2 1,1 1,1 2,1";
const divL = "0,1 1,1 0,2 1,2 1,2 1,3:0,1 1,1 1,1 1,0 2,0 2,1:1,0 1,1 1,1 2,1 1,2 2,2:1,1 1,2 2,1 2,2 2,1 3,1";
const divJ = "1,1 2,1 1,2 2,2 1,2 1,3:0,1 1,1 1,1 1,2 2,1 2,2:1,0 1,1 0,1 1,1 0,2 1,2:1,0 1,1 2,0 2,1 2,1 3,1";
const divT = "1,0 1,1 1,1 2,1 2,0 2,1:1,1 1,2 1,1 2,1 1,2 2,2:1,1 2,1 1,1 1,2 2,1 2,2:0,1 1,1 1,1 1,2 0,2 1,2";
const divIndex = [divO, divI, divS, divZ, divL, divJ, divT ].join(":");
const divList = divIndex.split(":");

const layoutO = "1,1 2,1 1,2 2,2";
const layoutI = "1,1 1,2 1,3 1,4:1,1 2,1 3,1 4,1";
const layoutS = "2,1 3,1 1,2 2,2:1,1 1,2 2,2 2,3";
const layoutZ = "1,1 2,1 2,2 3,2:2,1 2,2 1,2 1,3";
const layoutL = "1,1 1,2 1,3 2,3:1,2 1,1 2,1 3,1:1,1 2,1 2,2 2,3:1,2 2,2 3,2 3,1";
const layoutJ = "2,1 2,2 2,3 1,3:1,1 1,2 2,2 3,2:2,1 1,1 1,2 1,3:1,1 2,1 3,1 3,2";
const layoutT = "1,1 2,1 3,1 2,2:1,2 2,1 2,2 2,3:2,1 1,2 2,2 3,2:1,1 1,2 1,3 2,2";
const layoutIndex = [layoutO, layoutI, layoutS, layoutZ, layoutL, layoutJ, layoutT].join(":");
const layoutList = layoutIndex.split(":");

const labelO = "A,D,B,C";
const labelI = "A,B,C,D A,B,C,D";
const labelS = "A,D,B,C A,B,C,D";
const labelZ = "A,D,B,C A,C,B,D";
const labelL = "A,D,B,C D,A,B,C B,C,A,D B,C,D,A";
const labelJ = "A,D,C,B A,D,B,C C,B,A,D B,C,A,D";
const labelT = "A,B,C,D B,A,C,D A,B,C,D A,B,D,C";
const labelIndex = [labelO, labelI, labelS, labelZ, labelL, labelJ, labelT].join(" ");
const labelList = labelIndex.split(" ");

const detailIndex = "M,1,0.5 L,6,5 L,24,5 L,29,0.5 Z M,29.5,1 L,25,6 L,25,24 L,29.5,29 Z M,29,29.5 L,24,25 L,6,25 L,1,29.5 Z M,0.5,29 L,5,24 L,5,6 L,0.5,1 Z";
//const detailIndex = "M,1,0 L,6,5 L,24,5 L,29,0 Z M,30,1 L,25,6 L,25,24 L,30,29 Z M,29,30 L,24,25 L,6,25 L,1,30 Z M,0,29 L,5,24 L,5,6 L,0,1 Z";
//const detailIndex = "M,0,0 L,2.5,2.5 L,17.5,2.5 L,20,0 M,17.5,2.5 L,17.5,17.5 L,20,20 M,17.5,17.5 L,2.5,17.5 L,0,20 M,2.5,17.5 L,2.5,2.5";
const detailList = detailIndex.split(" ");

function evalLayout(tetrisIndex) {
    var labelXY = [" ", " ", " ", " "];
    var detailOutput = "";
    var outlineOutput = "";
    var dividerOutput = "";
    var demWH = [0, 0];

    if (outlineList[tetrisIndex] !== undefined) {
        var olCoords = outlineList[tetrisIndex].split(" ").map(pair => {
        const [x, y] = pair.split(",");
        return [parseFloat(x), parseFloat(y)];
        });
    } else {
        // ignore this, just me catching lazy code
        console.error("outlineList[tetrisIndex] is undefined");
    }

    for (let i = 0; i < olCoords.length; i++) {
        const [x , y] = olCoords[i];
        outlineOutput = [outlineOutput, "L ", (tetrisDem * x), ",", (tetrisDem * y), " "].join("");
    };

    outlineOutput = outlineOutput.replace("L", "M");
    outlineOutput = outlineOutput + "Z";

    var divCoords = divList[tetrisIndex].split(" ").map(pair => {
        const [x, y] = pair.split(",");
        return [parseFloat(x), parseFloat(y)];
    });

    for (let i = 0; i < divCoords.length; i++) {
        const [x , y] = divCoords[i];
        dividerOutput = [dividerOutput, "M ", (tetrisDem * x), ",", (tetrisDem * y), " "].join("");
        i++
        const [xx , yy] = divCoords[i];
        dividerOutput = [dividerOutput, "L ", (tetrisDem * xx), ",", (tetrisDem * yy), " "].join("");
    };
    
    dividerOutput = dividerOutput + "Z";

    var coordinates = layoutList[tetrisIndex].split(" ").map(pair => {
        const [x, y] = pair.split(",");
        return [parseFloat(x) - 1, parseFloat(y) - 1];
    });

    for (let i = 0; i < coordinates.length; i++) {
        const [x , y] = coordinates[i];

        if (x > demWH[0]) { demWH[0] = x; };
        if (y > demWH[1]) { demWH[1] = y; };

        var w = 0;
        
        switch (labelList[tetrisIndex].split(",")[i]) {
            case "A": w = 0; break;
            case "B": w = 1; break;
            case "C": w = 2; break;
            case "D": w = 3; break;
        }

        labelXY[w] = (((x * tetrisDem) + (tetrisDem / 2)) + " " + ((y * tetrisDem) + (tetrisDem / 2)));
        
        for (let z = 0; z < detailList.length; z ++) {
            detailElement = detailList[z].split(",");            
            const [a, b, c] = detailElement;
            
            switch (a) {
                case "Z":
                    detailOutput = detailOutput + " Z ";
                break;
                default:
                    detailOutput = [detailOutput, a, " ", ((tetrisDem * x) + Number(b)), ",", ((tetrisDem * y) + Number(c)), " "].join("");
            }
        };
    };

    demWH[0] = (demWH[0] + 1) * tetrisDem
    demWH[1] = (demWH[1] + 1) * tetrisDem
    
    return { demensions: demWH,
            outline: outlineOutput,
            dividers: dividerOutput,
            details: detailOutput,
            labels: labelXY
        };
};

function fetchTemplate(loadType, rotPos) {
    var xhr = new XMLHttpRequest();
    var tetrisTypeIndex = 0;
    var indexRef = loadType + rotPos

    switch (indexRef) {
        case "OA": tetrisTypeIndex = 0; break;
        case "IA": tetrisTypeIndex = 1; break;
        case "IB": tetrisTypeIndex = 2; break;
        case "SA": tetrisTypeIndex = 3; break;
        case "SB": tetrisTypeIndex = 4; break;
        case "ZA": tetrisTypeIndex = 5; break;
        case "ZB": tetrisTypeIndex = 6; break;
        case "LA": tetrisTypeIndex = 7; break;
        case "LB": tetrisTypeIndex = 8; break;
        case "LC": tetrisTypeIndex = 9; break;
        case "LD": tetrisTypeIndex = 10; break;
        case "JA": tetrisTypeIndex = 11; break;
        case "JB": tetrisTypeIndex = 12; break;
        case "JC": tetrisTypeIndex = 13; break;
        case "JD": tetrisTypeIndex = 14; break;
        case "TA": tetrisTypeIndex = 15; break;
        case "TB": tetrisTypeIndex = 16; break;
        case "TC": tetrisTypeIndex = 17; break;
        case "TD": tetrisTypeIndex = 18; break;
    };
    
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            updateText(this.responseText.trim(), tetrisTypeIndex);
        }
    };
    xhr.open("GET", "base.svg", true);
    xhr.send();
}

function updateText(template, tetrisTypeIndex) {
    const layoutResult = evalLayout(tetrisTypeIndex);
    
    var fieldLocationVal = document.getElementById("fieldLocation").value;
    var fieldFNameVal = document.getElementById("fieldFName").value;
    var fieldLNameVal = document.getElementById("fieldLName").value;
    var fieldDateVal = document.getElementById("fieldDate").value;
    var fieldSizeVal = document.getElementById("sizeSlider").value;

    console.log(fieldSizeVal);
    
    var result = template;
    
    result = result.replaceAll('${width}', layoutResult.demensions[0]);
    result = result.replaceAll('${height}', layoutResult.demensions[1]);
    result = result.replace('${outline}', layoutResult.outline);
    //result = result.replace('${dividers}', layoutResult.dividers);
    result = result.replace('${details}', layoutResult.details);
    
    result = result.replace('${xyLocation}', layoutResult.labels[0]);
    result = result.replace('${xyFName}', layoutResult.labels[1]);
    result = result.replace('${xyLName}', layoutResult.labels[2]);
    result = result.replace('${xyDate}', layoutResult.labels[3]);
    result = result.replace('${size}', fieldSizeVal);
    
    result = result.replace('${txtLocation}', fieldLocationVal.toUpperCase());
    result = result.replace('${txtFName}', fieldFNameVal.toUpperCase());
    result = result.replace('${txtLName}', fieldLNameVal.toUpperCase());
    result = result.replace('${txtDate}', fieldDateVal);
        
    var parser = new DOMParser();
    var doc = parser.parseFromString(result, "image/svg+xml");
    var svgElement = doc.documentElement;

    var svgContainer = document.getElementById("svgOutput");
    svgContainer.innerHTML = '';
    svgContainer.appendChild(svgElement);
    
    //document.getElementById("output").innerText = result;
}

function getFormattedDate() {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
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

function enableButtons() {
    document.getElementById("rotABtn").disabled = false;
    document.getElementById("rotBBtn").disabled = false;
    document.getElementById("rotCBtn").disabled = false;
    document.getElementById("rotDBtn").disabled = false;
}

function disableButtons() {
    document.getElementById("rotABtn").disabled = true;
    document.getElementById("rotBBtn").disabled = true;
    document.getElementById("rotCBtn").disabled = true;
    document.getElementById("rotDBtn").disabled = true;
}

function disableTwoButtons() {
    document.getElementById("rotCBtn").disabled = true;
    document.getElementById("rotDBtn").disabled = true;
}


disableButtons()
var tetrisType = "O";
var rotPos = "A";

document.getElementById("downloadBtn").addEventListener("click", downloadSVG);

document.getElementById("oBtn").addEventListener("click", function() { 
    rotPos = "A";
    tetrisType = "O";
    disableButtons();
    fetchTemplate(tetrisType, rotPos);
});

document.getElementById("iBtn").addEventListener("click", function() {
    rotPos = "A";
    tetrisType = "I";
    enableButtons();
    disableTwoButtons();
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("sBtn").addEventListener("click", function() {
    rotPos = "A";
    tetrisType = "S";
    enableButtons();
    disableTwoButtons();
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("zBtn").addEventListener("click", function() {
    rotPos = "A";
    tetrisType = "Z";
    enableButtons();
    disableTwoButtons();
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("lBtn").addEventListener("click", function() {
    rotPos = "A";
    tetrisType = "L";
    enableButtons();
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("jBtn").addEventListener("click", function() {
    rotPos = "A";
    tetrisType = "J";
    enableButtons();
    fetchTemplate(tetrisType, rotPos);
});
document.getElementById("tBtn").addEventListener("click", function() {
    rotPos = "A";
    tetrisType = "T";
    enableButtons();
    fetchTemplate(tetrisType, rotPos);
});

document.getElementById("rotABtn").addEventListener("click", function() { rotPos = "A"; fetchTemplate(tetrisType, rotPos); });
document.getElementById("rotBBtn").addEventListener("click", function() { rotPos = "B"; fetchTemplate(tetrisType, rotPos); });
document.getElementById("rotCBtn").addEventListener("click", function() { rotPos = "C"; fetchTemplate(tetrisType, rotPos); });
document.getElementById("rotDBtn").addEventListener("click", function() { rotPos = "D"; fetchTemplate(tetrisType, rotPos); });

document.getElementById("sizeSlider").addEventListener("input", () => fetchTemplate(tetrisType, rotPos));

document.getElementById("fieldLocation").addEventListener("input", () => fetchTemplate(tetrisType, rotPos));
document.getElementById("fieldFName").addEventListener("input", () => fetchTemplate(tetrisType, rotPos));
document.getElementById("fieldLName").addEventListener("input", () => fetchTemplate(tetrisType, rotPos));
document.getElementById("fieldDate").addEventListener("input", () => fetchTemplate(tetrisType, rotPos));
document.getElementById("fieldDate").disabled = true;
document.getElementById("fieldDate").value = getFormattedDate()

fetchTemplate(tetrisType, rotPos);


