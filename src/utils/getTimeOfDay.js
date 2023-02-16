export const getTimeOfDay = () => {
    let today = new Date()
    let curHr = today.getHours()
    let message = ""

    if (curHr < 12) {
        console.log('good morning')
        message = 'Good Morning'
    } else if (curHr < 18) {
        console.log('good afternoon')
        message = 'Good Afternoon'
    } else {
        console.log('good evening')
        message = 'Good Evening'
    }
    return message;
}

export const getDate = () => {
    let today = new Date()
    return today.toDateString()

}


