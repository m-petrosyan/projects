// $(function (){
  var mode = "prob";
  var devType = 2;
  var activityTitle = "Interpret information about subatomic particles of atoms and ions";
  var gradeTitle = "Physical Sciences Grade <B>10</B>";

  var discriptText = "Complete the missing information for each atom or ion.";

  var screensRandom = false;
  var navigation = false;
  var totalScreens = 1;
  var maxScreens = 1;
  var screenLabelType = "number";//Its values are mumber/Alpha

  var labelType = "image"//It's value is text/image;
  var sizesAreDifferent = false;

  //***********
  var correctResponces = ["Fantastic!", "Well done!", "That’s right!", "Nice work!"];
  var inCorrectResponces = ["<p>Your response is incorrect!</p>","<p>Sorry, that’s not correct.</p>"];
  var closerResponces = ["<p>Almost!</p>","<p>You need only one.</p>"];
  //***********
  var strtLeft = 1080;

  var tabSizes =
          [{width:295, height:56}]



var labels =[
      [
      {left:670, top:20,title:'T1', type:'label', key:1},
      ],
  ]
var dropsPositions = [
          [{left:54, top:36, key:[1]}],

             ]



  var dataObs = [];
  var currScreen = 1;
  var prevClickedBtn = null;
  var currDropsPositions = null;
  var deptCount = 0;
  var alertOpend = false;
  var backDone = false;
  var qNums = [];
  var alpabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  document.title = activityTitle;
  var chars = [];

  for(var i=0; i<totalScreens; i++){
    if(screenLabelType == "number"){
      chars.push(i+1);
    }else{
      chars.push(alpabets.charAt(i));
    }
  }
  function setPosions(){

    $("#disc").html(discriptText);
    enableCheck(false);
    // $("#mainContent").empty();
    $("#instPanel").hide();
    $("#responceBox").hide();
    $("#responceBox2").hide();
    $("#responceBoxAns").hide();


  }


  function onCheckHandler (){

  }

  function showCorrectAnswers(){

  }

  function getCorrectObject(inpKey){

  }

  function enableCheck(flag){
    if(flag){
      $("#checkBtn").css("opacity","1");
      $("#checkBtn").css("cursor","pointer");
    }else{
      $("#checkBtn").css("opacity",".5");
      $("#checkBtn").css("cursor","default");
    }

  }


  function getCloserResponces(){
    closerResponces = randamiseArray(closerResponces);
    return closerResponces[0];
  }
  function getCorrectResponce(){
    correctResponces = randamiseArray(correctResponces);
    return correctResponces[0];
  }

  function getInCorrectResponce(){
    inCorrectResponces = randamiseArray(inCorrectResponces);
    return inCorrectResponces[0];
  }



  function randamiseArray(inpArr) {
  var tempArr = [];
    while (inpArr.length > 0) {
      var randomIndex = Math.floor(Math.random()*inpArr.length);
      tempArr.push(inpArr[randomIndex]);
      inpArr.splice(randomIndex, 1);
    }
  // console.log(tempArr);
    return tempArr;
  }





  function enableCheck(flag){
    if(flag){
      $("#checkBtn").css("opacity","1");
      $("#checkBtn").css("cursor","pointer");
    }else{
      $("#checkBtn").css("opacity",".5");
      $("#checkBtn").css("cursor","default");
    }

  }
  function init(){
    for(var i=0; i<maxScreens; i++){
      qNums.push(i);
    }
    if(screensRandom == true){
      qNums = randamiseArray(qNums);
    }

    $("#main_footer").html(gradeTitle);
    $("#main_header").html(activityTitle);

    for(i=0; i<labels.length; i++){
      labels[i]["labelPositions"] = [];
      labels[i]["functionPositions"] = [];
      for(j=0; j<labels[i].length; j++){
        if(labels[i][j].type == "label"){
          labels[i]["labelPositions"].push({left:labels[i][j].left, top:labels[i][j].top});
        }else{
          labels[i]["functionPositions"].push({left:labels[i][j].left, top:labels[i][j].top});
        }
      }
      labels[i]["labelPositions"] = randamiseArray(labels[i]["labelPositions"]);
      labels[i]["functionPositions"] = randamiseArray(labels[i]["functionPositions"]);
      var fnId = 0;
      var lbId = 0;
      for(j=0; j<labels[i].length; j++){
        if(labels[i][j].type == "label"){
          labels[i][j].left = labels[i]["labelPositions"][lbId].left;
          labels[i][j].top = labels[i]["labelPositions"][lbId].top;
          lbId++;
        }else{
          //labels[i][j].left = labels[i]["functionPositions"][fnId].left;
          //labels[i][j].top = labels[i]["functionPositions"][fnId].top;
          fnId++;
        }
      }
    }
    //qNums = randamiseArray(qNums);

    if(navigation == true){
      $("#navBar").append("<div id='navHolder' />");
      for(i=0; i<totalScreens+2; i++){
        var left = i*60;
        var id = (i!=(totalScreens+1) && i!=0)?"screen_"+i:(i==0?"prevBtn":"nextBtn");
        var label = (i!=(totalScreens+1) && i!=0)?chars[i-1]:(i==0?"<":">");
        $("#navHolder").append("<div id='"+id+"' class='navButton' style='top:0px; left:"+left+"px;' >"+label+"</div>");
      }
      $("#prevBtn").addClass("prevbutton-disable");
      $("#prevBtn").addClass("navbutton-disable");
      $("#nextBtn").addClass("prevbutton-disable");
      $("#screen_1").addClass("navbutton-disable");
      prevClickedBtn = $("#screen_1");
      $("#counterCircle").text(chars[currScreen-1]);
    }else{
      $("#counterBox").hide();
      $("#discCont").css("left",65);
    }

    $("#navBar").append("<div id='instBtn'><h3></h3></div>");
    $("#navBar").append("<div id='checkBtn' onclick='check()'><h3></h3></div>");

    //$("#checkBtn").hide();
    $("#navBar").append("<div id='responceBox'></div>");
    $("#navBar").append("<div id='responceBoxAns'></div>");

    $("#responceBox").append("<div id='responceTxt1'>Incomplete</div>");
    $("#responceBox").append("<div id='nextqueBtn2' class='next'><p>Next</p></div>");

    $("#responceBoxAns").append("<div id='responceTxt2'>Well done!</div>");
    $("#responceBoxAns").append("<div id='nextqueBtn' class='next'><p>Next</p></div>");

    $("#responceBox").hide();
    $("#responceBoxAns").hide();

    $("#navBar").append("<div id='responceAlert'></div>");
    $("#responceAlert").append("<div id='responceTxt'>Not quite </div>");
    $("#responceAlert").append("<div id='tryAgainBtn'><p>Try again</p></div>");
    $("#responceAlert").append("<div id='showAnsBtn'><p>Reveal answer</p></div>");

    $("#responceAlert").hide();

    $("#nextqueBtn").click(function (){


      $("#responceBoxAns").animate({opacity:0, top:100}, function(){
      $("#responceBoxAns").hide();

      });
      currScreen++;
      if(currScreen == totalScreens){
        $("#nextBtn").addClass("navbutton-disable");
        $("#prevBtn").removeClass("navbutton-disable");

      }else{
        $("#prevBtn").removeClass("navbutton-disable");
        $("#nextBtn").removeClass("navbutton-disable");
      }
      $("#screen_"+currScreen).addClass("navbutton-disable");
      if(prevClickedBtn)
        prevClickedBtn.removeClass("navbutton-disable");

      prevClickedBtn = $("#screen_"+currScreen);

      setPosions();
    });


    $("#tryAgainBtn").click(function (){
      alertOpend = false;
      $("#responceAlert").animate({opacity:0, top:100}, function(){
      $("#responceAlert").hide();
      });
    });
    $("#showAnsBtn").click(function (){
      alertOpend = false;
      $("#responceAlert").animate({opacity:0, top:100},"slow", function(){
        $("#responceAlert").hide();
        showCorrectAnswers();
      });
    });

    $(".navButton").mouseover(function (){
      if(alertOpend){
        return false;
      }
      if($(this).hasClass("navbutton-disable")){
        return;
      }

      $(this).addClass("navButton-over");
    });

    $(".navButton").mousedown(function (){
      if(alertOpend){
        return false;
      }
      if($(this).hasClass("navbutton-disable")){
        return;
      }

      $(this).addClass("navButton-over");
    });
    $(".navButton").mouseout(function (){
      if(alertOpend){
        return false;
      }
      $(this).removeClass("navButton-over");
    });
    //Navigation click event starts

    $(".navButton").click(function (){
      if(alertOpend){
        return false;
      }
      $(this).removeClass("navButton-over");
      if($(this).hasClass("navbutton-disable")){
        return;
      }
      var clickedId = $(this).attr("id");

      if(clickedId == "prevBtn"){
        currScreen--;
      }else if(clickedId == "nextBtn"){
        currScreen++;

      }else{
        currScreen = Number(clickedId.split("_")[1]);

      }
      //0alert(clickedId+"    : "+currScreen)
      $("#counterCircle").text(chars[currScreen-1]);
      if(currScreen == 1){
        $("#prevBtn").addClass("prevbutton-disable");
        $("#prevBtn").addClass("navbutton-disable");
        //$("#nextBtn").removeClass("prevbutton-disable");
        $("#nextBtn").removeClass("navbutton-disable");

      }else if(currScreen == totalScreens){
        $("#nextBtn").addClass("navbutton-disable");
        $("#prevBtn").removeClass("navbutton-disable");
      }else{
        $("#prevBtn").removeClass("navbutton-disable");
        $("#nextBtn").removeClass("navbutton-disable");
      }
      $("#screen_"+currScreen).addClass("navbutton-disable");

      if(prevClickedBtn)
        prevClickedBtn.removeClass("navbutton-disable");

      prevClickedBtn = $("#screen_"+currScreen);

      setPosions();

    });
    //Navigation click event ends

    $("#instBtn").click(function (){
      if(alertOpend){
        return false;
      }
      $("#instPanel").show();

    });
    $("#instBtn").mouseover(function (){
      if(alertOpend){
        return false;
      }
      $("#instBtn").addClass("instBtn-hover");

    });
    $("#instBtn").mouseout(function (){
      if(alertOpend){
        return false;
      }
      $("#instBtn").removeClass("instBtn-hover");

    });

    $("#instBtn").mousedown(function (){
      if(alertOpend){
        return false;
      }
      $("#instBtn").addClass("instBtn-down");

    });
    $("#instBtn").mouseup(function (){
      if(alertOpend){
        return false;
      }
      $("#instBtn").removeClass("instBtn-down");

    });

    $("#insCloseBtn").click(function (){

      $("#instPanel").hide();

    });
    //TryAgain
    $("#tryAgainBtn").mouseover(function (){
      $("#tryAgainBtn").addClass("tryAgainBtnhover");

    });
    $("#tryAgainBtn").mouseout(function (){

      $("#tryAgainBtn").removeClass("tryAgainBtnhover");

    });

    $("#tryAgainBtn").mousedown(function (){

      $("#tryAgainBtn").addClass("tryAgainBtn-down");

    });

    $("#tryAgainBtn").mouseup(function (){

      $("#tryAgainBtn").removeClass("tryAgainBtn-down");

    });
    ///TryAgain
    //Showanswers
    $("#showAnsBtn").mouseover(function (){
      $("#showAnsBtn").addClass("showAnsBtnhover");

    });
    $("#showAnsBtn").mouseout(function (){
      $("#showAnsBtn").removeClass("showAnsBtnhover");

    });

    $("#showAnsBtn").mousedown(function (){
      $("#showAnsBtn").addClass("showAnsBtn-down");

    });

    $("#showAnsBtn").mouseup(function (){
      $("#showAnsBtn").removeClass("showAnsBtn-down");

    });
    //Showanswers
    $(".next").mouseover(function (){
      $("#nextqueBtn").addClass("nextqueBtnover");
      $("#nextqueBtn2").addClass("nextqueBtnover");


    });
    $(".next").mouseout(function (){
      $("#nextqueBtn").removeClass("nextqueBtnover");
      $("#nextqueBtn2").removeClass("nextqueBtnover");


    });


    ///Next

    $("#checkBtn").mouseover(function (){
      if($("#checkBtn").css("opacity") == .5){
        return;
      }
      $("#checkBtn").addClass("checkBtnOver");
    });

    $("#checkBtn").mouseout(function (){
      $("#checkBtn").removeClass("checkBtnOver");
    });
    $("#checkBtn").mousedown(function (){
      if($("#checkBtn").css("opacity") == .5){
        return;
      }
      $("#checkBtn").addClass("checkBtn-down");
    });

    $("#checkBtn").mouseup(function (){
      $("#checkBtn").removeClass("checkBtn-down");
    });


    $("#checkBtn").click(onCheckHandler);



    setPosions();

  }
  init();


// })
