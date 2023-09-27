document.addEventListener("DOMContentLoaded", function() {
    const textElement = documment.getElementById("typing-text");
    const textTotype  = "I AM FAVOUR .I LOVE PROGRAMMING .LET'S CONNECT";

    let index = 0;
    function typeNextLetter() {
        textElement.textContent+= textTotype[index];
        index++;
        
        if (index < textTotype.length){
            setTimeout(typeNextLetter,8000)
        }
    }
    typeNextLetter()
});