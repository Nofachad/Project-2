
$(document).ready(() => {

  let rm2Unlocked = false;//checking to see if room is locked or not
  let rm3Unlocked = false;
  let rm5Unlocked = false;
  let rm6Unlocked = false;
  let rm7Unlocked = false;
  let rm27Unlocked = false;//checks to see if room 7 is unlocked from room 2
  let rm36Unlocked = false;//checks to see if room 6 is unlocked from room 3

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
      
      $("#rm2_1").removeClass("visible").addClass("hidden");
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
  if($("#rm5_2").hasClass("visible")){ //shows only necessary buttons
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
});
});