var Hotel = function (loca, name, totalroom, booked) {
    this.location = loca;
    this.name = name;
    this.totalroom = totalroom;
    this.booked = booked;
    Hotel.prototype.checkAvailiblity = function () {
        return this.totalroom - this.booked;
    };
};
var hotel1 = new Hotel("delhi", "hotel raja ratan", 230, 60);
var hotel2 = new Hotel("jaipur", "hotel shyam", 260, 10);
var hotel3 = new Hotel("noida", "hotel divya", 238, 80);
console.log(hotel1);
console.log(hotel2);
console.log(hotel3);