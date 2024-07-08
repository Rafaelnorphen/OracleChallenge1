document.getElementById('encodeButton').addEventListener('click', encodeText);
document.getElementById('decodeButton').addEventListener('click', decodeText);
document.getElementById('copyButton').addEventListener('click', copyText);

function encodeText() {
    let inputText = document.getElementById("inputText").value;
    let encodedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encodedText;
}

function decodeText() {
    let inputText = document.getElementById("outputText").value;
    let decodedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decodedText;
}

function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
