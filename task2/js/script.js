element = document.getElementsByClassName('element');
elements = document.getElementById('elements');
selected_element = document.getElementById('selected_element');
check_area = document.getElementById('check_area');
check_class = document.getElementsByClassName('check_area');
check_style = document.getElementsByClassName('check_style');
dot = document.getElementsByClassName('dot');
dots = document.getElementById('dots');
element_name = document.getElementById('element_name');
lewis_diagram = document.getElementById('lewis_diagram');
selected = document.getElementById('selected');
element_symbol=document.getElementById('element_symbol');
out=false;
reset=false;
var check_button = reveal_clicked = false;
var correct = 0;
var show_btn= true;

function select(t,bck){
	lewis_diagram.style.visibility="visible";
	lewis_diagram.style.opacity="1";
	selected_element.style.display="block"
  elements.style.display="none";
  selected_element.style.background=bck;
  symbol = t.children;
  element_symbol.innerHTML=symbol[1].innerHTML
  el_name = t.getAttribute("el_name");
  element_name.innerHTML=el_name
}


function close_diagram(){
    reveal_clicked = false;
    selected_element.style.display="none"
    lewis_diagram.style.visibility="hidden";
    lewis_diagram.style.opacity="0";
	elements.style.display="block";
	$("#responceAlert").css({"display":"block",zIndex:-10})
	$("#responceAlert").animate({opacity:1, top:0})
	$("#done").css({"display":"block",zIndex:0})
	$("#done").animate({opacity:1, top:140})
	$("#responceBox").css({"display":"block",zIndex:0})
	$("#responceBox").animate({opacity:1, top:140})
	$(".check_style").css("border","3px solid white")
	check_button=false
	$("#checkBtn").css({"opacity":".5","cursor":"pointer"})
	again();
}





lefta=-70
topa=0

for (var i = 0; i < dot.length; i++) {

	if (i<4) {
		lefta+=70
	}
	else if (i==4) {
		lefta=0
		topa=70
	}
	else {
		lefta+=70
		topa=70
	}
	dot[i].style.left=lefta+"px"
	dot[i].style.top=topa+"px"
}




start_position=false
remove=false
left=590;
top=350;


function area_border() {
	for (var i = 0; i < check_class.length; i++) {
		if (check_class[i].innerHTML=="") {
				check_class[i].style.border="3px solid white"
		}
	}
}



