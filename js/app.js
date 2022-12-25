/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/


/**
 * Define Global Variables
 *
*/
let sections = document.getElementsByTagName('section')
let navDiv = document.getElementById('navbar__list')

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// myMenu function takes no input and dynamically creates the nav menu based on number of unique sections
let myMenu = () => {
  let menuArray = [];
  for(const section of sections){
    let myButton = `<li class='menu__link'><a href=#${strFix(section.dataset.nav)}>${section.dataset.nav}</a></li>`;
    menuArray.push(myButton)
  }
  return menuArray.join('')
}

// isInViewport function takes an element as input checks if it's in viewport
let isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// strFix takes a string as input and returns the same string in lowercase and no space.
let strFix = (string) => {
  let newStr = string.toLowerCase().replaceAll(' ','')
  return newStr;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
//renderMenu function adds the nav menu to the DOM
let renderMenu  = (parentDiv) => {
  parentDiv.innerHTML = myMenu();
}
renderMenu(navDiv)
// build the nav


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll',() => {
  for (let section of sections){
    if (isInViewport(section)){
      section.classList.add('active')
    }
    else{
      section.classList.remove('active')
    }
  }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
