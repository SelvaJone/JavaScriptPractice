function isAnagramUsingMap(str1, str2) {

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let frequency = new Map();
    let isAnagram = true;

    for (let ch of str1) {

        if (frequency.has(ch)) {
            frequency.set(ch, frequency.get(ch) + 1);
        } else {
            frequency.set(ch, 1);
        }
    }

    for (let ch of str2) {

        if (frequency.has(ch)) {

            frequency.set(ch, frequency.get(ch) - 1);

            if (frequency.get(ch) < 0) {
                isAnagram = false;
                break;
            }

        } else {
            isAnagram = false;
            break;
        }
    }

    if (isAnagram) {
        console.log(str1 + " and " + str2 + " are anagrams");
    } else {
        console.log(str1 + " and " + str2 + " are not anagrams");
    }
}

isAnagramUsingMap("listen", "silent");
isAnagramUsingMap("hello", "world");
isAnagramUsingMap("triangle", "integral");
isAnagramUsingMap("aab", "aaa");