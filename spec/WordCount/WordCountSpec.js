describe("test suite: word count", function () {

    it("should return a collection when input one string include space", () => {
        const st = "word1 word2 word3"

        const result = stringSplit(st)

        expect(result).toEqual(["word1","word2","word3"]) 
    })

    it("should return a key-value object when input word", () => {
        const word = "word1"

        const result = parseObject(word)

        expect(result).toEqual({
            word: "word1",
            count: 1
        })
    })

    it("should return null when countResult array not inclue this word", () => {
        const countResult = [{
            word: "word1",
            count: 1
        }]
        const word = "word"

        expect(findWord(word,countResult)).toEqual(null)
    })

    it("should return word count result when input two same word", () => {
        const st = ["word1", "word1"]
        
        const result = wordCount(st)

        expect(result).toEqual([{
            word: "word1",
            count:2
        }])
    })

    it("should return sequential word count when input not sequential word", () => {
        const wordArray = [{word:"word1", count: 2}, {word: "word2", count: 4}, {word: "word3", count: 1}]

        expect(wordSort(wordArray)).toEqual([{word: "word3", count: 1},{word:"word1", count: 2},{word: "word2", count: 4}])
    })

    it("should return string when input word array", () => {
       const wordArray = [{word:"word1", count: 1}, {word: "word2", count: 2}, {word: "word3", count: 4}]
       const expectText = `word1:1 word2:2 word3:4 `

        expect(printWord(wordArray)).toEqual(expectText)
    })

    it("should print text", () => {
        let wordString = "word1 word3 word2 word3 word1 word3 word1 word3 word2"
        const expectText = `word2:2 word1:3 word3:4 `
        
        spyOn(console, 'log')
        wordCountPrint(wordString)

        expect(console.log).toHaveBeenCalledWith(expectText)
    })

});