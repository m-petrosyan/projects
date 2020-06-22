var input_div = document.getElementsByClassName('input_div');
var check_button = el_tabl_open = tips_instruction_open = checked = false;
var keyboard_dragable = false;
var this_line = this_task = 0;
// this_task = 13;
var done='undefined';
var task =[
    {
        "name" : "",
        "symbol" : "H<sup>+</sup>",
        "atomic" : "1",
        "mass" : "",
        "num_of_ne":"0",
        "num_of_ele":"",
        "answer" : {
            "name" : "Hydrogen",
            "symbol" : "",
            "atomic" : "",
            "mass" : "1",
            "num_of_ne":"",
            "num_of_ele":"0"
        }
    },
    {
        "name" : "Helium",
        "symbol" : "He",
        "atomic" : "",
        "mass" : "4",
        "num_of_ne":"",
        "num_of_ele":"",
        "answer":{
            "name" : "",
            "symbol" : "",
            "atomic" : "2",
            "mass" : "",
            "num_of_ne":"2",
            "num_of_ele":"2"
        }
    },
    {
        "name" : "",
        "symbol" : "",
        "atomic" : "3",
        "mass" : "7",
        "num_of_ne":"",
        "num_of_ele":"3",
        "answer":{
            "name" : "Lithium",
            "symbol" :["Li"],
            "atomic" : "",
            "mass" : "",
            "num_of_ne":"4",
            "num_of_ele":""
        }
    },
    {
        "name" : "Beryllium",
        "symbol" : "",
        "atomic" : "",
        "mass" : "9",
        "num_of_ne":"",
        "num_of_ele":"4",
        "answer":{
            "name" : "",
            "symbol" : ["Be"],
            "atomic" : "4",
            "mass" : "",
            "num_of_ne":"5",
            "num_of_ele":""
        }
    },
    {
        "name" : "Boron",
        "symbol" : "",
        "atomic" : "",
        "mass" : "",
        "num_of_ne":"6",
        "num_of_ele":"5",
        "answer":{
            "name" : "",
            "symbol" : ["B"],
            "atomic" : "5",
            "mass" : "11",
            "num_of_ne":"",
            "num_of_ele":""
        }
    },
    {
        "name" : "",
        "symbol" : "C",
        "atomic" : "",
        "mass" : "",
        "num_of_ne":"",
        "num_of_ele":"6",
        "answer":{
            "name" : "Carbon",
            "symbol" : "",
            "atomic" : "6",
            "mass" : "12",
            "num_of_ne":"6",
            "num_of_ele":""
        }
    },
    {
        "name" : "",
        "symbol" : "N",
        "atomic" : "",
        "mass" : "14",
        "num_of_ne":"",
        "num_of_ele":"7",
        "answer":{
            "name" : "Nitrogen",
            "symbol" : "",
            "atomic" : "7",
            "mass" : "",
            "num_of_ne":"7",
            "num_of_ele":""
        }
    },
    {
        "name" : "",
        "symbol" : "O<sup>2–</sup>",
        "atomic" : "",
        "mass" : "16",
        "num_of_ne":"",
        "num_of_ele":"",
        "answer":{
            "name" : "Oxygen",
            "symbol" : "",
            "atomic" : "8",
            "mass" : "",
            "num_of_ne":"8",
            "num_of_ele":"10"
        }
    },
    {
        "name" : "Fluorine",
        "symbol" : "",
        "atomic" : "",
        "mass" : "",
        "num_of_ne":"10",
        "num_of_ele":"10",
        "answer":{
            "name" : "",
            "symbol" : ["F<sup>-</sup>"],
            "atomic" : "9",
            "mass" : "19",
            "num_of_ne":"",
            "num_of_ele":""
        }
    },
    {
        "name" : "",
        "symbol" : "Na",
        "atomic" : "11",
        "mass" : "",
        "num_of_ne":"12",
        "num_of_ele":"",
        "answer":{
            "name" : "Sodium",
            "symbol" : "",
            "atomic" : "",
            "mass" : "23",
            "num_of_ne":"",
            "num_of_ele":"11"
        }
    },
    {
        "name" : "Magnesium",
        "symbol" : "",
        "atomic" : "",
        "mass" : "24",
        "num_of_ne":"",
        "num_of_ele":"10",
        "answer":{
            "name" : "",
            "symbol" : ["Mg<sup>2</sup><sup>+</sup>","Mg<sup>+</sup><sup>2</sup>"],
            "atomic" : "12",
            "mass" : "",
            "num_of_ne":"12",
            "num_of_ele":""
        }
    },
    {
        "name" : "",
        "symbol" : "Al",
        "atomic" : "",
        "mass" : "",
        "num_of_ne":"14",
        "num_of_ele":"",
        "answer":{
            "name" : "Aluminium",
            "symbol" : "",
            "atomic" : "13",
            "mass" : "27",
            "num_of_ne":"",
            "num_of_ele":"13"
        }
    },
    {
        "name" : "Phosphorus",
        "symbol" : "",
        "atomic" : "",
        "mass" : "",
        "num_of_ne":"",
        "num_of_ele":"15",
        "answer":{
            "name" : "",
            "symbol" : ["P"],
            "atomic" : "15",
            "mass" : "31",
            "num_of_ne":"16",
            "num_of_ele":""
        }
    },
    {
        "name" : "Sulfur",
        "symbol" : "",
        "atomic" : "",
        "mass" : "32",
        "num_of_ne":"",
        "num_of_ele":"16",
        "answer":{
            "name" : "",
            "symbol" : ["S"],
            "atomic" : "16",
            "mass" : "",
            "num_of_ne":"16",
            "num_of_ele":""
        }
    },
    {
        "name" : "Chlorine",
        "symbol" : "",
        "atomic" : "",
        "mass" : "35",
        "num_of_ne":"",
        "num_of_ele":"18",
        "answer":{
            "name" : "",
            "symbol" : ["Cl<sup>-</sup>"],
            "atomic" : "17",
            "mass" : "",
            "num_of_ne":"18",
            "num_of_ele":""

        }
    },
    {
        "name" : "",
        "symbol" : "K<sup>+</sup>",
        "atomic" : "",
        "mass" : "39",
        "num_of_ne":"",
        "num_of_ele":"",
        "answer":{
            "name" : "Potassium",
            "symbol" : "",
            "atomic" : "19",
            "mass" : "",
            "num_of_ne":"20",
            "num_of_ele":"18"
        }
    },
    {
        "name" : "",
        "symbol" : "Ca",
        "atomic" : "",
        "mass" : "",
        "num_of_ne":"20",
        "num_of_ele":"",
        "answer":{
            "name" : "Calcium",
            "symbol" : "",
            "atomic" : "20",
            "mass" : "40",
            "num_of_ne":"",
            "num_of_ele":"20"
        }
    },
    {
        "name" : "",
        "symbol" : "Br",
        "atomic" : "",
        "mass" : "",
        "num_of_ne":"45",
        "num_of_ele":"",
        "answer":{
            "name" : "Bromine",
            "symbol" : "",
            "atomic" : "35",
            "mass" : "80",
            "num_of_ne":"",
            "num_of_ele":"35"
        }
    },
    {
        "name" : "",
        "symbol" : "Cu<sup>2+</sup>",
        "atomic" : "",
        "mass" : "63",
        "num_of_ne":"",
        "num_of_ele":"",
        "answer":{
            "name" : "Copper",
            "symbol" : "",
            "atomic" : "29",
            "mass" : "",
            "num_of_ne":"34",
            "num_of_ele":"27"
        }
    },
    {
        "name" : "Silver",
        "symbol" : "",
        "atomic" : "",
        "mass" : "108",
        "num_of_ne":"",
        "num_of_ele":"46",
        "answer":{
            "name" : "",
            "symbol" : ["Ag<sup>+</sup>"],
            "atomic" : "47",
            "mass" : "",
            "num_of_ne":"61",
            "num_of_ele":""
        }
    }
]

