import { Parser } from "peggy";
import { camxes } from "./camxes.js";
import { jest } from "@jest/globals";

describe("camxes", () => {
    let sut: Parser;

    beforeAll(() => {
        sut = camxes;
    });

    it.todo("parses bridi");
    // TOOD: Be more specific
    // it("parses bridi", () => {
    //     expect(sut.parse("mi lo jbobau cu nelci")).toReturnWith("");
    //     expect(sut.parse("xu do viska da poi broda")).toReturnWith("");
    // });
});
