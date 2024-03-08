const structureOne = ()=>{
    return{
        string:`Felicia was 2 because 4 her 6 7 until their 10 was 12 .`,
        values:[{type:"feeling", place:2},{type:"adverbOfTime", place:4},{type:"relation", place:6},{type:"pastVerb", place:7},{type:"singularNoun", place:10},{type:"adjective", place:12}]
    }
}

const structureTwo = ()=>{
    return{
        string:`For 1 my 3 likes to dress as 8 9 10 11 and 13 everybody, it's always a 18 time .`,
        values:[{type:"holiday", place:1},{type:"animal", place:3},{type:"number", place:8},{type:"size", place:9},{type:"adjectiveA", place:10},{type:"pluralNoun", place:11},{type:"verb", place:13},{type:"adjectiveB", place:18}]
    }
}

const structureThree = ()=>{
    return{
        string:`Did you know 3 4 turns their 7 8 and 10 ? Maybe 13 their 15 instead !`,
        values:[{type:"ingVerb", place:3},{type:"pluralNounA", place:4},{type:"pluralNounB", place:7},{type:"adjectiveA", place:8},{type:"adjectiveB", place:10},{type:"verb", place:13},{type:"singularNoun", place:15}]
    }
}

const structureFour = ()=>{
    return{
        string:` 1 , at my 4 's 6 , my 9 10 so 12 everyone 14 until they 17.`,
        values:[{type:"adverbOfTime", place:1},{type:"relation", place:4},{type:"events", place:6},{type:"singularNoun", place:9},{type:"pastVerbA", place:10},{type:"lyAdverb", place:12},{type:"pastVerbB", place:14}, {type:"pastVerbC", place:17}]
    }
}

const structureFive = ()=>{
    return{
        string:` 1 , when I'm feeling 5 , I 8 my 10 's 12 because I know it makes them 19 and that makes me 24.`,
        values:[{type:"adverbOfFrequency", place:1},{type:"feeling", place:5},{type:"verb", place:8},{type:"animal", place:10},{type:"pluralNoun", place:12},{type:"adjectiveA", place:19},{type:"adjectiveB", place:24}]
    }
}


const structureSix = ()=>{
    return{
        string:`Have you ever asked your 5 about the 8 that 10 your 12 ? Bet it's a 17 story !`,
        values:[{type:"singularNounA", place:5},{type:"singularNounB", place:8},{type:"pastVerb", place:10},{type:"singularNounC", place:12},{type:"adjective", place:17}]
    }
}

const structureSeven = ()=>{
    return{
        string:`When 1 2 3 other 5 6 , it makes them 10 or 12 , depending on the size of the 20 ' 22 .`,
        values:[{type:"adjectiveA", place:1},{type:"pluralNounA", place:2},{type:"fiveSenses", place:3},{type:"pluralNounA", place:5},{type:"ingVerb", place:6},{type:"adjectiveB", place:10},{type:"adjectiveC", place:12}, {type:"pluralNounA", place:20}, {type:"singularNounB", place:22}]
    }
}

const structureEight = ()=>{
    return{
        string:`My 1 told me 4 5 your 7 will make them 11 12 than if you 16 17 them.`,
        values:[{type:"relation", place:1},{type:"ingVerbA", place:4},{type:"prepositionA", place:5},{type:"pluralNoun", place:7},{type:"verbA", place:11},{type:"erAdverb", place:12},{type:"verbB", place:16}, {type:"prepositionB", place:17}]
    }
}

const structureNine = ()=>{
    return{
        string:`Despite their 3 4 , experts have observed 9 10 11 12 after they 15 . It has been described as a 23 phenomenon!`,
        values:[{type:"adjectiveA", place:3},{type:"pluralNounA", place:4},{type:"pluralAnimal", place:9},{type:"ingVerb", place:10},{type:"adjectiveB", place:11},{type:"pluralNounB", place:12},{type:"verb", place:15}, {type:"adjectiveC", place:23}]
    }
}

export {structureOne, structureTwo, structureThree, structureFour, structureFive, structureSix, structureSeven, structureEight, structureNine}