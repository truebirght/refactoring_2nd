  function printOwing(invoice, console, Clock) {
    printBanner(console);

    const outstanding =calculateOutstanding(invoice);
    
    recordDueDate(invoice, Clock.today);
    printDetails(invoice, outstanding, console);

  }

  function calculateOutstanding(invoice){
    let result = 0;
    for (const o of invoice.orders) {
      result += o.amount;
    }
    return result;
  }

  function printBanner(console){
    console.log("***********************");
    console.log("**** 고객 채무 ****");
    console.log("***********************");
  }

  function printDetails(invoice, outstanding, console){
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }

  function recordDueDate(invoice, today){
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  }

  module.exports = { printOwing };