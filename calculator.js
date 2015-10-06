// CALCULATOR.JS
//
//
//

// 

var Calc = {

  Model : {
    preVal : 0,
    total: 0,
    op: "",
    display : false
  },


  View : {
    textRow : {id: "textRow", type: "text", value: "", onclick:""},
    button7 : {id: "button7", type: "button", value: 7, onclick:""},
    button8 : {id: "button8", type: "button", value: 8, onclick:""},
    button9 : {id: "button9", type: "button", value: 9, onclick:""},
    button4 : {id: "button4", type: "button", value: 4, onclick:""},
    button5 : {id: "button5", type: "button", value: 5, onclick:""},
    button6 : {id: "button6", type: "button", value: 6, onclick:""},
    button1 : {id: "button1", type: "button", value: 1, onclick:""},
    button2 : {id: "button2", type: "button", value: 2, onclick:""},
    button3 : {id: "button3", type: "button", value: 3, onclick:""},
    button0 : {id: "button0", type: "button", value: 0, onclick:""},
    buttonDot : {id: "buttonDot", type: "button", value: ".", onclick:""},
    buttonMinus : {id: "buttonMinus", type: "button", value: "-", onclick:""},
    buttonTimes : {id: "buttonTimes", type: "button", value: "*", onclick:""},
    buttonDiv : {id: "buttonDiv", type: "button", value: "/", onclick:""},
    buttonEqual : {id: "buttonEqual", type: "button", value: "=", onclick:""},
    buttonClear : {id: "buttonClear", type: "button", value: "C", onclick:""},
    buttonMClear : {id: "buttonMClear", type: "button", value: "MC", onclick:""},
    buttonMMinus : {id: "buttonMMinus", type: "button", value: "M-", onclick:""},
    buttonMPlus : {id: "buttonMPlus", type: "button", value: "M+", onclick:""},
    buttonPlus : {id: "buttonPlus", type: "button", value: "+", onclick:""}
  },

  Controller : {
    buttonsHandler : function(currVal) {

     
        textRow.value += currVal;
      

    },

    opsHandler: function(op){
      if(op === "+"){
        Calc.Model.total += preVal;
      }

      else if(op === "-"){
        Calc.Controller.op = "-";

      }

      else if(op === "*"){
        Calc.Controller.op = "*";

      }

      else if(op === "/"){
        Calc.Controller.op = "/";

      }
    }
  },

  run : function() {
    Calc.attachHandlers();
  // console.log(Calc.display());
  return Calc.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
  var s;
  s = "<table id=\"myTable\" border=4>"
  s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button7) + "\t";
  s += Calc.displayElement(Calc.View.button8) + "\t";
  s += Calc.displayElement(Calc.View.button9) + "\t";
  s += Calc.displayElement(Calc.View.buttonPlus);
  s += "<br>";
  s += Calc.displayElement(Calc.View.button4) + "\t";
  s += Calc.displayElement(Calc.View.button5) + "\t";
  s += Calc.displayElement(Calc.View.button6) + "\t";
  s += Calc.displayElement(Calc.View.buttonMinus) + "\t";
  s += "<br>";
  s += Calc.displayElement(Calc.View.button1) + "\t";
  s += Calc.displayElement(Calc.View.button2) + "\t";
  s += Calc.displayElement(Calc.View.button3) + "\t";
  s += Calc.displayElement(Calc.View.buttonTimes) + "\t";
  s += "<br>";
  s += Calc.displayElement(Calc.View.button0) + "\t";
  s += Calc.displayElement(Calc.View.buttonDot) + "\t";
  s += Calc.displayElement(Calc.View.buttonEqual) + "\t";
  s += Calc.displayElement(Calc.View.buttonDiv) + "\t";
  s += "<br>";
  s += Calc.displayElement(Calc.View.buttonClear) + "\t";
  s += Calc.displayElement(Calc.View.buttonMClear) + "\t";
  s += Calc.displayElement(Calc.View.buttonMMinus) + "\t";
  s += Calc.displayElement(Calc.View.buttonMPlus) + "\t";
  
  s += "</tr></td></table>";
  return s;
},

attachHandlers : function() {
  for (var i = 0; i <= 9; i++) {
   Calc.View["button" + i].onclick ="Calc.Controller.buttonsHandler(this.value)";
 }

 Calc.View.buttonPlus.onclick = "Calc.Controller.buttonsHandler(this.value)";
 Calc.View.buttonMinus.onclick = "Calc.Controller.buttonsHandler(this.value)";
 Calc.View.buttonTimes.onclick = "Calc.Controller.buttonsHandler(this.value)";
 Calc.View.buttonDiv.onclick = "Calc.Controller.buttonsHandler(this.value)";  
},



} // end of Calc;
