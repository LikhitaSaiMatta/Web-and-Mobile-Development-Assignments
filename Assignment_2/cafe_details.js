document.addEventListener("DOMContentLoaded", () => {
    const cafe = JSON.parse(localStorage.getItem("selectedCafe"));
    const loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));

    if (cafe) {
        // Display cafe details
        document.getElementById("cafeName").textContent = cafe.name;
        document.getElementById("cafeAddress").textContent = `Address: ${cafe.address}`;
        
        const cafeImage = document.getElementById("cafeImage");
        if (cafe.image) {
            cafeImage.src = cafe.image;
            cafeImage.alt = cafe.name;
        } else {
            cafeImage.style.display = "none";
        }

        // Display existing reviews
        const reviewsList = document.getElementById("reviewsList");
        cafe.reviews.forEach(review => {
            const reviewItem = document.createElement("li");
            reviewItem.innerHTML = `<strong>${review.reviewer}</strong>: ${review.text} (Rating: ${review.rating}/10)`;
            reviewsList.appendChild(reviewItem);
        });

        // If user is a customer, display the review form
        if (loggedInUser && loggedInUser.accountType === "customer") {
            const reviewSection = document.getElementById("reviewSection");
            reviewSection.style.display = "block";

            const addReviewForm = document.getElementById("addReviewForm");
            addReviewForm.addEventListener("submit", function (e) {
                e.preventDefault();
                
                // Collect review data
                const reviewText = document.getElementById("reviewText").value;
                const reviewRating = parseFloat(document.getElementById("reviewRating").value);
                
                // Create new review object
                const newReview = {
                    reviewer: loggedInUser.userId,
                    text: reviewText,
                    rating: reviewRating
                };
                
                // Update reviews for the selected cafe
                const cafes = JSON.parse(localStorage.getItem("cafes")) || [];
                const updatedCafes = cafes.map(c => {
                    if (c.id === cafe.id) {
                        c.reviews.push(newReview);
                    }
                    return c;
                });
                
                // Save updated cafes to localStorage
                localStorage.setItem("cafes", JSON.stringify(updatedCafes));
                
                // Add new review to the display
                const reviewItem = document.createElement("li");
                reviewItem.innerHTML = `<strong>${newReview.reviewer}</strong>: ${newReview.text} (Rating: ${newReview.rating}/10)`;
                reviewsList.appendChild(reviewItem);
                
                // Reset form
                addReviewForm.reset();
            });
        }
    } else {
        document.getElementById("cafeDetails").innerHTML = "<p>Cafe details not available.</p>";
    }
});
