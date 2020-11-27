function calculateWeightOfPrevElement(prevElement) {
    if (prevElement && typeof prevElement == 'string' && prevElement.startsWith('--')) {
        switch (prevElement) {
            case '--discard-next':
                return -2;
            case '--discard-prev':
                return 0;
            case '--double-next':
                return 1;
            case '--double-prev':
                return 0;
        }
    } else {
        return 0;
    }
}

function calculateWeightOfNextElement(nextElement) {
    if (nextElement && typeof nextElement == 'string' && nextElement.startsWith('--')) {
        switch (nextElement) {
            case '--discard-next':
                return 0;
            case '--discard-prev':
                return -1;
            case '--double-next':
                return 0;
            case '--double-prev':
                return 1;
        }
    } else {
        return 0;
    }
}

function calculateTimesToAddElement(prevElement, nextElement) {
    const prevElementWeight = calculateWeightOfPrevElement(prevElement);
    const nextElementWeight = calculateWeightOfNextElement(nextElement);
    return prevElementWeight + nextElementWeight + 1;
}

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input is not an array');
    }
    if (arr.length === 0) {
        return arr;
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (typeof element == 'string' && element.startsWith('--')) {
            continue;
        }
        const prevElement = arr[i - 1];
        const nextElement = arr[i + 1];
        let addTimes = calculateTimesToAddElement(prevElement, nextElement);
        while (addTimes > 0) {
            result.push(element);
            addTimes--;
        }
    }
    return result;
};
