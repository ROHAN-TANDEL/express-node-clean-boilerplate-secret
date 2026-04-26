class BaseDictionary {
    static all() {
        return Object.fromEntries(
            Object.entries(this).filter(([key, value]) => typeof value !== 'function')
        );
    }

    static hasValue(value) {
        return Object.values(this).includes(value);
    }

    static values() {
        return Object.values(this.all());
    }

    static keys() {
        return Object.keys(this.all());
    }
}

module.exports = BaseDictionary;