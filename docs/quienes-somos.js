document.addEventListener("DOMContentLoaded", () => {
  // Configuración de animaciones con estilo similar a la landing page
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px",
  }

  // Animación de la línea de tiempo con mejoras
  const timelineItems = document.querySelectorAll(".timeline-item")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1
        entry.target.style.transform = "translateX(0)"
      }
    })
  }, observerOptions)

  timelineItems.forEach((item, index) => {
    item.style.opacity = 0
    item.style.transform = "translateX(-50px)"
    item.style.transition = `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s`
    observer.observe(item)
  })

  // Animación mejorada para las tarjetas de valores
  const valorCards = document.querySelectorAll(".valor-card")

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  valorCards.forEach((card, index) => {
    card.style.opacity = 0
    card.style.transform = "translateY(50px)"
    card.style.transition = `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`
    cardObserver.observe(card)
  })

  // Animación mejorada para los miembros del equipo
  const miembroCards = document.querySelectorAll(".miembro-card, .director-card")

  const miembroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  miembroCards.forEach((card, index) => {
    card.style.opacity = 0
    card.style.transform = "translateY(50px)"
    card.style.transition = `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s`
    miembroObserver.observe(card)
  })

  // Animación para la tarjeta del fundador
  const founderCard = document.querySelector(".founder-card")

  if (founderCard) {
    const founderObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    founderCard.style.opacity = 0
    founderCard.style.transform = "translateY(50px)"
    founderCard.style.transition =
      "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    founderObserver.observe(founderCard)
  }

  // Animación mejorada para los reconocimientos
  const reconocimientos = document.querySelectorAll(".reconocimiento, .achievement-card")

  const reconocimientoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1
        entry.target.style.transform = "translateY(0) scale(1)"
      }
    })
  }, observerOptions)

  reconocimientos.forEach((item, index) => {
    item.style.opacity = 0
    item.style.transform = "translateY(30px) scale(0.95)"
    item.style.transition = `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.15}s`
    reconocimientoObserver.observe(item)
  })

  // Animación mejorada para la sección de misión y visión
  const misionVision = document.querySelectorAll(".mision, .vision")

  const mvObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  misionVision.forEach((item, index) => {
    item.style.opacity = 0
    item.style.transform = "translateY(30px)"
    item.style.transition = `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.3}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.3}s`
    mvObserver.observe(item)
  })

  // Animación para las estadísticas de historia
  const historyStats = document.querySelectorAll(".stat-item")

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector(".stat-number")
        if (statNumber) {
          animateNumber(statNumber)
        }
        entry.target.style.opacity = 1
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  historyStats.forEach((stat, index) => {
    stat.style.opacity = 0
    stat.style.transform = "translateY(30px)"
    stat.style.transition = `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s`
    statsObserver.observe(stat)
  })

  // Función para animar números
  function animateNumber(element) {
    const finalNumber = element.textContent
    const numericValue = Number.parseInt(finalNumber.replace(/\D/g, ""))
    const duration = 2000
    const increment = numericValue / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        element.textContent = finalNumber
        clearInterval(timer)
      } else {
        element.textContent = Math.floor(current) + (finalNumber.includes("+") ? "+" : "")
      }
    }, 16)
  }

  // Efecto parallax mejorado para el hero
  const pageHero = document.querySelector(".page-header-gradient")
  let ticking = false

  function updateParallax() {
    const scrollPosition = window.pageYOffset
    if (pageHero) {
      pageHero.style.backgroundPosition = `center ${scrollPosition * 0.3}px`
    }
    ticking = false
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  window.addEventListener("scroll", requestTick)

  // Animación de entrada para elementos con clase especial
  const animateOnScrollElements = document.querySelectorAll("[data-animation]")

  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationType = entry.target.getAttribute("data-animation")
          const delay = entry.target.getAttribute("data-delay") || 0

          setTimeout(() => {
            entry.target.classList.add("animated")
            entry.target.style.opacity = 1

            switch (animationType) {
              case "fadeIn":
                entry.target.style.transform = "translateY(0)"
                break
              case "fadeInLeft":
                entry.target.style.transform = "translateX(0)"
                break
              case "fadeInRight":
                entry.target.style.transform = "translateX(0)"
                break
              case "fadeInUp":
                entry.target.style.transform = "translateY(0)"
                break
              case "zoomIn":
                entry.target.style.transform = "scale(1)"
                break
              default:
                entry.target.style.transform = "translateY(0)"
            }
          }, delay)
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  animateOnScrollElements.forEach((element) => {
    const animationType = element.getAttribute("data-animation")

    // Configurar estado inicial
    element.style.opacity = 0
    element.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"

    switch (animationType) {
      case "fadeIn":
        element.style.transform = "translateY(30px)"
        break
      case "fadeInLeft":
        element.style.transform = "translateX(-50px)"
        break
      case "fadeInRight":
        element.style.transform = "translateX(50px)"
        break
      case "fadeInUp":
        element.style.transform = "translateY(50px)"
        break
      case "zoomIn":
        element.style.transform = "scale(0.9)"
        break
      default:
        element.style.transform = "translateY(30px)"
    }

    animationObserver.observe(element)
  })

  // Efecto de hover mejorado para las tarjetas
  const hoverCards = document.querySelectorAll(
    ".valor-card, .achievement-card, .collaboration-category, .director-card",
  )

  hoverCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)"
    })
  })

    // Mejora de la animación del logo a título
    const logo = document.getElementById("page-logo")
    const title = document.getElementById("page-title")

    if (logo && title) {
      // Mostrar logo inicialmente
      setTimeout(() => {
        logo.classList.add("fade-out")

        setTimeout(() => {
          title.classList.add("show")
        }, 900)
      }, 2500)
    }

  // Efecto de escritura para títulos importantes

  // Agregar estilos CSS para el efecto de parpadeo
  const style = document.createElement("style")
  style.textContent = `
    @keyframes blink {
      0%, 50% { border-color: transparent; }
      51%, 100% { border-color: var(--sistema-magenta); }
    }
  `
  document.head.appendChild(style)

  // Smooth scroll mejorado para enlaces internos
  const internalLinks = document.querySelectorAll('a[href^="#"]')

  internalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})
