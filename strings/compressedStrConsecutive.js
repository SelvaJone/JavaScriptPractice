function compressString(str) {

    let compressedStr = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {

        if (i < str.length - 1 && str[i] === str[i + 1]) {
            count++;
        } else {
            compressedStr = compressedStr + str[i] + count;
            count = 1;
        }
    }

    console.log("Input: " + str);
    console.log("Compressed string: " + compressedStr);
}

compressString("aaabbcca");