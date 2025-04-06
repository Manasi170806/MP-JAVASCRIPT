let countdownInterval;
        
function startCountdown() 
{
    clearInterval(countdownInterval);
            
    const input = document.getElementById("numberInput");
    let count = parseInt(input.value);
            
    if (isNaN(count) || count <= 0) 
    {
        alert("Please enter a positive number");
        return;
    }
            
    const countdownDisplay = document.getElementById("countdown");
    countdownDisplay.textContent = count;
            
    countdownInterval = setInterval(() => 
    {
        count--;
        countdownDisplay.textContent = count;
        if (count <= 0) 
        {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "00";
            setTimeout(() => 
            {
                countdownDisplay.style.color = "#333";
            }, 1000);
        }
    }, 1000);
}
        
function stopCountdown() 
{
    clearInterval(countdownInterval);
    document.getElementById("countdown").textContent = "00";
}
