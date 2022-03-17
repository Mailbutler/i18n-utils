import { SimpleFile, I18NItemWithBounding } from "../types";
export declare function readSrcFiles(src: string): SimpleFile[];
export declare function extractI18NItemsFromSrcFiles(
  sourceFiles: SimpleFile[]
): I18NItemWithBounding[];
export declare function parseSrcFiles(srcFiles: string): I18NItemWithBounding[];
