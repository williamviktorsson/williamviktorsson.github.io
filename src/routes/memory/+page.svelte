<script>
  let cards = [];
  for (let index = 0; index < 4; index++) {
    cards.push({
      id: index, // TODO: unique ids per card card
      img: "/notrick.gif", // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,
    });
  }
  let flipcount = 0;

  function flip(card) {
  // check if the card is already completed, already flipped twice or already flipped once
  if (card.completed || flipcount >= 2 || card.flipped) {
    alert("chill");
    return;
  }

  // flip the card over
  card.flipped = true;

  // increment the flip count
  flipcount++;

  // if two cards have been flipped, check if they match
  if (flipcount == 2) {
    // get the two flipped cards
    const flippedCards = cards.filter((card) => card.flipped && !card.completed);

    // if the two flipped cards match, mark them as completed
    if (flippedCards.length == 2 && flippedCards[0].id == flippedCards[1].id) {
      flippedCards.forEach((card) => {
        card.completed = true;
        card.flipped = false;
      });
    }

    // reset the flip count after a brief delay
    setTimeout(() => {
      cards.forEach((card) => {
        if (!card.completed) {
          card.flipped = false;
        }
      });
      flipcount = 0;
    }, 1000);
  }
  cards = cards;
}

</script>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  .card {
    border: 1px solid black;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
</style>
