var quiz_div = document.getElementById("quiz")
var center = document.getElementsByTagName("center")[0]
var mensaje = document.getElementById("mensaje")
var mensaje2 = document.getElementById("mensaje2")
var desafio_div = document.getElementById("desafio")
var una_pregunta = document.getElementById("unapregunta")
var lista_b =  [document.getElementsByTagName("b")[1], document.getElementsByTagName("b")[2],document.getElementsByTagName("b")[3],document.getElementsByTagName("b")[6],document.getElementsByTagName("b")[7],document.getElementsByTagName("b")[8],document.getElementsByTagName("b")[9],document.getElementsByTagName("b")[10],document.getElementsByTagName("b")[11]]
var progress = document.querySelector("progress")
var input2 = document.querySelectorAll("input")[1]
var estrellas = 0
var desafio_div = document.getElementById("desafio")
var estrellas_b = document.querySelector("b")
var progress_value =  0

var barra = document.getElementById("barra")
var secreto = document.getElementById("secreto")
var input = document.querySelector("input")
var signos = ["+","-"]

var correcto = 0
var correcto_2 = 0
var premio = 0;
var a;
var b;
var  signo;
var respuesta;


document.getElementById("uno").onclick = quiz
document.getElementById("dos").onclick = desafio
document.getElementById("tres").onclick = unaPregunta


//QUIZ
function quiz(){
  quiz_div.style.display = "block"
  center.style.display =  "none"
  secreto.style.display = "none"
  function juego(){
    a = Math.floor(Math.random() * 100)
    b = Math.floor(Math.random() * 100)
    signo = signos[Math.floor(Math.random() * signos.length)]
    respuesta = eval(`${a} ${signo} ${b}`)
    lista_b[0].innerHTML = a + ""
    lista_b[1].innerHTML  = signo
    lista_b[2].innerHTML = b + ""
  }
  juego()
}
function fin_quiz(a){
  mensajes = [`<center>
    <p id="grande2">😊</p>¡Felicidades!
    Has metido ${correcto} correctos
    <h3>Ganaste: </h3>
    <div id="premio">
       + ${correcto * a} 🌟
    </div>
    </center>`,`<center>
    <p id="grande2">😐</p>¡Bueno!
    Has metido ${correcto} correctos
    <h3>Ganaste: </h3>
    <div id="premio">
      + ${correcto * a} 🌟
    </div>
    </center>`,`<center>
    <p id="grande2">😭</p>¡Oh Oh!
    Has metido ${correcto} correctos
    <h3>Ganaste: </h3>
    <div id="premio">
      ${correcto * a} 🌟
    </div>
    </center>`]
  estrellas += correcto * a
  estrellas_b.innerHTML = estrellas+ ""
  secreto.style.display = "none"
  quiz_div.style.display = "none"
  mensaje.style.display = "block"
  
  progress.value = 0
  progress_value = 0
  
  
  if(correcto >= 3){
    i = 0
    document.querySelectorAll("audio")[2].play()
    
  }
  else if(correcto <= 2 && correcto != 0){
    i = 1
    //document.querySelectorAll("audio")[3].play()
    
  }
  else{
    i = 2
  //  document.querySelectorAll("audio")[4].play()
    
  }
  correcto = 0
  mensaje.innerHTML = mensajes[i] + "<button onclick='salir()'>Salir</button>"
}
function  comprobar(){
  var value = input.value
  secreto.style.display = "flex"


  quiz_div.style.display =  "none"
  input.value = ""
  if(progress.value != 100){
    progress_value += 20
    progress.value = progress_value
    bool = false
    setTimeout(quiz,1000)
  }
  else{
    
    bool  =  true
  }
  if(value == respuesta){
    secreto.innerHTML =  "¡Correcto!"
    secreto.style.color = "green"
    correcto++
    document.querySelectorAll("audio")[0].play()
  }
  else{
    secreto.innerHTML =  "Incorrecto"
    secreto.style.color = "red"
    document.querySelectorAll("audio")[1].play()
  }
  if(bool){
    setTimeout(() =>{
      fin_quiz(25)
    },1500)
  }
}


