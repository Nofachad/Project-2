
$(document).ready(() => {

  let rm2Unlocked = false;//checking to see if room is locked or not
  let rm3Unlocked = false;
  let rm5Unlocked = false;
  let rm6Unlocked = false;
  let rm7Unlocked = false;
  let l1 = 0;//for combo lock
  let l2 = 0;
  let l3 = 0;

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
    buttonVis(true, true, false, true);
  }

  $(".navg").on('click', (event) => {//on event of clicking to move
  let target = $(event.target);

  if($("#rm1").hasClass("visible")){
    if(target[0].id == 'rightbutton'){
      
      $("#rm1").removeClass("visible").addClass("hidden");
      if(rm2Unlocked == true){
        $("#rm2_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm2_1").removeClass("hidden").addClass("visible");
        }
    }
    else if(target[0].id == 'leftbutton'){
      
      $("#rm1").removeClass("visible").addClass("hidden");
      if(rm3Unlocked == true){
      $("#rm3_2").removeClass("hidden").addClass("visible");
      }
      else{
        $("#rm3_1").removeClass("hidden").addClass("visible");
      }
    }
    else if(target[0].id == 'bottombutton'){
      
      $("#rm1").removeClass("visible").addClass("hidden");
      $("#rm8").removeClass("hidden").addClass("visible");
    }
  }
  else if($("#rm2_1").hasClass("visible")){
    if(target[0].id == 'leftbutton'){
      
      $("#rm1").removeClass("hidden").addClass("visible");
      $("#rm2_1").removeClass("visible").addClass("hidden");
    }
    else if(target[0].id == 'bottombutton'){
      
      $("#rm2_1").removeClass("visible").addClass("hidden");
      if(rm7Unlocked == true){
        $("#rm7_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm7_1").removeClass("hidden").addClass("visible");
        }
    }
  }
  else if($("#rm2_2").hasClass("visible")){
    if(target[0].id == 'leftbutton'){
      
      $("#rm1").removeClass("hidden").addClass("visible");
      $("#rm2_2").removeClass("visible").addClass("hidden");
    }
    else if(target[0].id == 'topbutton'){
      
      $("#rm2_2").removeClass("visible").addClass("hidden");
      if(rm5Unlocked == true){
        $("#rm5_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm5_1").removeClass("hidden").addClass("visible");
        }
    }
    else if(target[0].id == 'bottombutton'){
      
      $("#rm2_2").removeClass("visible").addClass("hidden");
      if(rm7Unlocked == true){
        $("#rm7_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm7_1").removeClass("hidden").addClass("visible");
        }
    }
  }
  else if($("#rm3_1").hasClass("visible")){
    if(target[0].id == 'rightbutton'){
      
      $("#rm1").removeClass("hidden").addClass("visible");
      $("#rm3_1").removeClass("visible").addClass("hidden");
    }
    else if(target[0].id == 'bottombutton'){
      
      $("#rm3_1").removeClass("visible").addClass("hidden");
      if(rm6Unlocked == true){
        $("#rm6_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm6_1").removeClass("hidden").addClass("visible");
        }
    }
  }
  else if($("#rm3_2").hasClass("visible")){
    if(target[0].id == 'rightbutton'){
      
      $("#rm1").removeClass("hidden").addClass("visible");
      $("#rm3_2").removeClass("visible").addClass("hidden");
    }
    else if(target[0].id == 'topbutton'){
      
      $("#rm3_2").removeClass("visible").addClass("hidden");
      $("#rm4").removeClass("hidden").addClass("visible");
    }
    else if(target[0].id == 'bottombutton'){
      
      $("#rm3_2").removeClass("visible").addClass("hidden");
      if(rm6Unlocked == true){
        $("#rm6_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm6_1").removeClass("hidden").addClass("visible");
        }
    }
  }
  else if($("#rm5_1").hasClass("visible")){
    if(target[0].id == 'bottombutton'){
      
      if(rm2Unlocked == true){
        $("#rm2_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm2_1").removeClass("hidden").addClass("visible");
        }
      $("#rm5_1").removeClass("visible").addClass("hidden");
    }
  }
  else if($("#rm5_2").hasClass("visible")){
    if(target[0].id == 'bottombutton'){
      
      if(rm2Unlocked == true){
        $("#rm2_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm2_1").removeClass("hidden").addClass("visible");
        }
      $("#rm5_2").removeClass("visible").addClass("hidden");
    }
  }
  else if($("#rm4").hasClass("visible")){
    if(target[0].id == 'bottombutton'){
      
      if(rm3Unlocked == true){
        $("#rm3_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm3_1").removeClass("hidden").addClass("visible");
        }
      $("#rm4").removeClass("visible").addClass("hidden");
    }
  }
  else if($("#rm6_1").hasClass("visible")){
    if(target[0].id == 'topbutton'){
      
      if(rm3Unlocked == true){
        $("#rm3_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm3_1").removeClass("hidden").addClass("visible");
        }
      $("#rm6_1").removeClass("visible").addClass("hidden");
    }
  }
  else if($("#rm6_2").hasClass("visible")){
    if(target[0].id == 'topbutton'){
      
      if(rm3Unlocked == true){
        $("#rm3_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm3_1").removeClass("hidden").addClass("visible");
        }
      $("#rm6_2").removeClass("visible").addClass("hidden");
    }
  }
  else if($("#rm7_1").hasClass("visible")){
    if(target[0].id == 'topbutton'){
      
      if(rm2Unlocked == true){
        $("#rm2_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm2_1").removeClass("hidden").addClass("visible");
        }
      $("#rm7_1").removeClass("visible").addClass("hidden");
    }
  }
  else if($("#rm7_2").hasClass("visible")){
    if(target[0].id == 'topbutton'){
      
      if(rm2Unlocked == true){
        $("#rm2_2").removeClass("hidden").addClass("visible");
        }
        else{
          $("#rm2_1").removeClass("hidden").addClass("visible");
        }
      $("#rm7_2").removeClass("visible").addClass("hidden");
    }
  }
  else if($("#rm8").hasClass("visible")){
    if(target[0].id == 'topbutton'){
      
      $("#rm1").removeClass("hidden").addClass("visible");
      $("#rm8").removeClass("visible").addClass("hidden");
    }
  } 
  

  if($("#rm1").hasClass("visible")){ //shows only necessary buttons
        buttonVis(true, true, false, true);
  }
  if($("#rm2_1").hasClass("visible")){ //shows only necessary buttons
    buttonVis(true, false, false, true);
  }
  if($("#rm2_2").hasClass("visible")){ //shows only necessary buttons
    buttonVis(true, false, true, true);
  }
  if($("#rm3_1").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, true, false, true);
  }
  if($("#rm3_2").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, true, true, true);
  }
  if($("#rm4").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, false, true);
  }
  if($("#rm5_1").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, false, true);
  }
  
  if($("#rm6_1").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, true, false);
  }
  
  if($("#rm6_2").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, true, false);
  }
  
  if($("#rm7_1").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, true, false);
  }
  
  if($("#rm7_2").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, true, false);
  }
  
  if($("#rm8").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, true, false);
  }

});//end of onclick for movement