var input_array = [];

for (var i = 0; i < input_div.length; i++) {
    input_array[i]=0
}

if (screensRandom) {

    task = randamiseArray(task);
}

function get_element() {
    done_count=0
    fraction_count = mixed_fraction_count = sup_sub_count = fraction_el_count = mixed_fraction_el_count = 0;
    sup_sub_on = sup_sub_set = fraction_on = fraction_set = mixed_fraction_on = mixed_fraction_set = once_up = up = false;

    $('.sub_sup').css({'border': 'none', 'background': 'none','color':'#ff9900'})
    $('.sub_sup').children('div:nth-child(2)').css({'border':'2px solid #ff9900','color':'#ff9900'})

    $('.fraction').css({'border':'none','background':'none','color':'#ff9900'})
    $('.fraction').children('div').css('border','2px solid #ff9900')
    $('.fraction').children('span').css('border-bottom','2px solid #ff9900')
    $('.fraction').children('div').first().css('border', '2px solid #ff9900')

    $('.mixed_fraction').css({'border':'none','background':'none','color':'#ff9900'})
    $('.mixed_fraction').children('div:nth-child(1)').css('border','2px solid #ff9900')
    $('.mixed_fraction').children('div').css('border','2px solid #ff9900')
    $('.mixed_fraction').children('span').css('border-bottom','2px solid #ff9900')
    $('.mixed_fraction').children('div').first().css('border', '2px solid #ff9900')


    for (var i = 0; i < input_div.length; i++) {
        input_array[i]=0
        input_div[i].style.cursor="pointer";
    }

    $(".input_div").attr("empty", "yes");
    check_button=false
    $("#checkBtn").css({"opacity":".5","cursor":"unset"})
    for (var i = 0; i < input_div.length; i++) {
        var b = input_div[i].getAttribute("data-name")
        input_div[i].innerHTML=task[this_task][b]
        if (input_div[i].innerHTML != "") {
            input_div[i].setAttribute("empty", "no");
            input_div[i].style.cursor="unset";
        }
        else {
            done_count++
        }
    }
    for (var i = 0; i < input_div.length; i++) {
        if (input_div[i].getAttribute("empty")=='yes') {
            this_line=i;
            $('.input_div').css('border','2px solid gray')
            break
        }
    }
    checked=false
    $('#key_board').css('display','none')
    alert_hide()
}
get_element()


