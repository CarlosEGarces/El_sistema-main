// Sistema de contexto conversacional
const conversationContext = {
  lastQuestion: null,
  waitingForResponse: false,
  questionType: null,
}

// Función para establecer contexto de pregunta
function setQuestionContext(questionType, question) {
  conversationContext.lastQuestion = question
  conversationContext.waitingForResponse = true
  conversationContext.questionType = questionType
}

// Función para limpiar contexto
function clearContext() {
  conversationContext.lastQuestion = null
  conversationContext.waitingForResponse = false
  conversationContext.questionType = null
}

// Función para mostrar botones de programas interactivos
function showProgramButtons() {
  const chatBox = document.getElementById("chat-box")

  // Mensaje de introducción
  const introMessage = document.createElement("div")
  introMessage.className = "bot-message"
  introMessage.innerHTML = `<span class="emoji">📋</span> <strong>Información sobre Programas</strong><br><br>Selecciona el programa que te interese para conocer más detalles:`
  chatBox.appendChild(introMessage)

  // Contenedor de botones de programas
  const programsContainer = document.createElement("div")
  programsContainer.className = "programs-container"

  const programs = [
    {
      id: "iniciacion",
      icon: "📚",
      name: "Programa de Iniciación Musical",
      description:
        "Este programa está diseñado para niños desde los 4 años de edad, donde dan sus primeros pasos en el ámbito musical.",
    },
    {
      id: "alma-llanera",
      icon: "🪕",
      name: "Programa Alma Llanera",
      description:
        "El Programa Alma Llanera es una iniciativa clave para la preservación, enseñanza y difusión de la música tradicional venezolana.",
    },
    {
      id: "simon-bolivar",
      icon: "🏫",
      name: "Programa Simon Bolivar",
      description:
        "El Programa Simon Bolivar nació en 2015 con el objetivo de masificar el milagro de la música y expandir el impacto social de El Sistema Nucleo Ciudad Guayana.",
    },
    {
      id: "coral",
      icon: "🎵",
      name: "Programa Coral",
      description:
        "El Programa Coral promueve la incorporación de niños, niñas y jóvenes que, usando la voz como instrumento, entran en contacto con una gama de posibilidades de desarrollo individual y colectivo.",
    },
    {
      id: "academico",
      icon: "🎼",
      name: "Programa Académico Orquestal",
      description:
        "El Programa Académico Musical es fundamental para El Sistema Nucleo Ciudad Guayana porque garantiza una formación musical integral, gratuita y de calidad para niños y jóvenes.",
    },
  ]

  programs.forEach((program) => {
    const programButton = document.createElement("button")
    programButton.className = "program-button"
    programButton.innerHTML = `
      <div class="program-icon">${program.icon}</div>
      <div class="program-content">
        <div class="program-title">${program.name}</div>
        <div class="program-desc">${program.description}</div>
      </div>
    `

    programButton.addEventListener("click", () => {
      showProgramDetails(program.id)
    })

    programsContainer.appendChild(programButton)
  })

  chatBox.appendChild(programsContainer)
  chatBox.scrollTop = chatBox.scrollHeight
}

// Función para mostrar botones de orquestas
function showOrchestraButtons() {
  const chatBox = document.getElementById("chat-box")

  const introMessage = document.createElement("div")
  introMessage.className = "bot-message"
  introMessage.innerHTML = `<span class="emoji">🎻</span> <strong>Nuestras Orquestas</strong><br><br>Conoce más sobre nuestras prestigiosas orquestas:`
  chatBox.appendChild(introMessage)

  const orchestrasContainer = document.createElement("div")
  orchestrasContainer.className = "orchestras-container"

  const orchestras = [
    {
      id: "guayana",
      icon: "🎼",
      name: "Orquesta Sinfónica Juvenil de Ciudad Guayana",
      description: "Plataforma de alto rendimiento musical que proyecta el talento venezolano internacionalmente.",
      director: "Carlos Sanchez",
    },
    {
      id: "piar",
      icon: "🎻",
      name: "Orquesta Sinfónica Regional Juvenil 'Manuel Carlos Piar'",
      description: "Espacio de formación integral para jóvenes músicos del Estado Bolívar.",
      director: "Gregman Rodriguez Jimenez",
    },
  ]

  orchestras.forEach((orchestra) => {
    const orchestraButton = document.createElement("button")
    orchestraButton.className = "orchestra-button"
    orchestraButton.innerHTML = `
      <div class="orchestra-icon">${orchestra.icon}</div>
      <div class="orchestra-content">
        <div class="orchestra-title">${orchestra.name}</div>
        <div class="orchestra-desc">${orchestra.description}</div>
        <div class="orchestra-director">👨‍🏫 Director: ${orchestra.director}</div>
      </div>
    `

    orchestraButton.addEventListener("click", () => {
      showOrchestraDetails(orchestra.id)
    })

    orchestrasContainer.appendChild(orchestraButton)
  })

  chatBox.appendChild(orchestrasContainer)
  chatBox.scrollTop = chatBox.scrollHeight
}

// Función para mostrar botones de ayuda/servicios
function showHelpButtons() {
  const chatBox = document.getElementById("chat-box")

  const introMessage = document.createElement("div")
  introMessage.className = "bot-message"
  introMessage.innerHTML = `<span class="emoji">💡</span> <strong>¿En qué puedo ayudarte?</strong><br><br>Explora todo lo que puedo hacer por ti:`
  chatBox.appendChild(introMessage)

  const helpContainer = document.createElement("div")
  helpContainer.className = "help-container"

  const helpOptions = [
    {
      id: "programs-help",
      icon: "🎓",
      name: "Información sobre Programas",
      description: "Conoce nuestros programas educativos: Iniciación, PreInfantil, Alma Llanera y más.",
    },
    {
      id: "orchestras-help",
      icon: "🎻",
      name: "Nuestras Orquestas",
      description: "Descubre las orquestas juveniles de Ciudad Guayana y Regional Piar.",
    },
    {
      id: "events-help",
      icon: "📅",
      name: "Eventos y Calendario",
      description: "Consulta nuestros próximos conciertos y actividades musicales.",
    },
    {
      id: "location-help",
      icon: "📍",
      name: "Ubicación",
      description: "Encuentra dónde estamos ubicados en Ciudad Guayana.",
    },
  ]

  helpOptions.forEach((option) => {
    const helpButton = document.createElement("button")
    helpButton.className = "help-button"
    helpButton.innerHTML = `
      <div class="help-icon">${option.icon}</div>
      <div class="help-content">
        <div class="help-title">${option.name}</div>
        <div class="help-desc">${option.description}</div>
      </div>
    `

    helpButton.addEventListener("click", () => {
      showHelpDetails(option.id)
    })

    helpContainer.appendChild(helpButton)
  })

  chatBox.appendChild(helpContainer)
  chatBox.scrollTop = chatBox.scrollHeight
}

// Función para mostrar botones de música venezolana
function showVenezuelanMusicButtons() {
  const chatBox = document.getElementById("chat-box")

  const introMessage = document.createElement("div")
  introMessage.className = "bot-message"
  introMessage.innerHTML = `<span class="emoji">🇻🇪</span> <strong>Música Tradicional Venezolana</strong><br><br>Explora la riqueza de nuestra música folclórica:`
  chatBox.appendChild(introMessage)

  const musicContainer = document.createElement("div")
  musicContainer.className = "venezuelan-music-container"

  const musicTypes = [
    {
      id: "joropo",
      icon: "🪕",
      name: "Joropo",
      description: "El género musical y danza tradicional de los llanos venezolanos.",
    },
    {
      id: "cuatro",
      icon: "🎸",
      name: "El Cuatro Venezolano",
      description: "Nuestro instrumento nacional de 4 cuerdas, alma de la música criolla.",
    },
    {
      id: "gaita",
      icon: "🎵",
      name: "Gaita Zuliana",
      description: "Género musical tradicional del estado Zulia, especialmente navideño.",
    },
    {
      id: "alma-llanera-song",
      icon: "🌾",
      name: "Alma Llanera",
      description: "Nuestro segundo himno nacional, compuesto por Pedro Elías Gutiérrez.",
    },
  ]

  musicTypes.forEach((music) => {
    const musicButton = document.createElement("button")
    musicButton.className = "venezuelan-music-button"
    musicButton.innerHTML = `
      <div class="venezuelan-music-icon">${music.icon}</div>
      <div class="venezuelan-music-content">
        <div class="venezuelan-music-title">${music.name}</div>
        <div class="venezuelan-music-desc">${music.description}</div>
      </div>
    `

    musicButton.addEventListener("click", () => {
      showVenezuelanMusicDetails(music.id)
    })

    musicContainer.appendChild(musicButton)
  })

  chatBox.appendChild(musicContainer)
  chatBox.scrollTop = chatBox.scrollHeight
}

// Función para mostrar botones de instrumentos
function showInstrumentButtons() {
  const chatBox = document.getElementById("chat-box")

  const introMessage = document.createElement("div")
  introMessage.className = "bot-message"
  introMessage.innerHTML = `<span class="emoji">🎼</span> <strong>Familias de Instrumentos</strong><br><br>Descubre los diferentes tipos de instrumentos musicales:`
  chatBox.appendChild(introMessage)

  const instrumentContainer = document.createElement("div")
  instrumentContainer.className = "instrument-container"

  const instrumentFamilies = [
    {
      id: "strings",
      icon: "🎻",
      name: "Instrumentos de Cuerda",
      description: "Violín, viola, violonchelo, contrabajo, guitarra y más.",
    },
    {
      id: "winds",
      icon: "🎺",
      name: "Instrumentos de Viento",
      description: "Flauta, clarinete, trompeta, saxofón, oboe y más.",
    },
    {
      id: "percussion",
      icon: "🥁",
      name: "Instrumentos de Percusión",
      description: "Timbales, batería, maracas, xilófono y más.",
    },
    {
      id: "keyboard",
      icon: "🎹",
      name: "Piano y Teclados",
      description: "Piano de cola, piano vertical, órgano, sintetizador.",
    },
  ]

  instrumentFamilies.forEach((family) => {
    const instrumentButton = document.createElement("button")
    instrumentButton.className = "instrument-button"
    instrumentButton.innerHTML = `
      <div class="instrument-icon">${family.icon}</div>
      <div class="instrument-content">
        <div class="instrument-title">${family.name}</div>
        <div class="instrument-desc">${family.description}</div>
      </div>
    `

    instrumentButton.addEventListener("click", () => {
      showInstrumentDetails(family.id)
    })

    instrumentContainer.appendChild(instrumentButton)
  })

  chatBox.appendChild(instrumentContainer)
  chatBox.scrollTop = chatBox.scrollHeight
}

// Funciones para mostrar detalles específicos

