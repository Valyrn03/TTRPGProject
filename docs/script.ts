const btn = document.querySelector("databaseLoaded");

btn?.addEventListener("click", () => {
    btn.nodeValue = "Database Loaded";

    const rndCol = `rgb(0, 0, 0)`;
    document.body.style.backgroundColor = rndCol;
})