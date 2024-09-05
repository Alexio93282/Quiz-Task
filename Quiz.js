const listEL = document.getElementById("Questions")

fetch('./Quiz.json')
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        listEL.insertAdjacentHTML('beforeend', `<li>${element.Question} </li>`);
    });
});

