<script>
  import { enhance } from "$app/forms";
  import { beforeNavigate, invalidate } from "$app/navigation";
  import "@picocss/pico";
  import "elizabot";
  import ElizaBot from "elizabot";

  beforeNavigate(() => {
    invalidate(); // force csr to "unload" the imported css on this page
    // try commenting this out and navigate using href links and see how the
    // picocss is carried with us to other pages. its an ugly hack.
  });

  let eliza = new ElizaBot();

  let chat = [];
  let procesing = false;
  chat.push({ user: "eliza", text: eliza.getInitial() });

  async function write(message) {
    // yeet in the new message
    chat = [{ user: "user", text: message }, ...chat];

    // put the eliza dots at the bottom if shes writing
    chat.sort((a, b) => (b.user == "eliza" && b.text == "..." ? 1 : 0));

    // eliza should only process one message at a time, just wait if already writing
    while (procesing) {
      await new Promise((r) => setTimeout(r, 10));
    }

    procesing = true;

    // random delay for reading
    await new Promise((r) => setTimeout(r, 500 + Math.random() * 500));

    const reply = { user: "eliza", text: "..." };
    const response = eliza.transform(message);
    chat = [reply, ...chat];

    // random delay for writing
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    // write the text
    for (let index = 0; index < response.length; index++) {
      const element = response[index];
      reply.text += element;
      chat = chat;
      await new Promise((r) => setTimeout(r, 10));
    }
    procesing = false;
  }
</script>

<div class="chat container">
  <div class="scrollable">
    {#each chat as message}
      <article class={message.user}>
        <span>{message.text}</span>
      </article>
    {/each}
  </div>
  <form
    use:enhance={({ form, data, action, cancel }) => {
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);
      form.reset();
    }}
  >
    <input type="text" name="text" />
  </form>
</div>

<style>
  .chat {
    display: flex;
    flex-direction: column;
    place-items: center;
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 10%;
    right: 10%;
  }

  .scrollable {
    flex: 1 1 auto;
    margin: 0 0 0.5em 0;
    overflow-y: auto;
    flex-direction: column-reverse;
    display: flex;
  }

  article {
    margin: 0.5em 0;
  }

  .user {
    text-align: right;
  }

  span {
    padding: 0.5em 1em;
    display: inline-block;
  }

  .eliza span {
    background-color: rgb(43, 43, 43);
    border-radius: 1em 1em 1em 0;
  }

  .user span {
    background-color: #0074d9;
    color: white;
    border-radius: 1em 1em 0 1em;
    word-break: break-all;
  }
</style>
