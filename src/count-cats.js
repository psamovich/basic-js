module.exports = countCats;

function countCats(matrix) {
    return matrix.reduce((result, dimension) =>
        dimension.reduce((r, element) =>
            element === '^^' ? ++r : r, result), 0)
}