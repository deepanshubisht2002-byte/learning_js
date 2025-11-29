//A simple program to find a letter in a string
letterFinder("test","t");

function letterFinder(word,match) {
    for (var i=0;i<word.length;i++) {
        if (word[i]==match) {
            console.log('Found the', match, 'at', i);
            // break;
        }
        else {
            console.log('---No match found at', i);
        }
    }
}