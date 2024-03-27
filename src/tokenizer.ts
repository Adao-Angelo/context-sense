import { WordTokenizer } from "natural";

function tokenizer(text: string) {
  const wordTokenizer = new WordTokenizer();
  const tokens = wordTokenizer.tokenize(text);

  return tokens;
}

export { tokenizer };
