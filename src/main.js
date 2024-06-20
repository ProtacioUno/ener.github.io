

// const mediaQuery = window.matchMedia('(max-width: 600px)');

// // Check if the media query matches
// if (mediaQuery.matches) {
//   // Media query matches (viewport width is 600px or less)
//   console.log('Viewport width is 600px or less');
// } else {
//   // Media query doesn't match (viewport width is greater than 600px)
//   console.log('Viewport width is greater than 600px');
// }

let mediaQuery = window.matchMedia('(max-width: 1000px)');
let profile_card = document.querySelector('.profile-card');
let remove_mt = document.querySelector('.mt-md-2') ; 
// let hide_me = document.querySelectorAll('.hide-me');

// Function to handle changes in the media query
let handleMediaQueryChange = (mediaQueryList) => {
  if (mediaQueryList.matches) {
    // Media query matches (viewport width is 600px or less)
    // console.log('Viewport width is now 600px or less');
    
    remove_mt.classList.remove('mt-5');

    // profile_card.setAttribute('hidden' , 'hidden');
    
    // hide_me.forEach(hides =>{
    //   hides.setAttribute('hidden' , 'hidden');

    // })

    
    // Add your responsive behavior here, such as hiding/showing elements, adjusting layout, etc.
  } else {
    // Media query doesn't match (viewport width is greater than 600px)
    // console.log('Viewport width is now greater than 600px'); 
    profile_card.removeAttribute('hidden');
    // Add your responsive behavior here
  } 
};

handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);

let mediaQuery_smol = window.matchMedia('(max-width: 500px)');
let hide_me = document.querySelectorAll('.hide-me');

// Function to handle changes in the media query
let handleMediaQueryChange_smol = (mediaQueryList) => {
  if (mediaQueryList.matches) {
    // Media query matches (viewport width is 600px or less)
    console.log('Viewport width is now 500px or less');
    
    
    
    hide_me.forEach(hides =>{
      hides.setAttribute('hidden' , 'hidden');
    })

    
  } else {
    // Media query doesn't match (viewport width is greater than 600px)
    console.log('Viewport width is now greater than 600px'); 
    // profile_card.removeAttribute('hidden');
  } 
};


handleMediaQueryChange_smol(mediaQuery_smol);
mediaQuery_smol.addListener(handleMediaQueryChange_smol);










//  DOWNLOADINF DIRECTYLY 
// document.getElementById("download-csv").addEventListener("click", function() {
//   // This approach only works if the button triggers a pre-existing download link
//   var downloadLink = document.createElement("a");
//   downloadLink.href = "https://docs.google.com/document/d/1vhoU_rLidEoN-oRuNEJQuqm-g4eyu1i0xbrPxdrp4So/edit?usp=sharing"; // Replace with the actual download link
//   downloadLink.download = "index.html"; // Set the desired filename
//   downloadLink.click();
// });