// Code your solution in this file!
function logDriverNames(names){
  names.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(arr, home){
  const newArr = arr.filter(function(driver){
   return driver.hometown === home
 });
 logDriverNames(newArr)
}

function compare(a,b) {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  if (nameA < nameB)
    return -1;
  if (nameA > nameB)
    return 1;
  return 0;
};

function driversByRevenue(arr) {
  let copy = Object.create(arr)
  return copy.sort(function(a,b) {
  return a.revenue - b.revenue
});
};

function driversByName(arr) {
  let copy = Object.create(arr)
  return copy.sort(compare)
};

function totalRevenue(driver) {
  return driver.reduce(function (acc, cur) {
    return acc + cur.revenue
  }, 0);

};

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
};
