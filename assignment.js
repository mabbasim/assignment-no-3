function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return "Invalid";
        
    }
    else{
    var meter = kilometer * 1000;
    return meter;
    }
    
}
// console.log(kilometerToMeter(-2));




function budgetCalculator(numberOfWatch,numberOfPhone,numberOfLaptop){
    if(numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0){
        return "Invalid";
        
    }
    else{
        var watchPrice = numberOfWatch * 50;
    var phonePrice = numberOfPhone * 100;
    var laptopPrice = numberOfLaptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
    }
}
// var totalBudget = budgetCalculator(-2,1,2);
// console.log(totalBudget);




function hotelCost(day){
    var cost = 0;
    if(day < 0){
        return "Invalid";
    }
    
    else if(day <= 10){
        cost = day * 100;
    }
    else if(day <= 20){
        var first10DayCost = 10 * 100;
        var remaining = day - 10;
        var second10DayCost = remaining * 80;
        cost = first10DayCost + second10DayCost;
    }
    else{
        var first10DayCost = 10 * 100;
        var second10DayCost = 10 * 80;
        var remaining = day - 20;
        var after20DayCost = remaining * 50;
        cost = first10DayCost + second10DayCost + after20DayCost;
    }
    return cost;
}
// var totalHotelCost = hotelCost(-21);
// console.log(totalHotelCost);




function megaFriend(friends){
    var largerName = friends[0];
    if(friends.length == 0){
        return "Array is empty";
    }
    
    else{
        for(var i = 0; i < friends.length; i++){
        var friendsName = friends[i];
            if(friendsName.length > largerName.length){
                largerName = friendsName;
            }
        }
    }
    return largerName;
}
// var myFriends = [];
// var name = megaFriend(myFriends);
// console.log(name);