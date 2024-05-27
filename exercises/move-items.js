/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...

const allItems = document.querySelectorAll('.item')

/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here

const main = document.querySelector('#main');


/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here

const favs = document.querySelector('#favs');

/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here

const updateCollections = (id, direction) => {
  const item = document.getElementById(id);
  if (direction == 'toMain') {
    // console.log(item.children);
    item.children[0].className = 'fa-solid fa-heart-circle-plus';
    main.appendChild(item)
  } else if (direction === 'toFavs') {
    item.children[0].className = 'fa-solid fa-heart-crack';
    favs.appendChild(item)
  } else {
    throw new Error('Update collections ran into a problem!');
  }
}

/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...


allItems.forEach((elm) => {
  const id = elm.id;
  elm.addEventListener('click', () => {
    if (elm.parentNode.id == 'main') {
      updateCollections(id, 'toFavs');
    } else {
      updateCollections(id, 'toMain');
    }
  })
})