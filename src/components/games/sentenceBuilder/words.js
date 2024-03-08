const holiday = ["New Years", "Martin Luther King Day", "Valentine's Day", "Saint Patrick's day", "Thanks Giving", "Halloween", "Christmas"]
const events = ["birthday", "party", "wedding", "funeral", "graduation", "baby shower", "house warming", "homecoming"]

const number = ["two", "three", "four", "five", "six", "seven"]
const size = ["small" ,"tiny", "medium","big","huge", "large"]

const feeling = ["happy", "sad", "angry", "afraid", "surprised", "sleepy", "confused", "sheepish","energized"]
const fiveSenses=["taste", "see","smell", "feel", "hear"]

const relation = ["mom", "dad", "son","brother", "sister", "uncle", "cousin", "nephew", "niece", "cousin","grandma","grandpa", "friend", "coworker", "classmate", "acquaintance", "enemy", "husband", "wife"]
const animal =["goldfish", "elephant", "cat", "dog", "haster", "tiger", "crocodile", "coyote", "giraffe","rat", "badger"]
const pluralAnimal = animal.map(anim=>anim === "goldfish" ? anim :anim +"s")

const erAdverb = ["faster", "harder", "quicker", "slower", "softer", "fuller", "kinder","better" ]
const adverbOfTime = ["last week", "last month", "last year", "yesterday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "today"]
const lyAdverb = ["beautifully", "boldy","bravely", "calmly", "carefully","cautiously", "cheerfully", "joyously", "eagerly","gladly","easily","faihtfully","frankly","honestly","generously","gently","kindly","neatly","perfectly","patiently"]
const adverbOfFrequency = ["always", "constantly", "often","frequently","generally", "normally", "usually", "sometimes", "occasionally", "rarely", "seldom", "daily"]

const adjective = ["pretty", "ugly", "tall", "short", "fat", "skinny", "green", "slimy","smooth", "rough", "gross", "smart", "salty", "sweet", "lovely", "small", "big", "hairy", "ashy", "loud", "quiet", "broken", "important", "bright" ]

const preposition = ["above", "behind", "below", "nearby", "inside", "outside", "under", "next to"]

const pastVerb=["jumped", "ran", "loved", "swam", "licked", "snuck", "skipped", "wandered", "arranged", "listened", "slept", "typed", "watched", "sang", "smiled", "frowned", "whispered", "cried", "laughed", "burped", "read", "helped", "swallowed"]
const ingVerb=["hopping", "skipping", "running", "jumping", "kicking", "squatting", "sniffin", "yelling", "cleaning", "typing", "barking", "kissing", "playing", "lumping", "failing"]
const verb = ["kick", "kiss", "jump", "spin", "toss", "hover", "drive", "mop", "swing", "tie", "whine", "plant","sing", "love", "sleep", "stomp", "cough", "cover", "smell", "taste", "swim", "drown", "fly"]

const singularNoun = ["apple", "house", "cat", "dog", "hamster", "bird", "family", "tv", "backyard", "school", "friend", "towel", "stove", "spirit", "car", "mud", "plant", "cookie", "foot", "toe", "mouth", "elbow", "bed", "heart", "girlfriend", "boyfriend", "fork", "spoon", "knife"]
const pluralNoun = singularNoun.map(word=>word === "family" ? "families" :word === "foot" ? "feet" :word+"s")


const wordBank = {feeling, adverbOfTime, relation, singularNoun, pastVerb, ingVerb,verb, pluralNoun, adjective, holiday, number, size,events,lyAdverb, animal, adverbOfFrequency, fiveSenses, erAdverb, preposition, pluralAnimal}
export default wordBank