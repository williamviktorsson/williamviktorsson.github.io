<script>
  import { enhance } from "$app/forms";
  import ElizaBot from "elizabot";

  // Initialize ElizaBot and chat messages
  const eliza = new ElizaBot();
  let chat = [{ user: "eliza", text: eliza.getInitial() }];

  // Track whether the chatbot is currently responding to a message
  let responding = false;

  // Track the latest messages from the user that haven't been responded to yet
  let latestUserMessages = [];

  // Function to write a message to the chat
  async function write(message) {
    // Add the user's message to the chat and the latestUserMessages array
    chat = [...chat, { user: "user", text: message }];
    latestUserMessages.push(message);

    // Wait until the chatbot is finished responding to the previous message
    while (responding) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    // If there are no new messages from the user, return
    const messages = latestUserMessages.splice(0, latestUserMessages.length);
    if (!messages.length) return;

    // Set responding to true so that the chatbot doesn't respond to multiple messages at once
    responding = true;

    // Add a new Eliza message to the chat and get its index
    const elizaMessageIndex = chat.push({ user: "eliza", text: "" }) - 1;

    // Generate the response message for each message in messages array
    const response = messages.map((m) => eliza.transform(m)).join("\n");

    // Iterate over each character in the response and add it to the Eliza message one-by-one
    for (const char of response) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      chat[elizaMessageIndex].text += char;
    }

    // Set responding to false now that the chatbot has finished responding
    responding = false;
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

<!-- The HTML for the chatbot -->
<div class="container">
  <h1>Chatbot</h1>
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
      // Cancel the form submission so that the page doesn't reload
      cancel();
      
      // Get the user's message from the form and write it to the chat
      const text = data.get("text");
      write(text);
      
      // Reset the form input
      form.reset();
    }}
  >
    <input type="text" name="text" />
  </form>
</div>
