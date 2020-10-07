
$(document).ready(function()
{
$("#next").click(function(){
swap()
}
                )

  
function swap() {
    var items = document.querySelectorAll(".row");
    alert(items.length)
    var index = document.querySelector('.current').dataset.index;
    var nextIndex;
    if (index == items.length) {
        nextIndex = 1 }
    else {
      nextIndex = index + 1
    }
   var current = items[index-1]
   var nextRow = items[nextIndex-1]
   current.classList.add('hidden');
   current.classList.remove('current');
   nextRow.classList.remove('hidden');
   nextRow.classList.add('current');
   
  }
  
  
  
});
