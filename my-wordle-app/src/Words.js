import wordBank from './wordle-bank.txt'
export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const generateWordSet =  async () => {
    let wordSet;
    await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
        const wordArr = result.split("\n")
        wordSet = new Set(wordArr)
    })

    return { wordSet }
}