
// Journal Constructor
export function Journal() {
    this.entries = {

    };
    this.id = 0;
}

// Method For Assigning Id
Journal.prototype.assignId = function () {
    this.id += 1;
    return this.id;
};

// Method For Finding Entry
Journal.prototype.findEntry = function(id){
    if(this.entries[id] !== undefined){
        return this.entries[id]
    }
    return false;
}

// Method For adding entry
Journal.prototype.addEntry = function(entry){
    entry.id = this.assignId();
    this.entries[entry.id] = entry;
};

// Entries Constructor
export function Entry(title, body) {
    this.title = title;
    this.body = body;
}

// Method For Counting the word
Entry.prototype.countWord = function () {
    if (this.body.trim() === "") {
        return 0;
    }
    let counter = 0;
    const wordArray = this.body.split(" ");
    wordArray.forEach(function () {
        counter++;
    });
    return counter;
};

// Method For Counting Vowels
Entry.prototype.countVowel = function () {
    if (this.body.trim() === "") {
        return 0;
    }
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const letterArray = this.body.split("");
    let counter = 0;
    letterArray.forEach(function (elements) {
        if (vowels.includes(elements.toLowerCase())) {
            counter++;
            return counter;
        }
    });
    return counter;
};

// Method For Countimg Consonant
Entry.prototype.countConsonant = function () {
    if (this.body.trim() === "") {
        return 0;
    }
    const vowels = ["a", "e", "i", "O", "u"];
    const letterArray = this.body.split("");
    let counter = 0;
    letterArray.forEach(function (elements) {
        if (vowels.includes(elements.toLowerCase())) {
            return 0;
        } else {
            counter++;
        }

    });
    return counter;
};

// Method For Getting Teaser
Entry.prototype.getTeaser = function () {
    if (this.body.trim() === "") {
        return "";
    }
    const sentenceSplit = this.body.split(".");
    let firstSentenceSplit = sentenceSplit[0].split(" ");
    if (firstSentenceSplit.length > 8) {
        firstSentenceSplit = firstSentenceSplit.slice(0, 8);
    }

    let sentence = firstSentenceSplit.join(" ");

    return sentence.concat("................................");
};

