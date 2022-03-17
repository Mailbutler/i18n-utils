import path from "path";

export const srcFiles = path.resolve(__dirname, "./src-files/**/*.?(js|vue)");
export const languageFiles = path.resolve(
  __dirname,
  "./lang/**/*.?(js|json|yml|yaml)"
);
