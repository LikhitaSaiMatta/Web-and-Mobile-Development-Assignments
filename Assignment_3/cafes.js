
document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "login.html";
        return;
    }

    const response = await fetch("http://localhost:3000/cafes", {
        headers: { Authorization: `Bearer ${token}` },
    });
    const cafes = await response.json();

    const cafesGrid = document.getElementById("cafesGrid");
    cafesGrid.innerHTML = "";

    cafes.forEach(cafe => {
        const cafeCard = document.createElement("div");
        cafeCard.classList.add("cafe-card");

        cafeCard.innerHTML = `
            <h4>${cafe.name}</h4>
            <p>${cafe.address}</p>
        `;

        cafeCard.addEventListener("click", () => {
            window.location.href = `cafe_details.html?id=${cafe._id}`;
        });

        cafesGrid.appendChild(cafeCard);
    });
});
