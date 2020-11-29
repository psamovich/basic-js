module.exports = class DepthCalculator {
    calculateDepth(arr) {
        const currentDepth = 1;
        return arr.filter(Array.isArray)
            .map(a => this.calculateDepth(a))
            .reduce((previous, current) =>
                previous > current ? previous : current, 0) + currentDepth;
    }
};