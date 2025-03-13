document.addEventListener("DOMContentLoaded", function () {
    const words = ["Awesome", "Terrific", "Amazing", "Unbelievably Exciting"];
    let index = 0;
    const highlightWords = document.getElementById("highlight-words");

    setInterval(() => {
        highlightWords.style.opacity = 0;
        setTimeout(() => {
            highlightWords.textContent = words[index];
            highlightWords.style.opacity = 1;
            index = (index + 1) % words.length;
        }, 500);
    }, 2000);

    function createFloatingCircle() {
        const circle = document.createElement("div");
        circle.classList.add("position-absolute", "rounded-circle");
        circle.style.width = circle.style.height = `${Math.random() * 200 + 100}px`;
        circle.style.background = "radial-gradient(circle, rgba(255,255,255,0.3), rgba(255,255,255,0))";
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.animation = `float ${Math.random() * 10 + 5}s infinite alternate ease-in-out`;
        document.getElementById("floating-circles").appendChild(circle);
    }

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("position-absolute", "rounded-circle", "bg-light");
        bubble.style.width = bubble.style.height = `${Math.random() * 60 + 20}px`;
        bubble.style.bottom = "-100px";
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.opacity = "0.2";
        bubble.style.animation = `rise ${Math.random() * 10 + 5}s infinite ease-in-out`;
        document.getElementById("bubbles").appendChild(bubble);
    }

    for (let i = 0; i < 6; i++) createFloatingCircle();
    for (let i = 0; i < 6; i++) createBubble();
});
