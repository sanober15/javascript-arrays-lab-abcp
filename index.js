const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var cat = [];
  cat = kittens;
  cat.push(name);
  return cat;
}

function prependKitten(name){
  return var cat = [name, ...kittens];
  
}

function removeLastKitten(){
  var cat = kittens;
  cat.pop();
  return cat;
}

function removeFirstKitten(){
  return var cat = kittens.slice(1);
}