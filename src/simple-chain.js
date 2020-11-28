const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        value = value === undefined ? '' : value;
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        this.clearChainIfInvalid(position)
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        const finishedChain = this.chain
            .map(link => `( ${link} )`)
            .join('~~');
        this.chain = [];
        return finishedChain;
    },

    /**
     * Valid position is an integer within the current chain boundaries
     * @param position
     * @throws Error if position is not valid
     */
    validate(position) {
        const positionAsNum = +position;
        if (Number.isNaN(positionAsNum)) {
            throw Error(`${position} is an invalid position. Must be an integer`);
        }
        const chainIndex = positionAsNum - 1;
        if (chainIndex < 0 || chainIndex >= this.chain.length) {
            throw Error(`There is no link at position ${position}`);
        }
    },

    /**
     * Validates the position and if it's invalid clears the current chain and throws an error
     * @param position
     * @throws Error if position is invalid
     */
    clearChainIfInvalid(position) {
        try {
            this.validate(position);
        } catch (e) {
            this.chain = [];
            throw e;
        }
    }
};

module.exports = chainMaker;