function dragdrop() {
    if (!reveal_clicked) {

        out = false
        $('.dot').draggable({
            helper: 'original',
            revert: "invalid",
            stack: ".dot",
            start: function (event, ui) {
                $(".dot").css("z-index", "1")
                $("#responceAlert").animate({opacity: 1, top: 140})
                $("#responceBox").animate({opacity: 1, top: 140})
                $("#done").animate({opacity: 1, top: 140})
                show_btn = true
                console.log('1')
            },
            stop: function (event, ui) {
                console.log('1')
            }
        });


        $('.check_area').droppable({
            accept: ".dot",
            activeClass: "ui-state-default",
            hoverClass: "ui-droppable-hover",
            drop: function (ev, ui) {
                $(this).droppable('option', 'accept', ui.draggable);
                var droppedItem = ui.draggable;
                var child = $(this).children();
                $(this).append(droppedItem);
                // $(this).children().removeClass("dot")
                $(this).children().addClass("new_dot")
                $(this).children().css({"top": "0px", "left": "0px"});
                $("#checkBtn").css({"opacity": "1", "cursor": "pointer"})
                $(this).removeClass("check_area")
                check_button = true
                dragdrop();
            },
            out: function (event, ui) {
                $(this).droppable('option', 'accept', '.dot');
                $(this).addClass("check_area")
                $(this).css("border", "3px solid white")
            }
        })


    /////////////new_dot///////////////


        $('.new_dot').draggable({
            helper: 'original',
            revert: "false",
            stack: ".new_dot",
            start: function (event, ui) {
                // console.log('000')
                $("#responceAlert").animate({opacity: 1, top: 140})
                $("#responceBox").animate({opacity: 1, top: 140})
                $("#done").animate({opacity: 1, top: 140})
                ui.helper.data('dropped', false);
                show_btn = true
                out = true

            },
            stop: function (event, ui) {
                if (out) {
                    // console.log('111')
                    console.log(1515)
                    $('#this_dot').append(this);
                    $('#this_dot').children().removeClass("new_dot")
                    $('#this_dot').children().addClass("dot")
                    var obj = $('#this_dot').find('.dot')[0]
                    var d_top = obj.getAttribute("d_top")
                    var d_left = obj.getAttribute("d_left")
                    obj.style.top = d_top
                    obj.style.left = d_left
                    $('#dots').append(obj);
                }
                area_border()
            }
        });


        $('#dots_area').droppable({
            accept: ".new_dot",
            // accept: ":not(.ui-sortable-helper)",
            drop: function (ev, ui) {
                // ui.helper.data('dropped', true);
                var droppedItem = ui.draggable;
                $('#this_dot').append(droppedItem);
                $('#this_dot').children().removeClass("new_dot")
                $('#this_dot').children().addClass("dot")
                // var child = $('#this_dot').children();
                var obj = $('#this_dot').find('.dot')[0]
                var d_top = obj.getAttribute("d_top")
                var d_left = obj.getAttribute("d_left")
                obj.style.top = d_top
                obj.style.left = d_left
                $('#dots').append(obj);
                $("#checkBtn").css({"opacity": "1", "cursor": "pointer"})
                check_button = true
                // setTimeout(function(){ position(d_top,d_left,obj); }, 20);
                // position(d_top,d_left,obj)
                out = false
                dragdrop()
            },
            out: function (event, ui) {

            },
            over: function (event, ui) {

            }
        })
    }
}




