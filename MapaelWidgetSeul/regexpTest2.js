debugger;
var mystringOriginal="<span style=\"font-weight:bold;\">Germany<\/span><br \/>Population : 81726000";
var myString = "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : <span>35320445</span>";
var moncontenu=mystringOriginal.text();


// the g in the regular expression says to search the whole string 
// rather than just find the first occurrence
var count = (myString.match(/span/g) || []).length;


