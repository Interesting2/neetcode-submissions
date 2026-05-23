class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        const freq = {};
        for (const char of s) {
            freq[char] = (freq[char] || 0) + 1;
        }
        for (const char of t) {
            if (!freq[char]) return false;
            freq[char]--;
        }
        return true;

        if (s.length != t.length) return false;

        // queue
        // O(n)
        let queue = [];
        for (let i = 0; i < s.length; i ++) {
            const char = s[i];
            queue.push(char)
        }
        console.log(queue);
        // O(n) * O(n)
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
