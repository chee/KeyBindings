#!/usr/bin/env node
var $ = process.argv.slice(1);
    keystrokes = $[1],
    character = $[2],
    start = "",
    end = " );";

[].forEach.call(keystrokes, function (character) {
	start += "\"" + character + "\" = { ";
	end += " };"
});

console.log(start.slice(0, -2) + "( \"insertText:\", \"" + character +"\"" + end.slice(0, -3))
