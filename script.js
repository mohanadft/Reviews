const reviews = [
  {
    id: 0,
    name: "Mohanad Fteha",
    img: "mohanad.jpg",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nisi quae omnis tenetur eos atque deleniti assumenda. Nulla ullam earum iste obcaecati nemo, et recusandae. Exercitationem soluta sint quasi consequatur?",
  },
  {
    id: 1,
    name: "susan smith",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let counter = 0;

function showPerson(person) {
  document.querySelector("img").src = reviews[person].img;
  document.querySelector("#name").textContent = reviews[person].name;
  document.querySelector("#description").textContent = reviews[person].text;
}

function nextPerson() {
  counter++;
  if (counter === reviews.length) counter = 0;
  showPerson(counter);
}

function prevPerson() {
  if (counter === 0) counter = reviews.length;
  counter--;
  showPerson(counter);
}
