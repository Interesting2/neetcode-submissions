class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const store = new Set();

        for (const num of nums) {
            if (store.has(num)) return true;
            store.add(num);
        }
        return false;
    }
}
