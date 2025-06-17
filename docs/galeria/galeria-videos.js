// Funcionalidad específica para la galería de videos
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar carrusel de shorts
  initShortsCarousel()

  // Inicializar modal de videos
  initVideoModal()

  // Inicializar animaciones al hacer scroll
  initScrollAnimations()
})

// Función para inicializar el carrusel de shorts
function initShortsCarousel() {
  const container = document.getElementById("videos-shorts-slider")
  const slides = container.querySelectorAll(".shorts-slide")
  const prevBtn = document.querySelector(".shorts-prev")
  const nextBtn = document.querySelector(".shorts-next")
  const currentShortTitle = document.getElementById("current-short-title")
  const currentShortDescription = document.getElementById("current-short-description")
  const currentShortNumber = document.getElementById("current-short-number")
  const totalShorts = document.getElementById("total-shorts")

  let currentSlide = 0

  console.log("Inicializando carrusel de shorts")
  console.log(`Slides encontradas: ${slides.length}`)

  // Establecer el total de shorts
  if (totalShorts) {
    totalShorts.textContent = slides.length
  }

  // Función para actualizar la información del short actual
  function updateShortInfo() {
    const activeSlide = slides[currentSlide]
    if (activeSlide && currentShortTitle && currentShortDescription && currentShortNumber) {
      const title = activeSlide.getAttribute("data-title")
      const description = activeSlide.getAttribute("data-description")

      currentShortTitle.textContent = title || "Título no disponible"
      currentShortDescription.textContent = description || "Descripción no disponible"
      currentShortNumber.textContent = currentSlide + 1
    }
  }

  // Función para pausar todos los videos
  function pauseAllVideos() {
    slides.forEach((slide) => {
      const iframe = slide.querySelector("iframe")
      if (iframe) {
        const src = iframe.src
        iframe.src = ""
        setTimeout(() => {
          iframe.src = src.replace("autoplay=1", "autoplay=0")
        }, 100)
      }
    })
  }

  // Función para reproducir el video activo
  function playActiveVideo() {
    const activeSlide = slides[currentSlide]
    if (activeSlide) {
      const iframe = activeSlide.querySelector("iframe")
      if (iframe) {
        const src = iframe.src.replace("autoplay=0", "autoplay=1")
        iframe.src = src
      }
    }
  }

  // Función para mostrar una diapositiva específica
  function showSlide(index) {
    pauseAllVideos()
    slides.forEach((slide) => slide.classList.remove("active"))

    if (index >= slides.length) {
      currentSlide = 0
    } else if (index < 0) {
      currentSlide = slides.length - 1
    } else {
      currentSlide = index
    }

    if (slides[currentSlide]) {
      slides[currentSlide].classList.add("active")
      updateShortInfo()
      console.log(`Mostrando short ${currentSlide}`)

      setTimeout(() => {
        playActiveVideo()
      }, 500)
    }

    // Actualizar estado de botones
    if (prevBtn) prevBtn.disabled = currentSlide === 0
    if (nextBtn) nextBtn.disabled = currentSlide === slides.length - 1
  }

  // Función para ir a la siguiente diapositiva
  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      console.log("Siguiente short")
      showSlide(currentSlide + 1)
    }
  }

  // Función para ir a la diapositiva anterior
  function prevSlide() {
    if (currentSlide > 0) {
      console.log("Short anterior")
      showSlide(currentSlide - 1)
    }
  }

  // Event listeners para los botones
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault()
      nextSlide()
    })
    console.log("Botón siguiente configurado para shorts")
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault()
      prevSlide()
    })
    console.log("Botón anterior configurado para shorts")
  }

  // Inicializar mostrando la primera diapositiva
  showSlide(0)

  // Auto-play del carrusel cada 15 segundos (aumentado para dar tiempo a leer)
  setInterval(() => {
    if (!container.hasAttribute("data-paused")) {
      if (currentSlide < slides.length - 1) {
        nextSlide()
      } else {
        showSlide(0) // Volver al inicio
      }
    }
  }, 15000)

  // Pausar auto-play al hacer hover
  container.addEventListener("mouseenter", () => {
    container.setAttribute("data-paused", "true")
  })

  container.addEventListener("mouseleave", () => {
    container.removeAttribute("data-paused")
  })
}

