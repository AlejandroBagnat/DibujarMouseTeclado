var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  var estado = false;
  var colorLinea = "blue";
  
  document.addEventListener("keydown", dibujarTeclado);
  document.addEventListener("mousedown",presionarMouse);
  document.addEventListener("mouseup",soltarMouse);
  document.addEventListener("mousemove",dibujarMouse);
 
  var cuadrito = document.getElementById("area_de_dibujo");
  var papel = cuadrito.getContext("2d");
  var x = 150;
  var y = 150;
  var Xm,Ym;
  
  dibujarLinea("red", x-1, y-1, x+1, y+1, papel);


  function dibujarMouse(evento) {
    console.log(evento);

      if (estado) {
          var xFinal = evento.clientX - 8;
          var yFinal = evento.clientY -80;
          dibujarLinea(colorLinea,Xm,ym,xFinal,yFinal,papel);
      }
      Xm = evento.clientX  - 8;
      ym =evento.clientY  - 80;
  }

  function presionarMouse(evento) {
      estado = true;
  }
  
  function soltarMouse(evento) {
    estado = false;
  }

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }

  
  function dibujarTeclado(evento)
  {
    var colorcito = "#FAA";
    var movimiento = 5;
    switch(evento.keyCode)
    {
      case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
      break;
      case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
      case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
      case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
    }
  }
  
  