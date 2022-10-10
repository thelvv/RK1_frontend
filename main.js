/**
 * Функция, возвращающая методы для оперирования хеш-таблицей и создающая лексическое окружение для них
 * @return {Object} объект, объединяющеий методы для оперирования хеш-таблицей
 */
function createFunctionalHashTable() {
    // Создание объекта хеш-таблицы внутри исходной функции
    let hashTable = {};

    // Создание функций для оперирования хеш-таблицей
    function set(key, value) {
        hashTable[key] = value;
    }

    function remove(key) {
        delete hashTable[key]
    }

    function getValue() {
        console.log(hashTable);
    }

    return {set, remove, getValue};
}

// создание исходного объекта, к лексическому окружению которого будут привязяны возвращаемые методы
hashTable = createFunctionalHashTable();

/**
 * Использование функий изменения и вывода содержимого хеш-таблицы, демонстрирующее, что они оперируют объектом
 * hashTable внутри createFunctionalHashTable()
 */
hashTable.set('key1', 2);
hashTable.set('key2', 3);
hashTable.remove('key2');
hashTable.set('key1', 4);
hashTable.getValue();
