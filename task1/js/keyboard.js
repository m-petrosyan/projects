var keyboardHTML = '<div id="keyboard">\n' +
	'  <div id="keyboard_operations_buttons">\n' +
	'      <div id="operations_bck">\n' +
	'\n' +
	'        <div class="sup sub_sup" set="no" onclick="sup_sub(this,\'up\')"  onmouseover="(over(this,\'sub_sup\'))" onmouseleave="(leave(this,\'sub_sup\'))">\n' +
	'          <div>T</div>\n' +
	'          <div></div>\n' +
	'        </div>\n' +
	'\n' +
	'        <div class="sub sub_sup" set="no" onclick="sup_sub(this,\'down\')" onmouseover="(over(this,\'sub_sup\'))" onmouseleave="(leave(this,\'sub_sup\'))">\n' +
	'          <div>T</div>\n' +
	'          <div></div>\n' +
	'        </div>\n' +
	'\n' +
	'        <div class="fraction" onclick="fraction(this)" onmouseover="(over(this,\'fraction\'))" onmouseleave="(leave(this,\'fraction\'))">\n' +
	'          <div></div>\n' +
	'          <span></span>\n' +
	'          <div></div>\n' +
	'        </div>\n' +
	'\n' +
	'        <div class="mixed_fraction" onclick="mixed_fraction(this)" onmouseover="(over(this,\'mixed_fraction\'))" onmouseleave="(leave(this,\'mixed_fraction\'))">\n' +
	'          <div></div>\n' +
	'          <div></div>\n' +
	'          <span></span>\n' +
	'          <div></div>\n' +
	'        </div>\n' +
	'\n' +
	'\n' +
	'      </div>\n' +
	'  </div>\n' +
	'  <div id="keyboard_buttons">\n' +
	'\n' +
	'      <div id="keyboard_close" onclick="keyboard_close()"></div>\n' +
	'\n' +
	'     <!-- ////////////////// letters ////////////////// -->\n' +
	'\n' +
	'      <div id="buttons_let">\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">q</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">w</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">e</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">r</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">t</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">y</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">u</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">i</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">o</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">p</div>\n' +
	'  <br>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">a</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">s</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">d</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">f</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">g</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">h</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">j</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">k</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">l</div>\n' +
	'  <br>\n' +
	'        <div class="button" id="uppercase_button" active="yes" onclick="once_uppercase(this)" ondblclick="uppercase()">&nbsp;</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">z</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">x</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">c</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">v</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">b</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">n</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">m</div>\n' +
	'        <div class="button" active="yes" onclick="backspace()">&nbsp;</div>\n' +
	'  <br>\n' +
	'        <div class="button" active="yes" onclick="num_let(1)"></div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">&nbsp;</div>\n' +
	'        <div class="button" active="yes" onclick="next_line(\'next\')"></div>\n' +
	'        <div class="button" active="yes" onclick="next_line(\'done\')"></div>\n' +
	'\n' +
	'      </div>\n' +
	'\n' +
	'\n' +
	'\n' +
	'     <!-- ////////////////// number ////////////////// -->\n' +
	'\n' +
	'\n' +
	'      <div id="buttons_num">\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">1</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">2</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">3</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">4</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">5</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">6</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">7</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">8</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">9</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">0</div>\n' +
	'<br>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">-</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">+</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">x</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">/</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">(</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">)</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">√</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">&#8731</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">\'</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">"</div>\n' +
	'<br>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">=</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">.</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">,</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">?</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">!</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">#</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">%</div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">:</div>\n' +
	'        <div class="button" active="yes" onclick="backspace()">&nbsp;</div>\n' +
	'<br>\n' +
	'        <div class="button num_let" active="yes" onclick="num_let(2)"></div>\n' +
	'        <div class="button" active="yes" onclick="get_button(this)">&nbsp;</div>\n' +
	'        <div class="button" active="yes" onclick="next_line(\'next\')"></div>\n' +
	'        <div class="button" active="yes" onclick="next_line(\'done\')"></div>\n' +
	'\n' +
	'      </div>\n' +
	'  </div>\n' +
	'</div>';

let a = '',
	b = '';

var fraction_count = mixed_fraction_count = sup_sub_count = fraction_el_count = mixed_fraction_el_count = 0;
var sup_sub_on = sup_sub_set = fraction_on = fraction_set = mixed_fraction_on = mixed_fraction_set = once_up = up = false;
var button = document.getElementsByClassName('button');
var z_a = x_b = v_c = '';
var majax_limit = 'yes';

