let btn = document.getElementById('btn');
let output = document.getElementById('text');
  
let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function (){
    let input = document.getElementById('userInput').value;
    if (input == number) {
        output.innerHTML = 'Du gissade r�tt!, ditt nummer var ${number}'
    } else if (input < number) {
        output.innerHTML = "Du gissade f�r l�gt."
    };

    if (input > number) {
        output.innerHTML = "Du gissade f�r h�gt."
    }
});


try {

    dddocument.getElementById('epost').value;

} catch (error) {

    console.log(error);

}

var i;
for (i = 100; i >= 1; i--) {
    console.log(i);
}