$(document).ready(function() // Get references to the slider and images
{
    const $slider = $(".slider");
    const $images = $(".img");
    
    let currentIndex = 0; // currentIndex keeps track of which image is currently showing

    const totalImages = $images.length; // totalImages stores how many images we have
  
    updateSlider(); // Calculates how much to slide (in percentages)
  
    $("#next").click(function() 
    {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlider();
    });
  
    $("#Previous").click(function() 
    {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateSlider();
    });
  
    function updateSlider() 
    {
        const slideAmount = -currentIndex * 100;
        $slider.css("transform", `translateX(${slideAmount}%)`);
    }
});