function selectInput(t, callback) {

	if (t.getAttribute("empty") === 'yes') {
		$('#key_board').css('display','block');
	}

	if (!sup_sub_on && !fraction_on && !mixed_fraction_on) {
        sup_sub_rem()
		if (t.getAttribute("empty") === 'yes') {

			for (var i = 0; i < input_div.length; i++) {
				if (input_div[i]==t) {
					this_line = i;
					break;
				}
			}
			$('.input_div').css('border','2px solid gray');
			$(t).css('border','2px solid red');
		}
	}
	callback();
}


function simpleClick(t){
    // console.log(t)
    if (sup_sub_on) {
        let upper_case = UpperCase(t.innerHTML);
        if (sup_sub_set) {
            if (sup_sub_up) {
                console.log(upper_case)
                return ['startSup', '<sup>' + upper_case + '</sup>'];
            } else {
                return ['startSub', '<sub>' + upper_case + '</sub>'];
            }
        } else {
            $('#sub_sup').append(upper_case[0]);
            $('#sub_sup').removeAttr('id');
            // sup_sub_set=true;
            return [false];
        }
    }

    if (fraction_on) {
        let upper_case = UpperCase(t.innerHTML);
        let tag = '';
        fraction_el_count++
        if (fraction_count === 1) {
            a += upper_case;
            $('.fraction_majax_del').remove();
            tag = '<span class="fraction_majax_del">$$ {'+a+' \\over '+b+'}$$</span>';
        } else if (fraction_count === 2) {
            b += upper_case;
            $('.fraction_majax_del').remove();
            if(a==1){
                tag = '<span class="fraction_majax_del">$$ { \\over '+b+'}$$</span>';
            }
            else {
                tag = '<span class="fraction_majax_del">$$ {'+a+' \\over '+b+'}$$</span>';
            }

        }
        fraction_set = true;
        return ['fraction', tag];
    }

    if (mixed_fraction_on) {
        let upper_case = UpperCase(t.innerHTML);
        if (mixed_fraction_count === 1) {
            a += upper_case;
            mixed_fraction_el_count++
            mixed_fraction_set = true;
            if(a==1){z_a=''} else{z_a=a}
            $('.mixed_fraction_majax_del').remove();
            tag = '<p style="display:inline-block" class="mixed_fraction_majax_del">' +a+ '</p>';
        } else if (mixed_fraction_count === 2) {
            b += upper_case;
            c='';
            mixed_fraction_el_count++
            mixed_fraction_set = true;
            if(b==1){x_b=''} else{x_b=b}
            $('.mixed_fraction_majax_del').remove();
            tag = '<p style="display:inline-block" class="mixed_fraction_majax_del">' +z_a+ '<span class="mixed_fraction_majax_child_del"> $$ {'+b+' \\over '+c+'}$$</span></p>';

        } else if (mixed_fraction_count === 3) {
            c += upper_case;
			mixed_fraction_el_count++
            mixed_fraction_set = true;
            $('.mixed_fraction_majax_del').remove();
            tag = '<p style="display:inline-block" class="mixed_fraction_majax_del">' +z_a+ '<span class="mixed_fraction_majax_child_del"> $$ {'+x_b+' \\over '+c+'}$$</span></p>';

        }
        return ['mixed_fraction', tag];
    }


    function UpperCase(x) {
        if (up) {
            return [t.innerHTML.toUpperCase()];
        }
        else {
            if (once_up) {
                once_up=false;
                $('.button').css('textTransform', 'lowercase');
                $('#uppercase_button').css('backgroundImage', 'url("../G10_3_3_1/img/keypad/CAPS_OFF.png")');
                return [t.innerHTML.toUpperCase()];
            }
            else {
                return [t.innerHTML];
            }
        }
    }



    if (up) {
        return ['up', t.innerHTML.toUpperCase()];
    } else {
        let tag = '';
        if (once_up) {
            once_up=false;
            tag = t.innerHTML.toUpperCase();
            $('.button').css('textTransform', 'lowercase');
            $('#uppercase_button').css('backgroundImage', 'url("../G10_3_3_1/img/keypad/CAPS_OFF.png")');
        } else {
            tag = t.innerHTML;
        }
        return ['down', tag];
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function sup_sub(x,y){

	var limit = limit_check()
    if (!fraction_on && !mixed_fraction_on && limit!=='no') {
        if ($(x).attr("set")=='no') {
            $("[set=no]").each(function(){
                sup_sub_count++
                if (sup_sub_count==2) {
                    $(x).attr("set","yes")
                    sup_sub_set=true;
                }
            })
        }

        if ($(x).attr("set")=='yes') {
            if (!sup_sub_on) {
                $(x).css({'border': '2px solid #fff', 'background': 'none','color':'#ff9900'})
                $(x).children('div:nth-child(2)').css({'border':'2px solid #ff9900','color':'#ff9900'})

                sup_sub_on=true
                if (y=="up") {
                    sup_sub_up=true
                    // document.getElementsByClassName('input_div')[this_line].innerHTML+='<sup class="sub_sup_el"></sup>';
                }
                else {
                    sup_sub_up=false
                    // document.getElementsByClassName('input_div')[this_line].innerHTML+='<sub class="sub_sup_el"></sub>';
                }
                console.log('1')
            }
            else {
                if (!sup_sub_set) {
                    $('.sub_sup_el').last().append('1');
                    input_array[this_line]+=1;
                }
                $(x).css('border', 'none')
                sup_sub_on = sup_sub_set = false;
                a = '';
                b = '';
                sup_sub_count=0
                $(x).attr("set","no")
                over(x,'sub_sup')
            }
        }
    }
    else if(limit == 'no'){
        $(x).css('border', 'none')
        sup_sub_on = sup_sub_set = false;
        a = '';
        b = '';
        sup_sub_count=0
        $(x).attr("set","no")
    }
}



function fraction(x) {
	var limit = limit_check()
    if (this_line == 0) {
        if (20-input_array[this_line]-2 >= 0 || fraction_on){
            majax_limit = 'yes'
        }

        else{
            majax_limit = 'no'
        }
    }

    else {
        if (6-input_array[this_line]-2 >= 0 || fraction_on){
            majax_limit = 'yes'
        }
        else{
            majax_limit = 'no'
        }
    }

	if (!sup_sub_on && !mixed_fraction_on && limit!=='no' && majax_limit!=='no') {
		fraction_count++;
		if (!fraction_on && fraction_count === 1) {
			fraction_on = true;

            $(x).css({'border':'2px solid white','background':'none','color':'#ff9900'})
            $(x).children('div').css('border','2px solid #ff9900')
            $(x).children('span').css('border-bottom','2px solid #ff9900')
			$(x).children('div').first().css('border', '2px solid white')
             a='';b='';
		}

		if (!fraction_set && fraction_count === 2) {
			a=1;
			b='';
			fraction_el_count++
            input_array[this_line]+=1;
			fraction_on = true;
			document.getElementsByClassName('input_div')[this_line].innerHTML+='<span class="fraction_majax_del"> $$ { \\over }$$</span>';
		}
		if ( fraction_count === 2) {
			$(x).children('div').first().css('border', '2px solid #ff9900');
			$(x).children('div:nth-child(3)').css('border', '2px solid white')
		}

		if (!fraction_set && fraction_count === 3) {
			b=1;
			fraction_el_count++
            input_array[this_line]+=1;
			$('.fraction_majax_del').remove();
			document.getElementsByClassName('input_div')[this_line].innerHTML+='<span class="fraction_majax_del">$$ {\\over }$$</span>';
		}


		if (fraction_count === 3) {
			$(x).children('div').first().css('border', '2px solid #ff9900');
			$(x).children('div:nth-child(3)').css('border', '2px solid #ff9900');
			$(x).css('border', 'none');
			fraction_count = 0;
			fraction_on = false;
            $('.fraction_majax_del').remove();
            tag = '<span class="fraction_majax" el_count="'+fraction_el_count+'">$$ {'+a+' \\over '+b+'}$$</span>';
            document.getElementsByClassName('input_div')[this_line].innerHTML +=tag;
			fraction_el_count=0;
			a = '';
			b = '';
            over(x,'fraction')
		}


	}

	if (limit=='no') {
		$(x).children('div').first().css('border', '2px solid #ff9900');
		$(x).children('div:nth-child(3)').css('border', '2px solid #ff9900');
		$(x).css('border', 'none');
		fraction_count = 0;
		fraction_on = false;
		$('.fraction_majax_del').remove();
		tag = '<span class="fraction_majax" el_count="'+fraction_el_count+'">$$ {'+a+' \\over '+b+'}$$</span>';
        document.getElementsByClassName('input_div')[this_line].innerHTML +=tag;
		fraction_el_count=0;
		a = '';
		b = '';
	}
	MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName('input_div')[this_line]]);
	fraction_set=false;
}



