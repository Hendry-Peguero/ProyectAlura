function processText() {
    let inputText = document.getElementById('inputText').value.trim().toLowerCase();
    let action = document.getElementById('actionSelect').value;
    let outputText = '';

    if (action === 'encrypt') {
        outputText = encryptText(inputText);
    } else if (action === 'decrypt') {
        outputText = decryptText(inputText);
    }

    document.getElementById('outputText').value = outputText;
}
//
function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('¡Texto copiado!');
}
