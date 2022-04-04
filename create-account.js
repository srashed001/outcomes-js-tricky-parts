function createAccount(pin, amount) {

    function account(){
        this.pin = pin;
        this.amount = amount || 0;
    }

    function checkBalance(pin){
        if(this.pin === pin){
            return `$${this.amount}`;
        }
    
        return `Invalid PIN.`;
    };

    function deposit(pin, depositAmount){
        if(this.pin === pin){
            this.amount += depositAmount
            return `Succesfully deposited $${depositAmount}. Current balance: $${this.amount}.`
        }

        return `Invalid PIN.`
    };

    function withdraw(pin, withdrawalAmount){
        if(this.pin === pin){
            if(this.amount < withdrawalAmount){
                return `Withdrawal amount exceeds account balance. Transaction cancelled.`
            }
            this.amount -= withdrawalAmount
            return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${this.amount}.`
        }
        return `Invalid PIN.`
    };

    function changePin(oldPin, newPin){
        if(oldPin === this.pin){
            this.pin = newPin
            return "PIN successfully changed!"
        }

        return `Invalid PIN.`
    };

    account.prototype = {
        checkBalance, 
        deposit, 
        withdraw, 
        changePin
    }

    

    
    return new account();
}

createAccount.prototype.checkBalance = function(pin){
    if(this.pin === pin){
        return this.amount
    }

    return `Invalid Pin`
}

module.exports = { createAccount };