function mixed_fraction(x) {

    var limit = limit_check();

    if (this_line == 0) {
        if (20-input_array[this_line]-3 >= 0 || mixed_fraction_on){
            majax_limit = 'yes'
        }
        else{
            majax_limit = 'no'
        }
    }

    else {
        if (6-input_array[this_line]-3 >= 0 || mixed_fraction_on){
            majax_limit = 'yes'
        }
        else{
            majax_limit = 'no'
        }
    }




    if (!sup_sub_on && !fraction_on && limit!=='no' && majax_limit!=='no') {
        console.log('0.1');
        mixed_fraction_count++
        if (!mixed_fraction_on && mixed_fraction_count==1) {
            mixed_fraction_on=true

            $(x).css({'border':'2px solid white','background':'none','color':'#ff9900'})
            $(x).children('div:nth-child(1)').css('border','2px solid #ff9900')
            $(x).children('div').css('border','2px solid #ff9900')
            $(x).children('span').css('border-bottom','2px solid #ff9900')
            $(x).children('div').first().css('border', '2px solid white')
            mixed_fraction_on=true
            a='';b='';c='';
            console.log('1')
        }
        if (!mixed_fraction_set && mixed_fraction_count==2) {
            a=1;
            mixed_fraction_el_count++
            input_array[this_line]+=1;
            $('.mixed_fraction_majax_del').remove();
            mixed_fraction_on=true
            document.getElementsByClassName('input_div')[this_line].innerHTML+='<p style="display:inline-block" class="mixed_fraction_majax_del"> </p>';
            console.log('2')
        }
        if (mixed_fraction_count==2) {
            $(x).children('div').first().css('border', '2px solid #ff9900')
            $(x).children('div:nth-child(2)').css('border', '2px solid white')
        }
        if (!mixed_fraction_set && mixed_fraction_count==3) {
            b=1;
            mixed_fraction_el_count++
            input_array[this_line]+=1;
            mixed_fraction_on=true
            $('.mixed_fraction_majax_del').remove();
            document.getElementsByClassName('input_div')[this_line].innerHTML+='<p style="display:inline-block" class="mixed_fraction_majax_del"> '+z_a+' <span class="mixed_fraction_majax_child_del"> $$ { \\over }$$</span></p>';
            console.log('3')
        }
        if (mixed_fraction_count==3) {
            $(x).children('div').css('border', '2px solid #ff9900')
            $(x).children('div:nth-child(4)').css('border', '2px solid white')
        }
        if (!mixed_fraction_set && mixed_fraction_count==4) {
            c=1;
            mixed_fraction_el_count++
            input_array[this_line]+=1;
            $('.mixed_fraction_majax_del').remove()
            $('.mixed_fraction_majax_child_del').remove();
            document.getElementsByClassName('input_div')[this_line].innerHTML+='<p style="display:inline-block" class="mixed_fraction_majax_del">  <span class="mixed_fraction_majax_child_del"> $$ { \\over }$$</span></p>';
        }
        if (mixed_fraction_count==4) {
            $(x).children('div').css('border', '2px solid #ff9900')
            $(x).css('border', 'none')
            mixed_fraction_count=0
            mixed_fraction_on = false
             $('.mixed_fraction_majax_del').remove();
             $('.mixed_fraction_majax_child_del').remove();
             if(a==0){a=1}
             document.getElementsByClassName('input_div')[this_line].innerHTML+='<p style="display:inline-block" class="mixed_fraction_majax" el_count="'+mixed_fraction_el_count+'">' +a+ '<span class="mixed_fraction_majax_child"> $$ {'+b+' \\over '+c+'}$$</span></p>';
             tag = '';
             mixed_fraction_el_count=0;
           // input_array[this_line]+=1;
            over(x,'mixed_fraction')
        }
    }

		else if (limit=='no' && mixed_fraction_on) {
            console.log('no')
			$(x).children('div').css('border', '2px solid #ff9900')
			$(x).css('border', 'none')
			mixed_fraction_count=0
			mixed_fraction_on = false
		 $('.mixed_fraction_majax').remove();
		 $('.mixed_fraction_majax_del').remove();
		 $('.mixed_fraction_majax_child_del').remove();
		 document.getElementsByClassName('input_div')[this_line].innerHTML+='<p style="display:inline-block" class="mixed_fraction_majax" el_count="'+mixed_fraction_el_count+'">' +a+ '<span class="mixed_fraction_majax_child"> $$ {'+b+' \\over '+c+'}$$</span></p>';
		 tag = '';
		 mixed_fraction_el_count=0;
		}
		mixed_fraction_set=false
		MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementsByClassName('input_div')[this_line]]);
}

