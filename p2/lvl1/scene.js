
$(document).ready(() => {

  function buttonVis($l, $r, $u, $d){ //true = visible. left, right, up, down as booleans. function checks to see if it should show button
    if($l == true){
      $("#leftbutton").removeClass("hidden").addClass("visible");
    }
    else{
      $("#leftbutton").removeClass("visible").addClass("hidden");
    }
    if($r == true){
      $("#rightbutton").removeClass("hidden").addClass("visible");
    }
    else{
      $("#rightbutton").removeClass("visible").addClass("hidden");
    }
    if($u == true){
      $("#topbutton").removeClass("hidden").addClass("visible");
    }
    else{
      $("#topbutton").removeClass("visible").addClass("hidden");
    }
    if($d == true){
      $("#bottombutton").removeClass("hidden").addClass("visible");
    }
    else{
      $("#bottombutton").removeClass("visible").addClass("hidden");
    }
  }



  if($("#rm1").hasClass("visible")){ //shows only necessary buttons
    buttonVis(true, true, false, false);
  }


  $(".navg").on('click', (event) => {
  
  let target = $(event.target);
  // if (target.hasClass("lightson")) {
  // 	target.removeClass("lightson");
  // }
  // else {
  // 	target.addClass("lightson");
  // }

  

  if($("#rm1").hasClass("visible")){
    if(target[0].id == 'rightbutton'){
      
      $("#rm1").removeClass("visible").addClass("hidden");
      $("#rm2_1").removeClass("hidden").addClass("visible");
    }
    else if(target[0].id == 'leftbutton'){
      
      $("#rm1").removeClass("visible").addClass("hidden");
      $("#rm3_1").removeClass("hidden").addClass("visible");
    }
  }
  else if($("#rm2_1").hasClass("visible")){
    if(target[0].id == 'leftbutton'){
      
      $("#rm1").removeClass("hidden").addClass("visible");
      $("#rm2_1").removeClass("visible").addClass("hidden");
    }
    else if(target[0].id == 'topbutton'){
      
      $("#rm2_1").removeClass("visible").addClass("hidden");
      $("#rm5_1").removeClass("hidden").addClass("visible");
    }
  }
  else if($("#rm3_1").hasClass("visible")){
    if(target[0].id == 'rightbutton'){
      
      $("#rm1").removeClass("hidden").addClass("visible");
      $("#rm3_1").removeClass("visible").addClass("hidden");
    }
    else if(target[0].id == 'topbutton'){
      
      $("#rm3_1").removeClass("visible").addClass("hidden");
      $("#rm4").removeClass("hidden").addClass("visible");
    }
  }
  else if($("#rm5_1").hasClass("visible")){
    if(target[0].id == 'bottombutton'){
      
      $("#rm2_1").removeClass("hidden").addClass("visible");
      $("#rm5_1").removeClass("visible").addClass("hidden");
    }
  }
  else if($("#rm4").hasClass("visible")){
    if(target[0].id == 'bottombutton'){
      
      $("#rm3_1").removeClass("hidden").addClass("visible");
      $("#rm4").removeClass("visible").addClass("hidden");
    }
  }
      
      // target.parent().find('td').eq(target.index()-1).toggleClass("lightson");
  // target.parent().find('td').eq(target.index()+1).toggleClass("lightson");
  // target.parent().parent().find('tr').eq(target.parent().index()+1).find('td').eq(target.index()).toggleClass("lightson");
  // target.parent().parent().find('tr').eq(target.parent().index()-1).find('td').eq(target.index()).toggleClass("lightson");

      //console.log($(event.currentTarget).eq(target.index()-1));

  if($("#rm1").hasClass("visible")){ //shows only necessary buttons
        buttonVis(true, true, false, false);
  }
  if($("#rm2_1").hasClass("visible")){ //shows only necessary buttons
    buttonVis(true, false, true, false);
  }
  if($("#rm2_2").hasClass("visible")){ //shows only necessary buttons
    buttonVis(true, false, true, false);
  }
  if($("#rm3_1").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, true, true, false);
  }
  if($("#rm3_2").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, true, true, false);
  }
  if($("#rm4").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, false, true);
  }
  if($("#rm5_1").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, false, true);
  }
  if($("#rm5_2").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, false, true);
  }
});
  
});