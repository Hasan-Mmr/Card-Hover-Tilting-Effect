const cards = document.querySelectorAll(".card");
console.log(cards);

document.addEventListener("mousemove", (e) => {
   if (e.target.closest(".card__wraper")) {
      const cardRect = e.target.closest(".card").getBoundingClientRect();
      const hoverOffsetX = e.pageX - cardRect.left;
      const cardHorizontalCenter = cardRect.width / 2;
      const posFromHorizontalCenter = cardHorizontalCenter - hoverOffsetX;
      const horizontalRatio = posFromHorizontalCenter / cardHorizontalCenter;

      const hoverOffsetY = e.pageY - cardRect.top;
      const cardVerticalCenter = cardRect.height / 2;
      const posFromVerticalCenter = hoverOffsetY - cardVerticalCenter;
      const VerticalRatio = posFromVerticalCenter / cardVerticalCenter;
      console.log(VerticalRatio)(
         (e.target.closest(".card").style.transform = `rotateY(${
            horizontalRatio * 25
         }deg) rotateX(${VerticalRatio * 25}deg)`)
      );
   } else {
      console.log(12345);
      cards.forEach((card) => {
         card.style.transform = `rotate(0)`;
      });
   }
});
