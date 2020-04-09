const HamletSchema = require("../lib/schema");

const expected = { my: { mock: {} } }

test('contains expected json content', () => {
    expect(HamletSchema)
        .toMatchObject(expected)
})