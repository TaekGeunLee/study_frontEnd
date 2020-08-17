$(function() {
  var $p = $('p');

  // Create a clone of the <p> element and add it after the <h2> element.
  var $clonedQuote = $p.clone();
  $p.remove();
  $clonedQuote.insertAfter('h2');

  // Remove first item, and add it to the end of the list.
  // Note how this happens in both lists.
  var $moveItem = $('#one').detach(); // 요소를 제거하지만, 관련 정보를 메모리에 남겨둔다. 나중에 다시 추가할 수 있다.
  $moveItem.appendTo('ul');
});

