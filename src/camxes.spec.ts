import { camxes } from "./camxes";

describe("parser", () => {
    let sut: any;

    beforeAll(() => {
        sut = camxes;
    });

    it("is defined", () => {
        expect(sut).toBeDefined();
        expect(sut.parse).toBeDefined();
    });

    // TODO: Implement reverse templating
    it("parses basic jafra", async () => {
        expect(sut.parse("coi")).toStrictEqual([
            "text",
            ["text_part_2",
                [["free",
                    ["vocative",
                        [["COI_clause",
                            [["COI", "coi"]]]]]]]]]);

        expect(sut.parse("mi nelci")).toStrictEqual([
            "text",
            ["text_1",
                ["paragraphs",
                    ["paragraph",
                        ["statement",
                            ["statement_1",
                                ["statement_2",
                                    ["statement_3",
                                        ["sentence",
                                            [[Array]],
                                            ["bridi_tail",
                                                [Array]]]]]]]]]]]);
    });
});