function once_uppercase() {
	if (!up) {
		if (!once_up) {
			$('.button').css('textTransform', 'uppercase')
			$('#uppercase_button').css('backgroundImage', 'url("../G10_3_3_1/img/keypad/CAPS_ON.png")')
			once_up=true
		} else {
			$('.button').css('textTransform', 'lowercase')
			$('#uppercase_button').css('backgroundImage', 'url("../G10_3_3_1/img/keypad/CAPS_OFF.png")')
			once_up=false
		}
	}
}

function uppercase() {
	if (!up) {
		$('.button').css('textTransform', 'uppercase')
		$('#uppercase_button').css('backgroundImage', 'url("../G10_3_3_1/img/keypad/caps_ON_LOCKED.png")')
		up=true
	} else {
		$('.button').css('textTransform', 'lowercase')
		$('#uppercase_button').css('backgroundImage', 'url("../G10_3_3_1/img/keypad/CAPS_OFF.png")')
		up=false
	}
}


function next_line(x){

  if (!sup_sub_on && !fraction_on && !mixed_fraction_on) {
      sup_sub_rem()
    if (this_line == input_div.length-1) {
      this_line=0
    }

    else {
      this_line++
    }

    while (input_div.length) {

      if (document.getElementsByClassName('input_div')[this_line].getAttribute("empty")=='yes') {
          $('.input_div').css('border','2px solid gray');
          document.getElementsByClassName('input_div')[this_line].style.border="2px solid red"
         break;
      }

      if (this_line == input_div.length-1) {
        this_line=0
      }

      else {
        this_line++
      }
    }

    if (x=="done") {
        var m=false;
        for (var i = 0; i < input_div.length; i++) {
          if (input_div[i].innerHTML=="") {
              input_div_default_style('done')
              m=true
              return
          }
        }
        if(!m){
            input_div_default_style('!done')
            return
        }
    }
  }
}