// Función para inicializar el modal de videos
function initVideoModal() {
  const playButtons = document.querySelectorAll(".play-button-large, .watch-btn")
  const modal = document.getElementById("video-modal")
  const videoFrame = document.getElementById("video-frame")
  const modalTitle = document.getElementById("modal-title")
  const modalDescription = document.getElementById("modal-description")
  const closeModal = document.querySelector(".close-modal")

  // Función para abrir el modal
  function openVideoModal(videoId, title, description) {
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    modalTitle.textContent = title
    modalDescription.textContent = description

    modal.style.display = "block"
    document.body.style.overflow = "hidden"
  }

  // Función para cerrar el modal
  function closeVideoModal() {
    videoFrame.src = ""
    modal.style.display = "none"
    document.body.style.overflow = ""
  }

  // Event listeners para todos los botones de reproducción
  playButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const videoId = this.getAttribute("data-video-id")
      const concertCard = this.closest(".concert-card")

      if (concertCard) {
        const title = concertCard.querySelector("h3").textContent
        const description = concertCard.querySelector(".concert-description").textContent
        openVideoModal(videoId, title, description)
      }
    })
  })

  // Event listener para cerrar el modal
  closeModal.addEventListener("click", closeVideoModal)

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeVideoModal()
    }
  })

  // Cerrar modal con tecla Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeVideoModal()
    }
  })

  // Hacer la función global para uso en el carrusel
  window.openVideoModal = openVideoModal
}

// Función para inicializar las animaciones al hacer scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll")

  // Función para verificar si un elemento está en el viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
  }

  // Función para animar elementos visibles
  function animateElementsInView() {
    animatedElements.forEach((element) => {
      if (isElementInViewport(element) && !element.classList.contains("animated")) {
        // Obtener el tipo de animación y el retraso
        const animation = element.dataset.animation || "fadeIn"
        const delay = Number.parseInt(element.dataset.delay || 0)

        // Aplicar el retraso
        setTimeout(() => {
          element.classList.add("animated")
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
          element.style.animationName = animation
        }, delay)
      }
    })
  }

  // Verificar elementos al cargar la página
  animateElementsInView()

  // Verificar elementos al hacer scroll
  window.addEventListener("scroll", animateElementsInView)
}

// Función para redimensionar elementos en responsive
function handleResponsiveResize() {
  const shortsContainer = document.getElementById("videos-shorts-slider")
  const windowWidth = window.innerWidth

  if (shortsContainer) {
    if (windowWidth <= 480) {
      shortsContainer.style.height = "300px"
    } else if (windowWidth <= 768) {
      shortsContainer.style.height = "350px"
    } else {
      shortsContainer.style.height = "400px"
    }
  }

  // Ajustar tamaño de thumbnails de shorts
  const shortThumbnails = document.querySelectorAll(".short-thumbnail")
  shortThumbnails.forEach((thumbnail) => {
    if (windowWidth <= 480) {
      thumbnail.style.width = "120px"
      thumbnail.style.height = "200px"
    } else if (windowWidth <= 768) {
      thumbnail.style.width = "150px"
      thumbnail.style.height = "250px"
    } else {
      thumbnail.style.width = "200px"
      thumbnail.style.height = "300px"
    }
  })
}

// Escuchar cambios de tamaño de ventana
window.addEventListener("resize", handleResponsiveResize)

// Ejecutar al cargar
handleResponsiveResize()

// Función de debugging
function debugVideosGallery() {
  console.log("=== DEBUG GALERÍA DE VIDEOS ===")

  const shortsContainer = document.getElementById("videos-shorts-slider")
  const shortsSlides = shortsContainer ? shortsContainer.querySelectorAll(".shorts-slide") : []
  const prevBtn = document.querySelector(".shorts-prev")
  const nextBtn = document.querySelector(".shorts-next")
  const videoThumbnails = document.querySelectorAll(".video-thumbnail")

  console.log("Carrusel de Shorts:")
  console.log(`- Container encontrado: ${!!shortsContainer}`)
  console.log(`- Slides encontradas: ${shortsSlides.length}`)
  console.log(`- Botón anterior: ${!!prevBtn}`)
  console.log(`- Botón siguiente: ${!!nextBtn}`)

  console.log("Videos principales:")
  console.log(`- Thumbnails encontrados: ${videoThumbnails.length}`)

  if (shortsSlides.length > 0) {
    shortsSlides.forEach((slide, index) => {
      const videoId = slide.getAttribute("data-video-id")
      const title = slide.querySelector("h4")?.textContent || "Sin título"
      console.log(`  Short ${index}: ${videoId} - ${title}`)
    })
  }

  if (videoThumbnails.length > 0) {
    videoThumbnails.forEach((thumbnail, index) => {
      const videoId = thumbnail.getAttribute("data-video-id")
      console.log(`  Video ${index}: ${videoId}`)
    })
  }
}

// Ejecutar debugging al cargar
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(debugVideosGallery, 1000)
})

console.log("Galería de videos cargada correctamente")