function check() {
	ok = true;
	num = 0;
	a = document.getElementsByClassName('check_style');
	x = element_symbol.innerHTML;
	////////////////////1////////////////////
	if (x === "H" || x === "Li" || x === "Na" || x === "K" || x === "Rb" || x === "Cs" || x === "Fr") {
		for (var i = 0; i < a.length; i++) {
			if (a[i].innerHTML !== "") {
				num++
			}
		}
		if (num === 1) {
			correct = 1
		} else {
			correct = 3
		}
	}
	////////////////////2////////////////////
	if (x === "Be" || x === "Mg" || x === "Ca" || x === "Sr" || x === "Ba" || x === "Ra") {
		for (var i = 0; i < a.length; i++)
		{
			if (a[i].innerHTML !== "") {
				if (a[0].innerHTML !== "" && a[1].innerHTML !== "" || a[2].innerHTML !== "" && a[3].innerHTML !== "" || a[4].innerHTML !== "" && a[5].innerHTML !== "" || a[6].innerHTML !== "" && a[7].innerHTML !== "") {
					ok = false
				}
				num++
			}
		}
		if (num === 2 && ok) {
			correct = 1
		} else if (num < 2) {
			correct = 2
		} else {
			correct = 3
		}
	}
	////////////////////3/////////////////////
	if (x === "B" || x === "Al" || x === "Ga" || x === "In" || x === "Tl" || x === "Nh") {
		for (var i = 0; i < a.length; i++) {
			if (a[i].innerHTML !== "") {
				if (a[0].innerHTML !== "" && a[1].innerHTML !== "" || a[2].innerHTML !== "" && a[3].innerHTML !== "" || a[4].innerHTML !== "" && a[5].innerHTML !== "" || a[6].innerHTML !== "" && a[7].innerHTML !== "") {
					ok = false
				}
				num++
			}
		}
		if (num === 3 && ok) {
			correct = 1
		} else if (num < 3) {
			correct = 2
		} else {
			correct = 3
		}
	}
	////////////////////4/////////////////////
	if (x === "C" || x === "Si" || x === "Ge" || x === "Sn" || x === "Pb" || x === "Fl") {
		for (var i = 0; i < a.length; i++) {
			if (a[i].innerHTML !== "") {
				if (a[0].innerHTML !== "" && a[1].innerHTML !== "" || a[2].innerHTML !== "" && a[3].innerHTML !== "" || a[4].innerHTML !== "" && a[5].innerHTML !== "" || a[6].innerHTML !== "" && a[7].innerHTML !== "") {
					ok = false
				}
				num++
			}
		} if (num === 4 && ok) {
			correct = 1
		} else if (num < 4) {
			correct = 2
		} else {
			correct = 3
		}
	}
	////////////////////5/////////////////////
	ok = 0;
	if (x === "N" || x === "P" || x === "As" || x === "Sb" || x === "Bi" || x === "Mc") {
		for (var i = 0; i < a.length; i++) {
			if (a[i].innerHTML !== "") {
				num++
			}
		}
		if (a[0].innerHTML !== "" && a[1].innerHTML !== "") {
			ok++
		}
		if (a[2].innerHTML !== "" && a[3].innerHTML !== "") {
			ok++
		}
		if (a[4].innerHTML !== "" && a[5].innerHTML !== "") {
			ok++
		}
		if (a[6].innerHTML !== "" && a[7].innerHTML !== "") {
			ok++
		}
		if (num === 5 && ok === 1) {
			correct = 1
		} else if (num < 5) {
			correct = 2
		} else {
			correct = 3
		}
	}
	////////////////////6/////////////////////
	if (x === "O" || x === "S" || x === "Se" || x === "Te" || x === "Po" || x === "Lv") {
		for (var i = 0; i < a.length; i++) {
			if (a[i].innerHTML !== "") {
				num++
			}
		}
		if (a[0].innerHTML !== "" && a[1].innerHTML !== "") {
			ok++
		}
		if (a[2].innerHTML !== "" && a[3].innerHTML !== "") {
			ok++
		}
		if (a[4].innerHTML !== "" && a[5].innerHTML !== "") {
			ok++
		}
		if (a[6].innerHTML !== "" && a[7].innerHTML !== "") {
			ok++
		}
		if (num === 6 && ok === 2) {
			correct = 1
		} else if (num < 6) {
			correct = 2
		} else {
			correct = 3
		}
	}
	////////////////////7/////////////////////
	if (x === "F" || x === "Cl" || x === "Br" || x === "I" || x === "At" || x === "Ts") {
		for (var i = 0; i < a.length; i++) {
			if (a[i].innerHTML !== "") {
				num++
			}
		}
		if (num === 7) {
			correct = 1
		} else if (num < 7) {
			correct = 2
		} else {
			correct = 3
		}
	}
	////////////////////8/////////////////////
	if (x === "He" || x === "Ne" || x === "Ar" || x === "Kr" || x === "Xe" || x === "Rn" || x === "Og") {
		for (var i = 0; i < a.length; i++) {
			if (a[i].innerHTML !== "") {
				num++
			}
		}
		if (num === 8) {
			correct = 1
		} else if (num < 8) {
			correct = 2
		} else {
			correct = 3
		}
	}
	if (check_button && num !== 0) {
		if (show_btn) {
			if (correct === 1) {
				$(".selective span").filter(function() {
					var text = $(this).text();
					return text === x
				}).parent().addClass("tick");
				$("#done").css({"display": "block", zIndex: 10})
				$("#done").animate({opacity: 1, top: -140})
                reveal_clicked = true;
                $(".dot").removeClass(".dot")
                $(".new_dot").removeClass(".new_dot")
                well_done()


			} else if (correct === 2) {
				$("#responceBox").css({"display": "block", zIndex: 10})
				$("#responceBox").animate({opacity: 1, top: -140})
			} else {
				$("#responceAlert").css({"display": "block", zIndex: 10})
				$("#responceAlert").animate({opacity: 1, top: -140})
			}
		} else {
			if (correct) {
				$(".selective span").filter(function() {
					var text = $(this).text();
					return text === x
				}).parent().addClass("tick");
				$("#done").css({"display": "block", zIndex: 10})
				$("#done").animate({opacity: 1, top: 140})
			} else if (correct === 2) {
				$("#responceBox").css({"display": "block", zIndex: 10})
				$("#responceBox").animate({opacity: 1, top: -140})
			} else {
				$("#responceAlert").css({"display": "block", zIndex: 10})
				$("#responceAlert").animate({opacity: 1, top: 140})
			}
		}
		show_btn = true
		check_button = false
		$("#checkBtn").css({"opacity": ".5", "cursor": "unset"})
	} else if (num === 0) {
		$("#responceBox").css({"display": "block", zIndex: 10})
		$("#responceBox").animate({opacity: 1, top: -140})
		$("#checkBtn").css({"opacity": ".5", "cursor": "unset"})
		check_button = false
		show_btn = true
	}
}


