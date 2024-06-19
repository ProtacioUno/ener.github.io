

// const mediaQuery = window.matchMedia('(max-width: 600px)');

// // Check if the media query matches
// if (mediaQuery.matches) {
//   // Media query matches (viewport width is 600px or less)
//   console.log('Viewport width is 600px or less');
// } else {
//   // Media query doesn't match (viewport width is greater than 600px)
//   console.log('Viewport width is greater than 600px');
// }

const mediaQuery = window.matchMedia('(max-width: 1000px)');
let profile_card = document.querySelector('.profile-card');

// Function to handle changes in the media query
const handleMediaQueryChange = (mediaQueryList) => {
  if (mediaQueryList.matches) {
    // Media query matches (viewport width is 600px or less)
    console.log('Viewport width is now 600px or less');

    profile_card.setAttribute('hidden' , 'hidden');

    
    // Add your responsive behavior here, such as hiding/showing elements, adjusting layout, etc.
  } else {
    // Media query doesn't match (viewport width is greater than 600px)
    console.log('Viewport width is now greater than 600px'); 
    profile_card.removeAttribute('hidden');
    // Add your responsive behavior here
  } 
};

// Initial check if the media query matches
handleMediaQueryChange(mediaQuery);

// Add a listener for changes in the media query
mediaQuery.addListener(handleMediaQueryChange);

