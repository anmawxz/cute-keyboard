const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];


document.addEventListener("keyup", event => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
  
  keyElement.classList.add("hit")
  keyElement.addEventListener('animationend', () => {
    keyElement.classList.remove("hit")
    
  })
  
 


  console.log(keyPressed)//criar um armazenador
})
