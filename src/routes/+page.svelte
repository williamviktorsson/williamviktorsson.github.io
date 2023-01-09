<script>
  let clicks = 100;
  let multiplier = 1;
  let workers = [];

  let upgrades = [
    { cost: 15, name: "Doubler", multiplier: 2, worker: 0 },
    { cost: 5, name: "Worker", multiplier: 0, worker: 1 },
  ];

  function increment() {
    clicks = clicks + multiplier;
  }
</script>

<article>
  <header>
    <div class="grid">
      {#each upgrades as upgrade}
        <button
          on:click={() => {
            if (clicks >= upgrade.cost) {
              if (upgrade.multiplier) {
                multiplier = multiplier * upgrade.multiplier;
                clicks -= upgrade.cost;
              }
              if (upgrade.worker && clicks) {
                workers = [upgrade.name, ...workers];
                /* start "clicking" every 1000 ms */
                setInterval(increment, 1000);
                clicks -= upgrade.cost;
              }
            } else {
              alert("Click some more first!");
            }
          }}
          class="upgrade"
        >
          <span>{upgrade.name}</span>
          <span>{upgrade.cost}</span>
        </button>
      {/each}
    </div>
  </header>
  <div class="game">
    <button on:click={increment} class="clicker">
      <span class="clicks">{clicks}</span>
      <span class="pointtext">PPC: {multiplier}</span>
    </button>
  </div>
  <footer>
    <div class="panelright">
      <div>
        <span>Workers</span>
        <hr />
        <div class="shop">
          {#each workers as worker}
            <div class="worker">{worker}</div>
          {/each}
        </div>
      </div>
      <hr />
    </div>
  </footer>
</article>

<style>
  .shop {
    display: grid;
    grid-auto-flow: row; /* default */
    gap: 8px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  .upgrade {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    background-color: grey;
    place-items: center;
    place-content: center;
    display: flex;
    flex-direction: column;
  }

  .worker {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    background-color: rgb(128, 141, 27);
    place-items: center;
    place-content: center;
    display: flex;
  }

  .game {
    height: 50vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
  }
  .clicker {
    clip-path: circle();
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    place-items: center;
    place-content: center;
  }

  .panelright {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .clicks {
    font-size: 100px;
  }

  .pointtext {
    color: brown;
    font-size: 25px;
    font-weight: bold;

  }
</style>
