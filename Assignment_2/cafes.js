document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));
  
    const addCafeSection = document.getElementById("addCafeSection");
    const addCafeForm = document.getElementById("addCafeForm");
    const cafesList = document.getElementById("cafesList");
  
    let cafes = JSON.parse(localStorage.getItem("cafes")) || [];
    renderCafes();

    console.log(loggedInUser);
    if (loggedInUser && loggedInUser.accountType === "storeManager") {
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
      const cafesGrid = document.getElementById("cafesGrid");
      cafesGrid.innerHTML = '';
  
      cafes.forEach(cafe => {
          const cafeCard = document.createElement("div");
          cafeCard.classList.add("cafe-card");
  
          const avgRating = calculateAverageRating(cafe.reviews);
  
          cafeCard.innerHTML = `
              <h4>${cafe.name}</h4>
              <p>Average Rating: ${avgRating ? avgRating.toFixed(1) : 'No ratings yet'}</p>
              ${cafe.image ? `<img src="${cafe.image}" alt="${cafe.name}">` : ''}
          `;
  
          // Navigate to cafe details page on click
          cafeCard.addEventListener("click", () => {
              localStorage.setItem("selectedCafe", JSON.stringify(cafe));
              window.location.href = `cafe_details.html?id=${cafe.id}`;
          });
  
          cafesGrid.appendChild(cafeCard);
      });
  }
  
  
    function calculateAverageRating(reviews) {
      if (reviews.length === 0) return 0;
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      return totalRating / reviews.length;
    }
  });
  