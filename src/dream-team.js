module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    return members.reduce((firstLetters, member) => {
        if (typeof member == 'string') {
            firstLetters.push((member.trim()[0]).toUpperCase());
            return firstLetters;
        } else {
            return firstLetters;
        }
    }, []).sort().join('');
};