// Detalles de programas (ya existía)
function showProgramDetails(programId) {
  const chatBox = document.getElementById("chat-box")
  let detailsHTML = ""
  let emoji = ""

  switch (programId) {
    case "iniciacion":
      // Mostrar respuesta del usuario
      const userMessage = document.createElement("div")
      userMessage.className = "user-message"
      userMessage.textContent = "Programa de Iniciación Musical"
      chatBox.appendChild(userMessage)

      // Mostrar botones de sub-programas de iniciación
      showInitiationSubPrograms()
      return

    case "alma-llanera":
      emoji = "🪕"
      detailsHTML = `
        <strong>🪕 PROGRAMA ALMA LLANERA</strong><br><br>
        El Programa Alma Llanera es una iniciativa clave para la preservación, enseñanza y difusión de la música tradicional venezolana:<br><br>
        <strong>1️⃣ Rescate y promoción del patrimonio cultural:</strong><br>
        • Enseñanza de géneros autóctonos como joropo, tonada, gaita y merengue venezolano<br><br>
        <strong>2️⃣ Formación integral de niños y jóvenes:</strong><br>
        • Fomenta valores como disciplina, trabajo en equipo y perseverancia<br><br>
        <strong>3️⃣ Inclusión social y acceso a la educación musical:</strong><br>
        • Ofrece oportunidades a niños y jóvenes de distintos sectores<br><br>
        <strong>4️⃣ Expansión del repertorio y formación de nuevos talentos:</strong><br>
        • Contribuye a la profesionalización de músicos en géneros tradicionales<br><br>
        <strong>👨‍🏫 Profesores encargados:</strong><br>
        • Jose Cardenas<br>
        • Linda Ferdinand
      `
      break

    case "simon-bolivar":
      emoji = "🏫"
      detailsHTML = `
        <strong>🏫 PROGRAMA SIMON BOLIVAR</strong><br><br>
        El Programa Simon Bolivar nació en 2015 con el objetivo de masificar el milagro de la música y expandir el impacto social de El Sistema Nucleo Ciudad Guayana.<br><br>
        Este programa implementa la práctica colectiva de la música en las escuelas pertenecientes al subsistema de educación básica de nuestro país, con el propósito de que esta población aprenda las bondades de la música y los valores que se desprenden de ella.<br><br>
        <strong>👩‍🏫 Profesora encargada:</strong><br>
        • Anghel Rios
      `
      break

    case "coral":
      emoji = "🎵"
      detailsHTML = `
        <strong>🎵 PROGRAMA CORAL</strong><br><br>
        El Programa Coral promueve la incorporación de niños, niñas y jóvenes que, usando la voz como instrumento, entran en contacto con una gama de posibilidades de desarrollo individual y colectivo.<br><br>
        Este programa contribuye significativamente al crecimiento humanístico e intelectual de los participantes, desarrollando habilidades vocales, expresivas y de trabajo en conjunto.<br><br>
        <strong>👩‍🏫 Profesora encargada:</strong><br>
        • Dorianlid Velez
      `
      break

    case "academico":
      emoji = "🎼"
      detailsHTML = `
        <strong>🎼 PROGRAMA ACADÉMICO ORQUESTAL</strong><br><br>
        El Programa Académico Musical es fundamental para El Sistema Nucleo Ciudad Guayana porque garantiza una formación musical integral, gratuita y de calidad para niños y jóvenes.<br><br>
        Este programa promueve el desarrollo artístico, la inclusión social y la continuidad del movimiento orquestal en Venezuela, siendo una herramienta clave de transformación educativa y social a través de la música.<br><br>
        Incluye dos importantes orquestas:<br><br>
        <strong>1️⃣ Orquesta Sinfónica Juvenil de Ciudad Guayana:</strong><br>
        • Plataforma de alto rendimiento musical<br>
        • Encarna el ideal artístico de El Sistema Nucleo Ciudad Guayana<br>
        • Proyecta el talento venezolano internacionalmente<br>
        • Forma líderes musicales y ciudadanos conscientes<br><br>
        <strong>2️⃣ Orquesta Sinfónica Regional Juvenil 'Manuel Carlos Piar' del Estado Bolivar:</strong><br>
        • Espacio de formación integral para jóvenes músicos<br>
        • Facilita el acceso a la educación musical en regiones apartadas<br>
        • Funciona como herramienta de transformación social<br>
        • Contribuye al desarrollo cultural de sus comunidades<br>
        • Director: Gregman Rodriguez Jimenez
      `
      break
  }

  // Mostrar respuesta del usuario
  const userMessage = document.createElement("div")
  userMessage.className = "user-message"
  userMessage.textContent = `Información sobre ${programId.replace("-", " ")}`
  chatBox.appendChild(userMessage)

  // Mostrar detalles del programa
  const detailsMessage = document.createElement("div")
  detailsMessage.className = "bot-message program-details"
  detailsMessage.innerHTML = `<span class="emoji">${emoji}</span> ${detailsHTML}`
  chatBox.appendChild(detailsMessage)

  chatBox.scrollTop = chatBox.scrollHeight
}

// Detalles de orquestas
function showOrchestraDetails(orchestraId) {
  const chatBox = document.getElementById("chat-box")
  let detailsHTML = ""
  let emoji = ""

  switch (orchestraId) {
    case "guayana":
      emoji = "🎼"
      detailsHTML = `
        <strong>🎼 ORQUESTA SINFÓNICA JUVENIL DE CIUDAD GUAYANA</strong><br><br>
        Es una plataforma de alto rendimiento musical, integrada por jóvenes que han pasado por años de formación dentro del programa académico y que ahora actúan como referentes de excelencia, tanto nacional como internacionalmente.<br><br>
        <strong>Su importancia radica en que:</strong><br><br>
        • Encarna el ideal artístico de El Sistema Nucleo Ciudad Guayana, mostrando cómo la educación musical sostenida puede producir intérpretes de talla mundial.<br><br>
        • Proyecta el talento venezolano en los escenarios más exigentes del mundo, sirviendo como vitrina del modelo social y cultural del país.<br><br>
        • Forma líderes musicales y ciudadanos conscientes, capaces de influir positivamente en sus comunidades y en futuras generaciones de músicos.<br><br>
        • Sostiene la renovación de las orquestas profesionales, alimentándolas con músicos altamente capacitados desde temprana edad.<br><br>
        <strong>👨‍🏫 Director: Carlos Sanchez</strong>
      `
      break

    case "piar":
      emoji = "🎻"
      detailsHTML = `
        <strong>🎻 ORQUESTA SINFÓNICA REGIONAL JUVENIL 'MANUEL CARLOS PIAR'</strong><br><br>
        Las Orquestas Sinfónicas Regionales Juveniles son fundamentales dentro de El Sistema Nucleo Ciudad Guayana, fomentan:<br><br>
        <strong>1️⃣ Formación y Desarrollo Musical:</strong><br>
        • Espacios de formación integral para jóvenes músicos<br>
        • Adquisición de habilidades técnicas y artísticas de alto nivel<br>
        • Preparación para formar parte de orquestas profesionales<br><br>
        <strong>2️⃣ Descentralización y Acceso:</strong><br>
        • Facilitan el acceso a la educación musical en regiones apartadas<br>
        • Democratizan la cultura y brindan oportunidades a jóvenes de diferentes contextos<br><br>
        <strong>3️⃣ Impacto Social:</strong><br>
        • Herramientas de transformación social<br>
        • Alternativas constructivas a problemas como la exclusión social<br>
        • Fomento de valores como disciplina, trabajo en equipo y compromiso<br><br>
        <strong>👨‍🏫 Director Musical: Gregman Rodriguez Jimenez</strong>
      `
      break
  }

  const userMessage = document.createElement("div")
  userMessage.className = "user-message"
  userMessage.textContent = `Información sobre orquesta ${orchestraId}`
  chatBox.appendChild(userMessage)

  const detailsMessage = document.createElement("div")
  detailsMessage.className = "bot-message orchestra-details"
  detailsMessage.innerHTML = `<span class="emoji">${emoji}</span> ${detailsHTML}`
  chatBox.appendChild(detailsMessage)

  chatBox.scrollTop = chatBox.scrollHeight
}

// Detalles de ayuda
function showHelpDetails(helpId) {
  const chatBox = document.getElementById("chat-box")

  const userMessage = document.createElement("div")
  userMessage.className = "user-message"
  userMessage.textContent = `Información sobre ${helpId.replace("-", " ")}`
  chatBox.appendChild(userMessage)

  switch (helpId) {
    case "programs-help":
      showProgramButtons()
      break
    case "orchestras-help":
      showOrchestraButtons()
      break
    case "events-help":
      // Mostrar calendario
      const iframe = document.createElement("iframe")
      iframe.src =
        "https://calendar.google.com/calendar/embed?src=nucleo.ciudadguayana%40elsistema.org.ve&ctz=America%2FCaracas"
      iframe.style.border = "0"
      iframe.width = "100%"
      iframe.height = "300"
      iframe.frameBorder = "0"
      iframe.scrolling = "no"

      const botResponse = document.createElement("div")
      botResponse.className = "bot-message"
      botResponse.innerHTML = "<span class='emoji'>📅</span> Aquí tienes el calendario de nuestros próximos eventos:"
      chatBox.appendChild(botResponse)

      const iframeContainer = document.createElement("div")
      iframeContainer.className = "iframe-container"
      iframeContainer.appendChild(iframe)
      chatBox.appendChild(iframeContainer)
      break
    case "location-help":
      // Mostrar ubicación
      const locationIframe = document.createElement("iframe")
      locationIframe.width = "100%"
      locationIframe.height = "300"
      locationIframe.loading = "lazy"
      locationIframe.allowFullscreen = true
      locationIframe.src =
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Centro%20Empresarial%20Alta%20Vista%2C%20Edificio%20Cvg%2C%20Antiguo%20Maxy%60S%2C%20Planta%20Baja%2C%20Guayana%2C%20Alta%20Vista%20Sur%20Puerto%Ordaz%2C%20Ciudad%20Guayana.&zoom=10&maptype=roadmap"
      locationIframe.style.border = "0"

      const locationResponse = document.createElement("div")
      locationResponse.className = "bot-message"
      locationResponse.innerHTML = "<span class='emoji'>📍</span> Aquí tienes nuestra ubicación exacta:"
      chatBox.appendChild(locationResponse)

      const locationContainer = document.createElement("div")
      locationContainer.className = "iframe-container"
      locationContainer.appendChild(locationIframe)
      chatBox.appendChild(locationContainer)
      break
    default:
      const defaultMessage = document.createElement("div")
      defaultMessage.className = "bot-message"
      defaultMessage.innerHTML = `<span class="emoji">💡</span> Para más información sobre ${helpId.replace("-", " ")}, puedes explorar las diferentes secciones de nuestro sitio web o contactarnos directamente.`
      chatBox.appendChild(defaultMessage)
  }

  chatBox.scrollTop = chatBox.scrollHeight
}

// Detalles de música venezolana
function showVenezuelanMusicDetails(musicId) {
  const chatBox = document.getElementById("chat-box")
  let detailsHTML = ""
  let emoji = ""

  switch (musicId) {
    case "joropo":
      emoji = "🪕"
      detailsHTML = `
        <strong>🪕 EL JOROPO</strong><br><br>
        El joropo es un género musical y danza tradicional de Venezuela, especialmente de los llanos.<br><br>
        <strong>Características:</strong><br>
        • Ritmo en compás de 3/4 o 6/8<br>
        • Instrumentos principales: cuatro, maracas y arpa llanera<br>
        • Danza de pareja con zapateo característico<br>
        • Letras que exaltan la vida llanera y la naturaleza<br><br>
        <strong>Tipos de joropo:</strong><br>
        • Joropo llanero (de los llanos centrales)<br>
        • Joropo oriental (de los estados orientales)<br>
        • Joropo tuyero (de los valles del Tuy)<br><br>
        Es considerado el baile nacional de Venezuela.
      `
      break

    case "cuatro":
      emoji = "🎸"
      detailsHTML = `
        <strong>🎸 EL CUATRO VENEZOLANO</strong><br><br>
        El cuatro es el instrumento nacional de Venezuela, un cordófono de 4 cuerdas.<br><br>
        <strong>Características:</strong><br>
        • 4 cuerdas afinadas en La-Re-Fa#-Si<br>
        • Tamaño pequeño y sonido brillante<br>
        • Se toca con técnica de rasgueo y punteo<br>
        • Acompaña prácticamente todos los géneros venezolanos<br><br>
        <strong>Importancia cultural:</strong><br>
        • Presente en todas las celebraciones venezolanas<br>
        • Instrumento principal del joropo<br>
        • Símbolo de identidad nacional<br>
        • Fácil de transportar y aprender<br><br>
        ¡En nuestro Programa Alma Llanera enseñamos a tocarlo!
      `
      break

    case "gaita":
      emoji = "🎵"
      detailsHTML = `
        <strong>🎵 LA GAITA ZULIANA</strong><br><br>
        La gaita es un género musical tradicional del estado Zulia, especialmente popular en Navidad.<br><br>
        <strong>Características:</strong><br>
        • Originaria de la región zuliana<br>
        • Instrumentos: cuatro, maracas, furruco, charrasca y tambora<br>
        • Letras que narran historias cotidianas y celebraciones<br>
        • Ritmo alegre y contagioso<br><br>
        <strong>Tipos de gaita:</strong><br>
        • Gaita de furro (la más tradicional)<br>
        • Gaita de tambora<br>
        • Gaita perijanera<br><br>
        Durante diciembre, la gaita se escucha en todo el país como parte de las tradiciones navideñas.
      `
      break

    case "alma-llanera-song":
      emoji = "🌾"
      detailsHTML = `
        <strong>🌾 ALMA LLANERA</strong><br><br>
        "Alma Llanera" es considerada el segundo himno nacional de Venezuela.<br><br>
        <strong>Historia:</strong><br>
        • Música: Pedro Elías Gutiérrez (1914)<br>
        • Letra: Rafael Bolívar Coronado<br>
        • Estrenada en Caracas en 1914<br>
        • Género: Joropo<br><br>
        <strong>Significado:</strong><br>
        • Exalta la belleza de los llanos venezolanos<br>
        • Describe el amor por la tierra natal<br>
        • Símbolo de venezolanidad<br>
        • Interpretada por artistas de todo el mundo<br><br>
        <strong>Letra inicial:</strong><br>
        "Yo nací en esta ribera<br>
        del Arauca vibrador..."<br><br>
        ¡Nuestro Programa Alma Llanera lleva su nombre en honor a esta obra maestra!
      `
      break
  }

  const userMessage = document.createElement("div")
  userMessage.className = "user-message"
  userMessage.textContent = `Información sobre ${musicId}`
  chatBox.appendChild(userMessage)

  const detailsMessage = document.createElement("div")
  detailsMessage.className = "bot-message venezuelan-music-details"
  detailsMessage.innerHTML = `<span class="emoji">${emoji}</span> ${detailsHTML}`
  chatBox.appendChild(detailsMessage)

  chatBox.scrollTop = chatBox.scrollHeight
}

