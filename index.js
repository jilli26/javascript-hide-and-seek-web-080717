// index getFirstSelector(selector) returns the first element that matches the selector
function getFirstSelector(div) {
  return document.querySelector(div)
}

/*Define a function nestedTarget() that pulls a .target out of #nested
(Note that in index.html #nested and .target just happen to be divs. T
his method should work with arbitrary elements.)
*/
function nestedTarget(x) {
  return document.querySelector('#nested .target')
}

/*Define a function increaseRankBy(n) that increases the ranks
in all of the .ranked-lists by n.
(You might need to make use of parseInt()*/
function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < rankedLists.length; i++) {
    let lis = rankedLists[i].children

    for (let x = 0; x < lis.length; x++) {
      lis[x].innerHTML = parseInt(lis[x].innerHTML, 10) + n
    }
  }
}


/* Define a function deepestChild() that pulls out
the most deeply nested child from div#grand-node.
(Remember, you can iterate over elements and call
querySelector() and querySelectorAll() on them. */
function deepestChild() {
  let boo = document.querySelector('#grand-node div div div div')
  return boo
}
