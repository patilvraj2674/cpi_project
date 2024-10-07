// Add interactive functionality for future features (such as buttons for the band waitlist, etc.)
document.addEventListener('DOMContentLoaded', function () {
  console.log("JavaScript is loaded!");
});

const container = document.getElementById("container");

// Change the block's background and text color on hover
container.addEventListener("mouseenter", () => {
  container.style.backgroundColor = "#d2cece"; // New background color on hover
  container.querySelector("h1").style.color = "#000000"; // Change h1 font color
  container.querySelector("p").style.color = "#000000"; // Change paragraph font color
});

// Reset the background and text color when the mouse leaves
container.addEventListener("mouseleave", () => {
  container.style.backgroundColor = "#291910"; // Original background color
  container.querySelector("h1").style.color = "#d2cece"; // Reset h1 font color
  container.querySelector("p").style.color = "#d2cece"; // Reset paragraph font color
});

// Assuming aat is defined somewhere in your code
const { ScrollObserver, valueAtPercentage } = aat;

const cardsContainer = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');
cardsContainer.style.setProperty('--cards-count', cards.length);
cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);

Array.from(cards).forEach((card, index) => {
  const offsetTop = 20 + index * 20;
  card.style.paddingTop = `${offsetTop}px`;
  if (index === cards.length - 1) {
      return;
  }
  const toScale = 1 - (cards.length - 1 - index) * 0.1;
  const nextCard = cards[index + 1];
  const cardInner = card.querySelector('.card__inner');
  ScrollObserver.Element(nextCard, {
      offsetTop,
      offsetBottom: window.innerHeight - card.clientHeight
  }).onScroll(({ percentageY }) => {
      cardInner.style.scale = valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY
      });
      cardInner.style.filter = `brightness(${valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY
      })})`;
  });
});