function backspace() {

  $(input_div[this_line]).html(function (_,txt) {
    num =  $.trim($(input_div[this_line]).html()).length
    num--;

    if (!fraction_on && !mixed_fraction_on){

        if (txt.slice(num-5,num+1)=="</sup>"||txt.slice(num-5,num+1)=="</sub>") {
                if (input_array[this_line]>0) {
                    input_array[this_line]-=1;
                }
          return  txt.slice(0, -12);
        }
        else if (txt.slice(num-3,num+1)=="</p>") {
                var el_count = $(input_div[this_line]).children('.mixed_fraction_majax').last().attr('el_count')
                input_array[this_line]-=el_count;
          $(input_div[this_line]).children('.mixed_fraction_majax').last().remove()
        }
        else if (txt.slice(num-6,num+1)=="</span>") {
                var el_count = $(input_div[this_line]).children('.fraction_majax').last().attr('el_count')
                input_array[this_line]-=el_count;
          $(input_div[this_line]).children('.fraction_majax').last().remove()
        }
        else if (txt.slice(num-5,num+1)=="&nbsp;") {
            input_array[this_line]-=1;
            return  txt.slice(0, -6);
        }

        else {
                if (input_array[this_line]>0) {
                    input_array[this_line]-=1;
                }
          return  txt.slice(0, -1);
        }
    }
    else {
        if (fraction_on) {
            if (fraction_count == 1) {
                if (a.length > 0) {
                    a = a.slice(0, a.length - 1)
                    input_array[this_line] -= 1;
                }
            }
            else if (fraction_count == 2) {
                if (b.length > 0) {
                    b = b.slice(0, b.length - 1)
                    input_array[this_line] -= 1;
                }
            }
            $('.fraction_majax_del').remove();
            document.getElementsByClassName('input_div')[this_line].innerHTML += '<span class="fraction_majax_del"> $$ {' + a + ' \\over ' + b + '}$$</span>';
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName('input_div')[this_line]]);
         }

        if (mixed_fraction_on){
            if (mixed_fraction_count == 1) {
                if (a.length > 0) {
                    a = a.slice(0, a.length - 1)
                    input_array[this_line] -= 1;
                }
            }
            else if (mixed_fraction_count == 2){
                if (b.length > 0) {
                    b = b.slice(0, b.length - 1)
                    input_array[this_line] -= 1;
                }
            }
            else if (mixed_fraction_count == 3){
                if (c.length > 0) {
                    c = c.slice(0, c.length - 1)
                    input_array[this_line] -= 1;
                }
            }
            $('.mixed_fraction_majax_del').remove()
            $('.mixed_fraction_majax_child_del').remove();
            document.getElementsByClassName('input_div')[this_line].innerHTML+='<p style="display:inline-block" class="mixed_fraction_majax_del">' +a+ '<span class="mixed_fraction_majax_child_del"> $$ {'+b+' \\over '+c+'}$$</span></p>';
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName('input_div')[this_line]]);

        }
    }
  })
  input_div_default_style('backspace')
}




