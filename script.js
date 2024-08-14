document.getElementById("encryptButton").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = encrypt(inputText);
    document.getElementById("outputText").textContent = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;
    let decryptedText = decrypt(inputText);
    document.getElementById("outputText").textContent = decryptedText;
});

document.getElementById("copyButton").addEventListener("click", function() {
    let outputText = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(outputText).then(function() {
        alert("Texto copiado al portapapeles");
    });
});

function encrypt(text) {
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}
