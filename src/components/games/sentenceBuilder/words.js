const holiday = ["New Years", "Martin Luther King Day","Juneteenth", "Valentine's Day", "Saint Patrick's day", "Thanks Giving", "Halloween", "Christmas", "Ramadan", "your birthday"]

const events = ["birthday", "party", "wedding", "funeral", "graduation", "baby shower", "house warming", "homecoming", "apocalypse", "reunion", "festival"]

const number = ["two", "three", "four", "five", "six", "seven", "eight","nine", 10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, "one million"]

const size = ["miniature","small" ,"tiny","puny","miniscule", "average", "medium","big","huge", "large", "gigantic", "gargantuan", "massive"]

const feeling = ["confident","interested","satisfied","content","ashamed","diappointed","worried","irritated","annoyed","happy", "sad", "angry", "afraid", "surprised", "sleepy", "confused", "sheepish","energized", "embarrased", "guilty", "scared", "alarmed", "tense", "jumpy"]

const fiveSenses=["taste", "see","smell", "feel", "hear"]

const relation = ["mom", "dad", "son","brother", "sister", "uncle", "nephew", "niece", "cousin","grandma","grandpa", "friend", "coworker", "classmate", "acquaintance", "enemy", "husband", "wife"]

const animal =["goldfish","dolphin", "whale", "shark", "otter", "octopus", "squid", "crab", "jellyfish", "elephant","lion", "rhino", "hyena", "cheetah", "gazelle", "deer","bison", "tiger", "crocodile", "coyote", "giraffe", "cat", "dog", "haster", "snake", "frog", "spider", "rat","squirel", "eagle", "parot", "flamingo", "pigeon", "duck", "dove", "pig", "cow", "horse", "goat", "sheep", "bear", "moose", "possom","beaver", "skunk", "bunny" ]

const pluralAnimal = animal.map(anim=>anim === "goldfish" ? anim :anim +"s")

const erAdverb = ["faster", "harder", "quicker", "slower", "softer", "fuller", "kinder","better", "redder", "heavier", "uglier", "prettier", "funnier", "greener", "angrier", "busier", "happier", "friendlier", "gentler", "sillier", "quiter", "louder", "softer" ]

const adverbOfTime = ["last week", "last month", "last year", "yesterday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "today"]

const lyAdverb = ["beautifully", "boldy","bravely", "calmly", "carefully","cautiously", "cheerfully", "joyously", "eagerly","gladly","easily","faihtfully","frankly","honestly","generously","gently","kindly","neatly","perfectly","patiently"]

const adverbOfFrequency = ["always", "constantly", "often","frequently","generally", "normally", "usually", "sometimes", "occasionally", "rarely", "seldom", "daily"]

const adjective = ["pretty", "beautiful,", "fancy", "drab", "plump", "plain", "handsome", "bald", "ugly", "tall", "short", "fat", "skinny", "green", "slimy","smooth", "rough", "gross", "smart", "salty", "sweet", "lovely", "small", "big", "hairy", "ashy", "loud", "quiet", "broken", "important", "bright", "brave", "polite", "silly", "proud", "kind", "gentle", "itchy", "obnoxious", "scary"]

const preposition = ["above","across", "behind", "below","beneath","beside","around","aginst","over", "nearby", "inside", "outside", "under", "next to"]

const pastVerb=["jumped", "ran", "loved", "swam", "licked", "snuck", "skipped", "wandered", "arranged", "listened", "slept", "typed", "watched", "sang", "smiled", "frowned", "whispered", "cried", "laughed", "burped", "read", "helped", "swallowed", "sniffed", "judged", "lost", "tucked", "looked", "viewed", "limped", "yelled", "screamed", "shouted", "pressed", "fell"]

const ingVerb=["hopping", "skipping", "running", "jumping", "kicking", "squatting", "sniffing", "yelling", "cleaning", "typing", "barking", "kissing", "playing", "lumping", "failing"]

const verb = ["kick", "kiss", "jump", "spin", "toss", "hover", "drive", "mop", "swing", "tie", "whine", "plant","sing", "love", "sleep", "stomp", "cough", "cover", "smell", "taste", "swim", "drown", "fly", "laugh"]

const singularNoun = ["apple", "house", "cat", "dog", "hamster", "bird", "family", "tv", "backyard", "school", "friend", "towel", "stove", "spirit", "car", "mud", "plant", "cookie", "foot", "toe", "mouth", "elbow", "bed", "heart", "girlfriend", "boyfriend", "fork", "spoon", "knife", "arm", "taco", "bell", "television", "box", "pet", "nose", "face", "spirit", "plant", "painting"]

const pluralNoun = singularNoun.map(word=>word === "family" ? "families" :word === "foot" ? "feet" :word+"s")


const wordBank = {feeling, adverbOfTime, relation, singularNoun, pastVerb, ingVerb,verb, pluralNoun, adjective, holiday, number, size,events,lyAdverb, animal, adverbOfFrequency, fiveSenses, erAdverb, preposition, pluralAnimal}
export default wordBank