function Encrypt() {
  let palinText = document.getElementById("plainText").value;
  let key = Number(document.getElementById("key").value);
  let encryptText = "";

  for (let i = 0; i < palinText.length; i++) {
    let encryptValue = (palinText[i].charCodeAt(0) - 65 + key) % 26;
    let encryptLetter = String.fromCharCode(encryptValue + 65);
    encryptText += encryptLetter;
  }
  document.getElementById("decryptText").innerHTML = encryptText;
}

function Decrypt() {
  let palinText = document.getElementById("plainText").value;
  let key = Number(document.getElementById("key").value);
  let encryptText = "";

  for (let i = 0; i < palinText.length; i++) {
    let encryptValue = (palinText[i].charCodeAt(0) - 65 - key) % 26;
    let encryptLetter = String.fromCharCode(encryptValue + 65);
    encryptText += encryptLetter;
  }
  document.getElementById("decryptText").innerHTML = encryptText;
}

function resetForm() {
  document.getElementById("plainText").value = "";
  document.getElementById("decryptText").value = "";
  document.getElementById("key").value = "";
}
