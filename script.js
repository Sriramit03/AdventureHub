import { Mountain } from "./data/Places.js";
import { Beach } from "./data/Places.js";

// Function to capture user inputs
function getUserInputs() {
  const place = document.getElementById("place").value;
  const activity = document.getElementById("activity").value;
  const budget = document.getElementById("budget").value;
  return { place, activity, budget };
}
//Recommendation based on Random number
function generateRecommendation(inputs) {
  const { place, activity, budget } = inputs;
  if (inputs.place === "Mountain") {
    const places = Mountain[activity][budget];
    return generateRandomPlace(places);
  }
  const places = Beach[activity][budget];
  console.log(place);
  return generateRandomPlace(places);
}

//Generate Random Number
function generateRandomPlace(places) {
  const num = Math.floor(Math.random() * places.length);
  return places[num];
}

// Function to display the recommendation
function displayRecommendation() {
  const inputs = getUserInputs();
  const recommendation = generateRecommendation(inputs);
  const template = `Based on your preferences, we recommend a trip to the beautiful ${recommendation.place} Enjoy the ${recommendation.activities}. `;
  document.getElementById("output").innerText = template;
  document.getElementById("result").style.display = "flex";
}

// Event listener for the submit button
document.getElementById("btn-submit").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  displayRecommendation();
});

/* Handburger menu activator for mobile devices */
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Function to generate recommendations based on inputs
function generateTraditionalRecommendation(inputs) {
  const { place, activity, budget } = inputs;
  //Recommendation Based on traditional If Else
  if (place === "Beach" && activity === "Adventure") {
    if (budget === "Low")
      return "Gokarna, India: Perfect for adventure lovers on a budget, Gokarna offers water sports like kayaking, banana boat rides, and trekking along the coastline. Its uncrowded beaches and scenic views provide the perfect mix of adventure and tranquility";
    else if (budget === "Medium")
      return "Nha Trang, Vietnam: Known for its turquoise waters and thrilling activities like jet skiing, scuba diving, and parasailing. The coastal city combines exciting marine adventures with vibrant nightlife and delicious seafood, making it a balanced destination.";
    else
      return "Costa Rica, Central America: A paradise for adrenaline junkies, Costa Rica offers surfing, whitewater rafting, and ziplining through lush coastal rainforests. Its stunning Pacific beaches, exotic wildlife, and eco-luxury resorts make it an ultimate adventure escape.";
  } else if (place === "Beach" && activity === "Relaxation") {
    if (budget === "Low")
      return "Varkala, India: Known for its stunning cliffside views and calm beaches, Varkala offers Ayurvedic spas, yoga retreats, and affordable guesthouses. It's perfect for those seeking relaxation on a budget.";
    else if (budget === "Medium")
      return "El Nido, Philippines: A serene escape with its crystal-clear lagoons, white sandy beaches, and peaceful ambiance. Ideal for kayaking, lounging, or simply enjoying nature's beauty surrounded by dramatic limestone cliffs.";
    else
      return "Maldives: Synonymous with luxury and relaxation, the Maldives offers overwater villas, private beaches, and world-class spa experiences. With clear blue waters, vibrant marine life, and unrivaled hospitality, it’s the ultimate getaway for peace and rejuvenation.";
  } else if (place === "Mountain" && activity === "Relaxation") {
    if (budget === "Low")
      return " Munnar, India: Known for lush green tea plantations and misty hills, Munnar offers scenic viewpoints, nature walks, and peaceful homestays, making it ideal for relaxation on a budget.";
    else if (budget === "Medium")
      return "Dalat, Vietnam: A serene highland retreat with cool weather, waterfalls, and flower gardens. Relax while enjoying leisurely hikes, lakeside picnics, and charming French colonial architecture.";
    else
      return "Aspen, USA: A luxurious escape with spa retreats, cozy lodges, and scenic gondola rides. Surrounded by the Rockies, Aspen offers a calm ambiance with opportunities for light hiking and hot air ballooning for ultimate relaxation.";
  } else {
    if (budget === "Low")
      return "Manali, India: A budget-friendly hub for adventurers, offering trekking, paragliding, river rafting, and mountain biking. The snow-capped peaks of the Himalayas provide breathtaking views and exciting experiences for thrill-seekers.";
    else if (budget === "Medium")
      return " Banff National Park, Canada: Perfect for hiking, rock climbing, and kayaking. Explore glacial lakes, rugged trails, and wildlife. Adventure enthusiasts can enjoy activities like snowboarding or canoeing surrounded by the Canadian Rockies.";
    else
      return "Zermatt, Switzerland: A paradise for alpine adventurers, Zermatt is famous for skiing, mountaineering, and hiking. Home to the iconic Matterhorn, it offers luxurious stays and thrilling activities year-round with stunning landscapes";
  }
}
