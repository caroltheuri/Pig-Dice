//business logic
function Player1(score){
this.score = score;

};
Player1.prototype.scorePoints=function(randomnumber){
  while(randomnumber>0)
  if(randomnumber===1){
    alert("Oops you selected 1,it is player's two turn.")
    $('#player1').prop('disabled',true);
    $('#player2').prop('disabled',false);
    // $('#hold1').prop('disabled',false);
    return this.score=0;
    break;
  }else if(this.score +randomnumber>10){
  //  $("span#winner").text("Player1 you win");

 //    $(".result-show").show();
 //   $("span#winner").text("Player1 you win ,Hurray!!!! with" + " " + this.score  +
 // "" + "GAME OVER");

  alert ("Player1 you win.Game over")
  $('#player1').prop('disabled',true);
  $('#player2').prop('disabled',true);
  return this.score =0;
  return randomnumber=0;
  break;
}
 else{
return this.score +=randomnumber;
  }
}

function Player2(score){
  this.score=score;
}
Player2.prototype.scorePoints=function(randomnumber){
  while(randomnumber>0)
  if(randomnumber===1){
    alert("Oops you selected 1,it is player's one turn.")
    $('#player2').prop('disabled',true);
    $('#player1').prop('disabled',false);
    break;
  }else if(this.score +randomnumber>10){
  //  $("span#winner
 //  $("#result-show").show();
 // $("span#winner").text("Player2 you win, Hurray!!! with" + " " + this.score +randomnumber);
 alert ("Player2 you win.Game over")
 $('#player2').prop('disabled',true);
 $('#player1').prop('disabled',true);
 return this.score =0;
 break;
}else{
    return this.score +=randomnumber;
  }
}




//user logic
$(document).ready(function() {
  var result1=new Player1(0);
  $("form#playerone").submit(function(event) {
    event.preventDefault();
    var input1=Math.floor(Math.random()*6)+1;
    result1.scorePoints(input1)
    // console.log("player1");
    // console.log(input1);
    // console.log(result1);

    $("span#dice1").text(input1);
    $("span#total1").text(result1.score);
      });
  });
  $(document).ready(function() {
    var result2=new Player2(0);
    $("form#playertwo").submit(function(event) {
      event.preventDefault();
      var input2=Math.floor(Math.random()*6)+1;
      // var result2=new Player2(input2);
      result2.scorePoints(input2);
      // console.log("player2");
      // console.log(input2);
      // console.log(result2);
      $("span#dice2").text(input2);
      $("span#total2").text(result2.score);

        });
    });
