function myDisplayer(number) {
    console.log("Displaying number : "+ number);
  }
  
  function myCalculator(number, myCallback) {
    myCallback(number);
  }
  
  myCalculator(100, myDisplayer);
  