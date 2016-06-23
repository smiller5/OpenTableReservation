// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer. 
// But you could have it be an empty array as well.
// ===============================================================================


var tableArray = [
	{
		customerName: "Stephen",
		customerEmail: "stephendmiller1991@gmail.com",
		customerID: "smiller5",
		phoneNumber: "732-757-7886",

	}
];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = tableArray; 