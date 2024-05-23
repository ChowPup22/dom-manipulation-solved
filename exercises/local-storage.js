/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...

const main = document.querySelector('.cardsContainer');

// console.log(main)

const loadFav = (list) => {
  // console.log(list)
  if (list && list != null) {
    list.split(',')
      .forEach((item) => {
        if (item) {
          main.children[item - 1].dataset.fav = true;
          main.children[item - 1].classList.add('red')
        }
      })
  }
}

loadFav(localStorage.getItem('favs'));

const addFav = (id) => {
  if (id && id != null) {
    // console.log(id)
    const child = main.children[id - 1]
    child.dataset.fav = true;
    child.classList.add('red');

    let dataArr = localStorage.getItem('favs')

    dataArr += `,${id}`;

    localStorage.setItem('favs', dataArr);


  }
}

const removeFav = (id) => {

  const child = main.children[id - 1];

  child.dataset.fav = false;
  child.classList.remove('red')

  let dataArr = localStorage.getItem('favs').split(',')

  if (dataArr.length > 1) {
    dataArr.splice(dataArr.indexOf(id), 1).join(',');
  } else {
    dataArr = '';
  }

  localStorage.setItem('favs', dataArr);

}

const callBack = (elm) => {
  // console.log(elm.target.dataset.fav)
  const test = elm.target.dataset.fav
  if (test == 'false') addFav(elm.target.id)
  else if (test == 'true') removeFav(elm.target.id)
  else throw new Error('Callback failed!')
}

main.addEventListener('click', callBack);