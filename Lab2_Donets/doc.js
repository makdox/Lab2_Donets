function validateNumber() {
    let entry = document.getElementById("txt_input").value;
    if (entry.length) {
      if (!isNaN(entry)) {
        let data = Number(entry);
        if (data >= 20 && data <= 100) {
          return true;
        } else {
          alert("Number should be within range (20 - 100) inclusive");
          return false;
        }
      } else {
        alert("Enter data is not number");
        return false;
      }
    } else {
      alert("Data not present");
      return false;
    }
  }
  
  function getTokens() {
    document.getElementById("result").innerText = "";
    if (validateNumber()) {
      let entry = document.getElementById("txt_input").value;
      let data = Number(entry);
      let twenties = 0;
      let tens = 0;
      let fives = 0;
      let twos = 0;
      let ones = 0;
      twenties = parseInt(data / 20);
      data = data % 20;
  
      tens = parseInt(data / 10);
      data = data % 10;
  
      fives = parseInt(data / 5);
      
      data = data % 5;
  
      
      twos = parseInt(data / 2);
      
      data = data % 2;
  
    
      ones = parseInt(data / 1);

      data = data % 1;
      
      let result = "";
      if (twenties) {
        result += twenties + " X 20";
      }
      if (tens) {
        result += ", " + tens + " X 10";
      }
      if (fives) {
        result += ", " + fives + " X 5";
      }
      if (twos) {
        result += ", " + twos + " X 2";
      }
      if (ones) {
        result += ", " + ones + " X 1";
      }
      document.getElementById("result").innerText = result + " tokens make up a total of " + entry;
    }
  }
  