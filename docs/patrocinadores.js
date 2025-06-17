document.addEventListener("DOMContentLoaded", () => {
  // Animación de números para estadísticas
  function animateStats() {
    const stats = document.querySelectorAll(".stat-number")

    stats.forEach((stat) => {
      const finalValue = Number.parseInt(stat.getAttribute("data-count"))
      const duration = 2000 // 2 segundos
      const startTime = performance.now()

      function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const currentValue = Math.floor(progress * finalValue)

        stat.textContent = currentValue

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        } else {
          stat.textContent = finalValue
        }
      }

      requestAnimationFrame(updateCount)
    })
  }

  // Observador de intersección para activar la animación cuando sea visible
  const statsSection = document.querySelector(".impacto-stats")

  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(statsSection)
  }

  // Efecto de desplazamiento suave para el botón de contacto
  const contactBtn = document.querySelector(".contacto-patrocinio .btn")

  if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      const targetId = contactBtn.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        e.preventDefault()
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      }
    })
  }

  // Efecto hover mejorado para las tarjetas de nivel
  const nivelCards = document.querySelectorAll(".nivel-card")

  nivelCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const icon = card.querySelector(".nivel-icon")
      if (icon) {
        icon.style.transform = "scale(1.2) rotate(10deg)"
        icon.style.transition = "transform 0.3s var(--transition-bounce)"
      }
    })

    card.addEventListener("mouseleave", () => {
      const icon = card.querySelector(".nivel-icon")
      if (icon) {
        icon.style.transform = "scale(1) rotate(0)"
      }
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
  // Animación de números para estadísticas
  function animateStats() {
    const stats = document.querySelectorAll(".stat-number")

    stats.forEach((stat) => {
      const finalValue = Number.parseInt(stat.getAttribute("data-count"))
      const duration = 2000 // 2 segundos
      const startTime = performance.now()

      function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const currentValue = Math.floor(progress * finalValue)

        stat.textContent = currentValue

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        } else {
          stat.textContent = finalValue
        }
      }

      requestAnimationFrame(updateCount)
    })
  }

  // Observador de intersección para activar la animación cuando sea visible
  const statsSection = document.querySelector(".impacto-stats")

  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(statsSection)
  }

  // Efecto de desplazamiento suave para el botón de contacto
  const contactBtn = document.querySelector(".contacto-patrocinio .btn")

  if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      const targetId = contactBtn.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        e.preventDefault()
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        })
      }
    })
  }

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

  // Animación para elementos con data-animation
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
})
