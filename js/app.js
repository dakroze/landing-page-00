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
//grab all content sections and assign to a variable. Variable type is an array.
let sections = document.getElementsByTagName("section")
// navDiv is the div that holds the navigation links
let navDiv = document.getElementById("navbar__list")

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// myMenu function takes no input and dynamically creates the nav menu based on number of unique sections
let myMenu = () => {
  let menuArray = [];
  for(const section of sections){
    let myButton = `<li class="menu__link">${section.dataset.nav}</li>`;
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

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
//renderMenu function adds the nav menu as a child to any parentDiv element on the DOM
let renderMenu  = (parentDiv) => {
  parentDiv.innerHTML = myMenu();
}

// build the nav and render to HTML
renderMenu(navDiv)

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click
let links = document.getElementsByClassName("menu__link")

for(let link of links){
  link.addEventListener('click',() => {
//get innertext of  link element
    let sectionName = link.innerText;
    for (let section of sections){
//if sectionName matches section data value, smooth scroll to the section
      if (sectionName === section.dataset.nav){
        section.scrollIntoView({behavior: "smooth"})
      }
    }
  })
};


// Add class 'active' to section when near top of viewport
document.addEventListener("scroll",() => {
  for (let section of sections){
    if (isInViewport(section)){
      section.classList.add("active")
    }
    else{
      section.classList.remove("active")
    }
  }
});
