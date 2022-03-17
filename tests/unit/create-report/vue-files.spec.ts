import { readSrcFiles, parseSrcFiles } from "@/create-report/src-files";
import { expectedFromParsedSrcFiles } from "../../fixtures/expected-values";
import { srcFiles } from "../../fixtures/resolved-sources";
import path from "path";

describe("file: create-report/src-files", () => {
  describe("function: parseSrcFiles", () => {
    it("Parse the file glob into I18n items", () => {
      const I18NItems = parseSrcFiles(srcFiles);
      expect(I18NItems).toEqual(expectedFromParsedSrcFiles);
    });

    it("Throws an error if it is not a valid glob", () => {
      const breakingSrcFiles = "";
      expect(() => readSrcFiles(breakingSrcFiles)).toThrow(
        `srcFiles isn't a valid glob pattern.`
      );
    });

    it("Throws an error if it does not find any file", () => {
      const breakingSrcFiles = path.resolve(
        __dirname,
        "../fixtures/src-files/**/*.txt"
      );
      expect(() => readSrcFiles(breakingSrcFiles)).toThrow(
        "srcFiles glob has no files."
      );
    });
  });
});
