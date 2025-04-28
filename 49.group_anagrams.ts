//Given an array of strings strs, group the anagrams together. You can return the answer in any order.
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr)!.push(str);
    }
    return Array.from(map.values());
}