function well_done() {

    z=0;
    for (var i = 0; i < check_style.length; i++) {
       if(check_style[i].innerHTML!="")
       {
           check_style[i].innerHTML='<div class="new_dot" style="left:0px;top:0px"></div>'
           z++
       }
       else {
           check_style[i].innerHTML=""
       }
    }



        for (i=0;i<dot.length;i++) {
            console.log(dot.length)
            d_left = dot[0].getAttribute("d_left");
            d_top = dot[0].getAttribute("d_top");
            dot[0].remove()
            obj = '<div class="dot" style="left:'+d_left+';top:'+d_top+';cursor:unset"></div>'
            dots.innerHTML+=obj

        }

}




function reveal() {

    console.log('sda')
check_button= show_btn =false;
reveal_clicked =true;

	for (var i = 0; i < check_style.length; i++) {
		check_style[i].innerHTML="";
			 $(check_style[i]).addClass("check_area");
	}





	 if (x=="H"||x=="Li"||x=="Na"||x=="K"||x=="Rb"||x=="Cs"||x=="Fr") {
 		 a[4].innerHTML='<div d_left="210px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
	 }

	 if (x=="Be"||x=="Mg"||x=="Ca"||x=="Sr"||x=="Ba"||x=="Ra") {
		 a[0].innerHTML='<div d_left="140px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
 		 a[4].innerHTML='<div d_left="210px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
	 }

	 if (x=="B"||x=="Al"||x=="Ga"||x=="In"||x=="Tl"||x=="Nh") {
		 a[0].innerHTML='<div d_left="140px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
 	   a[2].innerHTML='<div d_left="70px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
 		 a[4].innerHTML='<div d_left="210px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
	 }

	 if (x=="C"||x=="Si"||x=="Ge"||x=="Sn"||x=="Pb"||x=="Fl") {
	  a[0].innerHTML='<div d_left="140px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[2].innerHTML='<div d_left="70px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[4].innerHTML='<div d_left="210px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[6].innerHTML='<div d_left="0px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
	 }


	 if (x=="N"||x=="P"||x=="As"||x=="Sb"||x=="Bi"||x=="Mc") {
		a[0].innerHTML='<div d_left="140px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
 		a[2].innerHTML='<div d_left="70px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
 		a[3].innerHTML='<div d_left="210px"  d_top="0px" class="new_dot" style="left:0px;top:0px"></div>'
 		a[4].innerHTML='<div d_left="210px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
 		a[6].innerHTML='<div d_left="0px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
	 }

	if (x=="O"||x=="S"||x=="Se"||x=="Te"||x=="Po"||x=="Lv") {

		a[0].innerHTML='<div d_left="140px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[1].innerHTML='<div d_left="140px" d_top="0px" class="new_dot" style="left:0px;top:0px"></div>'
		a[2].innerHTML='<div d_left="70px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[3].innerHTML='<div d_left="210px"  d_top="0px" class="new_dot" style="left:0px;top:0px"></div>'
		a[4].innerHTML='<div d_left="210px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[6].innerHTML='<div d_left="0px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
	}

	if (x=="F"||x=="Cl"||x=="Br"||x=="I"||x=="At"||x=="Ts") {
		a[0].innerHTML='<div d_left="140px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[1].innerHTML='<div d_left="140px" d_top="0px" class="new_dot" style="left:0px;top:0px"></div>'
		a[2].innerHTML='<div d_left="70px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[3].innerHTML='<div d_left="210px"  d_top="0px" class="new_dot" style="left:0px;top:0px"></div>'
		a[4].innerHTML='<div d_left="210px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[6].innerHTML='<div d_left="0px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[7].innerHTML='<div d_left="70px"  d_top="0px" class="new_dot" style="left:0px;top:0px"></div>'
	}

	if (x=="He"||x=="Ne"||x=="Ar"||x=="Kr"||x=="Xe"||x=="Rn"||x=="Og") {
		a[0].innerHTML='<div d_left="140px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[1].innerHTML='<div d_left="140px" d_top="0px" class="new_dot" style="left:0px;top:0px"></div>'
		a[2].innerHTML='<div d_left="70px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[3].innerHTML='<div d_left="210px"  d_top="0px" class="new_dot" style="left:0px;top:0px"></div>'
		a[4].innerHTML='<div d_left="210px" d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[5].innerHTML='<div d_left="0px" d_top="0px" class="new_dot" style="left:0px;top:0px"></div>'
		a[6].innerHTML='<div d_left="0px"  d_top="70px" class="new_dot" style="left:0px;top:0px"></div>'
		a[7].innerHTML='<div d_left="70px"  d_top="0px" class="new_dot" style="left:0px;top:0px"></div>'
	}
    $('.new_dot').css('cursor','unset')
	minus=0
	for (var i = 0; i < check_style.length; i++) {
		if (check_style[i].innerHTML!="") {
				minus++
		}
	}




	dot_create(minus)

		function dot_create(x) {
			dots.innerHTML=""
			dot = document.getElementsByClassName('dot')

				lefta=-70
				topa=0


			dots.innerHTML+='<span class="dotBg" style="left: 0px; top: 0px;"></span>\
				<span class="dotBg" style="left: 70px; top: 0px"></span>\
				<span class="dotBg" style="left: 140px; top: 0px"></span>\
				<span class="dotBg" style="left: 210px; top: 0px"></span>\
				<span class="dotBg" style="left: 0px; top: 70px"></span>\
				<span class="dotBg" style="left: 70px; top: 70px"></span>\
				<span class="dotBg" style="left: 140px; top: 70px"></span>\
				<span class="dotBg" style="left: 210px; top: 70px"></span>'
				for (var i = 0; i < 8-x; i++) {
							dots.innerHTML+='<div class="dot" style="float:left;cursor:unset"></div>'

					if (i<4) {
						lefta+=70
					}
					else if (i==4) {
						lefta=0
						topa=70
					}
					else {
						lefta+=70
						topa=70
					}
				t = topa.toString()
				l = lefta.toString()
				 $(dot[i]).attr("d_top",t);
				 $(dot[i]).attr("d_left",l);
					dot[i].style.left=l+"px"
					dot[i].style.top=t+"px"

				}
		}
		$(".selective span").filter(function () {
			var text = $(this).text();
			return text === x
		}).parent().addClass("tick");


	dragdrop()
}


