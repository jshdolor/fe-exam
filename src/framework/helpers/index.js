const isUndefined = (test) => {
    return typeof test === 'undefined';
};

const isEmpty = (n) => {
    return isUndefined(n) || n === '' || n === null || n === 0;
};

const isObject = (item) => {
    return item && typeof item === 'object' && !Array.isArray(item);
};

const mergeDeep = (target, source) => {
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isObject(source[key])) {
                if (!(key in target))
                    Object.assign(output, {
                        [key]: source[key],
                    });
                else output[key] = mergeDeep(target[key], source[key]);
            } else {
                Object.assign(output, {
                    [key]: source[key],
                });
            }
        });
    }
    return output;
};

export { isEmpty, mergeDeep };
