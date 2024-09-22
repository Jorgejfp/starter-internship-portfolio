document.addEventListener("DOMContentLoaded", function () {
    const timeline = document.querySelector(".timeline");
    let scrollPosition = 0;
    let direction = 1;

    function animateTimeline() {
        scrollPosition += direction * 2;
        if (scrollPosition > timeline.scrollWidth - window.innerWidth || scrollPosition < 0) {
            direction *= -1;
        }
        timeline.scrollTo(scrollPosition, 0);
        requestAnimationFrame(animateTimeline);
    }

    animateTimeline();
});