$(".scene").click((event) => {//clicking on img scene to alert that you need key
  let target = $(event.target);
  if((target[0].id == 'rm1') || (target[0].id == 'rm4') || (target[0].id == 'rm8')){
    //nothing
  }
  else if(target[0].id == 'rm5_1'){
    $("#rm5_1").removeClass("visible").addClass("hidden");
    $("#lock").removeClass("hidden").addClass("visible");
  }
  else if(target[0].id == 'rm5_2'){
    alert("WINNER WINNER CHICKEN DINNER");
    window.location = "https://atdpsites.berkeley.edu/rsun/AIC/p2/load.php";
  }
  else if(target[0].id == 'lock'){
    $("#lock").removeClass("visible").addClass("hidden");
    $("#rm5_1").removeClass("hidden").addClass("visible");
  }
  else if(target[0].id == 'rm3_1'){//checks to see if unlocking room 3 is possible
      $.ajax({
        type: 'POST',
        url: 'unlock.php',
        data: {
          obj: 'Devs bedroom key'
        },
        dataType: "json",
        success: function(response){
          if(response.key == "true"){
            rm3Unlocked = true;
            $("#rm3_1").removeClass("visible").addClass("hidden");
            $("#rm3_2").removeClass("hidden").addClass("visible");
            if($("#rm3_2").hasClass("visible")){ //shows only necessary buttons
              buttonVis(false, true, true, true);
            }
          }  
          else{
            alert("You need a key");
          }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
          alert("Status: " + textStatus); alert("Error: " + errorThrown); 
      }
    });
  }
  else if(target[0].id == 'rm6_1'){//checks to see if unlocking room 3 is possible
    $.ajax({
      type: 'POST',
      url: 'unlock.php',
      data: {
        obj: 'key 3'
      },
      dataType: "json",
      success: function(response){
        if(response.key == "true"){
          rm6Unlocked = true;
          $("#rm6_1").removeClass("visible").addClass("hidden");
          $("#rm6_2").removeClass("hidden").addClass("visible");
        }  
        else{
          alert("You need key 3");
        }
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    }
    });
  }
  else if(target[0].id == 'rm7_1'){//checks to see if unlocking room 3 is possible
    $.ajax({
      type: 'POST',
      url: 'unlock.php',
      data: {
        obj: 'key 2'
      },
      dataType: "json",
      success: function(response){
        if(response.key == "true"){
          rm7Unlocked = true;
          $("#rm7_1").removeClass("visible").addClass("hidden");
          $("#rm7_2").removeClass("hidden").addClass("visible");
        }  
        else{
          alert("You need key 2");
        }
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    }
    });
  }
  else if(target[0].id == 'rm2_1'){//checks to see if unlocking room 3 is possible
    $.ajax({
      type: 'POST',
      url: 'unlock.php',
      data: {
        obj: 'key 4'
      },
      dataType: "json",
      success: function(response){
        if(response.key == "true"){
          rm2Unlocked = true;
          $("#rm2_1").removeClass("visible").addClass("hidden");
          $("#rm2_2").removeClass("hidden").addClass("visible");
          if($("#rm2_2").hasClass("visible")){ //shows only necessary buttons
            buttonVis(true, false, true, true);
          }
        }  
        else{
          alert("You need key 4");
        }
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    }
    });
  }
  if($("#lock").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, false, false);
  }
  if($("#rm5_1").hasClass("visible")){ //shows only necessary buttons
    buttonVis(false, false, false, true);
  }
});
$(".key").click((event) => {//clicking on img scene to alert that you need key
  let target = $(event.target);
  
  if(target[0].id == 'key1'){
      $.ajax({
        type: 'POST',
        url: 'ajax.php',
        data: {
          obj: 'Devs bedroom key'
        },
        dataType: "json",
        success: function(response){
             alert(response.key);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
          alert("Status: " + textStatus); alert("Error: " + errorThrown); 
      }
    });
  }
  else if(target[0].id == 'key2'){
    $.ajax({
      type: 'POST',
      url: 'ajax.php',
      data: {
        obj: 'key 2'
      },
      dataType: "json",
      success: function(response){
           alert(response.key);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    }
  });
  }
  else if(target[0].id == 'key3'){
    $.ajax({
      type: 'POST',
      url: 'ajax.php',
      data: {
        obj: 'key 3'
      },
      dataType: "json",
      success: function(response){
           alert(response.key);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    }
  });
}
  else if(target[0].id == 'key4'){
    $.ajax({
      type: 'POST',
      url: 'ajax.php',
      data: {
        obj: 'key 4'
      },
      dataType: "json",
      success: function(response){
           alert(response.key);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        alert("Status: " + textStatus); alert("Error: " + errorThrown); 
    }
  });
  }
});
$(".com").click((event) => {//click to change combo
  let target = $(event.target);
  
  if(target.hasClass('l1')){
    if(l1 == 9){//checking to see what number, if 9 will make 0, if not will add 1
      l1 = 0;
    }
    else{
      l1 += 1;
    }

    if(l1 == 0){
      $("#l19").removeClass("visible").addClass("hidden");
      $("#l10").removeClass("hidden").addClass("visible");
    }
    else if(l1 == 1){
      $("#l10").removeClass("visible").addClass("hidden");
      $("#l11").removeClass("hidden").addClass("visible");
    }
    else if(l1 == 2){
      $("#l11").removeClass("visible").addClass("hidden");
      $("#l12").removeClass("hidden").addClass("visible");
    }
    else if(l1 == 3){
      $("#l12").removeClass("visible").addClass("hidden");
      $("#l13").removeClass("hidden").addClass("visible");
    }
    else if(l1 == 4){
      $("#l13").removeClass("visible").addClass("hidden");
      $("#l14").removeClass("hidden").addClass("visible");
    }
    else if(l1 == 5){
      $("#l14").removeClass("visible").addClass("hidden");
      $("#l15").removeClass("hidden").addClass("visible");
    }
    else if(l1 == 6){
      $("#l15").removeClass("visible").addClass("hidden");
      $("#l16").removeClass("hidden").addClass("visible");
    }
    else if(l1 == 7){
      $("#l16").removeClass("visible").addClass("hidden");
      $("#l17").removeClass("hidden").addClass("visible");
    }
    else if(l1 == 8){
      $("#l17").removeClass("visible").addClass("hidden");
      $("#l18").removeClass("hidden").addClass("visible");
    }
    else if(l1 == 9){
      $("#l18").removeClass("visible").addClass("hidden");
      $("#l19").removeClass("hidden").addClass("visible");
    }
  }
  else if(target.hasClass('l2')){
    if(l2 == 9){//checking to see what number, if 9 will make 0, if not will add 1
      l2 = 0;
    }
    else{
      l2 += 1;
    }

    if(l2 == 0){
      $("#l29").removeClass("visible").addClass("hidden");
      $("#l20").removeClass("hidden").addClass("visible");
    }
    else if(l2 == 1){
      $("#l20").removeClass("visible").addClass("hidden");
      $("#l21").removeClass("hidden").addClass("visible");
    }
    else if(l2 == 2){
      $("#l21").removeClass("visible").addClass("hidden");
      $("#l22").removeClass("hidden").addClass("visible");
    }
    else if(l2 == 3){
      $("#l22").removeClass("visible").addClass("hidden");
      $("#l23").removeClass("hidden").addClass("visible");
    }
    else if(l2 == 4){
      $("#l23").removeClass("visible").addClass("hidden");
      $("#l24").removeClass("hidden").addClass("visible");
    }
    else if(l2 == 5){
      $("#l24").removeClass("visible").addClass("hidden");
      $("#l25").removeClass("hidden").addClass("visible");
    }
    else if(l2 == 6){
      $("#l25").removeClass("visible").addClass("hidden");
      $("#l26").removeClass("hidden").addClass("visible");
    }
    else if(l2 == 7){
      $("#l26").removeClass("visible").addClass("hidden");
      $("#l27").removeClass("hidden").addClass("visible");
    }
    else if(l2 == 8){
      $("#l27").removeClass("visible").addClass("hidden");
      $("#l28").removeClass("hidden").addClass("visible");
    }
    else if(l2 == 9){
      $("#l28").removeClass("visible").addClass("hidden");
      $("#l29").removeClass("hidden").addClass("visible");
    }
  }
  else if(target.hasClass('l3')){
    if(l3 == 9){//checking to see what number, if 9 will make 0, if not will add 1
      l3 = 0;
    }
    else{
      l3 += 1;
    }

    if(l3 == 0){
      $("#l39").removeClass("visible").addClass("hidden");
      $("#l30").removeClass("hidden").addClass("visible");
    }
    else if(l3 == 1){
      $("#l30").removeClass("visible").addClass("hidden");
      $("#l31").removeClass("hidden").addClass("visible");
    }
    else if(l3 == 2){
      $("#l31").removeClass("visible").addClass("hidden");
      $("#l32").removeClass("hidden").addClass("visible");
    }
    else if(l3 == 3){
      $("#l32").removeClass("visible").addClass("hidden");
      $("#l33").removeClass("hidden").addClass("visible");
    }
    else if(l3 == 4){
      $("#l33").removeClass("visible").addClass("hidden");
      $("#l34").removeClass("hidden").addClass("visible");
    }
    else if(l3 == 5){
      $("#l34").removeClass("visible").addClass("hidden");
      $("#l35").removeClass("hidden").addClass("visible");
    }
    else if(l3 == 6){
      $("#l35").removeClass("visible").addClass("hidden");
      $("#l36").removeClass("hidden").addClass("visible");
    }
    else if(l3 == 7){
      $("#l36").removeClass("visible").addClass("hidden");
      $("#l37").removeClass("hidden").addClass("visible");
    }
    else if(l3 == 8){
      $("#l37").removeClass("visible").addClass("hidden");
      $("#l38").removeClass("hidden").addClass("visible");
    }
    else if(l3 == 9){
      $("#l38").removeClass("visible").addClass("hidden");
      $("#l39").removeClass("hidden").addClass("visible");
    }
}
if(l1 == 2 && l2 == 0 && l3 == 3){
  $("#lock").removeClass("visible").addClass("hidden");
  $("#rm5_2").removeClass("hidden").addClass("visible");
}
});
});