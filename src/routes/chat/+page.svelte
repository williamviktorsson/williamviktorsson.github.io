<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";

  let eliza = new ElizaBot();

  let chat = [{ user: "eliza", text: eliza.getInitial() }];


  async function write(message) {

  // Add the user message to the chat array
  chat.push({ user: "user", text: message });

  chat = chat;

  // Transform the user message using ElizaBot
  let response = eliza.transform(message);

  await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

  // Add the bot response to the chat array
  chat.push({ user: "eliza", text: response });

  chat = chat

  // random delay for writing

  // TODO: write the text

  console.log("yo?")

}
</script>


<svelte:head>
  <link rel="stylesheet" href="/pico.min.css" />
  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<div class="container">
  <h1>TODO: Complete assignment</h1>
  <div class="scrollable">
    {#each chat as message}
      <article>
        <span>{message.user}: {message.text}</span>
      </article>
    {/each}
  </div>  
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      // TODO: reset the form using form.reset()
      form.reset();
    }}
  >
    <input type="text" name="text" />
  </form>
</div>