function again() {
	for (var i = 0; i < check_style.length; i++) {
		check_style[i].innerHTML=""
			 $(check_style[i]).addClass("check_area");
	}
	$("#checkBtn").css({"opacity":".5","cursor":"unset"})
	check_button = false;
	correct = 3;
		dots.innerHTML='<span class="dotBg" style="left: 0px; top: 0px;"></span>\
				<span class="dotBg" style="left: 70px; top: 0px;"></span>\
				<span class="dotBg" style="left: 140px; top: 0px;"></span>\
				<span class="dotBg" style="left: 210px; top: 0px;"></span>\
				<span class="dotBg" style="left: 0px; top: 70px;"></span>\
				<span class="dotBg" style="left: 70px; top: 70px;"></span>\
				<span class="dotBg" style="left: 140px; top: 70px;"></span>\
				<span class="dotBg" style="left: 210px; top: 70px;"></span>'
	dot = document.getElementsByClassName('dot')


	for (var i = 0; i < 8; i++) {
		dots.innerHTML+='<div class="dot"></div>'
	}


	lefta=-70
	topa=0

	for (var i = 0; i < 8; i++) {

		if (i<4) {
			lefta+=70
		}
		else if (i==4) {
			lefta=0
			topa=70
		}
		else {
			lefta+=70
			topa=70
		}



	t = topa.toString()
	l = lefta.toString()
	 $(dot[i]).attr("d_top",t+'px');
	 $(dot[i]).attr("d_left",l+'px');
		dot[i].style.left=lefta+"px"
		dot[i].style.top=topa+"px"
	}

	$(".check_style").css("border","3px solid white")
	dragdrop()

}





