const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (!sampleActivity || typeof sampleActivity != 'string') {
        return false;
    }
    const activity = +sampleActivity;
    if (Number.isNaN(activity) || (activity <= 0 || activity > 15)) {
        return false;
    }
    const n0ByN = MODERN_ACTIVITY / activity;
    const k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(n0ByN) / k);
};
