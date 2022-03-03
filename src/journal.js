// Journal Constructor
export function Journal(){
    this.entries = {

    };
}

// Entries Constructor
export function Entry(title , body){
    this.title = title;
    this.body = body;
}

// Method For Counting the word
Entry.prototype.countWord = function(){
    if(this.body.trim() === ""){
        return 0 ;
    }
    let counter = 0;
    const wordArray = this.body.split(" ");
    wordArray.forEach(function(word){
        counter ++;
    })
    return counter
};

// Method For Counting Vowels
Entry.prototype.countVowel = function(){
    if(this.body.trim() === ""){
        return 0 ;
    }
    const vowels = ['a' , 'e' , 'i' , 'o' , 'u'];
    const letterArray = this.body.split("");
    let counter = 0;
    letterArray.forEach(function(elements){
        if(vowels.includes(elements.toLowerCase())){
            counter ++;
            return counter;
        }
    })
    return counter;
};

