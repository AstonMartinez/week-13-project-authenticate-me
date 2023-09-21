const determineMonthLength = (month) => {
    if(month === 'Jan') {
        return 31
    } else if(month === 'Feb') {
        return 28
    } else if(month === 'Mar') {
        return 31
    } else if(month === 'Apr') {
        return 30
    } else if(month === 'May') {
        return 31
    } else if(month === 'Jun') {
        return 30
    } else if(month === 'Jul') {
        return 31
    } else if(month === 'Aug') {
        return 31
    } else if(month === 'Sep') {
        return 30
    } else if(month === 'Oct') {
        return 31
    } else if(month === 'Nov') {
        return 30
    } else if(month === 'Dec') {
        return 31
    }
}

export const getLengthOfStay = (startDate, endDate) => {
    let startDateArr
    let endDateArr
    if(typeof startDate === "object") {
        startDateArr = startDate.toDateString().split(" ")
    } else {
        startDateArr = startDate.split(" ")
    }

    if(typeof endDate === "object") {
        endDateArr = endDate.toDateString().split(" ")
    } else {
        endDateArr = endDate.split(" ")
    }

    if(startDateArr[1] === endDateArr[1]) {
      const startDateNum = startDateArr[2]
      const endDateNum = endDateArr[2]
      return endDateNum - startDateNum + 1
    }
      else {
        const monthLength = determineMonthLength(startDateArr[1])
      	const startDateNum = startDateArr[2]
        const endDateNum = monthLength
        const sum1 = endDateNum - startDateNum
        const result = Number(sum1) + Number(endDateArr[2])
        return result
    }
}
