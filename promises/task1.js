function printWithDelay(text, ms) {
  setTimeout(() => console.log(text), ms);
}

printWithDelay('Довільний текст', 1000);
