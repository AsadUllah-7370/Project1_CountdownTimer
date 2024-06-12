var time = "12 June 2024 10:58 AM"


document.getElementById("end-date").innerText = time
const inputs = document.querySelectorAll(".inputs input")

document.getElementById('enterBtn').addEventListener('click', function () {
    const inputValue = document.getElementById('dateInput').value;
    const now = new Date()
    const end = new Date(inputValue)
    let timeSec = (end - now) / 1000
    if ((end - now) < 0) {
        alert('Error: Please Enter Correct Date');
        return;
    }
    if (!inputValue) {
        alert('Error: The date field is empty. Please enter a date.');
        return;
    }
    if (Math.floor(timeSec) == 0) {
        let html = '<h2>The Time is Completed</h2>'
        document.querySelector(".completed").insertAdjacentHTML("afterbegin", html)
        return
    }
    let storedValue = inputValue;
    time = storedValue

    console.log('Stored Value:', storedValue);

});



function clock() {
    const end = new Date(time)
    const now = new Date()

    let timeSec = (end - now) / 1000 // in seconds
    if (timeSec < 0) { return }
    // let days = (timeSec / 3600) / 24
    inputs[0].value = Math.floor((timeSec / 3600) / 24);
    inputs[1].value = Math.floor((timeSec / 3600) % 24)
    inputs[2].value = Math.floor((timeSec / 60) % 60)
    inputs[3].value = Math.floor(timeSec % 60)
    if (Math.floor(timeSec) == 0) {
        let html = '<h2>The Time is Completed</h2>'
        document.querySelector(".completed").insertAdjacentHTML("afterbegin", html)
        return
    }
}


document.getElementById('reloadBtn').addEventListener('click', function () {
    location.reload();
});





setInterval(() => {
    clock()
}, 1000
)
/* 
1 day = 24 hrs
1 hr = 60 min
1 min = 60 sec
*/