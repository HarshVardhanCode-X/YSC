import CryptoJS from 'crypto-js';

const secretKey = import.meta.env.VITE_APP_NAME;

function encryptData(data) {
    return CryptoJS.AES
        .encrypt(typeof data === 'string'
            ? data
            : JSON.stringify(data), secretKey)
        .toString();
};

function decryptData(encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    try {
        return JSON.parse(decryptedText);
    } catch (e) {
        return decryptedText;
    }
};

export function getLocalData(name) {
    try {
        let storedData = null;
        storedData = localStorage.getItem(name);

        if (!storedData) return null;

        return decryptData(storedData);
    } catch (e) {
        console.error("Decryption error:", e);
        return null;
    }
};

export function storeLocalData(name, data) {
    try {
        const encryptedData = encryptData(data);
        localStorage.setItem(name, encryptedData);
    } catch (e) {
        alert('Your web browser does not support storing settings locally. Some settings may not save or some features may not work properly for you.');
        console.error("Encryption error:", e);
    }
};
