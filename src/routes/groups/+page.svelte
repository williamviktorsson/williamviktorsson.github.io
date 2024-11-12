<script>
  let econs = [
    "Bergéli, Philip",
    "Baghai, Arvid",
    "Borssén, Emmylou",
    "Brandt, Ellen",
    "Cederblad, Albin",
    "Danielsson, Robin",
    "Eklund, Mimmi",
    "Ekros, Gustav",
    "Eliasson, Gustav",
    "Fahlgren, Erik",
    "Henriksson, Nellie",
    "Hugosson, Turid",
    "Jansson, Louise",
    "Jellnor, Lowe",
    "Jensen, Victor",
    "Karlsson, Hugo",
    "Larsson, Valdemar",
    "Lindgren, Lydia",
    "Nilsson, Felix",
    "Nordenback, Jakob",
    "Nyberg, Anton",
    "Näs, Bruno",
    "Nylén, Fanny",
    "Loghlen, Benjamin",
    "Sedic, Alma",
    "Sjöstedt, Mille",
    "Sedin, Noah",
    "Strekozova, Elina",
    "Tollefsen, Erik",
    "Törnros, Alva",
    "Åberg, Emy",
  ];

  // Example list of 33 economics students
  let economicsStudents = Array.from(econs, (name) => ({
    name,
    here: true,
  }));

  let otherGroup1 = [
    "Axelsson, Patrik",
    "Bastani, Milo",
    "Brandberg, David",
    "Eriksson, Nemo",
    "Falkdal, John",
    "Gustafsson, Sam",
    "Hedlund, Leo",
    "Holmlund, Albin",
    "Jacobsen, Ida",
    "Lindholm, David",
    "Lindmark, Victor",
    "Lundborg, Ingo",
    "Mikaelsson, Rasmus",
    "Nilsson, Elis",
    "Nilsson, Frans",
    "Norrman, Axel",
    "Rahimi, Mehdi",
    "Rezai, Julius",
    "Rohlin, Erik",
    "Alexander-Payak",
    "Schwalb, Liam",
    "Silander, Otto",
    "Sjögren, Anton",
    "Soccavo, Elias",
    "Strömberg, Linus",
  ];
  let otherGroup2 = [
    "Bernhardsson, Wilmer",
    "Erlandsson, Emmy",
    "Faraj Khaled",
    "Fischer, Villem",
    "Galambos, Duno",
    "Hedelin, Henrik",
    "Jonsson, Andreas",
    "Laestander, Leo",
    "Lind, Måns",
    "Lindberg, Dennis",
    "Lindström, Edith",
    "Lundgren, Rasmus",
    "Lundin, Edvin",
    "Martti, Svante",
    "Myhr, Kajsa",
    "Norqvist, Albert",
    "Olofsson, Ludvig",
    "Olsson, Oscar",
    "Smith, Fia",
    "Sullivan, Noel",
    "Ulander, Matteus",
    "Ydreborg, Gustav",
    "Zimmerman, Irma",
  ];

  let buzzwords = [
    "Agile",
    "Synergy",
    "Innovation",
    "Disruptive",
    "Blockchain",
  ];

  // Function to divide the list into 4 sub-lists
  function divideIntoSublists(list, numSublists) {
    const sublists = [];
    const sublistSize = Math.ceil(list.length / numSublists);
    for (let i = 0; i < list.length; i += sublistSize) {
      sublists.push(list.slice(i, i + sublistSize));
    }
    return sublists;
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const economicsSublists = divideIntoSublists(economicsStudents, 4);

  let numBuzzwords = 1;

  let groups = [];

  function randomizeGroups() {
    let tempOtherGroup1 = [...otherGroup1];
    let tempOtherGroup2 = [...otherGroup2];

    let availableEconomicsStudents = economicsStudents.filter(
      (student) => student.here
    );

    shuffle(tempOtherGroup1);
    shuffle(tempOtherGroup2);

    groups = [];

    // Determine the number of groups
    let numGroups = Math.floor(availableEconomicsStudents.length / 2);

    // Initialize groups with 2 Economics students each
    for (let i = 0; i < numGroups; i++) {
      let group = {
        economics: [],
        other1: [],
        other2: [],
      };

      for (let j = 0; j < 2; j++) {
        let randomIndex = Math.floor(
          Math.random() * availableEconomicsStudents.length
        );
        group.economics.push(
          availableEconomicsStudents.splice(randomIndex, 1)[0].name
        );
      }

      groups.push(group);
    }

    // If there's one remaining Economics student, add them to a random group
    if (availableEconomicsStudents.length === 1) {
      let randomGroup = groups[Math.floor(Math.random() * groups.length)];
      randomGroup.economics.push(availableEconomicsStudents[0].name);
    }

    // Round-robin distribute students from otherGroup1
    let groupIndex = 0;
    while (tempOtherGroup1.length > 0) {
      let student = tempOtherGroup1.shift();
      groups[groupIndex].other1.push(student);
      groupIndex = (groupIndex + 1) % groups.length;
    }

    // Round-robin distribute students from otherGroup2
    while (tempOtherGroup2.length > 0) {
      let student = tempOtherGroup2.shift();
      groups[groupIndex].other2.push(student);
      groupIndex = (groupIndex + 1) % groups.length;
    }

    // Assign buzzwords to each group
    groups.forEach((group) => {
      group.buzzwords = [];
      for (let i = 0; i < numBuzzwords; i++) {
        let randomIndex = Math.floor(Math.random() * buzzwords.length);
        group.buzzwords.push(buzzwords[randomIndex]);
      }
    });
  }
</script>

<body>
  <main class="container-fluid">
    <article>
      <h2>Ekonomielever</h2>

      <div class="grid">
        {#each economicsSublists as sublist}
          <div class="column">
            <ul>
              {#each sublist as student, i}
                <li>
                  <input type="checkbox" bind:checked={student.here} />
                  {student.name}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>

      <label for="buzzwordSlider">Ord per grupp: {numBuzzwords}</label>
      <input
        id="buzzwordSlider"
        type="range"
        min="0"
        max="5"
        bind:value={numBuzzwords}
      />

      <button on:click={randomizeGroups}>Slumpa grupper</button>

      <h2>Slumpade grupper</h2>
      <table role="grid">
        <thead>
          <tr>
            <th>Gruppnummer</th>

            <th>Ek2u</th>
            <th>Te3b</th>
            <th>Te3an</th>
            {#if numBuzzwords > 0}
              <th>Ord</th>
            {/if}
          </tr>
        </thead>
        <tbody>
          {#each groups as group,i}
            <tr>
              <td>
                Grupp {i+1}
              </td>
              <td>
                {#each group.economics as economic}
                  <li>
                    {economic}
                  </li>
                {/each}
              </td>
              <td>
                {#each group.other1 as other1}
                  <li>
                    {other1}
                  </li>
                {/each}</td
              >
              <td>
                {#each group.other2 as other2}
                  <li>
                    {other2}
                  </li>
                {/each}</td
              >
              {#if numBuzzwords > 0}
                <td>
                  {#each group.buzzwords as buzzword}
                    <li>
                      {buzzword}
                    </li>
                  {/each}</td
                >{/if}
            </tr>
          {/each}
        </tbody>
      </table>
    </article>
  </main>
</body>