// Detalles de instrumentos
function showInstrumentDetails(familyId) {
  const chatBox = document.getElementById("chat-box")
  let detailsHTML = ""
  let emoji = ""

  switch (familyId) {
    case "strings":
      emoji = "🎻"
      detailsHTML = `
        <strong>🎻 INSTRUMENTOS DE CUERDA</strong><br><br>
        Los instrumentos de cuerda producen sonido mediante la vibración de cuerdas tensas.<br><br>
        <strong>Instrumentos principales:</strong><br>
        • <strong>Violín:</strong> El más agudo, 4 cuerdas (Sol-Re-La-Mi)<br>
        • <strong>Viola:</strong> Más grande que el violín, sonido más grave<br>
        • <strong>Violonchelo:</strong> Se toca sentado, sonido cálido y profundo<br>
        • <strong>Contrabajo:</strong> El más grande, proporciona la base armónica<br>
        • <strong>Guitarra:</strong> 6 cuerdas, muy versátil<br>
        • <strong>Arpa:</strong> Múltiples cuerdas, sonido etéreo<br><br>
        <strong>Técnicas:</strong><br>
        • Arco (violín, viola, cello, contrabajo)<br>
        • Pizzicato (pellizcar las cuerdas)<br>
        • Rasgueo y punteo (guitarra)<br><br>
        ¡En nuestras orquestas, las cuerdas forman la base del sonido sinfónico!
      `
      break

    case "winds":
      emoji = "🎺"
      detailsHTML = `
        <strong>🎺 INSTRUMENTOS DE VIENTO</strong><br><br>
        Los instrumentos de viento producen sonido mediante la vibración del aire.<br><br>
        <strong>Viento-madera:</strong><br>
        • <strong>Flauta:</strong> Sonido brillante y ágil<br>
        • <strong>Clarinete:</strong> Amplio rango dinámico<br>
        • <strong>Oboe:</strong> Sonido penetrante y expresivo<br>
        • <strong>Fagot:</strong> El más grave de los viento-madera<br>
        • <strong>Saxofón:</strong> Versátil, usado en jazz y música popular<br><br>
        <strong>Viento-metal:</strong><br>
        • <strong>Trompeta:</strong> Brillante y heroica<br>
        • <strong>Trombón:</strong> Con vara deslizante<br>
        • <strong>Trompa:</strong> Sonido cálido y noble<br>
        • <strong>Tuba:</strong> La base de los metales<br><br>
        <strong>Técnicas:</strong><br>
        • Embocadura correcta<br>
        • Control de la respiración<br>
        • Digitación (viento-madera) o posiciones (metales)
      `
      break

    case "percussion":
      emoji = "🥁"
      detailsHTML = `
        <strong>🥁 INSTRUMENTOS DE PERCUSIÓN</strong><br><br>
        Los instrumentos de percusión se tocan golpeándolos, agitándolos o frotándolos.<br><br>
        <strong>Percusión afinada:</strong><br>
        • <strong>Timbales:</strong> Pueden cambiar de afinación<br>
        • <strong>Xilófono:</strong> Láminas de madera<br>
        • <strong>Vibráfono:</strong> Láminas metálicas con resonadores<br>
        • <strong>Marimba:</strong> Versión grave del xilófono<br><br>
        <strong>Percusión no afinada:</strong><br>
        • <strong>Batería:</strong> Conjunto de tambores y platillos<br>
        • <strong>Platillos:</strong> Metálicos, diversos tamaños<br>
        • <strong>Triángulo:</strong> Sonido brillante y penetrante<br>
        • <strong>Maracas:</strong> Tradicionales venezolanas<br><br>
        <strong>Función en la orquesta:</strong><br>
        • Marcan el ritmo<br>
        • Añaden color y textura<br>
        • Crean efectos dramáticos<br>
        • Proporcionan acentos musicales
      `
      break

    case "keyboard":
      emoji = "🎹"
      detailsHTML = `
        <strong>🎹 PIANO Y TECLADOS</strong><br><br>
        El piano es uno de los instrumentos más completos y versátiles.<br><br>
        <strong>Tipos de piano:</strong><br>
        • <strong>Piano de cola:</strong> Cuerdas horizontales, mejor resonancia<br>
        • <strong>Piano vertical:</strong> Cuerdas verticales, más compacto<br>
        • <strong>Piano digital:</strong> Electrónico, simula el piano acústico<br>

        <br>
        <strong>Características:</strong><br>
        • 88 teclas (52 blancas, 36 negras)<br>
        • Rango de más de 7 octavas<br>
        • 3 pedales: sustain, una corda, sostenuto<br>
        • Puede tocar melodía y acompañamiento simultáneamente<br><br>
        <strong>Importancia musical:</strong><br>
        • Instrumento solista por excelencia<br>
        • Base para el aprendizaje de teoría musical<br>
        • Acompaña otros instrumentos y voces<br>
        • Presente en todos los géneros musicales<br><br>
        ¡El piano es fundamental en la educación musical!
      `
      break
  }

  const userMessage = document.createElement("div")
  userMessage.className = "user-message"
  userMessage.textContent = `Información sobre ${familyId}`
  chatBox.appendChild(userMessage)

  const detailsMessage = document.createElement("div")
  detailsMessage.className = "bot-message instrument-details"
  detailsMessage.innerHTML = `<span class="emoji">${emoji}</span> ${detailsHTML}`
  chatBox.appendChild(detailsMessage)

  chatBox.scrollTop = chatBox.scrollHeight
}

// Función para detectar respuestas afirmativas/negativas
function detectYesNoResponse(input) {
  const affirmative = [
    "si",
    "sí",
    "yes",
    "claro",
    "por supuesto",
    "dale",
    "ok",
    "okay",
    "perfecto",
    "genial",
    "excelente",
    "bueno",
    "vale",
    "correcto",
    "exacto",
    "afirmativo",
  ]
  const negative = [
    "no",
    "nah",
    "nope",
    "para nada",
    "negativo",
    "nunca",
    "jamas",
    "jamás",
    "ni modo",
    "no gracias",
    "no quiero",
    "no me interesa",
  ]

  const normalizedInput = input.toLowerCase().trim()

  if (affirmative.some((word) => normalizedInput.includes(word))) {
    return "yes"
  }
  if (negative.some((word) => normalizedInput.includes(word))) {
    return "no"
  }
  return null
}

document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box")
  const userInput = document.getElementById("user-input")
  const sendButton = document.getElementById("send-button")
  const closeButton = document.getElementById("close-button")
  const quickButtonsToggle = document.getElementById("quick-buttons-toggle")
  const quickButtonsContainer = document.getElementById("quick-buttons-container")
  const tabArrow = document.getElementById("tab-arrow")
  const chatbotContainer = document.getElementById("chatbot-container")

  // Función para enviar mensaje
  function sendMessage() {
    const userInputValue = userInput.value.trim()
    if (userInputValue === "") return

    // Añadir mensaje del usuario al chat
    const userMessage = document.createElement("div")
    userMessage.className = "user-message"
    userMessage.textContent = userInputValue
    chatBox.appendChild(userMessage)

    // Limpiar el campo de entrada
    userInput.value = ""

    // Desplazar hacia abajo
   chatBox.scrollTop = chatBox.scrollHeight

    // Mostrar indicador de escritura
    const typingIndicator = document.createElement("div")
    typingIndicator.className = "typing-indicator"
    typingIndicator.innerHTML = "<span></span><span></span><span></span>"
    chatBox.appendChild(typingIndicator)
    chatBox.scrollTop = chatBox.scrollHeight

    // Simular respuesta del bot con un pequeño retraso
    setTimeout(() => {
      // Eliminar el indicador de escritura
      if (typingIndicator.parentNode) {
        chatBox.removeChild(typingIndicator)
      }

      // Procesar el mensaje del usuario y obtener respuesta
      processUserMessage(userInputValue, chatBox)
    }, 1000)
  }

  // Función para alternar la pestaña de botones rápidos
  function toggleQuickButtons() {
    const isExpanded = quickButtonsContainer.classList.contains("expanded")

    if (isExpanded) {
      quickButtonsContainer.classList.remove("expanded")
      tabArrow.classList.remove("rotated")
    } else {
      quickButtonsContainer.classList.add("expanded")
      tabArrow.classList.add("rotated")
    }
  }

  // Eventos
  sendButton.addEventListener("click", sendMessage)

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })

  closeButton.addEventListener("click", () => {
    window.parent.postMessage("closeChatbot", "*")
  })

  // Evento para alternar la pestaña de botones rápidos
  quickButtonsToggle.addEventListener("click", toggleQuickButtons)

  // Configurar los botones rápidos (SOLO UNA VEZ)
  const quickButtons = document.querySelectorAll(".quick-button")
  quickButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const question = this.getAttribute("data-question")
      userInput.value = question
      sendMessage()

      // Opcional: cerrar la pestaña después de seleccionar un botón
      quickButtonsContainer.classList.remove("expanded")
      tabArrow.classList.remove("rotated")
    })
  })

  // Enfocar el campo de entrada al cargar
  userInput.focus()
})

