// 1. Budget Check
const travelBudget = 1200; // Example travel budget
if (travelBudget > 1000) {
  console.log("Luxury travel options available");
} else {
  console.log("Looking for budget travel");
}

// 2. Destination Temperature Check
const destinationTemp = 25; // Example temperature in Celsius
if (destinationTemp >= 15 && destinationTemp <= 27) {
  console.log("Ideal weather for the trip");
} else {
  console.log("Consider another destination or time");
}

// 3. Nested If-Else for Flight and Hotel Booking
const flightBooked = true; // Example flight booking status
const hotelBooked = false; // Example hotel booking status
if (flightBooked) {
  if (hotelBooked) {
    console.log("Your travel plan is set");
  } else {
    console.log("You need to book a hotel");
  }
} else {
  console.log("You need to book a flight");
}

// 4. Comparing Travel Package Prices
const chosenPackagePrice = 1500; // Example chosen package price
const alternativePackagePrice = 1500; // Example alternative package price
if (chosenPackagePrice === alternativePackagePrice) {
  console.log("You've chosen the best priced package");
} else {
  console.log("Consider other package options");
}

// 5. Check Traveler Age for Discounts
travelerAge = 20; // Example traveler age
if (travelerAge >= 65) {
  console.log("Eligible for senior citizen discounts");
} else if (travelerAge <= 18) {
  console.log("Eligible for student discounts");
} else {
  console.log("Regular pricing applies");
}

// 6. Travel Satisfaction Score with Ternary Operator
const satisfactionScore = 85; // Example satisfaction score
const satisfactionMessage =
  satisfactionScore >= 80 ? "Highly satisfied traveler" : "Needs improvement";
console.log(satisfactionMessage);

// 7. Check Group Size (Even or Odd) with Ternary Operator
const groupSize = 7; // Example group size
const groupSizeMessage =
  groupSize % 2 === 0 ? "Even number of travelers" : "Odd number of travelers";
console.log(groupSizeMessage);

// 8. Traveler Age Group Classification
const travelerAge2 = 16; // Example traveler age
const ageGroup =
  travelerAge2 < 12 ? "Child" : travelerAge2 <= 19 ? "Teen" : "Adult";
console.log("Traveler age group:", ageGroup);

// 9. Traveler's Experience Level Evaluation
const experienceLevel = 4; // Example experience level
const experienceMessage =
  experienceLevel > 5 ? "Experienced traveler" : "New traveler";
console.log(experienceMessage);

// 10. Trip Duration Category
const tripDuration = 7; // Example trip duration in days
if (tripDuration < 3) {
  console.log("Weekend getaway");
} else if (tripDuration <= 14) {
  console.log("Standard vacation");
} else {
  console.log("Extended tour");
}

// 11. Validate Traveler Age for Adventure Activities
travelerAge2 = 22; // Example traveler age
const activityAgeRequirement = 18; // Age requirement for the activity
if (travelerAge > 18 || !activityAgeRequirement) {
  console.log("Allowed to participate");
} else {
  console.log("Age-restricted activity");
}

// 12. Special Offers for Weekends
const dayOfTravel = "Saturday"; // Example day of travel
if (dayOfTravel === "Saturday" || dayOfTravel === "Sunday") {
  console.log("Special weekend offer available!");
} else {
  console.log("Regular pricing.");
}

// 13. Check Destination Opening Year
const destinationOpeningYear = 2005; // Example opening year
if (destinationOpeningYear >= 2001 && destinationOpeningYear <= 2100) {
  console.log("21st century destination");
} else {
  console.log("20th century destination");
}

// 14. Check Destination Type and Rating
const destinationType = "Adventure"; // Example type of destination
const destinationRating = 9; // Example destination rating
if (destinationType === "Adventure" && destinationRating >= 8) {
  console.log("Must Visit");
} else {
  console.log("Check reviews before planning your visit.");
}

// 15. Evaluate Travel Package Price
const packagePrice = 1200; // Example travel package price
if (packagePrice <= 1000) {
  console.log("Discounted package");
} else {
  console.log("Regular package price");
}

// 16. Check Traveler Age for Activity Restrictions
const isAdultActivity = true; // Activity requires adult-only access
if (travelerAge > 18 || !isAdultActivity) {
  console.log("Allowed to participate");
} else {
  console.log("Age-restricted activity");
}

// 17. Determine if Destination is a Hotspot
const destinationName = "Famous Beach Resort"; // Example destination name
if (
  destinationName.includes("famous") ||
  destinationName.includes("top destination")
) {
  console.log("This destination is a hotspot");
} else {
  console.log("This destination is not a hotspot");
}
