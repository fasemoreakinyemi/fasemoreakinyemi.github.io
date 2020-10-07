
$(document).ready(function()
{
$("#next").click(function(){
swap()
}
                )

  
function swap() {
    var items = document.querySelectorAll(".row");
    var index = document.querySelector('.current').dataset.index;
    var nextIndex = index + 1
    if (index == items.length) {
        nextIndex = 1 } 
   var current = items[index-1]
   var nextRow = items[nextIndex-1]
   nextRow.classList.remove('hidden');
   current.classList.add('hidden');
   current.classList.remove('current');
   nextRow.classList.add('current');
   
  }
  
  
  
});
