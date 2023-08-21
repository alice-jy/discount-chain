//subscription; 25% discount after refill total
//coupon; $10 discount afer subscription discount 
// return & console.log "Your grand total is $(finalAmount)."
/*
Timmy => "Your grand total is $65."
Sarah => "Your grand total is $37.5."
Rocky => "Your grand total is $102.5"
*/

const timmy = {
    perscription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3, 
    subscription: false, 
    coupon: true, 
}

const sarah = {
    perscription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1, 
    subscription: true, 
    coupon: false, 
}

const rocky = {
    perscription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5, 
    subscription: true, 
    coupon: true, 
}

//function to check if the person has a subscription
//within function, if person has subscription - calculate total after 25% discount
//if no subscription, then return original amount (pricePerRefill) into new variable: newTotal
function discountedSubscription(pricePerRefill, subscription){
    const newRefillTotal = 0;
    //check if subscription = true
    // if true, return pricePerRefill * .75 for a new refill total
    // if false, return pricePerRefill = new refill total
    if (subscription = true){
        newRefillTotal = pricePerRefill * .75; 
        return newRefillTotal;
    } else if (subscription = false){
        newRefillTotal = pricePerRefill; 
        return newRefillTotal; 
    }
}

//function to check if the person has a coupon 
//within function, if the person has a coupon, return -$10 to the newTotal that has been returned from discountedSubscription funciton
//if no coupon, return newTotal 
function hasCoupon(coupon, pricePerRefill){
    //implement discountedSubscription function to calculate new total
    discountedSubscription(pricePerRefill,subscription);
    const finalAmount= 0; 
    //check if coupon = true
    //if true, return newRefillTotal - 10
    //if false, return newRefillTotal
    if (coupon = true){
        finalAmount = newRefillTotal - 10;
        return finalAmount;

    } else if (coupon = false){
        finalAmount = newRefillTotal;
        return finalAmount;
    }

}
//console.log("Your grand total is $" + finalAmount + "." );
