function qaramod() {
    let switchElement = document.getElementById("qaramod");
    let bodyElement = document.body;
  
    if (switchElement.checked) {
      bodyElement.classList.add("qara-fon");
    } else {
      bodyElement.classList.remove("qara-fon");
    }
  }
  
