

const reviews = [
    {
        id: 1,
        name: "umit avcı",
        job: "web developer",
        img: "https://www.inciaku.com/media/spnmb0kh/insan-kaynaklari.jpg",
        text: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint nesciunt doloremque quidem dolorem,dicta officiisaccusantium harum quasi quibusdam nulla quisquam.",
    },

    {
        id: 2,
        name: "mehmet aslan",
        job: "web developer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4hbuBvTj1fpRVSHaMR8RPzkQFh0JR-owRA&usqp=CAU",
        text: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint nesciunt doloremque quidem dolorem,dicta officiisaccusantium harum quasi quibusdam nulla quisquam.",
    },
    {
        id: 3,
        name: "damla celik",
        job: "web developer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeU8SMxANF0rY0k8aRifY57FK29s2uU5XK8g&usqp=CAU",
        text: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint nesciunt doloremque quidem dolorem,dicta officiisaccusantium harum quasi quibusdam nulla quisquam.",
    },
    {
        id: 4,
        name: "yunus derin",
        job: "intern",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDd5hNysVijGGtclzzCZvhBzI3R-1KQlYTJQ&usqp=CAU",
        text: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Sint nesciunt doloremque quidem dolorem,dicta officiisaccusantium harum quasi quibusdam nulla quisquam.",
    }
];


// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn')


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
}


//next button
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

//prev button
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

randomBtn.addEventListener('click' ,function () {
    currentItem =Math.floor(Math.random() * reviews.length)
    console.log(currentItem);
    showPerson()
})


