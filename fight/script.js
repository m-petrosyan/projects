

function start_values() {
  solder1 = {
    health:55,
    damage:5,
    armor:6,
    money:12
  }



 solder2 =[
   {
    health:90,
    damage:4,
    armor:4,
    img: 'img/player2.png',
    bg: "url('img/arena.jpg')",
    reward:31
  },
   {
    health:40,
    damage:22,
    armor:2,
    img: 'img/player3.png',
    bg: "url('img/arena2.jpg')",
    reward: 27
  },
  {
    health:130,
    damage:12,
    armor:23,
    img: 'img/player4.png',
    bg: "url('img/arena3.jpg')",
    reward : 0
  },
]




  health = solder1.health
  swords = document.getElementById('fight-swords')
  playerDamage = document.getElementsByClassName('damage_new_value')
  warCloud = document.getElementById('war_cloud')
  alive = true;
  lastItem = '';
  level = 0;
  playerImg= document.getElementsByClassName('player_img')

  document.getElementsByClassName('health')[0].innerHTML = solder1.health
  document.getElementsByClassName('damage')[0].innerHTML = solder1.damage
  document.getElementsByClassName('armor')[0].innerHTML = solder1.armor
  document.getElementById('money_count').innerHTML = 'You have $'+solder1.money

  document.getElementsByClassName('health')[1].innerHTML = solder2[level].health
  document.getElementsByClassName('damage')[1].innerHTML = solder2[level].damage
  document.getElementsByClassName('armor')[1].innerHTML = solder2[level].armor

  hint = document.getElementsByClassName('hint')
}
start_values()







function start(){

  document.getElementById('start_btn').style.display="none"
  playerImg[0].style.left="520px"
  playerImg[1].style.left="720px"

  swords.style.visibility="visible"
  swords.style.opacity="1"

  console.log('Solder1 health '+solder2[level].health)
  console.log('Solder2 health '+solder2[level].health)


  cloud();

  var interval = setInterval(function(){
    if(solder1.health>0 && solder2[level].health>0){

    solder1.health= solder1.health-(solder2[level].damage-(solder2[level].damage/100*solder1.armor))
    solder2[level].health= solder2[level].health-(solder1.damage-(solder1.damage/100*solder2[level].armor))

      if(solder1.health<=0 || solder2[level].health<=0){
          if (solder1.health<=0 && solder2[level].health<=0) {
            draw()
          }
          else if (solder1.health<=0) {
            player1Death()
          }
          else if (solder2[level].health<=0) {
            player2Death()
          }

          clearInterval(interval)
          setTimeout(function(){ theEendOfTheBattle()}, 500);
          return
      }

      else{
        console.log('Solder1 health '+solder1.health)
        console.log('Solder2 health '+solder2[level].health)
      }
      damageResult()
    }

  }, 500);

}



function player1Death() {
  alive=false
  solder1.health=0;
  damageResult()
  playerImg[0].style.transform="rotate(90deg)";
  playerImg[0].style.top="250px";
  console.log('Solder1 death')
  document.getElementById('lost_text').innerHTML='You lost'
  document.getElementById('lost').style.display='block'
}

function player2Death() {
  solder2[level].health=0;
  damageResult()
  playerImg[1].style.transform="rotate(-90deg)";
  playerImg[1].style.top="250px";
  console.log('Solder2 death')
  if (alive) {
      win()
  }
  else {
    document.getElementById('lost_text').innerHTML='We have a draw'
  }
}


function draw() {
  player1Death()
  player2Death()
}


function cloud() {
    setTimeout(function(){
      warCloud.style.display="block"

    },700)
}

function damageResult() {
    setTimeout(function(){
      playerDamage[0].style.top="70px"
      playerDamage[1].style.top="70px"
      playerDamage[0].innerHTML=''
      playerDamage[1].innerHTML=''
    }, 400);

    playerDamage[0].style.display="block"
    playerDamage[1].style.display="block"

    playerDamage[0].innerHTML='-' + (solder2[level].damage-(solder2[level].damage/100*solder1.armor)).toFixed(1)
    playerDamage[1].innerHTML='-' + (solder1.damage-(solder1.damage/100*solder2[level].armor)).toFixed(1)

    console.log('playerDamage1 ' +(solder2[level].damage-(solder2[level].damage/100*solder1.armor)));
    console.log('playerDamage2 ' +(solder1.damage-(solder1.damage/100*solder2[level].armor)));

    playerDamage[0].style.top='-40px'
    playerDamage[1].style.top='-40px'

    document.getElementsByClassName('health')[0].innerHTML = solder1.health.toFixed(1)
    document.getElementsByClassName('health')[1].innerHTML = solder2[level].health.toFixed(1)
}



function theEendOfTheBattle() {
  swords.style.visibility="hidden"
  swords.style.opacity="0"
    setTimeout(function(){
      warCloud.style.display="none"
    },100)
}



function buy(x) {

    if (solder1.money >= x.price) {
      solder1.money-=x.price
      solder1[x.property]+=x.value
      document.getElementsByClassName(x.property)[0].innerHTML = solder1[x.property]
    }
    else{
    document.getElementById('warning').style.display='block'
      setTimeout(function(){
        document.getElementById('warning').style.display='none'
      },2500)
  }
  health = solder1.health
  document.getElementById('money_count').innerHTML = 'You have $'+solder1.money
}



function win() {

  solder1.money += solder2[level].reward
  document.getElementById('win_money').innerHTML= "You get $"+ solder2[level].reward
  level++

   if (level == 3) {
    document.getElementById('finish').style.display="block"
    return
  }
  document.getElementById('win').style.display="block"
  document.getElementById('money_count').innerHTML = 'You have $'+solder1.money
}

function reset() {

  playerImg[0].style.transform="rotate(0deg)";
  playerImg[0].style.top="190px";
  playerImg[1].style.transform="rotate(0deg)";
  playerImg[1].style.top="190px";

  playerImg[0].style.left="30px"
  playerImg[1].style.display="none"
  playerImg[1].style.left="1500px"

  setTimeout(function() {
    playerImg[1].style.display="block"
  },500)
  setTimeout(function() {
      document.getElementById('start_btn').style.display="block"
      playerImg[1].style.left="1200px"
  },1200)

}

function next() {
  document.getElementById('win').style.display="none"
  reset()
  solder1.health = health
  document.getElementsByClassName('health')[0].innerHTML = health



    player2_img.src = solder2[level].img;
    document.getElementById('arena').style.backgroundImage = solder2[level].bg;


  document.getElementsByClassName('health')[1].innerHTML = solder2[level].health
  document.getElementsByClassName('damage')[1].innerHTML = solder2[level].damage
  document.getElementsByClassName('armor')[1].innerHTML = solder2[level].armor
}

function again() {
  document.getElementById('arena').style.backgroundImage = "url('img/arena.jpg')";
  document.getElementById('lost').style.display='none'
  document.getElementById('finish').style.display="none"
  player2_img.src = solder2[0].img
  start_values()
  reset()
}

function howToPlay(x) {
  
  hint[0].style.display='none'
  hint[1].style.display='none'
  if (lastItem === x) {
    closeInstruction()
    return
  }
  else if (x == 'play') {
    hint[0].style.display='block'
  }
  else if (x == 'win') {
    hint[1].style.display='block'
  }
  instr_open = true
  document.getElementById('instruction_conteiner').style.display='block'
  lastItem = x
}

function closeInstruction() {
  document.getElementById('instruction_conteiner').style.display='none'
  lastItem = ''
}
