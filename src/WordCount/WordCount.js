'use strict'

const wordCountPrint = wordString => {
    let stArr = stringSplit(wordString)
    let countResult = wordCount(stArr)
    let wordSorted = wordSort(countResult)
    let result = printWord(wordSorted)
    console.log(result)
}

const stringSplit = st => {
    return st.split(' ')
}

const parseObject = word => {
    return {
        word:word,
        count: 1
    }
}

const wordCount = stArr => {
    let countResult = [] 
    for(let wd of stArr) {
        let word = findWord(wd,countResult)
        if(word === null){
            countResult.push(parseObject(wd))
        }else {
            word.count++
        }
    }
    return countResult
}

const wordSort = countResult => {
    let wordSort = countResult
    wordSort.sort((a,b) => {
        return a.count - b.count
    })
    return wordSort
}

const printWord = wordSort => {
    let result = ''
    for(let wd of wordSort) {
        result += wd.word + ':' + wd.count + ' '
    }
    return result
}

const findWord = (wd,countResult) => {
    for(let rw of countResult) {
        if(rw.word === wd) {
            return rw
        }
    }
    return null
}
