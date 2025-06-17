// Funcionalidad específica del carrusel de noticias
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar carruseles de noticias
  initNoticiasCarousels()
})

function initNoticiasCarousels() {
  const sliders = ["infantil", "juvenil"]

  sliders.forEach((sliderId) => {
    const container = document.getElementById(`noticias-slider-${sliderId}`)
    if (container) {
      setupNoticiasSlider(sliderId)
    }
  })
}

function setupNoticiasSlider(sliderId) {
  const container = document.getElementById(`noticias-slider-${sliderId}`)
  const slides = container.querySelectorAll(".noticias-slide")
  const prevBtn = document.querySelector(`[data-slider="${sliderId}"].noticias-prev`)
  const nextBtn = document.querySelector(`[data-slider="${sliderId}"].noticias-next`)

  let currentSlide = 0

  console.log(`Inicializando slider: ${sliderId}`)
  console.log(`Slides encontradas: ${slides.length}`)

  // Función para mostrar una diapositiva específica
  function showSlide(index) {
    // Remover clase active de todas las diapositivas
    slides.forEach((slide) => slide.classList.remove("active"))

    // Asegurar que el índice esté en el rango válido
    if (index >= slides.length) {
      currentSlide = 0
    } else if (index < 0) {
      currentSlide = slides.length - 1
    } else {
      currentSlide = index
    }

    // Mostrar la diapositiva actual
    if (slides[currentSlide]) {
      slides[currentSlide].classList.add("active")
      console.log(`Mostrando slide ${currentSlide} del slider ${sliderId}`)
    }
  }

  // Función para ir a la siguiente diapositiva
  function nextSlide() {
    console.log(`Siguiente slide en ${sliderId}`)
    showSlide(currentSlide + 1)
  }

  // Función para ir a la diapositiva anterior
  function prevSlide() {
    console.log(`Slide anterior en ${sliderId}`)
    showSlide(currentSlide - 1)
  }

  // Event listeners para los botones
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault()
      nextSlide()
    })
    console.log(`Botón siguiente configurado para ${sliderId}`)
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault()
      prevSlide()
    })
    console.log(`Botón anterior configurado para ${sliderId}`)
  }

  // Inicializar mostrando la primera diapositiva
  showSlide(0)

  // Auto-play opcional (descomenta si quieres que avance automáticamente)
  /*
  setInterval(() => {
      if (!container.hasAttribute('data-paused')) {
          nextSlide();
      }
  }, 4000); // Cambia cada 4 segundos
  */

  // Pausar auto-play al hacer hover
  container.addEventListener("mouseenter", () => {
    container.setAttribute("data-paused", "true")
  })

  container.addEventListener("mouseleave", () => {
    container.removeAttribute("data-paused")
  })

  // Verificar que las imágenes cargan correctamente
  slides.forEach((slide, index) => {
    const img = slide.querySelector("img")
    if (img) {
      img.addEventListener("load", () => {
        console.log(`Imagen ${index + 1} del slider ${sliderId} cargada:`, img.src)
      })

      img.addEventListener("error", () => {
        console.error(`Error cargando imagen ${index + 1} del slider ${sliderId}:`, img.src)
        // Mostrar imagen placeholder si falla
        img.src = "/placeholder.svg?height=400&width=600&text=Imagen+no+disponible"
        img.alt = "Imagen no disponible"
      })
    }
  })
}

// Función para redimensionar carruseles en responsive
function handleNoticiasCarouselResize() {
  const containers = document.querySelectorAll(".noticias-carousel-container")

  containers.forEach((container) => {
    const windowWidth = window.innerWidth

    if (windowWidth <= 480) {
      container.style.height = "350px"
    } else if (windowWidth <= 768) {
      container.style.height = "400px"
    } else {
      container.style.height = "450px"
    }

    // Asegurar que las imágenes activas se redimensionen
    const activeImg = container.querySelector(".noticias-slide.active img")
    if (activeImg) {
      activeImg.style.maxWidth = "calc(100% - 30px)"
      activeImg.style.maxHeight = "calc(100% - 30px)"
    }
  })
}

// Escuchar cambios de tamaño de ventana
window.addEventListener("resize", handleNoticiasCarouselResize)

// Ejecutar al cargar
handleNoticiasCarouselResize()

// Función de debugging
function debugNoticiasCarousels() {
  console.log("=== DEBUG CARRUSELES DE NOTICIAS ===")

  const sliders = ["infantil", "juvenil"]

  sliders.forEach((sliderId) => {
    const container = document.getElementById(`noticias-slider-${sliderId}`)
    const slides = container ? container.querySelectorAll(".noticias-slide") : []
    const prevBtn = document.querySelector(`[data-slider="${sliderId}"].noticias-prev`)
    const nextBtn = document.querySelector(`[data-slider="${sliderId}"].noticias-next`)

    console.log(`Slider ${sliderId}:`)
    console.log(`- Container encontrado: ${!!container}`)
    console.log(`- Slides encontradas: ${slides.length}`)
    console.log(`- Botón anterior: ${!!prevBtn}`)
    console.log(`- Botón siguiente: ${!!nextBtn}`)

    if (slides.length > 0) {
      slides.forEach((slide, index) => {
        const img = slide.querySelector("img")
        console.log(`  Slide ${index}: ${img ? img.src : "Sin imagen"}`)
      })
    }
  })
}

// Ejecutar debugging al cargar
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(debugNoticiasCarousels, 1000)
})
