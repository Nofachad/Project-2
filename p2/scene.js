
$(document).ready(() => {
  $currentx = 1;
  $currenty = 1;
  $(".navg").on('click', (event) => {
  
  let target = $(event.currentTarget);
  // if (target.hasClass("lightson")) {
  // 	target.removeClass("lightson");
  // }
  // else {
  // 	target.addClass("lightson");
  // }
  $id = target.id;
  if($id == "leftbutton"){
    if($currentx || ){
      if(target.hasClass("lightson")){
        $count = $count-1;
      }
    }
    $currentx=$currentx-1;
  }
      
  if(target.hasClass("lightson")){
    $count = $count-1;
  }
  else{
    $count = $count+1;
  }
  target.toggleClass("lightson");
  if(target.index()-1>=0){
    if(target.parent().find('td').eq(target.index()-1).hasClass("lightson")){
      $count = $count-1;
    }
    else{
      $count = $count+1;
    }
    target.parent().find('td').eq(target.index()-1).toggleClass("lightson");
    
  }
  if(target.index()+1<=4){
    if(target.parent().find('td').eq(target.index()+1).hasClass("lightson")){
      $count = $count-1;
    }
    else{
      $count = $count+1;
    }
    target.parent().find('td').eq(target.index()+1).toggleClass("lightson");
  }
  if(target.parent().index()-1>=0){
    if(target.parent().parent().find('tr').eq(target.parent().index()-1).find('td').eq(target.index()).hasClass("lightson")){
      $count = $count-1;
    }
    else{
      $count = $count+1;
    }
    target.parent().parent().find('tr').eq(target.parent().index()-1).find('td').eq(target.index()).toggleClass("lightson");

  }
  if(target.parent().index()+1>=0){
    if(target.parent().parent().find('tr').eq(target.parent().index()+1).find('td').eq(target.index()).hasClass("lightson")){
      $count = $count-1;
    }
    else{
      $count = $count+1;
    }
    target.parent().parent().find('tr').eq(target.parent().index()+1).find('td').eq(target.index()).toggleClass("lightson");

  }
  console.log($count);
  if(25-$count == 25){
    console.log("reached1");
    $("body p").toggleClass("spoiler");
  }
  else{
    if($('.spoiler').length==0){
      $("body p").toggleClass("spoiler");
    }
  }
      // target.parent().find('td').eq(target.index()-1).toggleClass("lightson");
  // target.parent().find('td').eq(target.index()+1).toggleClass("lightson");
  // target.parent().parent().find('tr').eq(target.parent().index()+1).find('td').eq(target.index()).toggleClass("lightson");
  // target.parent().parent().find('tr').eq(target.parent().index()-1).find('td').eq(target.index()).toggleClass("lightson");

      //console.log($(event.currentTarget).eq(target.index()-1));
});
  
});