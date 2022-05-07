/* Your Code Here */
function createEmployeeRecord(array) {
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payRate: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

createEmployeeRecord(["Gray", "Worm", "Security", 1])

function createEmployeeRecords(employeesArray) {
    let employeeRecords = [];
    employeesArray.forEach(element => 
        employeeRecords.push(createEmployeeRecord(element)))
    return employeeRecords
}


function createTimeInEvent(employee, timestamp) {
    const timeYM = timestamp.split('-')
    const timeDT = timeYM[2].split(' ')
    const newTimeInEvent = {
        type: 'Time In',
        hour: timeDT[1],
        date: `${timeYM[0]}-${timeYM[1]}-${timeDT[0]}`
    }
    employee.timeInEvents.push(newTimeInEvent)
    return employee
}

function createTimeOutEvent(employee, timestamp) {
    const timeYM = timestamp.split('-')
    const timeDT = timeYM[2].split(' ')
    const newTimeOutEvent = {
        type: 'Time In',
        hour: timeDT[1],
        date: `${timeYM[0]}-${timeYM[1]}-${timeDT[0]}`
    }
    employee.timeOutEvents.push(newTimeOutEvent)
    return employee
}

function hoursWorkedOnDate(employee, date) {
    let hoursWorked;
    const wasInTime = employee.timeInEvents.find(ev =>  ev.date === date).hour
    const wasOutTime = employee.timeOutEvents.find(ev => ev.date === date).hour
    hoursWorked = (wasOutTime - wasInTime)/100
    return hoursWorked
}

function wagesEarnedOnDate(employee, date) {
    const payDue = hoursWorkedOnDate(employee, date) * employee.payRate
    return payDue
}

function allWagesFor(employee) {
    let timeInDates = [];
    //getting all of the dates when employee clocked in into an array
    timeInDates = employee.timeInEvents.map( element => element.date )
    //running the wagesEarned funct and appending the result for each day into array
    let totalWages= [];
    for (n of timeInDates) {
        let earn;
        earn = wagesEarnedOnDate6(employee, n)
        //console.log(`${earn} is is how much ${employee} earned on ${n} `)
        totalWages.push(earn)
    } 
    let totalEarn=0;
    totalEarn = totalWages.reduce((curV, preV) => curV+preV, 0)
    //console.log(totalEarn)
    return totalEarn   
}

function calculatePayroll(array) {
    let payroll =[];
    for (let i=0; i<array.length; i++) {
        payroll.push(allWagesFor(array[i]))
        console.log(payroll)
    }
    const payrollAmt = payroll.reduce( (curV, prevV) => curV+preV,0)
    return payrollAmt
}