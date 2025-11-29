// // function that takes an array as input and display all items of this array
// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(i, arr[i])
//     }
// }
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);
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