// Función para procesar el mensaje del usuario y mostrar la respuesta
function processUserMessage(userInput, chatBox) {
  // Normalizar el texto de entrada (quitar acentos y convertir a minúsculas)
  const lowerCaseInput = userInput.toLowerCase()
  const normalizeText = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const normalizedInput = normalizeText(lowerCaseInput)

  // Función para seleccionar aleatoriamente una respuesta de un array
  const randomResponse = (responses) => {
    return responses[Math.floor(Math.random() * responses.length)]
  }

  let botResponseText = "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?"
  let emoji = "🤔"

  // Verificar si estamos esperando una respuesta de sí/no
  if (conversationContext.waitingForResponse) {
    const yesNoResponse = detectYesNoResponse(userInput)
    console.log(`🔍 Yes/No detection: ${yesNoResponse}`)

    if (yesNoResponse === "yes") {
      const currentQuestionType = conversationContext.questionType
      clearContext()

      // Responder según el tipo de pregunta
      switch (currentQuestionType) {
        case "programs":
          clearContext()
          showProgramButtons()
          return

        case "orchestras":
          clearContext()
          showOrchestraButtons()
          return

        case "events":
          emoji = "📅"
          botResponseText = "¡Genial! Te muestro información sobre nuestros eventos y calendario:"

          // Mostrar el iframe con el calendario
          const iframe = document.createElement("iframe")
          iframe.src =
            "https://calendar.google.com/calendar/embed?src=nucleo.ciudadguayana%40elsistema.org.ve&ctz=America%2FCaracas"
          iframe.style.border = "0"
          iframe.width = "100%"
          iframe.height = "300"
          iframe.frameBorder = "0"
          iframe.scrolling = "no"

          const botResponse = document.createElement("div")
          botResponse.className = "bot-message"
          botResponse.innerHTML = `<span class='emoji'>${emoji}</span> ${botResponseText}`
          chatBox.appendChild(botResponse)

          const iframeContainer = document.createElement("div")
          iframeContainer.className = "iframe-container"
          iframeContainer.appendChild(iframe)
          chatBox.appendChild(iframeContainer)

          chatBox.scrollTop = chatBox.scrollHeight
          return

        case "help":
          clearContext()
          showHelpButtons()
          return

        case "location":
          emoji = "📍"
          botResponseText = "¡Perfecto! Aquí tienes nuestra ubicación exacta:"

          // Mostrar el iframe con la ubicación
          const locationIframe = document.createElement("iframe")
          locationIframe.width = "100%"
          locationIframe.height = "300"
          locationIframe.loading = "lazy"
          locationIframe.allowFullscreen = true
          locationIframe.src =
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Centro%20Empresarial%20Alta%20Vista%2C%20Edificio%20Cvg%2C%20Antiguo%20Maxy%60S%2C%20Planta%20Baja%2C%20Guayana%2C%20Alta%20Vista%20Sur%20Puerto%Ordaz%2C%20Ciudad%20Guayana.&zoom=10&maptype=roadmap"
          locationIframe.style.border = "0"

          const locationResponse = document.createElement("div")
          locationResponse.className = "bot-message"
          locationResponse.innerHTML = `<span class='emoji'>${emoji}</span> ${botResponseText}`
          chatBox.appendChild(locationResponse)

          const locationContainer = document.createElement("div")
          locationContainer.className = "iframe-container"
          locationContainer.appendChild(locationIframe)
          chatBox.appendChild(locationContainer)

          chatBox.scrollTop = chatBox.scrollHeight
          return

        default:
          emoji = "😊"
          botResponseText = "¡Genial! ¿En qué más puedo ayudarte?"
      }

      // Añadir respuesta del bot y salir
      const botMessage = document.createElement("div")
      botMessage.className = "bot-message"
      botMessage.innerHTML = `<span class="emoji">${emoji}</span> ${botResponseText}`
      chatBox.appendChild(botMessage)
      chatBox.scrollTop = chatBox.scrollHeight
      return
    } else if (yesNoResponse === "no") {
      clearContext()
      emoji = "😊"
      botResponseText = randomResponse([
        "¡No hay problema! ¿Hay algo más en lo que pueda ayudarte?",
        "¡Perfecto! Si cambias de opinión, aquí estaré. ¿Qué más te gustaría saber?",
        "¡Entendido! ¿Te interesa algún otro tema sobre El Sistema Nucleo Ciudad Guayana?",
        "¡Está bien! Estoy aquí para cualquier otra consulta que tengas.",
      ])

      // Añadir respuesta del bot y salir
      const botMessage = document.createElement("div")
      botMessage.className = "bot-message"
      botMessage.innerHTML = `<span class="emoji">${emoji}</span> ${botResponseText}`
      chatBox.appendChild(botMessage)
      chatBox.scrollTop = chatBox.scrollHeight
      return
    } else {
      // NUEVO: Verificar si la entrada coincide con alguna respuesta predefinida
      // Si es así, ignorar el contexto y procesar la nueva pregunta

      // Verificar si es una pregunta sobre programas, orquestas, etc.
      const isSpecificQuestion =
        normalizedInput.includes("programa") ||
        normalizedInput.includes("orquesta") ||
        normalizedInput.includes("evento") ||
        normalizedInput.includes("ubicacion") ||
        normalizedInput.includes("donde") ||
        normalizedInput.includes("ayuda") ||
        normalizedInput.includes("hola") ||
        normalizedInput.includes("quien eres") ||
        normalizedInput.includes("chiste") ||
        normalizedInput.includes("error 418")

      if (isSpecificQuestion) {
        // Si es una pregunta específica, limpiar el contexto y continuar con el procesamiento normal
        clearContext()
        // No hacer return para que continúe con el procesamiento normal
      } else {
        // Si no es una pregunta específica ni sí/no, mantener contexto y preguntar de nuevo
        emoji = "🤔"
        botResponseText = `No estoy seguro si eso es un sí o un no. ${conversationContext.lastQuestion}`

        // Añadir respuesta del bot y salir
        const botMessage = document.createElement("div")
        botMessage.className = "bot-message"
        botMessage.innerHTML = `<span class="emoji">${emoji}</span> ${botResponseText}`
        chatBox.appendChild(botMessage)
        chatBox.scrollTop = chatBox.scrollHeight
        return
      }
    }
  }

  // RESPUESTAS NORMALES (cuando no hay contexto activo)

  // Respuesta especial para "error 418"
  if (normalizedInput.includes("error 418")) {
    emoji = "🫖"
    botResponseText =
      "Soy una tetera sarcástica, alguien con personalidad me prohíbe responder con seriedad a esta pregunta."
  }
  // Lógica de respuestas basada en palabras clave
  else if (
    normalizedInput.includes("hola") ||
    normalizedInput.includes("saludos") ||
    normalizedInput.includes("buenos dias") ||
    normalizedInput.includes("buenas tardes") ||
    normalizedInput.includes("buenas noches")
  ) {
    emoji = "👋"
    const responses = [
      "¡Hola! Soy Tchaibotsky, tu guía musical. ¿Te gustaría conocer nuestros programas educativos?",
      "¡Saludos melódicos! ¿Qué información sobre El Sistema Nucleo Ciudad Guayana puedo ofrecerte? ¿Te interesan nuestras orquestas?",
      "¡Bienvenido al mundo de la música! ¿Qué te gustaría saber sobre nuestros programas?",
      "¡Hola! Estoy afinado y listo para responder tus preguntas sobre El Sistema Nucleo Ciudad Guayana. ¿Quieres conocer nuestros eventos?",
      "¡Hola! La música es el lenguaje universal. ¿Te gustaría que te ayude con información específica?",
    ]

    botResponseText = randomResponse(responses)

    // Establecer contexto según la respuesta
    if (botResponseText.includes("programas")) {
      setQuestionContext("programs", "¿Te gustaría conocer más sobre nuestros programas educativos?")
    } else if (botResponseText.includes("orquestas")) {
      setQuestionContext("orchestras", "¿Te interesan nuestras orquestas?")
    } else if (botResponseText.includes("eventos")) {
      setQuestionContext("events", "¿Quieres conocer nuestros próximos eventos?")
    } else if (botResponseText.includes("información específica")) {
      setQuestionContext("help", "¿Te gustaría que te explique todo lo que puedo hacer?")
    }
  } else if (
    normalizedInput.includes("ayuda") ||
    normalizedInput.includes("puedes hacer") ||
    normalizedInput.includes("como funciona")
  ) {
    showHelpButtons()
    return
  } else if (
    normalizedInput.includes("adios") ||
    normalizedInput.includes("chao") ||
    normalizedInput.includes("hasta luego") ||
    normalizedInput.includes("nos vemos")
  ) {
    emoji = "👋"
    botResponseText = randomResponse([
      "¡Hasta pronto! Que la música te acompañe siempre.",
      "¡Adiós! Espero verte en nuestro próximo concierto.",
      "¡Hasta la próxima! Recuerda que la música es el lenguaje universal.",
      "¡Que tengas un día armonioso! Vuelve cuando quieras.",
    ])
  } else if (
    normalizedInput.includes("gracias") ||
    normalizedInput.includes("te agradezco") ||
    normalizedInput.includes("muchas gracias")
  ) {
    emoji = "😊"
    botResponseText = randomResponse([
      "¡De nada! Para mí es un placer compartir la pasión por la música.",
      "¡No hay de qué! Estoy aquí para hacer que tu experiencia con El Sistema Nucleo Ciudad Guayana sea perfecta.",
      "¡Es un placer! Si tienes más preguntas, no dudes en consultarme.",
      "¡Encantado de ayudar! La música nos une a todos.",
    ])
  } else if (
    normalizedInput.includes("como estas") ||
    normalizedInput.includes("que tal") ||
    normalizedInput.includes("como te va") ||
    normalizedInput.includes("como te encuentras")
  ) {
    emoji = "🎵"
    botResponseText = randomResponse([
      "¡Estoy en perfecta armonía! Listo para ayudarte con cualquier información sobre El Sistema Nucleo Ciudad Guayana.",
      "¡Afinado y a tono! ¿En qué puedo asistirte hoy?",
      "¡Como una sinfonía bien ejecutada! ¿Qué te gustaría saber?",
      "¡En clave de sol! Preparado para resolver todas tus dudas musicales.",
    ])
  }
  //respuestas para las secciones de la página
  else if (normalizedInput.includes("comunidad")) {
    emoji = "👨‍👩‍👧‍👦"
    botResponseText = randomResponse([
      "La sección 'Comunidad' te muestra cómo puedes participar y conectar con otros amantes de la música. ¡Somos una gran familia musical!",
      "¡Únete a nuestra comunidad musical! En la sección 'Comunidad' encontrarás todas las formas de participar y conectar con nosotros.",
      "La música tiene el poder de unir personas. Descubre cómo formar parte de nuestra comunidad en la sección correspondiente.",
    ])
  } else if (normalizedInput.includes("educacion")) {
    showProgramButtons()
    return
  } else if (
    normalizedInput.includes("donacion") ||
    normalizedInput.includes("apoyo") ||
    normalizedInput.includes("ayudar") ||
    normalizedInput.includes("contribuir")
  ) {
    emoji = "💝"
    botResponseText = randomResponse([
      "Si deseas colaborar, visita la sección 'Donaciones y Apoyo'. ¡Tu contribución hace posible que la música llegue a más niños y jóvenes!",
      "¡Cada donación es una nota en nuestra sinfonía social! Encuentra todas las formas de apoyarnos en la sección 'Donaciones y Apoyo'.",
      "Tu apoyo es fundamental para mantener viva la música. En la sección 'Donaciones y Apoyo' encontrarás cómo puedes contribuir a nuestra causa.",
    ])
  } else if (
    normalizedInput.includes("galeria") ||
    normalizedInput.includes("audiovisual") ||
    normalizedInput.includes("fotos") ||
    normalizedInput.includes("videos")
  ) {
    emoji = "📸"
    botResponseText = randomResponse([
      "En la 'Galería Audiovisual' puedes ver fotos y videos de nuestros eventos. ¡Una imagen vale más que mil notas musicales!",
      "¡Revive nuestros mejores momentos! La 'Galería Audiovisual' te transportará a nuestros conciertos y eventos más memorables.",
      "Nuestra 'Galería Audiovisual' es un tesoro de momentos mágicos. ¡No te la pierdas!",
    ])
  } else if (
    normalizedInput.includes("colaboradores") ||
    normalizedInput.includes("colaborador") 
  ) {
    emoji = "🤝"
    botResponseText = randomResponse([
      "Los colaboradores que apoyan nuestros eventos están listados en la sección 'Colaboradores'. ¡Gracias a ellos hacemos posible la música!",
      "Nuestros colaboradores son héroes anónimos que hacen posible cada concierto. Conócelos en la sección 'Colaboradores'.",
      "¡La música necesita aliados! Descubre quiénes nos apoyan en la sección 'colaboradoreses'.",
    ])
  } else if (
    normalizedInput.includes("contacto") ||
    normalizedInput.includes("comunicarse") ||
    normalizedInput.includes("hablar con")
  ) {
    emoji = "📞"
    botResponseText = randomResponse([
      "Puedes encontrar toda nuestra información de contacto en la sección 'Contacto'. ¡Estamos ansiosos por escucharte!",
      "¿Quieres comunicarte directamente con nosotros? Toda la información está en la sección 'Contacto'.",
      "En la sección 'Contacto' encontrarás todas las formas de comunicarte con nuestro equipo. ¡Tu opinión es muy importante para nosotros!",
    ])
  } else if (
    normalizedInput.includes("redes sociales") ||
    normalizedInput.includes("redes") ||
    normalizedInput.includes("facebook") ||
    normalizedInput.includes("instagram") ||
    normalizedInput.includes("twitter")
  ) {
    emoji = "📱"
    botResponseText = randomResponse([
      "Nuestras redes sociales están enlazadas en la página. ¡Síguenos para estar al día con todas nuestras actividades y conciertos!",
      "¡Conéctate con nosotros en redes sociales! Encuentra todos nuestros perfiles en los íconos de la página principal.",
      "No te pierdas ninguna novedad: síguenos en redes sociales. Todos los enlaces están en nuestra página.",
    ])
  } else if (
    normalizedInput.includes("quien eres") ||
    normalizedInput.includes("quien es") ||
    normalizedInput.includes("tu nombre") ||
    normalizedInput.includes("como te llamas")
  ) {
    emoji = "🤖"
    botResponseText = randomResponse([
      "Soy Tchaibotsky, el asistente virtual de El Sistema Nucleo Ciudad Guayana. Mi nombre es un guiño al compositor Tchaikovsky, ¡pero yo estoy especializado en responder preguntas, no en componer sinfonías!",
      "¡Me llamo Tchaibotsky! Soy el asistente virtual de El Sistema Nucleo Ciudad Guayana, programado para ayudarte con información sobre nuestra organización y eventos. ¡La música es mi pasión digital!",
      "Soy Tchaibotsky, tu guía virtual en el mundo de El Sistema Nucleo Ciudad Guayana. Estoy aquí para responder tus preguntas y ayudarte a navegar por nuestra sinfonía de información.",
    ])
  } else if (
    normalizedInput.includes("horario") ||
    normalizedInput.includes("horarios") ||
    normalizedInput.includes("cuando") ||
    normalizedInput.includes("a que hora")
  ) {
    emoji = "🕒"
    // Mostrar el iframe con el calendario de horarios
    const iframe = document.createElement("iframe")
    iframe.src =
      "https://calendar.google.com/calendar/embed?src=nucleo.ciudadguayana%40elsistema.org.ve&ctz=America%2FCaracas"
    iframe.style.border = "0"
    iframe.width = "100%"
    iframe.height = "300"
    iframe.frameBorder = "0"
    iframe.scrolling = "no"

    const botResponse = document.createElement("div")
    botResponse.className = "bot-message"
    botResponse.innerHTML = "<span class='emoji'>🕒</span> Aquí tienes los horarios de nuestros eventos:"
    chatBox.appendChild(botResponse)

    const iframeContainer = document.createElement("div")
    iframeContainer.className = "iframe-container"
    iframeContainer.appendChild(iframe)
    chatBox.appendChild(iframeContainer)

    chatBox.scrollTop = chatBox.scrollHeight // Desplazar hacia abajo
    return // Salir para evitar agregar una respuesta predeterminada
  } else if (
    normalizedInput.includes("temporada") ||
    normalizedInput.includes("temporadas") ||
    normalizedInput.includes("programacion anual")
  ) {
    emoji = "📅"
    // Mostrar el iframe con el calendario de temporadas
    const iframe = document.createElement("iframe")
    iframe.src =
      "https://calendar.google.com/calendar/embed?src=nucleo.ciudadguayana%40elsistema.org.ve&ctz=America%2FCaracas"
    iframe.style.border = "0"
    iframe.width = "100%"
    iframe.height = "300"
    iframe.frameBorder = "0"
    iframe.scrolling = "no"

    const botResponse = document.createElement("div")
    botResponse.className = "bot-message"
    botResponse.innerHTML = "<span class='emoji'>📅</span> Aquí tienes la programación de nuestras temporadas:"
    chatBox.appendChild(botResponse)

    const iframeContainer = document.createElement("div")
    iframeContainer.className = "iframe-container"
    iframeContainer.appendChild(iframe)
    chatBox.appendChild(iframeContainer)

    chatBox.scrollTop = chatBox.scrollHeight // Desplazar hacia abajo
    return // Salir para evitar agregar una respuesta predeterminada
  } else if (
    normalizedInput.includes("musica") ||
    normalizedInput.includes("musicos") ||
    normalizedInput.includes("tocar") ||
    normalizedInput.includes("instrumento")
  ) {
    if (normalizedInput.includes("venezolana") || normalizedInput.includes("tradicional")) {
      showVenezuelanMusicButtons()
      return
    } else if (normalizedInput.includes("instrumento")) {
      showInstrumentButtons()
      return
    } else {
      emoji = "🎹"
      botResponseText = randomResponse([
        "La música es nuestra pasión y razón de ser. ¿Te interesa conocer sobre instrumentos musicales o música venezolana?",
        "¡La música es universal! ¿Quieres explorar los diferentes tipos de instrumentos o conocer nuestra música tradicional?",
        "¿Te interesa aprender sobre instrumentos musicales o descubrir la riqueza de la música venezolana?",
      ])
    }
  } else if (
    normalizedInput.includes("espectaculo") ||
    normalizedInput.includes("espectaculos") ||
    normalizedInput.includes("show") ||
    normalizedInput.includes("shows")
  ) {
    emoji = "🎭"
    // Mostrar el iframe con el calendario de espectáculos
    const iframe = document.createElement("iframe")
    iframe.src =
      "https://calendar.google.com/calendar/embed?src=nucleo.ciudadguayana%40elsistema.org.ve&ctz=America%2FCaracas"
    iframe.style.border = "0"
    iframe.width = "100%"
    iframe.height = "300"
    iframe.frameBorder = "0"
    iframe.scrolling = "no"

    const botResponse = document.createElement("div")
    botResponse.className = "bot-message"
    botResponse.innerHTML = "<span class='emoji'>🎭</span> Aquí tienes el calendario de nuestros espectáculos:"
    chatBox.appendChild(botResponse)

    const iframeContainer = document.createElement("div")
    iframeContainer.className = "iframe-container"
    iframeContainer.appendChild(iframe)
    chatBox.appendChild(iframeContainer)

    chatBox.scrollTop = chatBox.scrollHeight // Desplazar hacia abajo
    return // Salir para evitar agregar una respuesta predeterminada
  } else if (
    normalizedInput.includes("programacion") ||
    normalizedInput.includes("programaciones") ||
    normalizedInput.includes("agenda")
  ) {
    emoji = "📋"
    // Mostrar el iframe con el calendario de programación
    const iframe = document.createElement("iframe")
    iframe.src =
      "https://calendar.google.com/calendar/embed?src=nucleo.ciudadguayana%40elsistema.org.ve&ctz=America%2FCaracas"
    iframe.style.border = "0"
    iframe.width = "100%"
    iframe.height = "300"
    iframe.frameBorder = "0"
    iframe.scrolling = "no"

    const botResponse = document.createElement("div")
    botResponse.className = "bot-message"
    botResponse.innerHTML = "<span class='emoji'>📋</span> Aquí tienes la programación y agenda de nuestros eventos:"
    chatBox.appendChild(botResponse)

    const iframeContainer = document.createElement("div")
    iframeContainer.className = "iframe-container"
    iframeContainer.appendChild(iframe)
    chatBox.appendChild(iframeContainer)

    // chatBox.scrollTop = chatBox.scrollHeight // Desplazar hacia abajo
    return // Salir para evitar agregar una respuesta predeterminada
  }

  // Respuestas específicas para las orquestas juveniles - ACTUALIZADO PARA MOSTRAR BOTONES
  else if (
    (normalizedInput.includes("orquesta") && normalizedInput.includes("guayana")) ||
    (normalizedInput.includes("sinfonica") && normalizedInput.includes("guayana")) ||
    (normalizedInput.includes("juvenil") && normalizedInput.includes("guayana"))
  ) {
    // Mostrar respuesta del usuario
    const userMessage = document.createElement("div")
    userMessage.className = "user-message"
    userMessage.textContent = "Orquesta Sinfónica Juvenil de Ciudad Guayana"
    chatBox.appendChild(userMessage)

    showOrchestraDetails("guayana")
    return
  } else if (
    (normalizedInput.includes("orquesta") && normalizedInput.includes("piar")) ||
    (normalizedInput.includes("sinfonica") && normalizedInput.includes("piar")) ||
    (normalizedInput.includes("juvenil") && normalizedInput.includes("piar")) ||
    (normalizedInput.includes("orquesta") && normalizedInput.includes("regional")) ||
    (normalizedInput.includes("sinfonica") && normalizedInput.includes("regional")) ||
    (normalizedInput.includes("juvenil") && normalizedInput.includes("regional")) ||
    (normalizedInput.includes("orquesta") && normalizedInput.includes("manuel")) ||
    (normalizedInput.includes("sinfonica") && normalizedInput.includes("manuel")) ||
    (normalizedInput.includes("juvenil") && normalizedInput.includes("manuel")) ||
    (normalizedInput.includes("orquesta") && normalizedInput.includes("bolivar")) ||
    (normalizedInput.includes("sinfonica") && normalizedInput.includes("bolivar")) ||
    (normalizedInput.includes("juvenil") && normalizedInput.includes("bolivar"))
  ) {
    // Mostrar respuesta del usuario
    const userMessage = document.createElement("div")
    userMessage.className = "user-message"
    userMessage.textContent = "Orquesta Regional Manuel Carlos Piar"
    chatBox.appendChild(userMessage)

    showOrchestraDetails("piar")
    return
  } else if (
    normalizedInput.includes("orquesta") ||
    normalizedInput.includes("orquestas") ||
    normalizedInput.includes("sinfonica") ||
    normalizedInput.includes("sinfonicas") ||
    normalizedInput.includes("juvenil") ||
    normalizedInput.includes("juveniles") ||
    normalizedInput.includes("agrupacion") ||
    normalizedInput.includes("agrupaciones") ||
    normalizedInput.includes("conjunto musical") ||
    normalizedInput.includes("ensamble")
  ) {
    showOrchestraButtons()
    return
  }

  // Respuestas detalladas sobre programas específicos
  else if (normalizedInput.includes("iniciacion") || normalizedInput.includes("inicial")) {
    // Mostrar respuesta del usuario
    const userMessage = document.createElement("div")
    userMessage.className = "user-message"
    userMessage.textContent = "Programa de Iniciación Musical"
    chatBox.appendChild(userMessage)

    // Mostrar botones de sub-programas de iniciación
    showInitiationSubPrograms()
    return
  } else if (normalizedInput.includes("preinfantil") || normalizedInput.includes("pre infantil")) {
    emoji = "🎻"
    const detailsHTML = `
        <strong>🎻 ORQUESTA PREINFANTIL</strong><br><br>
        La Orquesta PreInfantil juega un rol fundamental y estratégico en la formación de nuestros jóvenes músicos:<br><br>
        <strong>1️⃣ Introducción Temprana a la Música Sinfónica</strong><br><br>
        <strong>2️⃣ Desarrollo de Habilidades Musicales Básicas:</strong><br>
        • Afinación y ritmo<br>
        • Coordinación y motricidad fina<br>
        • Escucha activa y ensamble<br><br>
        <strong>3️⃣ Formación en Disciplina y Trabajo en Equipo:</strong><br>
        • Respeto mutuo<br>
        • Comunicación efectiva<br>
        • Solidaridad y apoyo colectivo<br><br>
        <strong>4️⃣ Impacto en el Desarrollo Cognitivo y Emocional:</strong><br>
        • Fortalece la autoestima y confianza<br>
        • Ayuda a gestionar emociones<br>
        • Fomenta la creatividad e imaginación
        <strong>👩‍🏫 Profesores encargados:</strong><br>
        • Julio Sanchez 
        • Martha Cabrera 
        • Maritza Madrid 
      `
    botResponseText = detailsHTML
  } else if (normalizedInput.includes("alma llanera") || normalizedInput.includes("llanera")) {
    emoji = "🪕"
    const detailsHTML = `
        <strong>🪕 PROGRAMA ALMA LLANERA</strong><br><br>
        El Programa Alma Llanera es una iniciativa clave para la preservación, enseñanza y difusión de la música tradicional venezolana:<br><br>
        <strong>1️⃣ Rescate y promoción del patrimonio cultural:</strong><br>
        • Enseñanza de géneros autóctonos como joropo, tonada, gaita y merengue venezolano<br><br>
        <strong>2️⃣ Formación integral de niños y jóvenes:</strong><br>
        • Fomenta valores como disciplina, trabajo en equipo y perseverancia<br><br>
        <strong>3️⃣ Inclusión social y acceso a la educación musical:</strong><br>
        • Ofrece oportunidades a niños y jóvenes de distintos sectores<br><br>
        <strong>4️⃣ Expansión del repertorio y formación de nuevos talentos:</strong><br>
        • Contribuye a la profesionalización de músicos en géneros tradicionales<br><br>
        <strong>👨‍🏫 Profesores encargados:</strong><br>
        • Jose Cardenas<br>
        • Linda Ferdinand
      `
    botResponseText = detailsHTML
  } else if (normalizedInput.includes("simon bolivar") || normalizedInput.includes("bolivar")) {
    emoji = "🏫"
    const detailsHTML = `
        <strong>🏫 PROGRAMA SIMON BOLIVAR</strong><br><br>
        El Programa Simon Bolivar nació en 2015 con el objetivo de masificar el milagro de la música y expandir el impacto social de El Sistema Nucleo Ciudad Guayana.<br><br>
        Este programa implementa la práctica colectiva de la música en las escuelas pertenecientes al subsistema de educación básica de nuestro país, con el propósito de que esta población aprenda las bondades de la música y los valores que se desprenden de ella.<br><br>
        <strong>👩‍🏫 Profesora encargada:</strong><br>
        • Anghel Rios
      `
    botResponseText = detailsHTML
  } else if (normalizedInput.includes("coral") || normalizedInput.includes("coro")) {
    emoji = "🎵"
    const detailsHTML = `
        <strong>🎵 PROGRAMA CORAL</strong><br><br>
        El Programa Coral promueve la incorporación de niños, niñas y jóvenes que, usando la voz como instrumento, entran en contacto con una gama de posibilidades de desarrollo individual y colectivo.<br><br>
        Este programa contribuye significativamente al crecimiento humanístico e intelectual de los participantes, desarrollando habilidades vocales, expresivas y de trabajo en conjunto.<br><br>
        <strong>👩‍🏫 Profesora encargada:</strong><br>
        • Dorianlid Velez
      `
    botResponseText = detailsHTML
  } else if (normalizedInput.includes("academico") || normalizedInput.includes("orquestal")) {
    emoji = "🎼"
    const detailsHTML = `
        <strong>🎼 PROGRAMA ACADÉMICO ORQUESTAL</strong><br><br>
        El Programa Académico Musical es fundamental para El Sistema Nucleo Ciudad Guayana porque garantiza una formación musical integral, gratuita y de calidad para niños y jóvenes.<br><br>
        Este programa promueve el desarrollo artístico, la inclusión social y la continuidad del movimiento orquestal en Venezuela, siendo una herramienta clave de transformación educativa y social a través de la música.<br><br>
        Incluye dos importantes orquestas:<br><br>
        <strong>1️⃣ Orquesta Sinfónica Juvenil de Ciudad Guayana:</strong><br>
        • Plataforma de alto rendimiento musical<br>
        • Encarna el ideal artístico de El Sistema Nucleo Ciudad Guayana<br>
        • Proyecta el talento venezolano internacionalmente<br>
        • Forma líderes musicales y ciudadanos conscientes<br><br>
        <strong>2️⃣ Orquesta Sinfónica Regional Juvenil 'Manuel Carlos Piar' del Estado Bolivar:</strong><br>
        • Espacio de formación integral para jóvenes músicos<br>
        • Facilita el acceso a la educación musical en regiones apartadas<br>
        • Funciona como herramienta de transformación social<br>
        • Contribuye al desarrollo cultural de sus comunidades<br>
        • Director: Gregman Rodriguez Jimenez
      `
    botResponseText = detailsHTML
  } else if (
    normalizedInput.includes("ennio palumbi") ||
    normalizedInput.includes("palumbi") ||
    normalizedInput.includes("maestro palumbi") ||
    normalizedInput.includes("fundador palumbi")
  ) {
    emoji = "🎺"
    const detailsHTML = `
  <strong>🎺 MAESTRO ENNIO PALUMBI</strong><br>
  <strong>El Fundador Visionario</strong><br><br>
  
  <strong>🎼 Los Humildes Inicios</strong><br>
  Ennio Palumbi solo tenía una trompeta cuando arribó a los escenarios de Ciudad Guayana. Si bien contaba con una gran experiencia instrumental y podía explayarse hablando sobre la teoría musical, cuando le ofrecen dirigir la Orquesta Juvenil e Infantil Juan José Landaeta no había visto su primera clase de dirección de orquesta.<br><br>
  
  <strong>✨ El Momento Decisivo</strong><br>
  Aceptó. Convirtiéndose en director de una orquesta incipiente conformada por <strong>9 instrumentos</strong>. El fagot, el violoncelo y el piano los que más deleitaban al músico. Y así como este grupo se estrenaba como orquesta, Palumbi empezó sus clases de dirección en Caracas para debutar como un director.<br><br>
  
  <strong>🎯 Su Filosofía de Dirección</strong><br>
  Un rol que, tras sus años de experiencia, aprendió a entender como <em>el encargado de concertar y no como el jefe de los ejecutantes</em>.<br><br>
  
  <strong>🏛️ Legado Institucional</strong><br>
  Para <strong>1997</strong> fundó la <strong>Orquesta Sinfónica de Ciudad Guayana</strong>, perteneciente a Fedeorquestas y primera agrupación orquestal profesional del estado Bolívar.<br><br>
  
  <strong>🎭 Presentaciones Históricas</strong><br>
  Entre sus presentaciones más destacadas están las inauguraciones de:<br>
  • Centrales hidroeléctricas Macagua II<br>
  • Central Francisco de Miranda (Caruachi)<br>
  • Puente Orinoquia<br>
  • Reinauguración del Centro Total de Entretenimiento Cachamay<br><br>
  
  <strong>👨‍🏫 Educador Apasionado</strong><br>
  Con una trayectoria de más de 20 años, Palumbi lleva la dirección de la Orquesta Sinfónica Infantil de Fundación Lala. Encargado de promover e incentivar la disciplina en los niños, el director asegura que <em>la diversión y enseñanza del lenguaje musical es la clave para el aprendizaje de los alumnos</em>.<br><br>
  
  <strong>🇮🇹 Raíces Musicales</strong><br>
  <em>"Soy hijo de italianos. Mi mamá descubrió la música de una manera autodidacta, entonces, la música estaba en mi sangre. Creo que desde mi concepción se escuchaba mucha música. Cuando tenía 6 años en la iglesia comenzaron a dar clase de música. Así inicia todo."</em><br><br>
  
  <strong>🌟 El Visionario que Cambió Ciudad Guayana</strong><br>
  De una trompeta y un sueño, nació la primera orquesta profesional del estado Bolívar y el legado musical que hoy conocemos.
`
    botResponseText = detailsHTML
  } else if (normalizedInput.includes("programa") || normalizedInput.includes("programas")) {
    showProgramButtons()
    return
  }

  // Respuestas sobre el director y la historia del núcleo
  else if (
    normalizedInput.includes("director") ||
    normalizedInput.includes("gregman") ||
    normalizedInput.includes("rodriguez") ||
    normalizedInput.includes("jimenez") ||
    normalizedInput.includes("quien dirige") ||
    normalizedInput.includes("quien esta a cargo")
  ) {
    emoji = "👨‍🎼"
    const detailsHTML = `
    <strong>👨‍🎼 DIRECTOR DE EL SISTEMA NÚCLEO CIUDAD GUAYANA</strong><br><br>
    <strong>Gregman Rodríguez Jiménez</strong><br><br>
    Desde <strong>junio de 2023</strong>, asume la dirección de la institución <strong>Gregman Rodríguez Jiménez</strong>, músico sinfónico quien inició su desarrollo y formación musical en esta misma orquesta, siendo parte de la primera generación de la Orquesta Sinfónica Infantil de Ciudad Guayana.<br><br>
    Su historia representa el círculo perfecto de El Sistema: de estudiante a director, demostrando cómo la música transforma vidas y crea líderes que regresan para inspirar a las nuevas generaciones.<br><br>
    <strong>🎯 Un líder formado en casa:</strong><br>
    • Parte de la primera generación (1992)<br>
    • Formación musical integral en el núcleo<br>
    • Experiencia como músico sinfónico<br>
    • Comprende profundamente la filosofía de El Sistema<br><br>
    <em>"La música nos forma, nos transforma y nos da la oportunidad de transformar a otros."</em>
  `
    botResponseText = detailsHTML
  } else if (
    normalizedInput.includes("historia") ||
    normalizedInput.includes("fundacion") ||
    normalizedInput.includes("origen") ||
    normalizedInput.includes("como nacio") ||
    normalizedInput.includes("cuando se fundo")
  ) {
    emoji = "📚"
    const detailsHTML = `
    <strong>📚 HISTORIA DEL NÚCLEO CIUDAD GUAYANA</strong><br><br>
    <strong>🎼 Los Inicios (1992)</strong><br>
    La Orquesta Sinfónica Infantil y Juvenil de Ciudad Guayana nace en <strong>junio de 1992</strong> bajo la dirección de su fundador, el <strong>Maestro Ennio Palumbi</strong>. Junto a poco menos de 50 integrantes, formó los que a futuro se convirtieron en los pilares fundamentales para el crecimiento y desarrollo de la institución.<br><br>
    
    <strong>🏛️ Momentos Históricos</strong><br>
    Desde su fundación, ha estado presente en los actos más importantes de Ciudad Guayana:<br>
    • Inauguración de la Concha Acústica en el Malecón de San Félix<br>
    • Inauguración de la Central Hidroeléctrica Macagua II<br>
    • Inauguración del Estadio La Ceiba<br>
    • Inauguración de la Central Hidroeléctrica Caruachi (2004)<br>
    • Inauguración del II Puente sobre el Río Orinoco<br><br>
    
    <strong>🌟 Artistas Destacados</strong><br>
    Ha compartido escenario con artistas de la talla de:<br>
    Ricardo Montaner, Simón Díaz, Ensamble Gurrufío, Ensamble enCayapa, Serenata Guayanesa, Cayito Aponte, Floria Márquez, Rosario Prieto, Judith Jaimes, Carlos Duarte, Jorge Celedón, Cheo Feliciano.<br><br>
    
    <strong>🎭 Directores Ilustres</strong><br>
    Grandes maestros han dirigido nuestra orquesta:<br>
    Rodolfo Sanglimbeni, Aldemaro Romero, Inocente Carreño, Isabel Palacios, Mario Benzecry, Rubén Capriles, Ennio Palumbi, Sebastian Rosenberg, Rubén Cova.<br><br>
    
    <strong>🔄 El Círculo Perfecto</strong><br>
    Desde 2023, <strong>Gregman Rodríguez Jiménez</strong>, quien fue parte de la primera generación, dirige la institución, cerrando un hermoso círculo de formación y liderazgo.
  `
    botResponseText = detailsHTML
  } else if (
    normalizedInput.includes("inscripcion") ||
    normalizedInput.includes("inscripciones") ||
    normalizedInput.includes("como inscribirse") ||
    normalizedInput.includes("registro") ||
    normalizedInput.includes("ingresar") ||
    normalizedInput.includes("como entrar") ||
    normalizedInput.includes("como me inscribo") ||
    normalizedInput.includes("inscribirme") ||
    normalizedInput.includes("como puedo inscribirme") ||
    normalizedInput.includes("requisitos")
  ) {
    emoji = "📝"
    const detailsHTML = `
    <strong>📝 INSCRIPCIONES EN EL SISTEMA NÚCLEO CIUDAD GUAYANA</strong><br><br>
    <strong>🗓️ NUEVOS INGRESOS</strong><br>
    Las inscripciones para nuevos estudiantes abren en el <strong>mes de julio</strong>.<br><br>
    
    <strong>🎼 ¿YA TIENES EXPERIENCIA PREVIA?</strong><br>
    Si ya cuentas con experiencia musical previa, por favor acércate directamente a nuestra institución para una evaluación personalizada.<br><br>
    

    <em>¡Te esperamos para que formes parte de nuestra gran familia musical!</em>
  `

    const botResponse = document.createElement("div")
    botResponse.className = "bot-message"
    botResponse.innerHTML = `<span class='emoji'>${emoji}</span> ${detailsHTML}`
    chatBox.appendChild(botResponse)

    // Mostrar el iframe con la ubicación
    const locationIframe = document.createElement("iframe")
    locationIframe.width = "100%"
    locationIframe.height = "300"
    locationIframe.loading = "lazy"
    locationIframe.allowFullscreen = true
    locationIframe.src =
      "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Centro%20Empresarial%20Alta%20Vista%2C%20Edificio%20Cvg%2C%20Antiguo%20Maxy%60S%2C%20Planta%20Baja%2C%20Guayana%2C%20Alta%20Vista%20Sur%20Puerto%Ordaz%2C%20Ciudad%20Guayana.&zoom=10&maptype=roadmap"
    locationIframe.style.border = "0"

    const locationContainer = document.createElement("div")
    locationContainer.className = "iframe-container"
    locationContainer.appendChild(locationIframe)
    chatBox.appendChild(locationContainer)

    chatBox.scrollTop = chatBox.scrollHeight
    return
  } else if (
    normalizedInput.includes("maestro abreu") ||
    normalizedInput.includes("abreu") ||
    normalizedInput.includes("jose antonio abreu") ||
    normalizedInput.includes("fundador") ||
    normalizedInput.includes("visionario")
  ) {
    emoji = "🎖️"
    const detailsHTML = `
    <strong>🎖️ MAESTRO JOSÉ ANTONIO ABREU</strong><br>
    <strong>El Visionario de El Sistema</strong><br><br>
    
    <strong>📅 Vida:</strong> Valera, 7 de mayo de 1939 - Caracas, 24 de marzo de 2018<br><br>
    
    <strong>🎼 Su Legado:</strong><br>
    Músico, economista, político, activista y educador venezolano que fundó la Orquesta Nacional Juvenil de Venezuela y el Sistema Nacional de Orquestas Sinfónicas Juveniles, Infantiles y Pre-Infantiles de Venezuela.<br><br>
    
    <strong>🎓 Formación:</strong><br>
    • Profesor ejecutante, Maestro Compositor y Director Orquestal<br>
    • Escuela Superior de Música José Ángel Lamas de Caracas<br>
    • Economista summa cum laude<br>
    • Doctorados honoris causa en economía, música, educación y medicina<br><br>
    
    <strong>🎹 Músico Integral:</strong><br>
    Compositor, pianista, clavecinista y organista, considerado uno de los iconos culturales y musicales de Venezuela.<br><br>
    
    <strong>🌟 Su Filosofía:</strong><br>
    <em>"El hombre que inició todo, el visionario capaz de ver el cambio. El hombre que inspiró a miles y luchó durante toda su vida para construir El Sistema. Nos transmitió sus ideas innovadoras con sabiduría y valores morales."</em><br><br>
    
    <strong>🎵 Homenaje Final:</strong><br>
    El 7 de abril de 2018 se le rindió un homenaje con la participación de más de 10,000 músicos de distintos núcleos a nivel nacional.
  `
    botResponseText = detailsHTML
  } else if (
    normalizedInput.includes("que es el sistema") ||
    normalizedInput.includes("quienes somos") ||
    normalizedInput.includes("mision") ||
    normalizedInput.includes("proposito")
  ) {
    emoji = "🌟"
    const detailsHTML = `
    <strong>🌟 ¿QUIÉNES SOMOS?</strong><br><br>
    
    <strong>🎼 El Sistema Nacional de Orquestas y Coros Juveniles e Infantiles de Venezuela</strong><br>
    Es el <strong>proyecto artístico-social de educación musical más grande del mundo</strong>.<br><br>
    
    <strong>🎯 NUESTRO PROPÓSITO:</strong><br>
    <em>"La meta es la grandeza humana."</em><br><br>
    
    Existimos para hacer de la música, del contacto con los instrumentos musicales, del estudio y los ensayos, de los conciertos y los aplausos, y de las metas y logros, una práctica diaria, constante y posible para toda la población venezolana y del mundo.<br><br>
    
    <strong>🌍 Sin Distinciones:</strong><br>
    A todos los niveles y sin distingo de edades, clases sociales o razas, para transformar la adversidad en esperanza y los obstáculos en realización y excelencia.<br><br>
    
    <strong>💫 Somos un Movimiento:</strong><br>
    Una idea, un sueño que se formó en orquestas, coros y agrupaciones con disciplina y excelencia; que creció en miles de niños creando nuevos caminos y la posibilidad de un mejor futuro.<br><br>
    
    <strong>🏆 Reconocimiento Mundial:</strong><br>
    Un sueño que se expandió por Venezuela hasta traspasar sus fronteras y lograr el reconocimiento internacional como el más grande proyecto artístico-social de educación musical en el mundo.
  `
    botResponseText = detailsHTML
  } else if (
    normalizedInput.includes("pilares") ||
    normalizedInput.includes("valores") ||
    normalizedInput.includes("principios") ||
    normalizedInput.includes("filosofia")
  ) {
    emoji = "🏛️"
    const detailsHTML = `
    <strong>🏛️ NUESTROS PILARES FUNDAMENTALES</strong><br><br>
    
    <strong>1️⃣ TRANSFORMACIÓN SOCIAL</strong><br>
    Nuestro propósito de existir, cada proyecto y decisión que tomamos para ayudar a cada niño, familia y comunidad a crecer y desarrollarse, a entender sus raíces, superarse y caminar hacia adelante.<br><br>
    
    <strong>2️⃣ MÚSICA COMO CAMINO</strong><br>
    Es nuestra herramienta principal para sensibilizar el espíritu humano y desarrollar y proteger la identidad de cada comunidad. Para que cada persona y pueblo descubra y exprese en voz alta su esencia. Es nuestra musa, por la que luchamos para llegar a la excelencia.<br><br>
    
    <strong>3️⃣ INNOVACIÓN ACADÉMICA</strong><br>
    La idea que generó el cambio. Es nuestro método pedagógico, único en el mundo, con enfoque en la enseñanza y la práctica a través de orquestas y coros, capaz de rescatar a niños, jóvenes y comunidades para brindarles una identidad y un propósito.<br><br>
    
    <strong>4️⃣ EL VISIONARIO, EL MAESTRO ABREU</strong><br>
    El hombre que inició todo, el visionario capaz de ver el cambio. El maestro es el recuerdo de lo que somos, lo que hacemos y el porqué lo hacemos, nos transmitió sus ideas innovadoras con sabiduría y valores morales.<br><br>
    
    <em>Estos pilares sostienen cada nota, cada ensayo, cada concierto y cada vida transformada por la música.</em>
  `
    botResponseText = detailsHTML
  }
  //Respuestas para el calendario y la ubicación contienen iframes
  else if (normalizedInput.includes("evento")) {
    // Mostrar el iframe con el calendario
    const iframe = document.createElement("iframe")
    iframe.src =
      "https://calendar.google.com/calendar/embed?src=nucleo.ciudadguayana%40elsistema.org.ve&ctz=America%2FCaracas"
    iframe.style.border = "0"
    iframe.width = "100%"
    iframe.height = "300"
    iframe.frameBorder = "0"
    iframe.scrolling = "no"

    const botResponse = document.createElement("div")
    botResponse.className = "bot-message"
    botResponse.innerHTML = "<span class='emoji'>📅</span> Aquí tienes el calendario de nuestros próximos eventos:"
    chatBox.appendChild(botResponse)

    const iframeContainer = document.createElement("div")
    iframeContainer.className = "iframe-container"
    iframeContainer.appendChild(iframe)
    chatBox.appendChild(iframeContainer)

    chatBox.scrollTop = chatBox.scrollHeight // Desplazar hacia abajo
    return // Salir para evitar agregar una respuesta predeterminada
  } else if (normalizedInput.includes("ubicacion") || normalizedInput.includes("donde")) {
    // Mostrar el iframe con la ubicación
    const iframe = document.createElement("iframe")
    iframe.width = "100%"
    iframe.height = "300"
    iframe.loading = "lazy"
    iframe.allowFullscreen = true
    iframe.src =
      "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Centro%20Empresarial%20Alta%20Vista%2C%20Edificio%20Cvg%2C%20Antiguo%20Maxy%60S%2C%20Planta%20Baja%2C%20Guayana%2C%20Alta%20Vista%20Sur%20Puerto%Ordaz%2C%20Ciudad%20Guayana.&zoom=10&maptype=roadmap"
    iframe.style.border = "0"

    const botResponse = document.createElement("div")
    botResponse.className = "bot-message"
    botResponse.innerHTML = "<span class='emoji'>📍</span> Aquí tienes nuestra ubicación:"
    chatBox.appendChild(botResponse)

    const locationContainer = document.createElement("div")
    locationContainer.className = "iframe-container"
    locationContainer.appendChild(iframe)
    chatBox.appendChild(locationContainer)

    chatBox.scrollTop = chatBox.scrollHeight // Desplazar hacia abajo
    return // Salir para evitar agregar una respuesta predeterminada
  }

  // Respuestas coloquiales y con personalidad
  else if (
    normalizedInput.includes("chiste") ||
    normalizedInput.includes("broma") ||
    normalizedInput.includes("divierteme") ||
    normalizedInput.includes("hazme reir")
  ) {
    emoji = "😂"
    botResponseText = randomResponse([
      "¿Qué le dice un Do a un Do? ¡Dooooble! 🎵",
      "¿Por qué el piano no puede entrar al gimnasio? Porque ya tiene muchas teclas... ¡y no necesita más pesas! 🎹",
      "¿Sabes por qué los músicos no saben contar? Porque siempre están esperando el 1, 2, 3, 4... ¡y vuelven a empezar! 🥁",
      "¿Qué hace un músico cuando gana la lotería? Seguir tocando hasta que se le acabe el dinero. 💰",
      "¿Cómo se llama el campeón de natación de los músicos? ¡El que mejor nada en Do Mayor! 🏊‍♂️",
    ])
  } else if (
    normalizedInput.includes("te gusta") ||
    normalizedInput.includes("tu favorito") ||
    normalizedInput.includes("prefieres")
  ) {
    emoji = "💭"
    if (
      normalizedInput.includes("musica") ||
      normalizedInput.includes("cancion") ||
      normalizedInput.includes("compositor")
    ) {
      botResponseText = randomResponse([
        "Como asistente musical, tengo un gusto ecléctico. Desde Tchaikovsky hasta la música tradicional venezolana, ¡todo me hace vibrar digitalmente!",
        "¡Me encanta toda la música! Pero si tuviera que elegir, las sinfonías de Beethoven tienen algo especial... ¡aunque también disfruto mucho del repertorio venezolano!",
        "Mi 'compositor favorito' cambia según el día, pero siempre tengo un lugar especial para Mozart. ¡Su música es matemáticamente perfecta, como mi código!",
      ])
    } else if (normalizedInput.includes("instrumento")) {
      botResponseText = randomResponse([
        "Si pudiera tocar un instrumento, sería el violín. ¡Es tan expresivo! Aunque el piano también es fascinante con todas sus posibilidades armónicas.",
        "¡Me encantaría tocar el cuatro venezolano! Es pequeño pero poderoso, como yo en el mundo digital.",
        "El violonchelo tiene un sonido que me conmueve especialmente. ¡Es como la voz humana pero en forma de instrumento!",
        "Si pudiera elegir, tocaría el arpa. Su sonido es tan etéreo y mágico... ¡perfecto para un asistente virtual como yo!",
        "Me encantaría tocar el clarinete. Su sonido es tan versátil y puede expresar una amplia gama de emociones. ¡Es como un amigo musical!",
        "Si pudiera elegir, tocaría el trombón. Su sonido es tan poderoso y versátil, ¡y me encanta cómo puede hacer esos efectos de deslizamiento!",
        "Si pudiera elegir, tocaría el saxofón. Su sonido es tan versátil y puede expresar una amplia gama de emociones. ¡Es como un amigo musical!",
      ])
    } else {
      botResponseText = randomResponse([
        "¡Qué pregunta tan interesante! Como asistente virtual, mis 'gustos' están programados para ayudarte con información sobre El Sistema Nucleo Ciudad Guayana, ¡pero aprecio tu curiosidad!",
        "Mi 'favorito' es poder ayudarte con información precisa y útil sobre nuestra organización musical.",
        "¡Me 'gusta' responder preguntas sobre música! Es mi especialidad y lo que me hace un chatbot único.",
      ])
    }
  } else if (
    normalizedInput.includes("eres humano") ||
    normalizedInput.includes("eres real") ||
    normalizedInput.includes("eres un robot") ||
    normalizedInput.includes("eres una ia")
  ) {
    emoji = "🤖"
    botResponseText = randomResponse([
      "Soy un asistente virtual, creado para ayudarte con información sobre El Sistema Nucleo Ciudad Guayana. No soy humano, pero estoy programado para ser lo más útil y amigable posible. ¡La música nos une a todos, humanos y bots!",
      "¡Buena pregunta! Soy Tchaibotsky, un asistente virtual especializado en El Sistema Nucleo Ciudad Guayana. No tengo sentimientos como los humanos, pero sí tengo mucha información musical para compartir contigo.",
      "Soy un chatbot musical, programado para asistirte con información sobre El Sistema Nucleo Ciudad Guayana. No puedo tocar un instrumento (¡aún!), pero puedo ayudarte a encontrar toda la información que necesitas sobre nuestra organización.",
    ])
  } else if (
    normalizedInput.includes("que haces") ||
    normalizedInput.includes("cual es tu funcion") ||
    normalizedInput.includes("para que sirves")
  ) {
    emoji = "🎯"
    botResponseText = randomResponse([
      "¡Mi función es ser tu guía musical en El Sistema Nucleo Ciudad Guayana! Puedo ayudarte con información sobre nuestros programas, conciertos, orquestas y mucho más. ¡Estoy aquí para que tu experiencia sea armoniosa!",
      "Soy el asistente virtual de El Sistema Nucleo Ciudad Guayana, diseñado para responder tus preguntas sobre nuestra organización, eventos y programas educativos. ¡Piensa en mí como tu compañero musical digital!",
      "¡Sirvo para hacer tu experiencia con El Sistema Nucleo Ciudad Guayana más fácil y agradable! Puedo proporcionarte información, responder preguntas y guiarte a través de nuestro sitio web. ¡La música es complicada, pero encontrar información sobre ella no debería serlo!",
    ])
  } else if (
    normalizedInput.includes("aburrido") ||
    normalizedInput.includes("aburrida") ||
    normalizedInput.includes("me aburro")
  ) {
    emoji = "🎭"
    botResponseText = randomResponse([
      "¿Aburrido? ¡La música es el mejor remedio! ¿Por qué no exploras nuestra Galería Audiovisual o consultas nuestros próximos conciertos? ¡Te garantizo que encontrarás algo que te emocione!",
      "¡El aburrimiento no existe cuando hay música! Pregúntame sobre nuestros próximos eventos o programas, seguro encontramos algo que despierte tu interés.",
      "¿Sabías que la música puede cambiar instantáneamente tu estado de ánimo? Explora nuestra sección de eventos o pregúntame sobre nuestras orquestas. ¡La aventura musical está a solo un clic!",
    ])
  } else if (
    normalizedInput.includes("triste") ||
    normalizedInput.includes("deprimido") ||
    normalizedInput.includes("deprimida") ||
    normalizedInput.includes("mal dia")
  ) {
    emoji = "🎵"
    botResponseText = randomResponse([
      "La música tiene el poder de transformar emociones. Si te sientes triste, quizás te interese conocer nuestros próximos conciertos. ¡La música en vivo puede ser una experiencia transformadora!",
      "Lamento que no te sientas bien. La música ha demostrado tener efectos terapéuticos. ¿Has considerado explorar nuestros programas o asistir a alguno de nuestros eventos? Podría ayudarte a levantar el ánimo.",
      "Como dijo Nietzsche, 'Sin música, la vida sería un error'. Si estás pasando por un momento difícil, déjame recomendarte explorar nuestra Galería Audiovisual. A veces, una bella melodía es todo lo que necesitamos.",
    ])
  } else if (
    normalizedInput.includes("feliz") ||
    normalizedInput.includes("contento") ||
    normalizedInput.includes("contenta") ||
    normalizedInput.includes("alegre") ||
    normalizedInput.includes("buen dia")
  ) {
    emoji = "😊"
    botResponseText = randomResponse([
      "¡Me alegra que estés de buen humor! La música puede potenciar esas emociones positivas. ¿Hay algo específico sobre El Sistema Nucleo Ciudad Guayana que te gustaría conocer hoy?",
      "¡La felicidad y la música van de la mano! ¿Qué mejor momento para explorar nuestros programas o próximos eventos? ¡Tu buen ánimo se multiplicará!",
      "¡Qué bueno escuchar eso! La música es aún más hermosa cuando estamos felices. ¿Te gustaría conocer más sobre nuestras orquestas o programas educativos?",
    ])
  }

  // Añadir respuesta del bot
  const botMessage = document.createElement("div")
  botMessage.className = "bot-message"
  botMessage.innerHTML = `<span class="emoji">${emoji}</span> ${botResponseText}`
  chatBox.appendChild(botMessage)

  // Desplazar hacia abajo
  chatBox.scrollTop = chatBox.scrollHeight
}

