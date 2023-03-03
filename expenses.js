const monthlyExpenses = [ 201.43, 189.22, 132.09,  238.85, 195.41 ]
let totalExpense = 0

for (const average of monthlyExpenses) {
    totalExpense += average
	// Add the current monthly cost to the value of totalExpense
}

// Calculate your average monthly food costs
const averageExpense = totalExpense / monthlyExpenses.length

// Make sure you use backticks for multi-line string output
console.log(`On average, I spend ${averageExpense} dollars on groceries per month. 
So far this year, I have spent ${totalExpense} dollars on groceries.`)

// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [232, 363, 666, 420]

// Declare a variable to store the total. Initial value is 0.
let totalMiles = 0
/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const miles of weeklyMiles) {
    totalMiles += miles

}

// Declare a new variable to store the average miles over time
const averageMiles = totalMiles / weeklyMiles.length
// Output the average miles and the total miles to the console
console.log(`I average ${averageMiles} miles each week.
I have driven a total of ${totalMiles} miles.`)