//DESAFIO
function desafio(){
  desafio_div.style.display =  "block"
  center.style.display = "none"
  secreto.style.display = "none"
  
  function juego2() {
    a = Math.floor(Math.random() * 100)
    b = Math.floor(Math.random() * 100)
    signo = signos[Math.floor(Math.random() * signos.length)]
    respuesta = eval(`${a} ${signo} ${b}`)
    lista_b[3].innerHTML = a + ""
    lista_b[4].innerHTML = signo
    lista_b[5].innerHTML = b + ""
  }
  juego2()
}
function comprobar2() {
  var value = input2.value
  secreto.style.display = "flex"
  desafio_div.style.display = "none"
  input2.value = ""
  var lista = [respuesta,respuesta-1,respuesta,respuesta-1,respuesta,respuesta-1]
  if (progress.value != 100) {
    progress_value += 20
    progress.value = progress_value
    bool = false
    setTimeout(desafio, 1000)
  }
  else {

    bool = true
  }
  if(lista[Math.floor(Math.random() * lista.length)] == respuesta){
    document.getElementById("op_pt").innerHTML = ++correcto_2
  }
  
  if (value == respuesta) {
    secreto.innerHTML = "¡Correcto!"
    secreto.style.color = "green"
    document.getElementById("tu_pt").innerHTML = ++correcto
    
    document.querySelectorAll("audio")[0].play()
  }
  else {
    secreto.innerHTML = "Incorrecto"
    secreto.style.color = "red"
    document.querySelectorAll("audio")[1].play()
  }
  if (bool) {
    setTimeout(() => {
      fin_desafio(50,10)
    }, 1500)
  }
}
function fin_desafio(a,b){
  mensaje2.style.display = "block"
  desafio_div.style.display = "none"
  secreto.style.display = "none"
  var texto;
  var texto2;
  var color;
  if(correcto > correcto_2){
    document.getElementsByTagName("audio")[2].play()
    emoji =  "😊"
    texto = "Ganaste"
    bc = "green"
    texto2 = `<p id="text">¡Felicidades has ganado el desafío!</p>
    Ganaste:
    + ${correcto * a} 🌟
    `
    premio = correcto * a
  }
  else if(correcto < correcto_2){
    emoji = "😭"
    texto = "Perdiste"
    bc = "red"
    texto2 = `<p id="text">¡Oh oh has perdido el desafío!</p>
        Ganaste:
        + 0 🌟
    `
    premio = 0
  }
  else{
    emoji = "😐"
    texto = "Empate"
    bc = "gray"
    texto2 = `<p id="text">¡Bueno han empatado!</p>
        Ganaste:
        + ${correcto * b} 🌟
        `
        premio = correcto * b
  }
  todo = `
  <center id="cn">
    <p style="font-size:2cm">${emoji}</p>
    <div id="info" style="background:${bc}">${texto}</div>
    <div id="sacaste"> ${correcto} : ${correcto_2} </div>`+texto2+`<button onclick="salir()" id="db">Salir</button>
    </center>`
  mensaje2.innerHTML = todo
  estrellas += premio
  estrellas_b.innerHTML = estrellas+ ""
}

//UNA PREGUNTA
function unaPregunta(){
  //hola
  
  //barra.style.display = "none"
  center.style.display = "none"
  una_pregunta.style.display = "block"
  function juego3(){
    var a = Math.floor(Math.random() * 100)
    var signo = signos[Math.floor(Math.random() * signos.length)]
    var b = Math.floor(Math.random() *  100)
    respuesta = eval(`${a}${signo}${b}`)
    lista_b[6].innerHTML = a+""
    lista_b[7].innerHTML = signo+""
    lista_b[8].innerHTML = b+""
  }
  juego3()
}
function comprobar_pregunta(){
  var value = document.getElementsByTagName("input")[2].value
  document.getElementById("mensaje3").style.display = "block"
  document.getElementsByTagName("input")[2].value = ""
  una_pregunta.style.display = "none"
  if(value == respuesta){
    document.getElementById("mensaje3").innerHTML = `<center>
    <p>😊</p>
    <h2>¡Felicidades!</h2>
    Eso era <span id="correcto">¡Correcto!</span>
    <br>
    <h3>Ganaste: </h3>
    + 250🌟
    <br>
    <button onclick="salir()">Salir</button>`
    estrellas += 250
    estrellas_b.innerHTML = estrellas + ""
    document.getElementsByTagName("audio")[2].play()
  }
  else{
    document.getElementById("mensaje3").innerHTML = `<center>
        <p>😭</p>
        <h2>¡Oh Oh!</h2>
        Eso era <span id="incorrecto">Incorrecto</span>
        <br>
        <h3>Ganaste: </h3>
        + 0🌟
        <br>
        <button onclick="salir()">Salir</button>`
  }
}

//Salir
function salir(){
  center.style.display = "block"
  secreto.style.display = "none"
  document.getElementById("mensaje3").style.display = "none"
  
  una_pregunta.style.display = "none"
  mensaje.style.display = "none"
  mensaje2.style.display = "none"
  desafio_div.style.display = "none"
  correcto = 0
  progress_value = 0
  progress.value = progress_value
  correcto_2 = 0
  document.getElementById("tu_pt").innerHTML = "0"
  document.getElementById("op_pt").innerHTML = "0"
  document.getElementsByTagName("audio")[2].pause()
}

//NOCTURNO y DÍA
function nocturno(){
  document.body.style.background =  "#464C56"
  document.getElementById("grande").style.color = "white"
  document.getElementById("pregunta").style.color = "white"
  document.getElementById("pregunta2").style.color = "white"
  document.getElementById("pregunta3").style.color = "white"
  
  document.getElementById("mensaje").style.color = "white"
  document.getElementById("mensaje2").style.color = "white"
  document.getElementById("mensaje3").style.color = "white"
  document.getElementById("unapregunta").style.background   = "red"//#242420
}
function dia(){
  document.body.style.background =  "white"
  document.getElementById("grande").style.color = "black"
  document.getElementById("pregunta").style.color = "black"
  document.getElementById("pregunta").style.color = "black"
  document.getElementById("pregunta").style.color = "black"
  
  document.getElementById("mensaje").style.color = "black"
  document.getElementById("mensaje2").style.color = "black"
  document.getElementById("mensaje3").style.color = "black"
  document.getElementById("unapregunta").style.background   = "white"
  /*$ = s =>document.querySelectorAll(s)
  sol = $('#grande, #pregunta', '#mensaje')
  for(i in sol){
    sol[x].style.color = "black"
  }*/
}
