class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const store = new Set();

        return nums.some((num) => {
            if (store.has(num)) {
                return true;
            } 
            store.add(num);
            return false;
        });
    }
}
