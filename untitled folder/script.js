const cards = document.querySelectorAll('.card');
let index = 0;

function showCard(i) {
  cards.forEach(card => card.classList.remove('active'));
  cards[i].classList.add('active');
}

document.querySelector('.next').onclick = () => {
  index = (index + 1) % cards.length;
  showCard(index);
};

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + cards.length) % cards.length;
  showCard(index);
};