

function digitalClock(){
    let date = new Date();
    let hours = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let format = 'AM'
    
    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12
        format = 'PM'
    }
    
    if(hours < 10){
       hours = '0' + hours
    }
    if(minute < 10){
       minute = '0' + minute
    }
    if(second < 10){
        second = '0' + second
     }

    let final = `${hours} : ${minute} : ${second} ${format}`
    document.getElementById('clock').innerHTML = final

    setInterval(digitalClock, 1000)
}
digitalClock()