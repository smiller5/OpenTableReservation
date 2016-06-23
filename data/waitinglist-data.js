// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ===============================================================================


var waitingArray = [
	{
		customerName: "Josh",
		customerEmail: "josha@gmail.com",
		phoneNumber: "732-757-7886",
		customerID: "josh5"
	}
];


// Note how we export the array. This makes it accessible to other files using require. 
module.exports = waitingArray;
