
$(document).ready(function()
{
$("#next").click(function(){
swap()
}
                )

  
function swap() {
    var items = document.querySelectorAll(".row");
    var index = parseInt(document.querySelector('.current').dataset.index);
    var nextIndex = parseInt(index) + 1
   var current = items[index-1]
   var nextRow = items[index]
    if (index == items.length){
    nextRow = items[0]} 
   nextRow.classList.remove('hidden');
   current.classList.add('hidden');
   current.classList.remove('current');
   nextRow.classList.add('current');
   
  }
  
  
  
});
