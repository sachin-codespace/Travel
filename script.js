let packages = [{
  id: 1,
  title: "Eiffel Tower, Paris, France",
  img_src: "./assests/packages/paris.jpg",
  desc: `<p> Iconic symbol of Paris, offering breathtaking views from its observation decks and a dazzling light show at night.</p>
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
            </div>`,
  price: `$90.00 <span>$120.00</span>`
},
{
  id: 2,
  title: "Great Wall of China",
  img_src: "./assests/packages/china.jpg",
  desc: `<p> Ancient fortification stretching over 13,000 miles, showcasing incredible engineering and stunning landscapes, symbolizing Chinese resilience.</p>
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
            </div>  `,
  price: `$90.00 <span>$120.00</span>`

},
{
  id: 3,
  title: "Machu Picchu, Peru",
  img_src: "./assests/packages/peru.jpg",
  desc: `<p> Ancient Incan city set high in the Andes, renowned for its stunning ruins and mystical, breathtaking mountain views.</p>
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
            </div>  `,
  price: `$90.00 <span>$120.00</span>`

},
{
  id: 4,
  title: "Statue of Liberty, New York, USA",
  img_src: "./assests/packages/usa.webp",
  desc: `<p> A symbol of freedom, this colossal statue welcomes visitors with panoramic views of New York City and its harbor.</p>
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
            </div>  `,
  price: `$90.00 <span>$120.00</span>`

}, {
  id: 5,
  title: "Taj Mahal, Agra, India",
  img_src: "./assests/packages/agra.webp",
  desc: `<p> A marble mausoleum celebrated for its stunning beauty, intricate craftsmanship, and as a symbol of eternal love.</p>
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
            </div>  `,
  price: `$90.00 <span>$120.00</span>`

}, {
  id: 6,
  title: "Colosseum, Rome, Italy",
  img_src: "./assests/packages/italy.webp",
  desc: `<p> Ancient Roman amphitheater, renowned for its architecture and history, where gladiators once battled before thousands of spectators.</p>
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
            </div>  `,
  price: `$90.00 <span>$120.00</span>`

}
]

let services = [{
  id: 1,
  imgsrc: "./assests/services/hotel.png",
  title: "Affordable Hotels",
  desc: "Discover affordable hotels offering comfort, convenience, and great value, perfect for budget-conscious travelers seeking quality accommodations."
}, {
  id: 2,
  imgsrc: "./assests/services/food-drink.png",
  title: "Foods & Drinks",
  desc: "Indulge in a variety of delicious food and drinks, crafted to satisfy your taste buds with every bite and sip."
}, {
  id: 3,
  imgsrc: "./assests/services/safety.png",
  title: "Safety Guide",
  desc: "Follow our safety guide for essential tips and best practices to ensure a secure and worry-free experience during your stay."
}, {
  id: 4,
  imgsrc: "./assests/services/atworld.png",
  title: "Around the World",
  desc: "Explore destinations around the world, uncovering unique cultures, breathtaking landscapes, and unforgettable experiences at every turn."
}, {
  id: 5,
  imgsrc: "./assests/services/fast-travel.png",
  title: "Fastest Travel",
  desc: "Experience the fastest travel options, getting you to your destination quickly and efficiently without compromising comfort or convenience."
}, {
  id: 6,
  imgsrc: "./assests/services/adventure.png",
  title: "Adventure",
  desc: "Embark on thrilling adventures that push your limits, offering unforgettable experiences and the ultimate adrenaline rush."
}]

let gallery = [{
  id: 1,
  imgsrc: "./assests/gallery/1.jpg"
},
{
  id: 2,
  imgsrc: "./assests/gallery/2.jpg"
},
{
  id: 3,
  imgsrc: "./assests/gallery/3.jpg"
},
{
  id: 4,
  imgsrc: "./assests/gallery/4.jpg"
},
{
  id: 5,
  imgsrc: "./assests/gallery/5.jpg"
},
{
  id: 6,
  imgsrc: "./assests/gallery/6.jpg"
},
{
  id: 7,
  imgsrc: "./assests/gallery/7.jpg"
},
{
  id: 8,
  imgsrc: "./assests/gallery/8.jpg"
},
{
  id: 9,
  imgsrc: "./assests/gallery/9.jpg"
}]


let review = [{
  id: 1,
  imgsrc: "./assests/review/1.avif"
},
{
  id: 2,
  imgsrc: "./assests/review/2.jfif"
},
{
  id: 3,
  imgsrc: "./assests/review/3.jfif"
},
{
  id: 4,
  imgsrc: "./assests/review/4.jfif"
},
{
  id: 5,
  imgsrc: "./assests/review/5.jfif"
},
{
  id: 6,
  imgsrc: "./assests/review/6.jpg"
},
{
  id: 7,
  imgsrc: "./assests/review/7.jfif"
},]

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });
});

let menu = document.querySelector('.menu');
let cross = document.querySelector('.cross');
let navbar = document.querySelector('.nav-items');

function handleMenu() {
  if (window.innerWidth <= 768) {
    navbar.classList.toggle('menuactive');
    menu.style.display = 'none';
    cross.style.display = 'block';
  }
}

