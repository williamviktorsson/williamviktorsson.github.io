<script>
  let students = [];

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

    students.push({ student });
    students = students;
  }

  function reset() {
    gameElements = [...initialGameElements];
    gameDevSkills = [...initialGameDevSkills];
    roles = [...initialRoles];
    verbsOrIdeas = [...initialVerbsOrIdeas];
    students = [];
  }
</script>

<body>
  <main class="container">
    <article>
      <div class="grid">
        <button on:click={randomize}>Slumpa</button>
        <button on:click={reset}>Återställ</button>
      </div>

      <table role="grid">
        <thead>
          <tr>
            <th scope="col">Spelelement</th>
            <th scope="col">Färdigheter</th>
            <th scope="col">Roller</th>
            <th scope="col">Verb/Idéer</th>
          </tr>
        </thead>
        <tbody>
          {#each students as { student }, i}
            <tr>
              <td>{student.gameElement}</td>
              <td>{student.gameDevSkill}</td>
              <td>{student.role}</td>
              <td>{student.verbOrIdea}</td>
            </tr>
          {/each}
        </tbody>
        <tfoot />
      </table>
    </article>
  </main>
</body>
