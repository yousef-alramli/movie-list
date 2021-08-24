

Movie.all = [];

function Movie(name, img, release) {
    this.name = name;
    this.img = img;
    this.release = release;
    this.imgUrl = `img/${img}.png`;
    Movie.all.push(this);

}

let form = document.getElementById('form');
form.addEventListener('submit', submitMovie);

function submitMovie(event) {
    event.preventDefault();

    let name = event.target[0].value;
    let img = event.target[1].value;
    let release = event.target[2].value;

    let newMovie = new Movie(name, img, release);
    newMovie.render();
    saveStorage();
    event.target[0].value = '';
    event.target[1].value = '';
    event.target[2].value = '';
}



let table = document.getElementById('table');

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearInputs);
function clearInputs(event) {
    localStorage.removeItem('movie');
table.textContent = '';

}
Movie.prototype.render = function () {

    let tr = document.createElement('tr')
    table.appendChild(tr)
    let tdName = document.createElement('td')
    let tdImg = document.createElement('td')
    let tdRelease = document.createElement('td')
    tr.appendChild(tdImg)
    tr.appendChild(tdName)
    tr.appendChild(tdRelease)
    let image = document.createElement('img')
    image.src = this.imgUrl
console.log(image);
    tdName.textContent = this.name
    tdImg.textContent = image
    tdRelease.textContent = this.release

}

function saveStorage() {
    localStorage.setItem('movie', JSON.stringify(Movie.all))
}

function getStorage() {
    let data = localStorage.getItem('movie')
    let parseArr = JSON.parse(data)
    if (parseArr != null) {


        for (let i = 0; i < parseArr.length; i++) {
            new Movie(parseArr[i].name, parseArr[i].img, parseArr[i].release)

        }
    }


}
getStorage()
for (let i = 0; i < Movie.all.length; i++) {
    Movie.all[i].render();

}