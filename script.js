document.queryselector("button").addEventListener("click", function () {
    alert("Contact us to start advertising!");
});
const video _=
document.getElementById("advideo");
const counter =
document.getElementById("videoCount");
let views =
localStorage.getItem("videoViews") || 0;
counter.textContent = "Views: " + views;
video.addEventListener("play", () => {
    if (!video.dataset.played) {
        views++;
        localStorage.setItem("videoViews", views);
        counter.textContent = "Views: " + views;
        video.dataset.played = true;
    }
});