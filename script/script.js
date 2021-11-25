const texts = ['frontend webs', 'vector arts', 'good coffees'];
// check which text we are using
let count = 0;
// counter that go through each word 1by1
let index = 0;
// text that selected at that time
let currentText = '';
// specify the individual letters
let letter = '';
// here we go our typing effect
// func that self invoke immidiately
(function type() {
    if(count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
}());