<script>

  // these variables will be use as css variables to randomize spin angles and speed.
  let from = 0;
  let to = 0;
  let duration = 0;

  // use unique id's to force animation re-run
  const random = () => Math.random().toString(36).slice(2, 7);
  let key = random();
</script>

<main>
  <!-- keyed html causes rebuild when key changes -->
  {#key key}
    <img
      style={`--from:${from}deg;` +
        `--to:${to}deg;` +
        `--duration:${duration}s;`}
      src="wave.jpeg"
      alt="The greatest story ever."
      class="svelte-1rcdl96"
    />
  {/key}

  <button
    on:click={() => {
      from = to % 360;
      to = from + (Math.floor(Math.random() * 720) + 360); // 1-3 spins
      duration = 2
      key = random();
    }}
  >
    SPIN
  </button>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    place-items: center;
    place-content: center;
    flex-direction: column;
    gap: 40px;
  }
  img {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    animation: rotation var(--duration) 1 ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes rotation {
    from {
      transform: rotate(var(--from));
    }
    to {
      transform: rotate(var(--to));
    }
  }
</style>