function num_let(x) {
    if (x==1) {
      $("#buttons_num").css("display","block")
      $("#buttons_let").css("display","none")
    }
    else {
      $("#buttons_num").css("display","none")
      $("#buttons_let").css("display","block")
    }
}

function button_style() {
  for (var i = 0; i < button.length; i++) {
    if (button[i].getAttribute("active")=='yes') {
      button[i].style.cursor="pointer"
    }
    else {
      button[i].style.opacity=".4"
    }
  }
}


function over(x,y) {
    if(!sup_sub_on && !mixed_fraction_on && !fraction_on) {
        if (y == 'sub_sup') {
            $(x).css({'border': '2px solid #999999', 'background': '#333333', 'color': 'white'})
            $(x).children('div:nth-child(2)').css({'border': '2px solid #fff', 'color': '#fff'})
        } else if (y == 'fraction') {
            $(x).css({'border': '2px solid #999999', 'background': '#333333', 'color': 'white'})
            $(x).children('div:nth-child(1)').css('border', '2px solid white')
            $(x).children('div').css('border', '2px solid white')
            $(x).children('span').css('border-bottom', '2px solid white')
        } else if (y == 'mixed_fraction') {
            $(x).css({'border': '2px solid #999999', 'background': '#333333', 'color': 'white'})
            $(x).children('div:nth-child(1)').css('border', '2px solid white')
            $(x).children('div').css('border', '2px solid white')
            $(x).children('span').css('border-bottom', '2px solid white')
        }
    }
}

function leave(x,y) {
    if(!sup_sub_on && !mixed_fraction_on && !fraction_on){
        if(y=='sub_sup') {
            $(x).css({'border': 'none', 'background': 'none','color':'#ff9900'})
            $(x).children('div:nth-child(2)').css({'border':'2px solid #ff9900','color':'#ff9900'})
        }
        else if(y=='fraction'){
            $(x).css({'border':'none','background':'none','color':'#ff9900'})
            $(x).children('div:nth-child(1)').css('border','2px solid #ff9900')
            $(x).children('div').css('border','2px solid #ff9900')
            $(x).children('span').css('border-bottom','2px solid #ff9900')
        }
       else if(y=='mixed_fraction'){
            $(x).css({'border':'none','background':'none','color':'#ff9900'})
            $(x).children('div:nth-child(1)').css('border','2px solid #ff9900')
            $(x).children('div').css('border','2px solid #ff9900')
            $(x).children('span').css('border-bottom','2px solid #ff9900')
        }
    }

}


function sup_sub_rem () {
    var sup_sub_remove = true;

    $(input_div[this_line]).html(function (_,txt) {

        num =  $.trim($(input_div[this_line]).html()).length
        del_count=num;
        if(num %12==0){
            while (num>=12){
                x=6
                console.log(txt.slice(del_count-x))
                if(txt.slice(del_count-x)=='</sup>' || txt.slice(del_count-x)=='</sub>'){
                    x+=6;
                    console.log('true')
                }
                else{
                    sup_sub_remove=false
                    console.log('false')
                    return
                }

                num-=12
                console.log(num)
            }
        }
        else {
            console.log('false')
            sup_sub_remove=false
        }

        if (sup_sub_remove){
            var txt = $(input_div[this_line]).val();
            var txt = document.getElementsByClassName('input_div')[this_line].innerHTML
            return txt.replace(/(<sup>|<\/sup>|<sub>|<\/sub>)/g, "");
        }

    })
}


function fraction_mouseover(x){
    console.log(x)
}



function keyboard_close() {
  $('#key_board').css('display','none')
}

$('#key_board').html(keyboardHTML, function(){

});

function key_drag(){
  if (keyboard_dragable) {
    $('#key_board').draggable({
     helper:'original',
     start: function(event, ui) {
    },
    stop: function(event, ui) {
    }
    });
  }
}
key_drag()
button_style()