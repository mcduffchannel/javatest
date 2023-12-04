function updateText() {
    var fieldAValue = document.getElementById("fieldA").value;
    var fieldBValue = document.getElementById("fieldB").value;
    document.getElementById("output").innerText = `HELLO ${fieldAValue} YOU ARE ${fieldBValue}`;
}
