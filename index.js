var uppercase, lowercase
 
function shout(string){
  uppercase = string.toUpperCase();
  string = uppercase;
  return uppercase;
}
function whisper(string){
  lowercase = string.toLowerCase();
  string = lowercase;
  return lowercase;
}
function logShout(string){
  uppercase = string.toUpperCase()
  string = uppercase;
  console.log(uppercase);
}
function logWhisper(string){
  lowercase = string.toLowerCase()
  string = uppercase;
  console.log(lowercase);
}
function sayHiToHeadphonedRoomate(string){
    if (string.toLowerCase() === string){
      return 'I can\'t hear you!';
    }
    if (string.toUpperCase() === string){
      return 'YES INDEED!';
    }
    if (string === 'Let\'s have dinner together!'){
      return "I would love to!";
    }
}

