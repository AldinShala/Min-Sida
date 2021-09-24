console.warn("VARNING VARNING VARNING");
console.log("Namn: Aldin Shala");
console.error("ERROR ERROR ERROR")

const contactForm = document.querySelector('.contact-form');
let namn = document.getElementById('namn');
let epost = document.getElementById('epost');
let amne = document.getElementById('ämne');
let meddelande = document.getElementById('meddelande');

contanctForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        namn: namn.value,
        epost: epost.value,
        amne: amne.value,
        meddelande: meddelande.value,
    }
}




function checkUserEntry() {
    var userEntry = document.getElementById('E-post').value;
    if (userEntry.length == 0) {
        throw 'E-postadressen är ogiltig.';
    }
    else if (userEntry.indexOf('@') === -1) {
        throw 'ange en giltig e -postadress';
    }
}