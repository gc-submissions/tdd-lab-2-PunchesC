const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  // TODO: Add additional tests below...
  test ("Constructor: amountDue",() => {
    const change = new ChangeHandler(5);
    expect(change.amountDue).toEqual(5);
  });

  // test ("Constructor: amountDue",() => {
  //   const change = new ChangeHandler(6);
  //   expect(change.amountDue).toEqual("6");
  // });

 
  test ("Constructor: cashTendered",() => {
    const change = new ChangeHandler();
    expect(change.cashTendered).toBe(0);
  });

  test ("Constructor: cashTendered",() => {
    const change = new ChangeHandler(50);
    expect(change.cashTendered).toBe(0);
  });

  test ("Constructor: cashTendered",() => {
    const change = new ChangeHandler("apple");
    expect(change.cashTendered).toBe(0);
  });

  test("Testing Quarter Insertion", () => {
    const change = new ChangeHandler();
    change.insertCoin("quarter")
    expect(change.cashTendered).toBe(25);

  });

  test("Testing Dime Insertion", () => {
    const change = new ChangeHandler();
    change.insertCoin("dime")
    expect(change.cashTendered).toBe(10);

  });

  test("Testing Nickel Insertion", () => {
    const change = new ChangeHandler();
    change.insertCoin("nickel")
    expect(change.cashTendered).toBe(5);

  });
  test("Testing Penny Insertion", () => {
    const change = new ChangeHandler();
    change.insertCoin("penny")
    expect(change.cashTendered).toBe(1);

  });

  test("Testing Nickel Insertion", () => {
    const change = new ChangeHandler();
    change.insertCoin("nickel");
    change.insertCoin("nickel");
    change.insertCoin("nickel");
    expect(change.cashTendered).toBe(15);

  });

  test("Testing QNN Insertion", () => {
    const change = new ChangeHandler();
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.cashTendered).toBe(55);

  });

  test("cashTendered > amountDue", () => {
    const change = new ChangeHandler(20);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(true);
    

  });

  test("cashTendered > amountDue", () => {
    const change = new ChangeHandler(20);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(true);
    

  });


  test("cashTendered < amountDue", () => {
    const change = new ChangeHandler(60);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(false);
    

  });

  test("cashTendered = amountDue", () => {
    const change = new ChangeHandler(55);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(true);
    

  });

  test("32 change produce", () => {
    const change = new ChangeHandler(100);
    change.insertCoin("quarter");
    change.insertCoin("penny");
    change.insertCoin("penny");
    change.insertCoin("nickel");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    

    expect(change.giveChange()).toEqual( {
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
  });
    

  });

  test("10 change produce", () => {
    const change = new ChangeHandler(10);
    
    change.insertCoin("nickel");
    change.insertCoin("dime");
    change.insertCoin("nickel");
    

    expect(change.giveChange()).toEqual( {
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0
  });


    

  });

  test("27 change produce", () => {
    const change = new ChangeHandler(48);
    
    change.insertCoin("quarter");
    change.insertCoin("dime");
    change.insertCoin("dime");
    change.insertCoin("penny");
    change.insertCoin("penny");
    change.insertCoin("penny");
    change.insertCoin("quarter");
    change.insertCoin("penny");
    change.insertCoin("penny");

    

    expect(change.giveChange()).toEqual( {
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2
  });

});


test("68 change produce", () => {
  const change = new ChangeHandler(100);
    
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("dime");
    change.insertCoin("nickel");
    change.insertCoin("penny");
    change.insertCoin("penny");
    change.insertCoin("penny");


 


  

  

  expect(change.giveChange()).toEqual( {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 3
});

});




});