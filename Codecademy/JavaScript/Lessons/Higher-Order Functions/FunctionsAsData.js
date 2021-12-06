//! Functions as Data
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
  };
  
  //can be written as 
  
  const busy = announceThatIAmDoingImportantWork;
   
  busy(); // This function call barely takes any space!
  
  // Write your code below
  
  const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  is2p2();