function createFunctionalHashTable() {
    let hashTable = {};

    function set(key, value) {
        hashTable[key] = value;
    }

    function remove(key) {
        delete hashTable[key]
    }

    function getValue() {
        console.log(hashTable);
    }

    set('key1', 2);
    set('key2', 3);
    remove('key2');
    set('key1', 4);
    getValue();

}

createFunctionalHashTable();