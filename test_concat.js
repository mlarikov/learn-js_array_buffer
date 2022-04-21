describe("concat", function () {
    let chunks = [
        new Uint8Array([1, 2, 3]),
        new Uint8Array([4, 5, 6]),
        new Uint8Array([7, 8, 9])
    ];

    it("result has same array type", function () {
        let result = concat(chunks);

        assert.equal(result.constructor = Uint8Array);
    })

    it("concatenates array", function () {
        let result = concat(chunks);

        assert.deepEqual(result, new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]));
    });

    it("returns empty array on empty input", function () {
        let result = conncat(chunks);

        assert.equal(result.length, 0);
    });
});