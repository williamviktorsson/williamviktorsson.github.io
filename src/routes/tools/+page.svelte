<script>
  const categories = [
    {
      name: "3D Modeling & Animation",
      tools: ["Blender", "Maya", "Houdini"]
    },
    {
      name: "2D Art & Animation",
      tools: ["Piskel", "Aseprite", "Adobe Photoshop"]
    },
    {
      name: "Sound Design & Music",
      tools: ["Bosca Ceoil", "Bfxr / Sfxr", "Audacity", "FL Studio"]
    },
    {
      name: "Tilesets & Level Design",
      tools: ["Tiled", "Unity's Tilemap Editor"]
    },
    {
      name: "Spritesheets & Texture Packing",
      tools: ["TexturePacker", "Aseprite"]
    },
    {
      name: "Code Repositories & Version Control",
      tools: ["GitHub", "GitLab"]
    },
    {
      name: "Project Management & Collaboration",
      tools: ["Jira", "Trello", "Slack", "Discord"]
    },
    {
      name: "Quality Assurance & Testing",
      tools: ["TestRail (for test case management)", "Unity Test Runner"]
    },
    {
      name: "Networking & Multiplayer",
      tools: ["Photon Unity Networking (PUN)", "Mirror Networking for Unity"]
    },
    {
      name: "Database Management",
      tools: ["Firebase", "SQLite for Unity"]
    },
    {
      name: "Script Writing & Storyboarding",
      tools: ["Celtx", "Twine"]
    },
    {
      name: "Special Effects",
      tools: ["Unity's Particle System", "Houdini"]
    },
    {
      name: "UI/UX Design",
      tools: ["Adobe XD", "Sketch"]
    },
    {
      name: "Asset Stores & Libraries",
      tools: [
        "Unity Asset Store",
        "Kenney Assets",
        "OpenGameArt.org",
        "FreeSound.org",
        "itch.io game assets",
        "TurboSquid",
        "HDRI Haven"
      ]
    }
  ];
</script>

  <main class="container">
    <article>
      <h1>Game Development Tools</h1>
      <table role="grid">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Tools</th>
          </tr>
        </thead>
        <tbody>
          {#each categories as { name, tools }}
            <tr>
              <td>{name}</td>
              <td>{tools.join(", ")}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </article>
  </main>
