// https://github.com/tareqjamil1234/assignment

// Convert : Kilometer to Meter

function KilometerToMeter(Kilometer){
    var meter = Kilometer * 1000;
    return meter;

}

var firstMeter = KilometerToMeter(10);
console.log(firstMeter);

//budget Calculator 

function budgetCalculator(watch, phone, laptop){
   var watchPrice = 50 * watch;
   var phonePrice = 100 * phone;
   var laptopPrice = 500 * laptop;
   var totalPrice = watchPrice + phonePrice + laptopPrice;
   return totalPrice; 
}

var budgetPrice = budgetCalculator( 3 , 5 ,6);
console.log(budgetPrice);

//hotel Cost

function hotelCost(days){
    for(var i = 0; i <= days; i++){
        if(days <= 10){
            var Cost1 = 100 * days;
            return Cost1;
        }
       else if(days >10 && days <=20){
        var Cost2 =  (100 *(days-10)) + (80 * (days-10));
        return Cost2;
        }
       else if(days > 20 ){
            var Cost3 =(1800 + (50 * (days - 20)));
            return Cost3;
        }
       
    }
}
var totalCost = hotelCost(25);
console.log(totalCost);

//mega Friend (find largest name of my friends)

function megaFriend(name){
    var larger = name[0];
    for (let i = 0; i < name.length; i++) {
        let element = name[i];
        if(larger < element){
            larger = element;
        }
        
    }
    return larger;
}
var largeName = megaFriend(['masum','tareqjamil','sadiqu']);
console.log(largeName);