document.getElementById('generate-button').addEventListener('click', function() {
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let allowedChars = '';
    let generatedPassword = '';
    
    // initial prompt
    let passwordLength = prompt("How long do you want your password to be? (8-128 characters)");
    passwordLength = parseInt(passwordLength);

    // validate password length, check if it's not a number and make sure it fits the proper password length
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Password length must be between 8 and 128 characters.");
        return;
    }

    // criteria prompts
    const includeLowercase = confirm("Include lowercase letters?");
    const includeUppercase = confirm("Include uppercase letters?");
    const includeNumeric = confirm("Include numeric characters?");
    const includeSpecialChars = confirm("Include special characters?");

    // make sure a character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
        alert("At least one character type must be selected.");
        return;
    }

    // combine strings together so I can just grab them from one string
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumeric) allowedChars += numericChars;
    if (includeSpecialChars) allowedChars += specialChars;
    
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPassword += allowedChars[randomIndex];
    }

    // update the password display with the password
    document.querySelector('#display').textContent = generatedPassword;
});