////////////////////////////////////////////////////////////////////////////////////







$(function (){
  var mode = "prob";
  var devType = 2;
  var activityTitle = "Build Lewis diagrams for elements";
  var gradeTitle = "Physical Sciences Grade <B>11</B>";

  var discriptText = "Click on any of the elements in the coloured blocks to build its Lewis diagram.";

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
    $("#responceBoxAns").hide();

    $("#mainContent").append("<div id='contentImg'></div>");
    $("#contentImg").css("background", "url(assets/bg.png)no-repeat");
    $("#contentImg").css({"background-size": "101.5%","position": "absolute","left": "15px","height": "98%", "width": "100%", "top": "9px"});
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
    $("#navBar").append("<div id='checkBtn'><h3></h3></div>");

    //$("#checkBtn").hide();
    $("#navBar").append("<div id='responceBox'></div>");
    $("#navBar").append("<div id='responceBoxAns'></div>");
    $("#responceBox").append("<div id='responceTxt1'><p>You need more electrons</p></div>");

    $("#responceBox").hide();
    $("#responceBoxAns").hide();

    $("#navBar").append("<div id='responceAlert'></div>");
    $("#responceAlert").append("<div id='responceTxt'><p>Not quite</p></div>");
    $("#responceAlert").append("<div id='tryAgainBtn'><p>Try again</p></div>");
    $("#responceAlert").append("<div id='showAnsBtn'><p>Reveal answer</p></div>");
    $("#responceAlert").hide();



    $("#navBar").append("<div id='done'></div>");
    $("#done").append("<div id='doneTxt'><p>Well done!</p></div>");
    $("#done").hide();





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
			check_button=false
			$("#checkBtn").css({"opacity":".5","cursor":"unset"})
		  $("#responceAlert").animate({opacity:1, top:-140})
      $("#responceAlert").animate({opacity:0, top:140}, function(){
      $("#responceAlert").hide();
      });
      again();
    });


    $("#showAnsBtn").click(function (){
      alertOpend = false;
			reveal()
      $("#responceAlert").animate({opacity:0, top:140},"slow", function(){
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
    $("#nextqueBtn").mouseover(function (){
      $("#nextqueBtn").addClass("nextqueBtnover");

    });
    $("#nextqueBtn").mouseout(function (){
      $("#nextqueBtn").removeClass("nextqueBtnover");

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


    $("#checkBtn").click(check);



    setPosions();

  }
  init();

})

dragdrop()
