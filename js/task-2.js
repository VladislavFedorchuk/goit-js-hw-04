function calcAverageCalories(days) {

  let averageCalories = 0
  
  for (const allcalories of days) {

    averageCalories += allcalories.calories
    
  }
  let totalCalories = averageCalories / days.length
  
  if (totalCalories <= averageCalories) {
    
    return totalCalories 

  } else {

    return averageCalories

  }
  
  
}
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
);
console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
);
console.log(
  calcAverageCalories([])
);
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3000 },
    { day: "tuesday", calories: 2000 },
    { day: "wednesday", calories: 1000 },
    { day: "thursday", calories: 1000 },
    { day: "friday", calories: 5000 },
    { day: "saturday", calories: 2300 },
    { day: "sunday", calories: 2500 }
  ])
);