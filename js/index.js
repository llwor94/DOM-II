const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// add navs
let navs = document.querySelectorAll("nav a");
navs.forEach((item, i) => {
  item.innerHTML = siteContent.nav[`nav-item-${i+1}`]
})

//add new a tags to nav bar
let nav = document.querySelector("nav");
let createNav = (name) => {
  let newNav = document.createElement("a");
  newNav.innerHTML = name;
  newNav.className = "tooltip";
  newNav.setAttribute('href', '#')
  return newNav;
}
nav.prepend(createNav("Home"));
nav.append(createNav("Blog"));
navs = document.querySelectorAll("nav a"); //update navs with new elements

//add cta-text
let cta = Array.from(document.getElementsByClassName("cta-text")[0].children);
cta.forEach((child) => {
  child.innerHTML = siteContent.cta[`${child.tagName.toLocaleLowerCase()}`];
});

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


let mainHeaders = document.querySelectorAll(".text-content h4");
mainHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
mainHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
mainHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
mainHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
mainHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];

let mainText = document.querySelectorAll(".text-content p");
mainText[0].innerHTML = siteContent["main-content"]["features-content"];
mainText[1].innerHTML = siteContent["main-content"]["about-content"];
mainText[2].innerHTML = siteContent["main-content"]["services-content"];
mainText[3].innerHTML = siteContent["main-content"]["product-content"];
mainText[4].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let contactHead = document.querySelector(".contact h4");
contactHead.innerHTML = siteContent["contact"]["contact-h4"];

let contactInfo = document.querySelectorAll(".contact p");

contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["phone"];
contactInfo[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"];

//makes nav links green with white background on hover
navs.forEach((item) => {
  item.style.color = "green";
  item.addEventListener('mouseenter', function(event) {
    event.target.style.backgroundColor = "white";
  })
  item.addEventListener('mouseleave', function(event) {
    event.target.style.backgroundColor = "lightGray"
  })
})

mainHeaders.forEach((header) => {
  header.addEventListener('dblclick', function(event) {
    event.target.style.fontSize === "150%" ? event.target.style.fontSize = "100%" : event.target.style.fontSize = "150%";
    event.target.style.textShadow === "none" ? event.target.style.textShadow = "5px 5px 1px lightGreen" : event.target.style.textShadow = "none";
  })
});

let form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', function() {
  alert('thanks for submitting!')
})

let contact = document.getElementsByClassName('contact-details')[0];
contact.addEventListener('toggle', function() {
  contactInfo.forEach((p) => {
    p.style.fontSize = "150%";
  })
  contactHead.style.color === "green" ? contactHead.style.color = "black" : contactHead.style.color = "green";
  contactHead.style.fontSize === "150%" ? contactHead.style.fontSize = "100%" : contactHead.style.fontSize = "150%";
}) 

let header = document.querySelector('header');
let ctaBtn = document.querySelector('.cta-text button')

header.style.backgroundColor = "lightGray";
ctaBtn.style.backgroundColor = "lightGreen";
middleImg.style.boxShadow = "10px 10px 20px lightBlue";
ctaImg.style.borderRadius = "50%";
ctaImg.style.boxShadow = "10px 10px 20px lightBlue";

ctaBtn.addEventListener('mousedown', function(event) {
  event.target.style.boxShadow = "10px 10px 20px lightGray";
})
ctaBtn.addEventListener('mouseup', function(event) {
  event.target.style.boxShadow = "0 0 0 transparent";
})

ctaBtn.addEventListener('click', function() {
  TweenMax.to("#cta-img", 4, {rotation: 360, repeat: -1});
})

ctaBtn.addEventListener('contextmenu', function() {
  event.preventDefault();
  TweenMax.to(".cta-text h1", 1, {y:-500, opacity: 0});
})

// let animation = TweenMax.to("middle-img", 2.5, {
//   ease: Bounce.easeIn,
//   y: -200
// }).reverse();

// let toggleAnimation = (animation) => {
//   if (animation.reversed()) {
//     animation.play();
//   } else {
//     animation.reverse();
//   }
// }

middleImg.addEventListener('mouseover', function() {
  TweenMax.to("middle-img", 2.5, { ease: Bounce.easeIn, y: -200})
});
