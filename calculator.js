// CALCULATOR.JS
//
//
//

// 

var Calc = {

  Model : {
    memory : 0,
    op: "",
    display : 1,
    substr: "",
    isEval: 0
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
    buttonMR : {id: "buttonMR", type: "button", value: "MR", onclick:""},
    buttonMMinus : {id: "buttonMMinus", type: "button", value: "M-", onclick:""},
    buttonMPlus : {id: "buttonMPlus", type: "button", value: "M+", onclick:""},
    buttonPlus : {id: "buttonPlus", type: "button", value: "+", onclick:""}
  },

  Controller : {
    buttonsHandler : function(currVal) {

      Calc.Model.isEval = 0;

      if(currVal == "M+"){
        if(textRow.value != ""){
          Calc.Model.memory = eval(Calc.Model.memory + "+(" + textRow.value + ")");
        }

        Calc.Model.display = 0;
      }

      else if(currVal == "M-"){
        if(textRow.value != ""){
          Calc.Model.memory = eval(Calc.Model.memory + "-(" + textRow.value +")");
        }

        Calc.Model.display = 0;
      }

      else if(currVal == "MR"){
        textRow.value = Calc.Model.memory;
        Calc.Model.display = 0;
      }

      else if(currVal == "C"){
        textRow.value = "";
        Calc.Model.display = 0;
      }

      else if(currVal == "."){
        if(textRow.value.indexOf(".") == -1){
          textRow.value += currVal;
        }
        Calc.Model.display = 0;
      }

      else{
        if(currVal == "+"){
          Calc.Model.op = "+";
        }
        else if(currVal == "-"){
          Calc.Model.op = "-";
        }
        else if(currVal == "*"){
          Calc.Model.op = "*";
        }
        else if(currVal == "/"){
          Calc.Model.op = "/";
        }
        Calc.Model.display = 1;
      }

      if(Calc.Model.display == 1)
      {
        if(textRow.value == 0){
          textRow.value = currVal;
        }

        else
        {
          textRow.value += currVal;
        }
      }

    },

    eval: function(){
      if(Calc.Model.isEval == "1")
      {
        textRow.value = eval(textRow.value + Calc.Model.substr);
      }

      else
      {
        if(Calc.Model.op != "")
        {
          Calc.Model.substr = textRow.value.substr(textRow.value.lastIndexOf(Calc.Model.op),textRow.value.length);
          textRow.value = eval(textRow.value);
          Calc.Model.isEval = 1;
          Calc.Model.op = "";
        }
      }
    }
  },

  run : function() {
    Calc.attachHandlers();
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
  s = "<table id=\"myTable\" border=1>";
  s += "<tr>" + Calc.displayElement(Calc.View.textRow) + "</tr>";
  s += "<tr>";
  s += "<td>" + Calc.displayElement(Calc.View.button7) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.button8) + "</td>";
  s += "<td>" +Calc.displayElement(Calc.View.button9) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.buttonPlus) + "</td>";
  s += "</tr>";

  s += "<tr>";
  s += "<td>" + Calc.displayElement(Calc.View.button4) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.button5) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.button6) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.buttonMinus) + "</td>";
  s += "</tr>";

  s += "<tr>";
  s += "<td>" + Calc.displayElement(Calc.View.button1) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.button2) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.button3) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.buttonTimes) + "</td>";
  s += "</tr>";

  s += "<tr>";
  s += "<td>" + Calc.displayElement(Calc.View.button0) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.buttonDot) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.buttonEqual) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.buttonDiv) + "</td>";
  s += "</tr>";

  s += "<tr>";
  s += "<td>" + Calc.displayElement(Calc.View.buttonClear) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.buttonMR) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.buttonMMinus) + "</td>";
  s += "<td>" + Calc.displayElement(Calc.View.buttonMPlus) + "</td>";
  s += "</tr>";
  s += "</table>";
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
 Calc.View.buttonEqual.onclick = "Calc.Controller.eval()";
 Calc.View.buttonMPlus.onclick = "Calc.Controller.buttonsHandler(this.value)";
 Calc.View.buttonMMinus.onclick = "Calc.Controller.buttonsHandler(this.value)";
 Calc.View.buttonMR.onclick = "Calc.Controller.buttonsHandler(this.value)";  
 Calc.View.buttonClear.onclick = "Calc.Controller.buttonsHandler(this.value)";
 Calc.View.buttonDot.onclick = "Calc.Controller.buttonsHandler(this.value)";  
},



} // end of Calc;
