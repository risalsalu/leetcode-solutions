/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(abc) {
    if (!abc.length) return "";

    for (let i = 0; i < abc[0].length; i++) {
        let char = abc[0][i];

        for (let j = 1; j < abc.length; j++) {
            if (i >= abc[j].length || abc[j][i] !== char) {
                return abc[0].substring(0, i);
            }
        }
    }

    return abc[0];
}