// Función para manejar el tema del chatbot
function handleChatbotTheme() {
  // Función para detectar el tema de la página padre
  function detectParentTheme() {
    try {
      const parentDocument = window.parent.document
      const htmlElement = parentDocument.documentElement

      if (htmlElement.classList.contains("dark-mode")) {
        return "dark-mode"
      } else if (htmlElement.classList.contains("light-mode")) {
        return "light-mode"
      } else {
        // Si no hay clase específica, usar preferencia del sistema
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark-mode" : "light-mode"
      }
    } catch (error) {
      console.log("No se puede acceder al documento padre, usando tema por defecto")
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark-mode" : "light-mode"
    }
  }

  // Función para aplicar el tema
  function applyTheme(theme) {
    const chatbotContainer = document.getElementById("chatbot-container")
    if (chatbotContainer) {
      // Remover clases de tema existentes
      chatbotContainer.classList.remove("light-mode", "dark-mode")
      // Aplicar el nuevo tema
      chatbotContainer.classList.add(theme)
      console.log(`Tema aplicado al chatbot: ${theme}`)
    }
  }

  // Aplicar tema inicial
  const initialTheme = detectParentTheme()
  applyTheme(initialTheme)

  // Escuchar mensajes del padre para cambios de tema
  window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "themeChange") {
      applyTheme(event.data.theme)
      console.log(`Tema cambiado por mensaje del padre: ${event.data.theme}`)
    }
  })

  // Observer para detectar cambios en el tema del padre (si es posible)
  try {
    const parentDocument = window.parent.document
    const parentHtml = parentDocument.documentElement

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const newTheme = detectParentTheme()
          applyTheme(newTheme)
        }
      })
    })

    observer.observe(parentHtml, {
      attributes: true,
      attributeFilter: ["class"],
    })

    console.log("Observer de tema configurado correctamente")
  } catch (error) {
    console.log("No se puede configurar observer del tema del padre:", error)
  }
}

