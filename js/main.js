var i = 20;
let m = 0;

document.forms[0].ch1.addEventListener('focus', () => {        
    document.forms[0].ch1.value="";
})


document.forms[1].ch1.addEventListener('focus', () => {
  document.forms[1].ch1.value="";
})

document.getElementById("outside").addEventListener("click", function() {
  
  document.forms[1].ch1.value= "Texte initial";
  
}, true);
//changer le taille de champ 
document.getElementById("changingSize").addEventListener("keydown", changingSize);
function changingSize() {
  if (i < 80 ){
  document.getElementById("changingSize").size = ++i;
  }
  else {
     i=80;
  }
}


function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function mouseDown() {
    var x = document.getElementById("myText");
    
      x.type = "text";
    
  }
  
  function mouseUp() {
    var x = document.getElementById("myText");
      x.type = "password";
    
  }
  function getFocus() {
    document.getElementById("focus").focus();
  }

  function changeDefult(){
    var x = document.getElementById("defaltValue").value;
    document.getElementById("defaltValue").value = x;


  }
  function resetDefalt(){
    var initialText = "InitialText" ;
    document.getElementById("defaltValue").value = initialText ;
  }
  function incrementDecrement() {
    
    if(document.getElementById("increament").checked == true)
    {
        document.getElementById('changingValue').value = ++m;
    }
    else if (document.getElementById("decreament").checked == true) {
        document.getElementById('changingValue').value = --m;
    }
  }
  let selectItemValue = document.getElementById('itemSelect');

  selectItemValue.addEventListener('change', function() {
    let selectedOption = this.options[this.selectedIndex];
    //var handle = selectedOption.getAttribute('data-handle');
    let itemText = selectedOption.label;
    let ItemValue= selectedOption.value;
    document.getElementById("demo-value").value = ItemValue;
    document.getElementById("demo-text").value = itemText;
});

function pushLeft(){
  let a = document.getElementById("Button1").value;
  let b = document.getElementById("Button2").value;
  let c = document.getElementById("Button3").value;
  let d = document.getElementById("Button4").value;
  let e = document.getElementById("Button5").value;
  document.getElementById("Button1").value = b ;
  document.getElementById("Button2").value = c ;
  document.getElementById("Button3").value = d ;
  document.getElementById("Button4").value = e ;
  document.getElementById("Button5").value = a ;     
}
function pushRight(){
  let a = document.getElementById("Button1").value;
  let b = document.getElementById("Button2").value;
  let c = document.getElementById("Button3").value;
  let d = document.getElementById("Button4").value;
  let e = document.getElementById("Button5").value;
  document.getElementById("Button1").value = e ;
  document.getElementById("Button2").value = a ;
  document.getElementById("Button3").value = b ;
  document.getElementById("Button4").value = c ;
  document.getElementById("Button5").value = d ;
  
}