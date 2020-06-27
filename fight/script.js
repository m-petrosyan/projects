

function start_values() {
  solder1 = {
    health:55,
    damage:5,
    armor:6,
    money:12
  }

 solder2 ={
    health:90,
    damage:4,
    armor:4
  }


  document.getElementsByClassName('health')[0].innerHTML = solder1.health
  document.getElementsByClassName('damage')[0].innerHTML = solder1.damage
  document.getElementsByClassName('armor')[0].innerHTML = solder1.armor
  document.getElementById('money_count').innerHTML = 'You have $'+solder1.money

  document.getElementsByClassName('health')[1].innerHTML = solder2.health
  document.getElementsByClassName('damage')[1].innerHTML = solder2.damage
  document.getElementsByClassName('armor')[1].innerHTML = solder2.armor

   health = solder1.health
   swords = document.getElementById('fight-swords')
   playerDamage = document.getElementsByClassName('damage_new_value')
   warCloud = document.getElementById('war_cloud')
   alive = true;
   level = 1;
   playerImg= document.getElementsByClassName('player_img')
}
start_values()







function start(){

  document.getElementById('start_btn').style.display="none"
  playerImg[0].style.left="520px"
  playerImg[1].style.left="720px"

  swords.style.visibility="visible"
  swords.style.opacity="1"

  console.log('Solder1 health '+solder1.health)
  console.log('Solder2 health '+solder2.health)


  cloud();

  var interval = setInterval(function(){
    if(solder1.health>0 && solder2.health>0){

    solder1.health= solder1.health-(solder2.damage-(solder2.damage/100*solder1.armor))
    solder2.health= solder2.health-(solder1.damage-(solder1.damage/100*solder2.armor))



      if(solder1.health<=0 || solder2.health<=0){

        if (solder1.health<=0 && solder2.health<=0) {
          draw()
        }

        else if (solder1.health<=0) {
          player1Death()
        }
        else if (solder2.health<=0) {
          player2Death()
        }
        clearInterval(interval)
        setTimeout(function(){ theEendOfTheBattle()}, 500);
        // return
      }

      else{
        console.log('Solder1 health '+solder1.health)
        console.log('Solder2 health '+solder2.health)
      }
      damageResult()
    }

  }, 500);

}



function player1Death() {
  alive=false
  solder1.health=0;
  playerImg[0].style.transform="rotate(90deg)";
  playerImg[0].style.top="250px";
  console.log('Solder1 death')
  document.getElementById('lost_text').innerHTML='You lost'
  document.getElementById('lost').style.display='block'
}

function player2Death() {
  solder2.health=0;
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

    playerDamage[0].innerHTML='-' + (solder2.damage-(solder2.damage/100*solder1.armor)).toFixed(1)
    playerDamage[1].innerHTML='-' + (solder1.damage-(solder1.damage/100*solder2.armor)).toFixed(1)

    console.log('playerDamage1 ' +(solder2.damage-(solder2.damage/100*solder1.armor)));
    console.log('playerDamage2 ' +(solder1.damage-(solder1.damage/100*solder2.armor)));

    playerDamage[0].style.top='-40px'
    playerDamage[1].style.top='-40px'

    document.getElementsByClassName('health')[0].innerHTML = solder1.health.toFixed(1)
    document.getElementsByClassName('health')[1].innerHTML = solder2.health.toFixed(1)
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
  var moneyIncrease = 0;
  level++

  if (level == 2) {
    moneyIncrease = 31
    solder1.money += moneyIncrease
  }
  else if (level == 3) {
    moneyIncrease = 30
    solder1.money += moneyIncrease
  }
  else if (level == 4) {
    document.getElementById('finish').style.display="block"
    return
  }
  // left: 1500px;
  document.getElementById('win').style.display="block"
  document.getElementById('money_count').innerHTML = 'You have $'+solder1.money
  document.getElementById('win_money').innerHTML= "You get $"+moneyIncrease
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

  if (level == 2) {
    solder2.health=60
    solder2.damage=13
    solder2.armor=4
    player2_img.src = 'img/player3.png'
    document.getElementById('arena').style.backgroundImage = "url('img/arena2.jpg')";

  }
  else if(level == 3) {
    solder2.health=140
    solder2.damage=9
    solder2.armor=25
    player2_img.src = 'img/player4.png'
    document.getElementById('arena').style.backgroundImage = "url('img/arena3.jpg')";
  }

  document.getElementsByClassName('health')[1].innerHTML = solder2.health
  document.getElementsByClassName('damage')[1].innerHTML = solder2.damage
  document.getElementsByClassName('armor')[1].innerHTML = solder2.armor
}

function again() {
  document.getElementById('arena').style.backgroundImage = "url('img/arena.jpg')";
  document.getElementById('lost').style.display='none'
  document.getElementById('finish').style.display="none"
  player2_img.src = 'img/player2.png'
  start_values()
  reset()
}
