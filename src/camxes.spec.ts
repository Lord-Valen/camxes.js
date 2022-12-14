import { camxes } from "./index";

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
        expect(sut.parse("coi")).toStrictEqual(
            ["text", ["text_part_2",
                [["free", ["vocative",
                    [["COI_clause", [["COI", "coi"]]]]]]]]]);

        expect(sut.parse("mi nelci")).toStrictEqual(
            ["text", ["text_1",
                ["paragraphs", ["paragraph",
                    ["statement", ["statement_1",
                        ["statement_2", ["statement_3",
                            ["sentence", [["terms",
                                ["terms_1", ["terms_2",
                                    ["term", ["term_1",
                                        ["sumti", ["sumti_1",
                                            ["sumti_2", ["sumti_3",
                                                ["sumti_4", ["sumti_5",
                                                    ["sumti_6", ["KOhA_clause",
                                                        [["KOhA", "mi"]]]]]]]]]]]]]]]],
                                ["bridi_tail", ["bridi_tail_1",
                                    ["bridi_tail_2", ["bridi_tail_3",
                                        ["selbri", ["selbri_1",
                                            ["selbri_2", ["selbri_3",
                                                ["selbri_4", ["selbri_5",
                                                    ["selbri_6", ["tanru_unit",
                                                        ["tanru_unit_1", ["tanru_unit_2",
                                                            ["BRIVLA_clause", [["BRIVLA",
                                                                ["gismu", "nelci"]]]]]]]]]]]]]]]]]]]]]]]]]]]);
    });
});
