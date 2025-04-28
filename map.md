const map: Map<string, string[]>; requires initialization later (i.e. let map2: Map<string, string[]> = [];)), 
while const map = new Map<string, string[]>(); immediately creates the map.

Method | Description
map.set(key, value) | Adds or updates the key-value pair in the map.
map.has(key) | Checks if the key exists in the map.
map.get(key) | Gets the value associated with the key.
map.delete(key) | Deletes the key-value pair from the map.
map.size | Returns the number of key-value pairs in the map.
map.clear() | Clears all key-value pairs from the map.
map.entries() | Returns an iterator over [key, value] pairs.
map.keys() | Returns an iterator over the keys of the map.
map.values() | Returns an iterator over the values of the map.