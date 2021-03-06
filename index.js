/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let createEmployeeRecord = function(array) {
//     this.firstName = array[0]
//     this.familyName = array[1]
//     this.title = array[2]
//     this.payPerHour = array[3]
//     this.timeInEvents = []
//     this.timeOutEvents = []
// }

 function createEmployeeRecord(array) {
    let newEmployee = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
    return newEmployee
}

function createEmployeeRecords(sourcearray) {
    return sourcearray.map(record => {
        return createEmployeeRecord(record)
    })
}

function hoursWorkedOnDate(employee, date) {
    const timeIn = (employee.timeInEvents.find(element => element.date == date)).hour
    const timeOut = (employee.timeOutEvents.find(element => element.date == date)).hour
    const hoursWorked = ((timeOut - timeIn) / 100)
    return hoursWorked
}

function wagesEarnedOnDate(date) {
    const wagesEarned = (hoursWorkedOnDate.call(this, date) * this.payPerHout)
    return wagesEarned
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}