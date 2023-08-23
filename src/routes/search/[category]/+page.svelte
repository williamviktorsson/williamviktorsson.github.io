<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div>
    {#each data.response as item}
      <article>
        <div class="flex">
          <img src={item.avatar} alt="" />
          <div>
            <h3><bold>{item.first_name} {item.last_name}</bold></h3>
            <h4><bold>{item.email}</bold></h4>
            <p>{JSON.stringify(item.address)}</p>

          </div>
        </div>

      </article>
    {/each}
  </div>
</main>

<style>
  img {
    border-radius: 100%;
    background-color: white;
  }

  .flex {
    gap: 40px;
    display: flex;
    flex-direction: row;
    place-items: center;
  }
</style>
