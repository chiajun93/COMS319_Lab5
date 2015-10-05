// CALCULATOR.JS
//
//
//

// 
var Calc = {

Model : {
},


View : {
  textRow : {id: "textRow", type: "text", value: "", onclick:""},
  button7 : {id: "button7", type: "button", value: 7, onclick:""},
  button8 : {id: "button8", type: "button", value: 8, onclick:""},
  button9 : {id: "button9", type: "button", value: 9, onclick:""},
  button4 : {id: "button4", type: "button", value: 4, onclick:""},
  button5 : {id: "button4", type: "button", value: 5, onclick:""},
  button6 : {id: "button4", type: "button", value: 6, onclick:""},
  button1 : {id: "button4", type: "button", value: 1, onclick:""},
  button2 : {id: "button4", type: "button", value: 2, onclick:""},
  button3 : {id: "button4", type: "button", value: 3, onclick:""},
  button0 : {id: "button4", type: "button", value: 0, onclick:""},
  buttonDot : {id: "button4", type: "button", value: ".", onclick:""},
  buttonMinus : {id: "button4", type: "button", value: "-", onclick:""},
  buttonTime : {id: "button4", type: "button", value: "*", onclick:""},
  buttonDiv : {id: "button4", type: "button", value: "/", onclick:""},
  buttonPlus : {id: "buttonPlus", type: "button", value: "+", onclick:""}
},

Controller : {

},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
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
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>" + Calc.displayElement(Calc.View.textRow) + "</td></tr>";
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button7) + "\t";
  s += Calc.displayElement(Calc.View.button8) + "\t";
  s += Calc.displayElement(Calc.View.button9) + "\t";
  s += Calc.displayElement(Calc.View.buttonPlus);
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.button4) + "\t";
  s += "</tr></td></table>";
  return s;
},

attachHandlers : function() {
  Calc.View.button7.onclick = "Calc.button7Handler()"; 
},

button7Handler : function() {
  alert("Hi");
}

} // end of Calc;
