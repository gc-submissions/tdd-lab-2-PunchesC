/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue){
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /*
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
     if (type ==="quarter"){
       this.cashTendered += 25;
     } else if ( type === "dime"){
       this.cashTendered += 10;
     } else if (type === "nickel"){
       this.cashTendered += 5;
     } else if (type === "penny"){
       this.cashTendered += 1;
     }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      if( this.cashTendered > this.amountDue){
        return true;
      } else if (this.cashTendered < this.amountDue){
        return false;
      }else {
        return true;
      }
    }

    giveChange() {
        // TODO return the correct change in the following format...
        let amountBack = this.cashTendered - this.amountDue;
        let quarters = 0;
        let dimes = 0;
        let nickels = 0;
        let pennies = 0;

        
        while (amountBack > 0){
        if (amountBack >= 25){
          amountBack -= 25;
          quarters ++;
        } else if (amountBack >=10){
          amountBack -= 10;
          dimes ++;
        } else if (amountBack >=5){
          amountBack -= 5;
          nickels ++;
        }else if (amountBack >= 1){
          amountBack -= 1;
          pennies ++;
        }
    
    }
    return {
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies

      
  }
}


}

module.exports = ChangeHandler;