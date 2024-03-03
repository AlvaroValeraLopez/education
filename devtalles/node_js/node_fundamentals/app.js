const fs = require('fs');

// Read the content of the markdown file
const data = fs.readFileSync('README.md', 'utf8');

// Use a regular expression to match the word "react" in a case-insensitive manner
// The \b denotes a word boundary, ensuring we match "react" as a whole word
// The 'gi' flags are for global search (g) and case-insensitive search (i)
const regex = /\breact\b/gi;

// Use the match method to find all occurrences of the regex in the data
// The match method returns an array of all matches found or null if no matches are found
const matches = data.match(regex);

// Calculate the number of matches
// If matches is null (meaning no matches were found), we default to 0
const count = matches ? matches.length : 0;

console.log(count);
