// Prototype content model — stand-in for what a real CMS/admin backend would serve.
// Editing this file still requires a code change + redeploy (this is a static prototype),
// but every value a non-developer would plausibly want to change lives here in one place.

var heroConfig = {
  layout: 'two-column', // 'two-column' | 'full-width'
  splitRatio: '1:1.15', // left:right column ratio, used when layout is 'two-column'
  headline: 'Celebrations, made beautiful.',
  subhead: 'Planning and rentals, bundled — real prices, no guesswork.',
  overlayOpacity: 0 // 0-1, darkens the hero image for text legibility when layout is 'full-width'
};

var popularRentals = [
  { name: 'Neon "Happy Birthday" Sign', image: 'images/neon-happy-birthday-sign.jpg', onSale: false, priceCurrent: 10 },
  { name: 'Balloon Arch Backdrop', image: 'images/balloon-arch-backdrop.jpg', onSale: false, priceCurrent: 10 },
  { name: 'Backdrop Cover', image: 'images/backdrop-cover.jpg', onSale: false, priceCurrent: 5 },
  { name: 'White Foldable Table', image: 'images/white-foldable-table.jpg', onSale: false, priceCurrent: 18 }
];

// Newest first. rating is 1-5; renderStars() draws the correct number of filled/empty stars from it.
var reviews = [
  {
    name: 'George E.',
    rating: 5,
    date: 'Today',
    text: 'Bells Bliss N More hosted and planned my son Brody’s high school graduation party from start to finish, and it turned into an unforgettable day for our family. Brody is the first cousin to graduate high school, so I wanted the celebration to set a special benchmark for the younger kids. Shirley-Nita delivered completely. As a parent juggling a demanding job and multiple kids’ schedules, I had zero time or bandwidth for event planning. Having her take full ownership and host the event at her venue was a massive weight off my shoulders. Her pricing was the most affordable option I found anywhere, delivering exceptional quality on a real budget. Everything was executed flawlessly. The rental equipment and setup at her location were spotless and in pristine condition. She communicated proactively and operated with strict punctuality. Her high level of organization and intentionality showed in every detail. What truly set her apart was the personal touch. She gathered photos of Brody across every stage of his life, created a video album, and played it on a screen during the party. Watching his growth from childhood to a college-bound young adult was a deeply moving moment for our whole family. The food she cooked and served was delicious, the music set the perfect tone, and the atmosphere was purely celebratory. This may be the last big party I throw for him before college, and Shirley-Nita made sure it was one we will cherish for years. I will without a doubt be booking Bells Bliss N More for our future milestone events!'
  },
  {
    name: 'Viki Filovets',
    rating: 5,
    date: 'a week ago',
    text: 'Very good team to work with! They were super easy to communicate with, very responsive, and so kind throughout the whole process. Everything was smooth and stress-free, and they even helped me load the chairs, which I really appreciated. Such great customer service — I would definitely use them again and highly recommend them to anyone needing rentals for an event!'
  },
  {
    name: 'Keianna Nguyen',
    rating: 5,
    date: '2 weeks ago',
    text: 'Clean tables &amp; chair, would rent again! Business owner was very kind and accommodating.'
  },
  {
    name: 'Kayla Ann Minshall',
    rating: 5,
    date: '3 weeks ago',
    text: 'Service was amazing. Sheryl help me for a next day rental. Table covers were nicely packed, and clean.'
  },
  {
    name: 'Kenny Dang',
    rating: 5,
    date: 'a month ago',
    text: 'Shirl was great! Her communication was great and highly recommend to others! Had the exact chairs I needed for my elopement.'
  },
  {
    name: 'Season Rahm',
    rating: 5,
    date: 'Edited 2 months ago',
    text: 'I had such a great experience with this party rental business! I rented chairs and a photo backdrop and everything was absolutely perfect.. clean, high quality and exactly as described. The standout for me was the custom balloon garland she created. It was stunning and really brought the whole event together. So many guests complimented it and used the backdrop for photos all day! She was professional, responsive and made the entire process so easy from start to finish. Delivery and setup were smooth and stress-free, which I really appreciated. I would definitely recommend her for any event and will be using her again in the future!'
  }
];
