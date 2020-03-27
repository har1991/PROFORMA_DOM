var i = 20;

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