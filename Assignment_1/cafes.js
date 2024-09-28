document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));
  
    const addCafeSection = document.getElementById("addCafeSection");
    const addCafeForm = document.getElementById("addCafeForm");
    const cafesList = document.getElementById("cafesList");
  
    let cafes = JSON.parse(localStorage.getItem("cafes")) || [];
    renderCafes();

    if (loggedInUser && loggedInUser.accountType === "store manager") {
      addCafeSection.style.display = "block";
    } else {
      addCafeSection.style.display = "none";
    }
  
    addCafeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const cafeName = document.getElementById("cafeName").value;
      const cafeAddress = document.getElementById("cafeAddress").value;
      const cafeImageFile = document.getElementById("cafeImage").files[0];
  
      if (cafeImageFile) {
        const reader = new FileReader();
        reader.readAsDataURL(cafeImageFile);
        reader.onload = function () {
          const cafeImage = reader.result; 
  
          const newCafe = {
            id: Date.now(),
            name: cafeName,
            address: cafeAddress,
            image: cafeImage,
            reviews: [],
          };
  
          cafes.push(newCafe);
          localStorage.setItem("cafes", JSON.stringify(cafes));
          addCafeForm.reset();
          renderCafes();
        };
      } else {
        const newCafe = {
          id: Date.now(),
          name: cafeName,
          address: cafeAddress,
          image: null,
          reviews: [],
        };
  
        cafes.push(newCafe);
        localStorage.setItem("cafes", JSON.stringify(cafes));
        addCafeForm.reset();
        renderCafes();
      }
    });
  
    function renderCafes() {
      cafesList.innerHTML = '<h3>Cafes and Reviews</h3>';
      cafes.forEach(cafe => {
        const cafeDiv = document.createElement("div");
        cafeDiv.classList.add("cafe");
        
        const avgRating = calculateAverageRating(cafe.reviews);
        
        cafeDiv.innerHTML = `
          <h4>${cafe.name}</h4>
          <p>Address: ${cafe.address}</p>
          ${cafe.image ? `<img src="${cafe.image}" alt="${cafe.name}">` : ''}
          <p class="cafe_rating">Average Rating: ${avgRating ? avgRating.toFixed(1) : 'No ratings yet'}</p>
          <div class="cafe_reviews">
            <h5>Reviews:</h5>
            <ul id="reviewsList${cafe.id}">
              ${cafe.reviews.map(review => `<li><strong>${review.reviewer}</strong>: ${review.text} (Rating: ${review.rating}/10)</li>`).join('')}
            </ul>
          </div>
        `;
  
        if (loggedInUser && loggedInUser.accountType === "customer") {
          const reviewForm = document.createElement("form");
          reviewForm.id = `reviewForm${cafe.id}`;
          reviewForm.innerHTML = `
            <div class="field">
              <label for="reviewText${cafe.id}">Add a Review</label>
              <textarea id="reviewText${cafe.id}" required></textarea>
            </div>
            <div class="field rating_input">
              <label for="reviewRating${cafe.id}">Rating (1-10)</label>
              <input type="number" id="reviewRating${cafe.id}" min="1" max="10" required />
            </div>
            <button class="button" type="submit">Submit Review</button>
          `;
          cafeDiv.appendChild(reviewForm);
  
          reviewForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const reviewText = document.getElementById(`reviewText${cafe.id}`).value;
            const reviewRating = document.getElementById(`reviewRating${cafe.id}`).value;
  
            const newReview = {
              reviewer: loggedInUser.userId,
              text: reviewText,
              rating: parseFloat(reviewRating)
            };

            cafes = cafes.map(c => {
              if (c.id === cafe.id) {
                c.reviews.push(newReview);
              }
              return c;
            });
  
            localStorage.setItem("cafes", JSON.stringify(cafes));
            renderCafes(); 
          });
        }
  
        cafesList.appendChild(cafeDiv);
      });
    }
  
    function calculateAverageRating(reviews) {
      if (reviews.length === 0) return 0;
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      return totalRating / reviews.length;
    }
  });
  