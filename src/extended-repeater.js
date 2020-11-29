module.exports = function repeater(str, options) {
    str = '' + str;
    let repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|';
    if (options) {
        repeatTimes = options.repeatTimes ?? repeatTimes;
        separator = options.separator ?? separator;
        addition = options.addition !== undefined ? options.addition : addition;
        additionRepeatTimes = options.additionRepeatTimes ?? additionRepeatTimes;
        additionSeparator = options.additionSeparator ?? additionSeparator;
    }

    let finalAddition = '';
    if (additionRepeatTimes > 0) {
        finalAddition = addition;
        while (--additionRepeatTimes > 0) {
            finalAddition = `${finalAddition}${additionSeparator}${addition}`;
        }
    }

    let singleRepetition = finalAddition !== '' ? str + finalAddition : str;
    let finalString = '';
    if (repeatTimes > 0) {
        finalString = singleRepetition;
        while (--repeatTimes > 0) {
            finalString = `${finalString}${separator}${singleRepetition}`;
        }
    }
    return finalString;
};
  