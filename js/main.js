let i = 20;
let m = 0;
//Un champ qui se vide lorsque l'on entre dedans.
document.forms[0].ch1.addEventListener('focus', () => {
  document.forms[0].ch1.value = "";
})

// Un champ qui se vide lorsque l'on entre dedans et qui remet la valeur initiale si le champ est vide lorsqu'on le quitte.
document.getElementById("insideTextBox").addEventListener("focus", function () {
 
  document.forms[1].ch1.value = "";

}, true);
document.getElementById("insideTextBox").addEventListener("blur", function () {

  document.forms[1].ch1.value = "Texte initial";

}, true);
//changer le taille de champ 
document.getElementById("changingSize").addEventListener("keydown", changingSize);

function changingSize() {
  if (i < 80) {
    document.getElementById("changingSize").size = ++i;
  } else {
    i = 80;
  }
}

// affiche le mot de pass
function showPassword() {
  let x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
document.getElementById("mouse").addEventListener("mousedown",function(){
  var x = document.getElementById("myText");
  x.type = "text";
})
document.getElementById("mouse").addEventListener("mouseup",function(){
  var x = document.getElementById("myText");
  x.type = "password";
})


  document.getElementById("focus").addEventListener("focus",function(){
    document.getElementById("focus").blur();
  })
 
    function emptyFields(){
    if (document.getElementById("checkbox").checked ==true){
        document.forms[6].ch1.focus();
        document.forms[6].ch1.value = "";
        
    }else if ((document.getElementById("checkbox").checked == false)) {
        document.forms[6].ch1.value = "0";
        document.forms[6].ch1.blur();
        }
      }

function changeDefult() {
  var x = document.getElementById("defaltValue").value;
  document.getElementById("defaltValue").value = x;

}

function resetDefalt() {
  var initialText = document.getElementById("defaltValue").value;
  document.getElementById("defaltValue").value = initialText;
}

function incrementDecrement() {

  if (document.getElementById("increament").checked == true) {
    document.getElementById('changingValue').value = ++m;
  } else if (document.getElementById("decreament").checked == true) {
    document.getElementById('changingValue').value = --m;
  }
}
let selectItemValue = document.getElementById('itemSelect');

selectItemValue.addEventListener('change', function () {
  let selectedOption = this.options[this.selectedIndex];
  //var handle = selectedOption.getAttribute('data-handle');
  let itemText = selectedOption.text;
  let ItemValue = selectedOption.value;
  document.getElementById("demo-value").value = ItemValue;
  document.getElementById("demo-text").value = itemText;
});

function pushLeft() {
  let a = document.getElementById("Button1").value;
  let b = document.getElementById("Button2").value;
  let c = document.getElementById("Button3").value;
  let d = document.getElementById("Button4").value;
  let e = document.getElementById("Button5").value;
  document.getElementById("Button1").value = b;
  document.getElementById("Button2").value = c;
  document.getElementById("Button3").value = d;
  document.getElementById("Button4").value = e;
  document.getElementById("Button5").value = a;
}

function pushRight() {
  let a = document.getElementById("Button1").value;
  let b = document.getElementById("Button2").value;
  let c = document.getElementById("Button3").value;
  let d = document.getElementById("Button4").value;
  let e = document.getElementById("Button5").value;
  document.getElementById("Button1").value = e;
  document.getElementById("Button2").value = a;
  document.getElementById("Button3").value = b;
  document.getElementById("Button4").value = c;
  document.getElementById("Button5").value = d;
}

let fistTextBox = document.getElementById("textBox1");
let secondTextBox = document.getElementById("textBox2");
let thirdTextBox = document.getElementById("textBox3");
document.getElementById("textBox2").disabled = true;
document.getElementById("textBox3").disabled = true;


fistTextBox.onkeyup = function () {
  if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
    document.getElementById("textBox2").disabled = false;
    secondTextBox.focus();
  }
}
secondTextBox.onkeyup = function () {
  if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
    document.getElementById("textBox3").disabled = false;
    thirdTextBox.focus();
  }
}


  function disappear() {
       
    if (document.getElementById("checkedDisapear").checked ==true){
        document.getElementById("appaer").style.display = "none";
    }
    else if ((document.getElementById("checkedDisapear").checked ==false)) {

        document.getElementById("appaer").style.display = "inline";
    }

   }
    
   document.getElementById("insdideInput").addEventListener("click", function () {

    document.getElementById("insdideInput").style.height ="116px" ;
    document.getElementById("insdideInput").style.width ="241px" ;
  
  }, true);
  document.getElementById("outsideInput").addEventListener("click", function () {

    document.getElementById("insdideInput").style.height ="16px" ;
    document.getElementById("insdideInput").style.width ="141px" ;
  
  }, true);
    
  const arrayCarre = Array.from(document.querySelectorAll('div:nth-of-type(17) > div div'));

arrayCarre.forEach((carre) => {
    carre.addEventListener('click', () => {
        arrayCarre.map((allCarre) => allCarre.classList.remove('checked'));
        carre.classList.add('checked');
    })

})
const arrayCarre2 = Array.from(document.querySelectorAll('div:nth-of-type(18) > div div'));

arrayCarre2.forEach((carre) => {

    carre.addEventListener('click', () => {
        arrayCarre2.map((allCarre) => allCarre.classList.remove('checked'));
        carre.classList.add('checked');
        const getColor = carre.getAttribute('data-color');
        const carreResult = document.querySelector('#out');
        carreResult.classList.remove('rouge', 'vert', 'bleu', 'jaune');
        carreResult.classList.add(getColor);
       
    })
}) 