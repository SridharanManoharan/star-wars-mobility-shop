/**
 * isEmptyObj checks given object has any property
 * @param obj
 * @return boolean
 */
const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0;
};

/**
 * sortByProperty sorts the array of objects with given property name
 * @param arr [Array of objects] && @param field ["property in the object"]
 * @return sorted array
 */
const sortByProperty = (arr, field) => {
    let sortedArr = arr.concat();
    sortedArr.sort((a, b) => {
        let varA;
        let varB;
        if (field === "name") {
            varA = a[field].toLowerCase();
            varB = b[field].toLowerCase();
            return varA > varB ? 1 : -1;
        } else {
            varA = isNaN(a[field]) ? Infinity : Math.round(a[field]);
            varB = isNaN(b[field]) ? Infinity : Math.round(b[field]);
            return varA - varB;
        }
    });
    return sortedArr;
};

/**
 * maxRange filters the array with range
 * @param arr [Array of objects]
 * @param field [Property in object]
 * @param range [Number]
 * @return sorted array
 */
const maxRange = (arr, field, range) => {
    let sortedArr = arr.concat();
    field = field == "cost" ? "cost_in_credits" : field;
    return sortedArr.filter((elem) => {
        const cost = isNaN(elem[field]) ? Infinity : elem[field];
        return Math.round(cost) <= Math.round(range);
    });
};

/**
 * minRange filters the array with range
 * @param arr [Array of objects]
 * @param field [Property in object]
 * @param range [Number]
 * @return sorted array
 */
const minRange = (arr, field, range) => {
    let sortedArr = arr.concat();
    field = field == "cost" ? "cost_in_credits" : field;
    return sortedArr.filter((elem) => {
        const cost = isNaN(elem[field]) ? Infinity : elem[field];
        return Math.round(cost) >= Math.round(range);
    });
};

export { isEmptyObj, sortByProperty, maxRange, minRange };

export default {};