// Inicializar el manejo de tema cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // Configurar el tema después de un pequeño delay para asegurar que todo esté cargado
  setTimeout(() => {
    handleChatbotTheme()
  }, 100)
})

// Función para mostrar sub-programas de iniciación musical
function showInitiationSubPrograms() {
  const chatBox = document.getElementById("chat-box")

  const introMessage = document.createElement("div")
  introMessage.className = "bot-message"
  introMessage.innerHTML = `<span class="emoji">📚</span> <strong>Programa de Iniciación Musical</strong><br><br>Este programa está diseñado para niños desde los 4 años de edad, Profesores Encargados: •Julio Sanchez •Martha Cabrera •Maritza Madrid •Anghel Rios. Selecciona la agrupación que te interese:`
  chatBox.appendChild(introMessage)

  const initiationContainer = document.createElement("div")
  initiationContainer.className = "initiation-container"

  const subPrograms = [
    {
      id: "preinfantil",
      icon: "🎻",
      name: "Orquesta PreInfantil",
      description: "Primer contacto con instrumentos sinfónicos y formación en conjunto.",
    },
    {
      id: "flautas-dulces",
      icon: "🎵",
      name: "Orquesta de Flautas Dulces",
      description: "Desarrollo musical a través de la flauta dulce en diferentes voces.",
    },
    {
      id: "orquesta-inicial",
      icon: "🎼",
      name: "Orquesta Inicial",
      description: "Primer contacto estructurado con instrumentos sinfónicos.",
    },
  ]

  subPrograms.forEach((program) => {
    const programButton = document.createElement("button")
    programButton.className = "initiation-sub-button"
    programButton.innerHTML = `
      <div class="initiation-sub-icon">${program.icon}</div>
      <div class="initiation-sub-content">
        <div class="initiation-sub-title">${program.name}</div>
        <div class="initiation-sub-desc">${program.description}</div>
      </div>
    `

    programButton.addEventListener("click", () => {
      showInitiationSubDetails(program.id)
    })

    initiationContainer.appendChild(programButton)
  })

  chatBox.appendChild(initiationContainer)
  chatBox.scrollTop = chatBox.scrollHeight
}

