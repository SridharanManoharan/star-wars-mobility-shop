/**
 * isEmptyObj checks given object has any property
 * @param obj
 * @return boolean
 */
const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0;
};

/**
 * compareValues sorts the array of objects with given property name
 * @param key [Property name] && @param order ["desc" or "asc"]
 * @return sorted array
 */
const compareValues = (key, order = "asc") => {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA =
            typeof a[key] === "string"
                ? a[key].toLowerCase()
                : Math.round(a[key]);
        const varB =
            typeof b[key] === "string"
                ? b[key].toLowerCase()
                : Math.round(b[key]);

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
    };
};

/**
 * sortByProperty sorts the array of objects with given property name
 * @param arr [Array of objects] && @param field ["property in the object"]
 * @return sorted array
 */
const sortByProperty = (arr, field) => {
    let sortedArr = arr.concat();
    if (field === "name") {
        sortedArr.sort(compareValues(field));
    } else {
        sortedArr.sort((a, b) => {
            let varA = isNaN(a[field]) ? Infinity : a[field];
            let varB = isNaN(b[field]) ? Infinity : b[field];
            varA = Math.round(varA);
            varB = Math.round(varB);
            return (
                (varA != null ? varA : Infinity) -
                (varB != null ? varB : Infinity)
            );
        });
    }
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
    return sortedArr.filter((elem) => {
        const cost = isNaN(elem["cost_in_credits"])
            ? Infinity
            : elem["cost_in_credits"];
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
    return sortedArr.filter((elem) => {
        const cost = isNaN(elem["cost_in_credits"])
            ? Infinity
            : elem["cost_in_credits"];
        return Math.round(cost) >= Math.round(range);
    });
};

export { isEmptyObj, sortByProperty, maxRange, minRange };

export default {};
