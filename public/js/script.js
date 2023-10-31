// Define a mapping of secret words to configurations
const configMap = {
    "apple": "SecretConfig1",
    "banana": "SecretConfig2",
    "cherry": "SecretConfig3",
    "date": "SecretConfig4",
    "watermelon": "SecretConfig5"
};

// Define encryption and decryption methods for each configuration
const encryptionMethods = {
    "SecretConfig1": {
        encrypt: function (text) {
            return text.split("").reverse().join("");
        },
        decrypt: function (text) {
            return text.split("").reverse().join("");
        }
    },
    "SecretConfig2": {
        encrypt: function (text) {
            return text
                .split("")
                .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
                .join("");
        },
        decrypt: function (text) {
            return text
                .split("")
                .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
                .join("");
        }
    },
    "SecretConfig3": {
        encrypt: function (text) {
            return text.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join("");
        },
        decrypt: function (text) {
            return text.split("").map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join("");
        }
    },
    "SecretConfig4": {
        encrypt: function (text) {
            return text
                .split("")
                .map(char => String.fromCharCode(char.charCodeAt(0) + 5))
                .join("");
        },
        decrypt: function (text) {
            return text
                .split("")
                .map(char => String.fromCharCode(char.charCodeAt(0) - 5))
                .join("");
        }
    },
    "SecretConfig5": {
        encrypt: function (text) {
            return text.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 2)).join("");
        },
        decrypt: function (text) {
            return text.split("").map(char => String.fromCharCode(char.charCodeAt(0) - 2)).join("");
        }
    }
};

function encrypt() {
    const text = document.getElementById("inputText").value;
    const secretWord = document.getElementById("configInput").value;
    const selectedConfig = configMap[secretWord] || "DefaultConfig";
    let result = encryptionMethods[selectedConfig].encrypt(text);

    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
    resultElement.style.display = "block";
}

function decrypt() {
    const text = document.getElementById("inputText").value;
    const secretWord = document.getElementById("configInput").value;
    const selectedConfig = configMap[secretWord] || "DefaultConfig";
    let result = encryptionMethods[selectedConfig].decrypt(text);

    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
    resultElement.style.display = "block";
}

// Add event listener to the form to listen for "submit" event
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Check which button was clicked
    const encryptButton = document.querySelector('.btn-primary');
    const decryptButton = document.querySelector('.btn-danger');

    if (document.activeElement === encryptButton) {
        encrypt(); // Call the encrypt function
    } else if (document.activeElement === decryptButton) {
        decrypt(); // Call the decrypt function
    }
});