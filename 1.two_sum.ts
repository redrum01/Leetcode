//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
function twoSum(nums: number[], target: number): number[] {
    const map1 = new Map <number,number>();
    for (let i=0;i<nums.length;i++)
    {
        let num2 = target - nums[i];
        if (map1.has(num2))
            return [map1.get(num2)!,i]
        else
        map1.set(nums[i], i);
    }
    return [];
};