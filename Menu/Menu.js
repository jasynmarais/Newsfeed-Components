/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// Add list items to list element

function menuComponent(menuArr) {
  // Add elements
  const menu = document.createElement('div');
  const list = document.createElement('ul');

  // Add class to menu
  menu.classList.add('menu');

  // Loop over array and create a list item for each item in the array
  menuArr.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;

  // Append list items to list element
    list.appendChild(listItem);
  })

  // Store menu button in a variable
  const menuButton = document.querySelector('.menu-button');

  // Add click event listener and toggle menu--open class
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  })

  // Append list to menu and menu to DOM
  menu.appendChild(list);
  document.querySelector('.header').appendChild(menu);

  // Return menu
  return menu;
}

menuComponent(menuItems);
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
