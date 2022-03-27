const ol = document.querySelector("ol");
const movies = [
    {
        name: "The fault in our stars",
        year: 2014,
        director: "Josh Boone",
        picture: "https://movieposters2.com/images/1191350-b.jpg",
    },
    {
        name: "The greatest showman",
        year: 2017,
        director: "Michael Gracey",
        picture: "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_.jpg",
    },
    {
        name: "Up",
        year: 2009,
        director: "Pete Docter",
        picture: "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_FMjpg_UX1000_.jpg",
    }
];

const template = movies.map(movie => `
    <li>
        <p>Name: ${movie.name}</p>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <img src="${movie.picture}" height="400"></img>
    </li>
    `);
    ol.innerHTML = template.join('');