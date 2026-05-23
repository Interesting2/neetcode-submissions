class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length != t.length) return false;

        // queue
        let queue = [];
        for (let i = 0; i < s.length; i ++) {
            const char = s[i];
            queue.push(char)
        }
        console.log(queue);
        for (let idx = 0; idx < t.length; idx ++) {
            const char = t[idx];
            const charExist = queue.includes(char);
            const charIndex = queue.indexOf(char)

            if (!charExist) return false;

            queue.splice(charIndex, 1);
        }
        return queue.length == 0;
    }
}
