
$(document).ready(function()
{
$("#next").click(function(){
swap()
}
                )

  
function swap() {
    var items = document.querySelectorAll(".row");
    var query = document.querySelector('.current').dataset.index;
    var nextIndex;
    if (index == items.length) {
        nextIndex = 1 }
    else {
      nextIndex = index + 1
    }
   var current = items[index-1]
   var next = items[nextIndex-1]
   current.classList.add('hidden');
   current.classList.remove('current');
   next.classList.add('current');
   next.classList.remove('hidden');
   
  }
  
  
  
});
