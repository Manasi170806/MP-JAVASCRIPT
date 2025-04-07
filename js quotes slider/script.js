const quotes = [
    {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "color": "#F9E795"
    },
    {
        "text": "In three words I can sum up everything I've learned about life: it goes on.",
        "author": "Robert Frost",
        "color": "#F96167"
    },
    {
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill",
        "color": "#8AAAE5"
    },
    {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "color": "#97BC62"
    },
    {
        "text": "Don't watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson",
        "color": "#D3C5E5"
    },
    {
        "text": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius",
        "color": "#C4DFE6"
    }
];

const config = 
{
    autoSlideInterval: 3000,
    defaultColors: ["#F9E795","#F96167","#8AAAE5","#97BC62","#D3C5E5","#C4DFE6"]
};

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pauseBtn = document.getElementById("pause-btn");
const progressBar = document.getElementById("progress-bar");

let quote = [];
let currentIndex = 0;
let intervalId = null;
let progressIntervalId = null;
let isPlaying = true;

async function initApp() 
{
    try 
    {
        const response = await fetch(config.jsonUrl);
        quotes = await response.json();
        
        quotes = quotes.map((quote, index) => 
        {
            if (!quote.color) 
            {
                return {
                    ...quote,
                    color: config.defaultColors[index % config.defaultColors.length]
                };
            }
            return quote;
        });
        
        if (quotes.length === 0) 
        {
            throw new Error("No quotes found in the JSON file");
        }
        
        showQuote(currentIndex);
        startAutoSlide();
    } catch (error) 
    {
        document.error("Error loading quotes:", error);
        quoteText.textContent = "Please Click The Next Button";
        quoteAuthor.textContent = "";
    }
}

function showQuote(index) 
{
    if (index >= quotes.length) 
    {
        currentIndex = 0;
    } 
    else if (index < 0) 
    {
        currentIndex = quotes.length - 1;
    } 
    else 
    {
        currentIndex = index;
    }

    const quote = quotes[currentIndex];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `-- ${quote.author}`;
    document.body.style.backgroundColor = quote.color;
    
    resetProgressBar();
}

function startAutoSlide() 
{
    if (intervalId) 
    {
        clearInterval(intervalId);
    }
    if (progressIntervalId) 
    {
        clearInterval(progressIntervalId);
    }
    
    isPlaying = true;
    pauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
    
    let progress = 0;
    const increment = 100 / (config.autoSlideInterval / 100);
    
    progressIntervalId = setInterval(() => 
    {
        progress += 1;
        progressBar.style.width = `${progress}%`;
    }, 100);
    
    intervalId = setInterval(() => 
    {
        showQuote(currentIndex + 1);
    }, config.autoSlideInterval);
}

function resetProgressBar() 
{
    progressBar.style.width = "0%";
}

function pauseAutoSlide() 
{
    if (isPlaying) 
    {
        clearInterval(intervalId);
        clearInterval(progressIntervalId);
        intervalId = null;
        progressIntervalId = null;
        isPlaying = false;
        pauseBtn.innerHTML = '<i class="fas fa-play"></i> Play';
    } 
    else 
    {
        startAutoSlide();
    }
}

prevBtn.addEventListener("click", () => 
{
    showQuote(currentIndex - 1);
    if (isPlaying) startAutoSlide();
});

nextBtn.addEventListener("click", () => 
{
    showQuote(currentIndex + 1);
    if (isPlaying) startAutoSlide();
});

pauseBtn.addEventListener("click", pauseAutoSlide);

document.addEventListener("keydown", (e) => 
{
    if (e.key === "ArrowLeft") 
    {
        showQuote(currentIndex - 1);
        if (isPlaying) startAutoSlide();
    } 
    else if (e.key === "ArrowRight") 
    {
        showQuote(currentIndex + 1);
        if (isPlaying) startAutoSlide();
    } 
    else if (e.key === " ") 
    {
        pauseAutoSlide();
    }
});

window.addEventListener("load", initApp);

// const quotes = [
//     {
//       "id": 1,
//       "quote": "The only way to do great work is to love what you do.",
//       "author": "Steve Jobs",
//       "authorImage": "https://example.com/steve_jobs.jpg",
//       "date": "2005-06-12T15:30:00Z",
//       "category": "Motivation",
//       "popularityIndex": 95
//     },
//     {
//       "id": 2,
//       "quote": "In three words I can sum up everything I've learned about life: it goes on.",
//       "author": "Robert Frost",
//       "authorImage": "https://example.com/robert_frost.jpg",
//       "date": "1956-04-23T12:15:00Z",
//       "category": "Life",
//       "popularityIndex": 88
//     },
//     {
//       "id": 3,
//       "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//       "author": "Winston Churchill",
//       "authorImage": "https://example.com/winston_churchill.jpg",
//       "date": null,
//       "category": "Courage",
//       "popularityIndex": 92
//     },
//     {
//       "id": 4,
//       "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
//       "author": "Franklin D. Roosevelt",
//       "authorImage": "https://example.com/franklin_roosevelt.jpg",
//       "date": null,
//       "category": "Inspiration",
//       "popularityIndex": 89
//     },
//     {
//       "id": 5,
//       "quote": "Don't watch the clock; do what it does. Keep going.",
//       "author": "Sam Levenson",
//       "authorImage": "https://example.com/sam_levenson.jpg",
//       "date": null,
//       "category": "Motivation",
//       "popularityIndex": 75
//     },
//     {
//       "id": 6,
//       "quote": "Life is really simple, but we insist on making it complicated.",
//       "author": "Confucius",
//       "authorImage": "https://example.com/confucius.jpg",
//       "date": null,
//       "category": "Life",
//       "popularityIndex": 82
//     },
    
//   ]
 
