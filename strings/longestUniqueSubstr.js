function longestUniqueSubstring(str) {

    str = str.toLowerCase();

    let seen = new Set();
    let left = 0;
    let maxLength = 0;
    let longestSubstring = "";

    for (let right = 0; right < str.length; right++) {

        if (seen.has(str.charAt(right))) {

            while (seen.has(str.charAt(right))) {
                seen.delete(str.charAt(left));
                left++;
            }
        }

        seen.add(str.charAt(right));

        let currentLength = right - left + 1;

        console.log("Current substring: " + [...seen].join(""));
        console.log("Current length: " + currentLength);

        if (currentLength > maxLength) {
            maxLength = currentLength;
            longestSubstring = [...seen].join("");
        }
    }

    console.log("Longest substring: " + longestSubstring);
    console.log("Longest substring length: " + maxLength);
}

longestUniqueSubstring("abcabcbb");