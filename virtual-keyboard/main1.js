let body = document.querySelector('body');
let container = document.createElement("div");
container.classList.add("container");

let langText = document.createElement("p");
langText.classList.add("langtext");
langText.innerHTML = "Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe ctrl + alt"


let textArea = document.createElement("textarea");
textArea.classList.add("use-keyboard-input");

let main = document.createElement("div");
main.classList.add("keyboard");


let keysContainer = document.createElement("div");
keysContainer.classList.add("keyboard__keys");



main.appendChild(keysContainer);
container.appendChild(textArea);
container.appendChild(main);
container.appendChild(langText);

body.appendChild(container);


const keyLayoutSetEn = [
    "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "backspace",
    "tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p","[","]","\\","del",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l",";","'", "enter",
    "lshift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/","arrowtop","rshift",
    "lctrl","win","lalt","space","ralt","arrowleft","arrowdown","arrowright","rctrl"
  ];
  const keyLayoutSetRu = [
    "ё","1", "2", "3", "4", "5", "6", "7", "8", "9", "0","-","=", "backspace",
    "tab","й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з","х","ъ","\\","del",
    "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д","ж","э", "enter",
    "lshift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".","arrowtop","rshift",
    "lctrl","win","lalt","space","ralt","arrowleft","arrowdown","arrowright","rctrl"
  ];

//   let keyLayout = keyLayoutSetEn;
  keysContainer.appendChild(_createKeys(keyLayoutSetEn));

let value = "";
let langFlag = true;
function _createKeys(keyLayout) {
    const fragment = document.createDocumentFragment();

      
    //   const keyLayoutNew = [
    //     "Backquote","Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0","Minus","Equal", "Backspace",
    //     "tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    //     "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    //     "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
    //     "space"
    //   ];
  
      
      keyLayout.forEach(key => {
        const keyElement = document.createElement("button");
        const insertLineBreak = ["backspace", "del", "enter","rshift", "?"].indexOf(key) !== -1;
  
        // Add attributes/classes
        keyElement.setAttribute("type", "button");
        keyElement.classList.add("keyboard__key");
  
        switch (key) {
            case "backspace":
                keyElement.setAttribute("data-code", "Backspace");
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = "Backspace";
                // createIconHTML("backspace");
  
                // keyElement.addEventListener("click", () => {
                // this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                // this._triggerEvent("oninput");
                // });
  
            break;

            case "tab":
                keyElement.classList.add("keyboard__key--half-wide");
                keyElement.innerHTML = "Tab";
                // createIconHTML("backspace");
          
                // keyElement.addEventListener("click", () => {
                //   this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                //   this._triggerEvent("oninput");
                // });
          
            break;  
            
            case "del":
                keyElement.setAttribute("data-code", "Delete");
                keyElement.classList.add("keyboard__key--half-wide");
                keyElement.innerHTML = "Del";
                
            break;
                
            case "caps":
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = "CapsLock";
                // createIconHTML("keyboard_capslock");
  
                // keyElement.addEventListener("click", () => {
                // this._toggleCapsLock();
                // keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                // });
  
            break;
  
            case "enter":
                keyElement.setAttribute("data-code", "Enter");
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = "Enter";
                // createIconHTML("keyboard_return");
  
                // keyElement.addEventListener("click", () => {
                // this.properties.value += "\n";
                // this._triggerEvent("oninput");
                // });
  
            break;
            
            case "lshift":
                keyElement.setAttribute("data-code", "ShiftLeft");
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = "Shift";
                
            break;

            case "arrowtop":
                keyElement.setAttribute("data-code", "ArrowUp");
                keyElement.innerHTML = "&#8593";
                    
            break;

            case "rshift":
                keyElement.setAttribute("data-code", "ShiftRight");
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = "Shift";
                    
            break;

            case "lctrl":
                keyElement.setAttribute("data-code", "ControlLeft");
                keyElement.classList.add("keyboard__key--half-wide");
                keyElement.innerHTML = "Ctrl";
                    
            break;

            case "win":
                keyElement.classList.add("keyboard__key--half-wide");
                keyElement.innerHTML = "Win";
                    
            break;

            case "lalt":
                keyElement.setAttribute("data-code", "AltLeft");
                keyElement.classList.add("keyboard__key--half-wide");
                keyElement.innerHTML = "Alt";
                    
            break;
                
            case "space":
                keyElement.setAttribute("data-code", "Space");
                keyElement.classList.add("keyboard__key--extra-wide");
                // keyElement.innerHTML = createIconHTML("space_bar");
  
                // keyElement.addEventListener("click", () => {
                // this.properties.value += " ";
                // this._triggerEvent("oninput");
                // });
  
            break;

            case "ralt":
                keyElement.setAttribute("data-code", "AltRight");
                keyElement.classList.add("keyboard__key--half-wide");
                keyElement.innerHTML = "Alt";
                    
            break;

            case "arrowleft":
                keyElement.setAttribute("data-code", "ArrowLeft");
                keyElement.innerHTML = "&#8592";
                    
            break;

            case "arrowdown":
                keyElement.setAttribute("data-code", "ArrowDown");
                keyElement.innerHTML = "&#8595";
                    
            break;

            case "arrowright":
                keyElement.setAttribute("data-code", "ArrowRight");
                keyElement.innerHTML = "&#8594";
                    
            break;

            case "rctrl":
                keyElement.setAttribute("data-code", "ControlRight");
                keyElement.classList.add("keyboard__key--half-wide");
                keyElement.innerHTML = "Ctrl";
                    
            break;

            default:
                keyElement.textContent = key.toLowerCase();
            
                keyElement.addEventListener("click", () => {
                    // value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                //   this._triggerEvent("oninput");
                value = value + key;
                textArea.value = value;
                console.log(key)
                console.log(value)
                });
  
            break;
        }
  
        fragment.appendChild(keyElement);
  
        if (insertLineBreak) {
          fragment.appendChild(document.createElement("br"));
        }
      });
      
      



      return fragment;
}






document.addEventListener('keydown', function(e) {
    let allKeys = document.querySelectorAll('.keyboard__key');
    allKeys.forEach(el => {
        if (e.code==el.getAttribute("data-code")||e.key.toLowerCase()==el.textContent) {
            el.classList.add("keyboard__key_act");
        }
    });
  });


//   document.addEventListener('keydown', function(e) {
//     let newKeys = document.querySelectorAll('.keyboard__key')
//     newKeys.forEach(el => {
        
//         if (el.classList.contains("keyboard__key_act")) {
//             console.log('s')
//             value = value + el.textContent;
//             textArea.value = value;
//         }
        
//     });
//   });


  document.addEventListener('keyup', function(e) {
    let allKeys = document.querySelectorAll('.keyboard__key');
    allKeys.forEach(el => {
        if (e.code==el.getAttribute("data-code")||e.key.toLowerCase()==el.textContent) {
            el.classList.remove("keyboard__key_act");
        }
    })
  });
  






  document.addEventListener('keydown', function keydown(evt){
    // if (!evt) evt = e;
    
    if (evt.ctrlKey && evt.altKey){

        if (langFlag) {
            langFlag = false;
            keysContainer.innerHTML = "";
            keysContainer.append(_createKeys(keyLayoutSetRu));
            
        } else {
            langFlag = true;
            keysContainer.innerHTML = "";
            keysContainer.append(_createKeys(keyLayoutSetEn));
           
        }
    }
});
