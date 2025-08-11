class Tokenizer {
  private memo: { [key: string]: string } = {};

  encode(text: string): string[] {
    const tokens: string[] = [];
    const words = text.split(" ");

    words.forEach((word, wordIndex) => {
      if (word.length === 1) {
        const char = word;
        if (!(char in this.memo)) {
          this.memo[char] = char.charCodeAt(0).toString();
        }
        tokens.push(this.memo[char]);
      } else {
        const firstChar = word[0];
        if (!(firstChar in this.memo)) {
          this.memo[firstChar] = firstChar.charCodeAt(0).toString();
        }
        tokens.push(this.memo[firstChar]);

        let remaining = word.slice(1);
        let i = 0;
        let window = 2;

        while (i < remaining.length) {
          const chunk = remaining.slice(i, i + window);
          if (!(chunk in this.memo)) {
            this.memo[chunk] = chunk
              .split("")
              .map((c) => c.charCodeAt(0))
              .join("|");
          }
          tokens.push(this.memo[chunk]);
          i += window;
          window++;
        }
      }
      if (wordIndex < words.length - 1) {
        tokens.push("32");
      }
    });

    return tokens;
  }

  decode(tokens: string[]): string {
    let output = "";
    for (const token of tokens) {
      if (token === "32") {
        output += " ";
      } else if (token.indexOf("|") > 0) {
        const chars = token
          .split("|")
          .map((num) => String.fromCharCode(parseInt(num)))
          .join("");
        output += chars;
      } else {
        output += String.fromCharCode(parseInt(token));
      }
    }

    return output;
  }
}



