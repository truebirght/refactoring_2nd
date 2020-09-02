  function printOwing(invoice, console, Clock) {
    let outstanding = 0;

    function printBanner(){
      console.log("***********************");
      console.log("**** 고객 채무 ****");
      console.log("***********************");
    }

    printBanner();
  
    for (const o of invoice.orders) {
      outstanding += o.amount;
    }
  
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  
    function printDetails(){
      console.log(`name: ${invoice.customer}`);
      console.log(`amount: ${outstanding}`);
      console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
    }

    printDetails();
  }

  module.exports = { printOwing };