function check(){
    if (check_button) {
        check_button=false
        $("#checkBtn").css({"opacity":".5","cursor":"unset"})

        all_full=true
        for (var i = 0; i < input_div.length; i++) {
            if (input_div[i].getAttribute("empty")=='yes') {
                if (input_div[i].innerHTML=="") {
                    all_full=false
                    alert_open('Incomplete')
                    break
                }
            }
        }
        if (all_full) {
            if (done!='undefined') {
                $(".input_div").removeClass("error")
                $(".input_div").removeClass("done")
            }
            done=0
            $("[empty=yes]").each(function(){

                var this_data_name = task[this_task]["answer"][$(this).data('name')]
                var this_string = $(this).html();

                var text = this_string.replace('&nbsp;-','-').replace('-&nbsp;','-').replace('+&nbsp;','+').replace('&nbsp;+','+').replace('<sup>&nbsp;</sup><sup>-</sup>','<sup>-</sup>').replace('<sup>-</sup><sup>&nbsp;</sup>','<sup>-</sup>').replace('<sup>&nbsp;</sup><sup>+</sup>','<sup>+</sup>').replace('<sup>+</sup><sup>&nbsp;</sup>','<sup>+</sup>').replace('&nbsp;<sup>-</sup>','<sup>-</sup>').replace('&nbsp;<sup>+</sup>','<sup>+</sup>').replace('<sup>+</sup>&nbsp;','<sup>+</sup>').replace('<sup>-</sup>&nbsp;','<sup>-</sup>')

                // console.log(text+' = '+this_data_name)
                if ( $(this).data('name') == 'symbol') {

                    if (this_data_name.includes(text)) {
                        $(this).addClass("done")
                        done++
                    }
                    else {
                        $(this).addClass("error")
                    }
                }
                else {
                    if (text.toLowerCase() === this_data_name.toLowerCase() ) {
                        $(this).addClass("done")
                        done++
                    }
                    else {
                        $(this).addClass("error")
                    }
                }
            })
            if (done==done_count) {
                alert_open('Well done!')
            }
            else {
                alert_open('Not quite')
            }
        }
    }
    checked=true
    document.getElementsByClassName('input_div')[this_line].style.border='2px solid gray'
}



function alert_open(z) {
    if (z=='Incomplete') {
        document.getElementById('responceTxt1').innerHTML=z
        $("#responceBox").css({"display":"block",zIndex:1})
        $("#responceBox").animate({opacity:1, top:-140})
        $("#responceTxt1").css({"line-height":" 109px","color":"white"})
        $("#responceTxt1").css({"display":"block"})
        $(".next").css('display','none')
    }
    else if (z=='Not quite') {
        $("#responceBox").css('display','none')
        document.getElementById('responceTxt1').innerHTML=z
        $("#responceAlert").css({"display":"block",zIndex:1})
        $("#responceAlert").animate({opacity:1, top:-140})
        $("#responceTxt").css({"line-height":" 109px","color":"white","font-size":"20px","text-align":"center"})

    }
    else if (z=='Well done!') {
        $("#responceBox").css('display','none')
        $("#responceBoxAns").css({"display":"block",zIndex:1})
        $("#responceBoxAns").animate({opacity:1, top:-140})
        $(".next").css({'left':'131px','display':'block'})
        $("#responceTxt2").css('display','block')
    }

    else if (z=='done') {
        $("#responceBoxAns").css('display','none')
        $("#responceTxt2").css('display','none')
        $(".next").css({'display':'block','left':'6px'})
        $("#responceBox").css({"display":"block",zIndex:1})
        $("#responceBox").animate({opacity:1, top:-140})
    }

}