function handleCross() {
  if (window.innerWidth <= 768) { // Only toggle for small screens
    navbar.classList.toggle('menuactive');
    menu.style.display = 'block';
    cross.style.display = 'none';
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navbar.classList.remove('menuactive');
    menu.style.display = 'none';
    cross.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});



document.addEventListener('DOMContentLoaded', function () {
  let videoBtns = document.querySelectorAll('.vid-btn');
  let videoSlider = document.querySelector('.video-slider');

  videoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');

      let src = btn.getAttribute('data-src');
      videoSlider.src = src;
      videoSlider.load(); // Ensure video reloads properly

      // Wait for the video to be buffered and ready to play
      videoSlider.addEventListener('canplaythrough', function () {
        videoSlider.play(); // Play the video
      }, { once: true }); // Ensure it only triggers once
    });
  });
});




document.addEventListener('DOMContentLoaded', function () {
  const packageContainer = document.querySelector('.box-container')
  packages.map((item, index) => {

    const cards =

      ` <div class="box">
          <img class="p-img" src="${item.img_src}" alt="">
          <div class="content">
            <h3>
              <img class="pl-img" src="./assests/location.png" alt=""> ${item.title}</h3>
            ${item.desc}
            <div class="price">${item.price}</div>
            <button class="p-btn"> Book Now</button>
          </div>
        </div>`

      ;
    packageContainer.innerHTML += cards;
  })
});


document.addEventListener('DOMContentLoaded', function () {
  const serviceContainer = document.querySelector('.servicesContainer')
  services.map((item, index) => {

    const cards =

      `  <div class="box">
          <img height="200px" src="${item.imgsrc}" alt="">
          <h3>${item.title}</h3>
          <p>"${item.desc}"</p>
        </div>`

      ;
    serviceContainer.innerHTML += cards;
  })
});


document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.querySelector('.galleryContainer')
  gallery.map((item, index) => {

    const cards =

      `  <div class="box">
          <img src="${item.imgsrc}" alt="">
          <div class="content">
            <h3>Amazing Places</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate consequuntur ipsam, velit eaque iusto
              aut, quis blanditiis molestias vitae, ex tenetur deserunt minima at quas. Officia enim provident earum.
              Ut.</p>
            <button class="g-btn">See More</button>
          </div>
        </div>`

      ;
    galleryContainer.innerHTML += cards;
  })
});



document.addEventListener('DOMContentLoaded', function () {
  const reviewContainer = document.querySelector('.reviewContainer')
  review.map((item, index) => {

    const cards =

      `  <div class="slider swiper-slide">
            <div class="box">
              <img src="${item.imgsrc}" alt="">
              <h3>John Doe</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laboriosam veritatis ex, beatae
                minima enim, natus esse, sint est nisi repellat eligendi. Doloribus fugiat adipisci natus mollitia hic,
                ipsa vel!</p>
              <div class="stars">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star "></span>
              </div>
            </div>
          </div> `

      ;
    reviewContainer.innerHTML += cards;
  })
});



document.addEventListener('DOMContentLoaded', () => {
  const bookForm = document.querySelector('.bookForm');

  // Attach event listener to the form's submit event
  bookForm.addEventListener('submit', handleBook);

  function handleBook(event) {
    event.preventDefault();

    const place = document.querySelector('.place').value;
    const numberOfGuests = document.querySelector('.numberOfGuests').value;
    const arrivalDate = document.querySelector('.arrivalDate').value;
    const leavingDate = document.querySelector('.leavingDate').value;

    console.log(`Arrival Date: ${arrivalDate}`);
    console.log(`Leaving Date: ${leavingDate}`);

    if (place && numberOfGuests && arrivalDate && leavingDate) {
      alert(`Form Submitted Successfully!!!
        Where to: ${place}
        Number of Guests: ${numberOfGuests}
        Arrival Date: ${arrivalDate}
        Leaving Date: ${leavingDate}`);
      window.location.href = '#contact';
    } else {
      alert("Please fill out all fields correctly.");
    }
  }
});



function handleContact() {
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let number = document.querySelector('#number');
  let subject = document.querySelector('#subject');
  let message = document.querySelector('#message');
  if (name.value && email.value && number.value && subject.value && message.value) {
    alert(`Form Submitted Successfully 
    Name: ${name.value}
    Email: ${email.value}
     Number: ${number.value}
    Subject: ${subject.value}
    Message:  ${message.value}`)
    name.value = "";
    email.value = "";
    number.value = '';
    subject.value = '';
    message.value = '';

    window.location.href = '#contact';
  }
  else {
    alert("Please provide correct information")
  }
}




function handleBook() {
  let place = document.querySelector('#place');
  let guests = document.querySelector('#numberOfGuests');
  let number = document.querySelector('#numberBook');
  let travelDate = document.querySelector('#travelDate');
   if (place.value && guests.value && number.value && travelDate.value) {
    alert(`Form Submitted Successfully 
    Name: ${place.value}
    No. of Guests: ${guests.value}
    Mobile Number: ${number.value}
    Travel Date: ${travelDate.value}
   `)
    place.value = "";
    guests.value = "";
    number.value = '';
    travelDate.value = '';

    window.location.href = '#book';
  }
  else {
    alert("Please provide correct information")
  }
}