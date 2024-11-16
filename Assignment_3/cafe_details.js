
document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const cafeId = params.get("id");

    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "login.html";
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/cafes/${cafeId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const cafe = await response.json();

        document.getElementById("cafeName").textContent = cafe.name;
        document.getElementById("cafeAddress").textContent = `Address: ${cafe.address}`;

        const cafeImage = document.getElementById("cafeImage");
        if (cafe.image) {
            cafeImage.src = cafe.image;
            cafeImage.alt = cafe.name;
        } else {
            cafeImage.style.display = "none";
        }

        const reviewsList = document.getElementById("reviewsList");
        cafe.reviews.forEach(review => {
            const reviewItem = document.createElement("li");
            reviewItem.innerHTML = `<strong>${review.reviewer}</strong>: ${review.text} (Rating: ${review.rating}/10)`;
            reviewsList.appendChild(reviewItem);
        });

        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        if (loggedInUser && loggedInUser.accountType === "customer") {
            document.getElementById("reviewSection").style.display = "block";

            const addReviewForm = document.getElementById("addReviewForm");
            addReviewForm.addEventListener("submit", async function (e) {
                e.preventDefault();
                const reviewText = document.getElementById("reviewText").value;
                const reviewRating = parseFloat(document.getElementById("reviewRating").value);

                const newReview = { reviewer: loggedInUser.username, text: reviewText, rating: reviewRating };
                await fetch(`http://localhost:3000/cafes/${cafeId}/review`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(newReview),
                });

                window.location.reload();
            });
        }
    } catch (err) {
        console.error(err);
        document.getElementById("cafeDetails").innerHTML = "<p>Failed to load cafe details.</p>";
    }
});
