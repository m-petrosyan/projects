
  setInterval(function(){
     $('img').attr({
        "ondrag":"return false",
        "ondragdrop":"return false",
        "ondragstart":"return false"
     })

 }, 300);

   var next = true
   var ok = 10
   var clicks = 0
   var win = false
   var persons = [
       {name:'joker',count:2},
       {name:'darthvader',count:2},
       {name:'hulk',count:2},
       {name:'batman',count:2},
       {name:'ironman',count:2},
       {name:'spawn',count:2},
       {name:'capitanamerica',count:2},
       {name:'thor',count:2},
       {name:'superman',count:2},
       {name:'spiderman',count:2}
   ]

   var personsLength = (persons.length * 2)
   var box = document.getElementsByClassName('box')
   var img = document.getElementsByClassName('img')
   var cont = document.getElementById('conteiner')


  for (var i = 0; i < personsLength; i++) {
    document.getElementById('conteiner').innerHTML += '<span class="box" num="'+i+'" person="" onclick="start(this)"><img src="" class="img"></span>'
  }


  for (var i = 0; i < personsLength; i++) {

      massiveIndex  = Math.floor(Math.random() * persons.length);
      box[i].innerHTML= '<img src="images/'+persons[massiveIndex].name+'.jpg" class="img">'
      box[i].setAttribute('person',persons[massiveIndex].name)
      box[i].classList.add(persons[massiveIndex].name);
      $(box[i]).children(".img").css({"opacity": "0"});
      persons[massiveIndex].count -= 1
      persons = persons.filter(person => person.count != 0)
  }



v = "nothing"
b = "nothing"

  function start(x) {

clicks++

if (next && !win) {
    next= false



    for (var z = 0; z < box.length; z++) {
      img[z].style.opacity='0'
    }


      $(x).css({
        'transform': 'rotateY(90deg)',
      })


      setTimeout(function(){
        $(x).css({
          'transition': '0.5s',
        })

        setTimeout(function(){
        $(x).css({
          'transition': '0.5s',
          'transform': 'rotateY(0deg)',
        })

        $(x).children(".img").css({"opacity": "1"});
        }, 100);
      }, 300)


      if (x.getAttribute('person')==v && b.getAttribute('num') != x.getAttribute('num') ) {
        $(b).children(".img").css({"opacity": "1"});
        win=true
        console.log(v+" - "+x.getAttribute('person'));
        setTimeout(function(){
          x.style.opacity="0"
          b.style.opacity="0"
          x.style.visibility="hidden"
          b.style.visibility="hidden"
          win=false
        }, 1000)
		
          ok--
          console.log(ok);
          if (ok==0) {
            setTimeout(function(){
            document.getElementById('win').style.visibility="visible"
            document.getElementById('win').style.opacity="1"
            document.getElementById('clicks').innerHTML = clicks
            }, 1500)
          }
        }

        else {
                console.log(v+" - "+x.getAttribute('person'));
          v =  x.getAttribute('person')
          b = x
        }



}

  setTimeout(function(){
    next = true
  }, 200)

}


function resize300() {
  for (var i = 0; i < box.length; i++) {
    conteiner.style.width="1200px"
    box[i].style.backgroundSize=" 200px 300px";
    box[i].style.width= "200px"
    img[i].style.width= "200px"
    box[i].style.height= "300px"
    img[i].style.height= "300px"

  }

}

function resize225() {
  for (var i = 0; i < box.length; i++) {
    conteiner.style.width="1200px"
    box[i].style.backgroundSize=" 150px 225px";
    box[i].style.width= "150px"
    img[i].style.width= "150px"
    box[i].style.height= "225px"
    img[i].style.height= "225px"

  }
}

function resize180() {
  for (var i = 0; i < box.length; i++) {
    conteiner.style.width="1000px"
    box[i].style.backgroundSize=" 120px 180px";
    box[i].style.width= "120px"
    img[i].style.width= "120px"
    box[i].style.height= "180px"
    img[i].style.height= "180px"

  }


}