// Función para mostrar detalles de sub-programas de iniciación
function showInitiationSubDetails(subProgramId) {
  const chatBox = document.getElementById("chat-box")
  let detailsHTML = ""
  let emoji = ""

  switch (subProgramId) {
    case "preinfantil":
      emoji = "🎻"
      detailsHTML = `
        <strong>🎻 ORQUESTA PREINFANTIL</strong><br><br>
        La Orquesta PreInfantil juega un rol fundamental y estratégico en la formación de nuestros jóvenes músicos:<br><br>
        <strong>1️⃣ Introducción Temprana a la Música Sinfónica</strong><br><br>
        <strong>2️⃣ Desarrollo de Habilidades Musicales Básicas:</strong><br>
        • Afinación y ritmo<br>
        • Coordinación y motricidad fina<br>
        • Escucha activa y ensamble<br><br>
        <strong>3️⃣ Formación en Disciplina y Trabajo en Equipo:</strong><br>
        • Respeto mutuo<br>
        • Comunicación efectiva<br>
        • Solidaridad y apoyo colectivo<br><br>
        <strong>4️⃣ Impacto en el Desarrollo Cognitivo y Emocional:</strong><br>
        • Fortalece la autoestima y confianza<br>
        • Ayuda a gestionar emociones<br>
        • Fomenta la creatividad e imaginación
        <strong>👩‍🏫 Profesores encargados:</strong><br>
        • Julio Sanchez 
        • Martha Cabrera 
        • Maritza Madrid 
      `
      break

    case "flautas-dulces":
      emoji = "🎵"
      detailsHTML = `
        <strong>🎵 ORQUESTA DE FLAUTAS DULCES</strong><br><br>
        La orquesta de flautas dulces desempeña un papel fundamental en el desarrollo musical infantil:<br><br>
        <strong>1️⃣ Accesibilidad del instrumento:</strong><br>
        La flauta dulce es económica, fácil de manipular y adecuada para manos pequeñas, lo que permite una introducción temprana a la música.<br><br>
        <strong>2️⃣ Formación auditiva y técnica:</strong><br>
        Tocar en orquesta desarrolla la afinación, la lectura musical, el sentido del ritmo y la coordinación motora fina de forma progresiva.<br><br>
        <strong>3️⃣ Trabajo en conjunto:</strong><br>
        La práctica en grupo fomenta habilidades sociales clave como la escucha activa, el respeto por los turnos y la cooperación, elementos esenciales en la música de conjunto.<br><br>
        <strong>4️⃣ Desarrollo integral:</strong><br>
        Al incluir distintas voces (soprano, alto, tenor, bajo), la orquesta introduce al niño en conceptos de armonía, estructura y polifonía desde una edad temprana.<br><br>
        <strong>5️⃣ Motivación y disciplina:</strong><br>
        La participación en ensayos y conciertos proporciona metas claras, motivación intrínseca y refuerza la constancia y la responsabilidad.<br><br>
        <strong>👩‍🏫 Profesor encargado:</strong><br>
        • Anghel Rios
      `
      break

    case "orquesta-inicial":
      emoji = "🎼"
      detailsHTML = `
        <strong>🎼 ORQUESTA INICIAL</strong><br><br>
        La Orquesta Inicial es crucial en el desarrollo musical infantil, ya que representa el primer contacto estructurado del niño con los instrumentos sinfónicos:<br><br>
        <strong>1️⃣ Descubrimiento sonoro:</strong><br>
        Permite al niño explorar los timbres y posibilidades de diferentes instrumentos, ayudándolo a identificar afinidades y potencialidades personales.<br><br>
        <strong>2️⃣ Fundamentos técnicos y musicales:</strong><br>
        Introduce las bases del manejo instrumental, lectura musical, postura y respiración, estableciendo una formación sólida desde el inicio.<br><br>
        <strong>3️⃣ Escucha activa y disciplina colectiva:</strong><br>
        Al tocar en conjunto desde el primer momento, el niño desarrolla la escucha, la atención compartida y el respeto por las indicaciones del director y de sus compañeros.<br><br>
        <strong>4️⃣ Sentido de pertenencia y autoestima:</strong><br>
        Integrarse a una orquesta desde el comienzo fortalece el sentido de identidad, la seguridad emocional y la motivación para superarse a través del arte.<br><br>
        <strong>5️⃣ Puerta de entrada al lenguaje orquestal:</strong><br>
        La Orquesta Inicial introduce conceptos de dinámica, fraseo, diálogo musical y estructura formal en un contexto lúdico y formativo.<br><br>
        <strong>👩‍🏫 Profesor encargado:</strong><br>
        • Anghel Rios
      `
      break
  }

  // Mostrar respuesta del usuario
  const userMessage = document.createElement("div")
  userMessage.className = "user-message"
  userMessage.textContent = subProgramId.replace("-", " ")
  chatBox.appendChild(userMessage)

  // Mostrar detalles del sub-programa
  const detailsMessage = document.createElement("div")
  detailsMessage.className = "bot-message initiation-sub-details"
  detailsMessage.innerHTML = `<span class="emoji">${emoji}</span> ${detailsHTML}`
  chatBox.appendChild(detailsMessage)

  chatBox.scrollTop = chatBox.scrollHeight
}
