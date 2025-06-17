// Función para detectar el tema actual de la página principal
function detectPageTheme() {
  const htmlElement = document.documentElement
  if (htmlElement.classList.contains("dark-mode")) {
    return "dark-mode"
  } else if (htmlElement.classList.contains("light-mode")) {
    return "light-mode"
  } else {
    // Si no hay clase específica, usar preferencia del sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark-mode" : "light-mode"
  }
}

// Función para aplicar el tema al chatbot
function applyChatbotTheme(theme) {
  const chatbotContainer = document.getElementById("chatbot-container")
  const chatbotIframe = document.getElementById("chatbot-iframe")

  if (chatbotContainer) {
    // Remover clases de tema existentes
    chatbotContainer.classList.remove("light-mode", "dark-mode")
    // Aplicar el nuevo tema
    chatbotContainer.classList.add(theme)
    console.log(`Chatbot tema aplicado: ${theme}`)
  }

  // Enviar mensaje al iframe para sincronizar el tema
  if (chatbotIframe && chatbotIframe.contentWindow) {
    chatbotIframe.contentWindow.postMessage(
      {
        type: "themeChange",
        theme: theme,
      },
      "*",
    )
  }
}

// Observer para detectar cambios en el tema de la página principal
function setupThemeObserver() {
  const htmlElement = document.documentElement

  // Crear un MutationObserver para detectar cambios en las clases del HTML
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        const currentTheme = detectPageTheme()
        applyChatbotTheme(currentTheme)
        console.log(`Tema de página cambió a: ${currentTheme}`)
      }
    })
  })

  // Configurar el observer
  observer.observe(htmlElement, {
    attributes: true,
    attributeFilter: ["class"],
  })

  return observer
}

// Función principal para crear el botón del chatbot
function createChatbotButton() {
  // Verificar si ya existe el botón
  if (document.getElementById("chatbot-button")) {
    console.log("El botón del chatbot ya existe")
    return
  }

  // Crear el botón del chatbot
  const chatbotButton = document.createElement("button")
  chatbotButton.id = "chatbot-button"
  chatbotButton.className = "chatbot-button"
  chatbotButton.innerHTML = "🤖"
  chatbotButton.setAttribute("aria-label", "Abrir chatbot")
  chatbotButton.title = "Habla con Tchaibotsky"

  // Crear el iframe del chatbot
  const chatbotIframe = document.createElement("iframe")
  chatbotIframe.id = "chatbot-iframe"
  chatbotIframe.className = "chatbot-iframe"
  chatbotIframe.src = "chatbot/index-chatbot.html"
  chatbotIframe.style.display = "none"
  chatbotIframe.setAttribute("aria-hidden", "true")

  // Añadir estilos CSS
  const style = document.createElement("style")
  style.textContent = `
    .chatbot-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #00addc, #72d54a);
      color: white;
      border: none;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .chatbot-button:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }

    .chatbot-button:active {
      transform: scale(0.95);
    }

    .chatbot-iframe {
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 350px;
      height: 500px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      z-index: 9999;
      transition: all 0.3s ease;
      background: white;
    }

    .chatbot-iframe.show {
      display: block !important;
      animation: slideUp 0.3s ease;
    }

    .chatbot-iframe.hide {
      animation: slideDown 0.3s ease;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideDown {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    /* Responsive para móviles */
    @media (max-width: 768px) {
      .chatbot-iframe {
        width: calc(100vw - 20px);
        height: calc(100vh - 120px);
        right: 10px;
        bottom: 80px;
      }
      
      .chatbot-button {
        bottom: 15px;
        right: 15px;
        width: 55px;
        height: 55px;
        font-size: 22px;
      }
    }

    @media (max-width: 480px) {
      .chatbot-iframe {
        width: calc(100vw - 10px);
        height: calc(100vh - 100px);
        right: 5px;
        bottom: 70px;
      }
    }
  `

  // Añadir elementos al DOM
  document.head.appendChild(style)
  document.body.appendChild(chatbotButton)
  document.body.appendChild(chatbotIframe)

  // Variables de estado
  let isOpen = false

  // Función para abrir el chatbot
  function openChatbot() {
    // Detectar y aplicar el tema actual antes de abrir
    const currentTheme = detectPageTheme()

    chatbotIframe.style.display = "block"
    chatbotIframe.classList.add("show")
    chatbotIframe.classList.remove("hide")
    chatbotIframe.setAttribute("aria-hidden", "false")

    // Aplicar tema al chatbot después de un pequeño delay para asegurar que se cargue
    setTimeout(() => {
      applyChatbotTheme(currentTheme)
    }, 100)

    isOpen = true
    console.log(`Chatbot abierto con tema: ${currentTheme}`)
  }

  // Función para cerrar el chatbot
  function closeChatbot() {
    chatbotIframe.classList.add("hide")
    chatbotIframe.classList.remove("show")

    setTimeout(() => {
      chatbotIframe.style.display = "none"
      chatbotIframe.setAttribute("aria-hidden", "true")
    }, 300)

    isOpen = false
    console.log("Chatbot cerrado")
  }

  // Event listener para el botón
  chatbotButton.addEventListener("click", () => {
    if (isOpen) {
      closeChatbot()
    } else {
      openChatbot()
    }
  })

  // Escuchar mensajes del iframe para cerrar el chatbot
  window.addEventListener("message", (event) => {
    if (event.data === "closeChatbot") {
      closeChatbot()
    }
  })

  // Configurar el observer de tema
  setupThemeObserver()

  // Aplicar tema inicial
  const initialTheme = detectPageTheme()
  setTimeout(() => {
    applyChatbotTheme(initialTheme)
  }, 500)

  console.log(`Chatbot button creado con tema inicial: ${initialTheme}`)
}

// Inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createChatbotButton)
} else {
  createChatbotButton()
}
