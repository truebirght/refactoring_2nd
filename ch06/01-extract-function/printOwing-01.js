function printOwing(invoice, console, Clock) {
    let outstanding = 0;
    console.log("***********************");
    console.log("**** 고객 채무 ****");
    console.log("***********************");
  
    for (const o of invoice.orders) {
      outstanding += o.amount;
    }
  
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }
  
  module.exports = { printOwing };