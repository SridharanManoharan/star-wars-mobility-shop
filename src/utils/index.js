const isEmptyObj = (obj) => {
    return Object.keys(obj).length === 0;
};

const compareValues = (key, order = "asc") => {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
    };
};

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

const maxRange = (arr, field, range) => {
    let sortedArr = arr.concat();
    return sortedArr.filter((elem) => {
        const cost = isNaN(elem["cost_in_credits"])
            ? Infinity
            : elem["cost_in_credits"];
        return Math.round(cost) <= Math.round(range);
    });
};

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
