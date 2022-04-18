const	clickMe = document.querySelector("button");
// console.log(clickMe);
// console.log(document);
// if (clickMe) {
// 	clickMe.style.visibility = "hidden";
// }

// function hide(clickMe) {
// 	div.style.display = 'none';
// }

const img = document.createElement('img');
img.src = 'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg';
document.getElementById('jsImg').appendChild(img);


const users = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg"
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  },
];

const names = users.map(users => users.first_name);

