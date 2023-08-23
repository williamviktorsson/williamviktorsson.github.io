<!-- Sidebar.svelte -->
<script>
    export let expanded = false;
  </script>
  
  <div class="sidebar" class:expanded>
    <button class="sidebar-toggle" on:click={() => (expanded = !expanded)}>
      {#if expanded}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20,13H4v-2h16V13z"/>
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M4,15h16v2H4V15z M4,11h16v2H4V11z M4,7h16v2H4V7z"/>
        </svg>
      {/if}
      <span>{#if expanded}Collapse{:else}Expand{/if}</span>
    </button>
    <div class="sidebar-content" class:expanded>
      {#if expanded}
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      {:else}
        <ul>
          <li><a href="#">L1</a></li>
          <li><a href="#">L2</a></li>
          <li><a href="#">L3</a></li>
        </ul>
      {/if}
    </div>
  </div>
  
  <style>
    .sidebar {
      flex: 0 0 auto;
      width: 50px;
      background-color: #f8f9fa;
      overflow: hidden;
      transition: width 0.2s ease-in-out;
    }
  
    .sidebar.expanded {
      width: 200px;
    }
  
    .sidebar-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      cursor: pointer;
      font-size: 18px;
    }
  
    .sidebar-toggle span {
      margin-left: 10px;
    }
  
    .sidebar-content {

        padding: 0;
 
    }

    .sidebar-content.expanded {
        padding: 20px; 
    }
  
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  
    li {
      margin-bottom: 10px;
    }
  
    a {
      text-decoration: none;
      color: #333;
    }
  </style>
  