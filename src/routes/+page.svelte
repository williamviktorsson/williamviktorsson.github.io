<script>
  let students = [];
  let gameIdeas = [];

  const initialGameElements = [
    "Zombies",
    "Rymden",
    "Pussel",
    "Flera spelare",
    "Racing",
    "Äventyr",
    "Fantasi",
    "Överlevnad",
    "Sport",
    "Simulering",
    "Mysterium",
    "Skräck",
    "Strategi",
    "Slagsmål",
    "Plattformsspel",
  ];
  const initialGameDevSkills = [
    "Programmering",
    "Konst",
    "Ljuddesign",
    "UI/UX-design",
    "Animering",
    "Manusskrivning",
    "Kvalitetssäkring",
    "Speltestning",
    "Nätverk",
    "Databashantering",
  ];
  const initialRoles = [
    "Projektledning",
    "Utveckling - Spelmekanik",
    "Utveckling - Webbplattform",
    "Tillgångsskapande",
    "Innehållsskapande",
    "Banutformning",
    "Berättande",
    "Marknadsföring",
    "HR",
    "Redovisning",
    "Kundrelationer",
    "QA-ledare",
    "Konstdirektör",
    "Ljudingenjör",
    "Community Manager",
  ];
  const initialVerbsOrIdeas = [
    "Utforska",
    "Bygga",
    "Försvara",
    "Lösa",
    "Samla",
    "Fly",
    "Anpassa",
    "Handla",
    "Tävla",
    "Upptäcka",
  ];

  let gameElements = [...initialGameElements];
  let gameDevSkills = [...initialGameDevSkills];
  let roles = [...initialRoles];
  let verbsOrIdeas = [...initialVerbsOrIdeas];

  function randomize() {
    const student = {
      gameElement: gameElements.splice(
        Math.floor(Math.random() * gameElements.length),
        1
      )[0],
      gameDevSkill: gameDevSkills.splice(
        Math.floor(Math.random() * gameDevSkills.length),
        1
      )[0],
      role: roles.splice(Math.floor(Math.random() * roles.length), 1)[0],
      verbOrIdea: verbsOrIdeas.splice(
        Math.floor(Math.random() * verbsOrIdeas.length),
        1
      )[0],
    };

    students.push(student);
    gameIdeas.push({
      gameElement: student.gameElement,
      verbOrIdea: student.verbOrIdea,
    });
    students = students;
    gameIdeas = gameIdeas;
  }

  function reset() {
    gameElements = [...initialGameElements];
    gameDevSkills = [...initialGameDevSkills];
    roles = [...initialRoles];
    verbsOrIdeas = [...initialVerbsOrIdeas];
    students = [];
    gameIdeas = [];
  }
</script>

<body>
  <main class="container">
    <article>
      <div class="grid">
        <button on:click={randomize}>Slumpa</button>
        <button on:click={reset}>Återställ</button>
      </div>

      <!-- Table for Skills and Roles -->
      <h2>Studenter</h2>
      <table role="grid">
        <tbody>
          {#each students as student, i}
            <tr>
              <td>Student {i + 1}</td>
              <td>{student.gameDevSkill}</td>
              <td>{student.role}</td>
            </tr>
          {/each}
        </tbody>
      </table>

      <!-- Table for Game Ideas and Game Elements -->
      <h2>Spelidéer och spelelement</h2>
      <table role="grid">
        <tbody>
          {#each gameIdeas as idea}
            <tr>
              <td>{idea.gameElement}</td>
              <td>{idea.verbOrIdea}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </article>
  </main>
</body>