function alert_hide(){
    $("#responceBoxAns").css({"display":"none",zIndex:1})
    $("#responceBoxAns").animate({opacity:0, top:140})
    $("#responceAlert").css({"display":"none",zIndex:1})
    $("#responceAlert").animate({opacity:0, top:140})
    $("#responceBox").css({"display":"none",zIndex:1})
    $("#responceBox").animate({opacity:0, top:140})
    $("#responceTxt1").css({"display":"none"})
}



$( "#showAnsBtn" ).click(function() {
    $("[empty=yes]").each(function(){

        if ( $(this).data('name') == 'symbol') {
            this.innerHTML= task[this_task]["answer"][$(this).data('name')][0]
        }

        else {
            this.innerHTML= task[this_task]["answer"][$(this).data('name')]
        }
        $(".input_div").removeClass("error")
        $(this).addClass("done")

    })
    alert_open('done')
})



$( ".next" ).click(function() {
    this_task++
    if (this_task == task.length) {
        this_task=0
    }
    $(".input_div").removeClass("error")
    $(".input_div").removeClass("done")
    get_element()
});




function element_legend(t){
    img=t.getAttribute('img')
    document.getElementById('element_legend').style.display="block"
    document.getElementById('this_legend_img').src='img/periodictable_elements/'+img
}

function close_legend() {
    document.getElementById('element_legend').style.display="none"
}


function elements_table_open_close(x) {
    console.log(x.parentElement);
    if ($(x).is("#open_el_img") || $(x).is("#elements_table")|| $(x).is("#elements_group_1")|| $(x.parentElement).is("#close_legend2")) {
        if (el_tabl_open) {
            $("#elements_table").css("display","none")
            $("#element_legend").css("display","none")
            $("#elements_settings").css("display","block")
            el_tabl_open=false
        }
        else {
            $("#elements_table").css("display","block")
            $("#elements_settings").css("display","none")
            el_tabl_open=true
        }
    }
}






function input_div_default_style(x) {
    $("#checkBtn").css({"opacity":"1","cursor":"pointer"})
    check_button=true
    if (checked) {
        $(".input_div").removeClass("error").removeClass("done");
    }

    if (x=='!done') {
        $('#key_board').css('display','none')
        $('.input_div').css('border','2px solid gray')
    }
    else if(x=='done'){
        $('.input_div').css('border','2px solid gray')
        $(input_div[this_line]).css('border','2px solid red')
    }
    alert_hide();
}


function limit_check(){
    if (this_line == 0) {
        if (input_array[this_line]>=20) {
            return 'no'
        }
        else {
            return 'yes'
        }
    }
    else {
        if (input_array[this_line]>=6) {
            return 'no'
        }
        else {
            return 'yes'
        }
    }
}

function tips_instruction() {

    if (tips_instruction_open) {
        $("#tips_instruction").css({"width":"0px","transition":"1s"})
        $("#tips_close_img").css({"top":"0px","transition":".7s"})
        tips_instruction_open=false
    }
    else {
        $("#tips_instruction").css({"width":"800px","transition":"1s"})
        $("#tips_close_img").css({"top":"106px","transition":"1.1s"})

        tips_instruction_open=true
    }
}

function get_button(t){
    alert_hide();

    if (t.getAttribute('active') === 'yes') {
        var limit = limit_check()
        if (limit !=='no') {
            let response = simpleClick(t);
            if (response[0] === 'startSup' || response[0] === 'startSub') {
                document.getElementsByClassName('input_div')[this_line].innerHTML += response[1];
            } else if (response[0] === 'fraction') {

                document.getElementsByClassName('input_div')[this_line].innerHTML += response[1];
                $('.fraction_majax_del').css('color','transparent')
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName('input_div')[this_line]]);
                setTimeout(function(){ $('.fraction_majax_del').css('color','#000') }, 200);
            } else if (response[0] === 'mixed_fraction') {
                document.getElementsByClassName('input_div')[this_line].innerHTML += response[1];
                $('.mixed_fraction_majax_child_del').css('color','transparent')
                setTimeout(function(){ $('.mixed_fraction_majax_child_del').css('color','#000') }, 200);
                MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName('input_div')[this_line]]);
            } else if (response[0] === 'up') {
                document.getElementsByClassName('input_div')[this_line].innerHTML += response[1];
            } else if (response[0] === 'down') {
                document.getElementsByClassName('input_div')[this_line].innerHTML += response[1];
            }
            input_array[this_line]+=1;
        }
    }
    $("#checkBtn").css({"opacity":"1","cursor":"pointer"});
    check_button=true;
    if (checked) {
        $(".input_div").removeClass("error").removeClass("done");
    }
}
