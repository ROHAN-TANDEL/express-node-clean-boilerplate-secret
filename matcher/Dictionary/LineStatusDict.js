const BaseDictionary = require('./BaseDictionary');

class LineStatusDict extends BaseDictionary {
    static CORRECT = 'Correct';
    static INCORRECT = 'Incorrect';
    static WARNING = 'Warning';
}


Object.freeze(LineStatusDict);

module.exports = LineStatusDict;