What is a Tokeniser? 🤔

-> A tokenizer can be considered as the initial step in the input -> GPT -> output process. Computers unlike humans only understand numbers, so in order to process inputs from a human, the first step naturally that comes is conversion of the input into something which is transformer(GPT) understandable. Here comes the role of a tokenizer. A tokenizer is basically a program that takes an input and converts/ encodes it into a format which the transformer is trained to understand, it can be as simple a converting GPT -> "71620" (mapping of a character to its alphabetic position).

Tokeniser Class Explanation:

💥💥 Logic : The fundamental logic behind the Tokeniser Class is incremental chunking of the word & the base conversion is ASCII based. eg: "Cat chases a dog" will be encoded as ['67','97|116','32','99','104|97','115|101|115','32','97','32','100','111|103']

Encoding is done by taking each word and dividing it into chunks, eg: Cat -> 'C' (chunk of size 1) -> 'at'(chunk of size 2) . For a chunk size greater than that of 1, the encoded string will be seperated by a |(pipe).