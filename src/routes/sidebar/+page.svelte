<!-- App.svelte -->
<script>
    import Sidebar from './Sidebar.svelte';
  </script>
  
  <div class="container">
    <Sidebar />
    <div class="main-content">
      <h1>Welcome to my app</h1>
      <p>Some content here...</p>
    </div>
  </div>
  
  <style>
    .container {
      display: flex;
      height: 100vh;
    }
  
    .main-content {
      flex: 1;
      padding: 20px;
    }
  </style>
  