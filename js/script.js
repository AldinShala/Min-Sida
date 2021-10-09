let btn = document.getElementById('btn');
let output = document.getElementById('text');
  
let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click', function (){
    let input = document.getElementById('userInput').value;
    if (input == number) {
        output.innerHTML = 'Du gissade rätt!, ditt nummer var ${number}'
    } else if (input < number) {
        output.innerHTML = "Du gissade för lågt."
    };

    if (input > number) {
        output.innerHTML = "Du gissade för högt."
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