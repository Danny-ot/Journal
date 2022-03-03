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
    let counter = 0;
    const wordArray = this.body.split(" ");
    if(this.body.trim() === ""){
        return 0 ;
    }
    wordArray.forEach(function(word){
        counter ++;
    })
    return counter
};