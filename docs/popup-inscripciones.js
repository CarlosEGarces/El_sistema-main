// Popup de inscripciones para El Sistema Ciudad Guayana
document.addEventListener("DOMContentLoaded", () => {
  // Crear el popup después de 2 segundos
  setTimeout(createInscriptionPopup, 500)
})

function createInscriptionPopup() {
  // Crear el overlay
  const overlay = document.createElement("div")
  overlay.id = "inscription-popup-overlay"
  overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px;
        box-sizing: border-box;
    `

  // Crear el contenedor del popup
  const popup = document.createElement("div")
  popup.id = "inscription-popup"
  popup.style.cssText = `
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(140, 24, 155, 0.3);
    max-width: 450px;
    max-height: 90vh;
    width: 100%;
    position: relative;
    transform: scale(0.8) translateY(50px);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 3px solid transparent;
    background-clip: padding-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

  // Crear el borde gradiente
  const gradientBorder = document.createElement("div")
  gradientBorder.style.cssText = `
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
        background: linear-gradient(135deg, #8c189b, #e70095, #8c189b);
        border-radius: 20px;
        z-index: -1;
        animation: borderGlow 3s ease-in-out infinite alternate;
    `

  // Crear el header del popup
  const header = document.createElement("div")
  header.style.cssText = `
        background: linear-gradient(135deg, #8c189b, #e70095);
        color: white;
        padding: 25px 30px 20px;
        text-align: center;
        position: relative;
        overflow: hidden;
        flex-shrink: 0;
    `

  // Crear elementos decorativos en el header
  const headerDecoration = document.createElement("div")
  headerDecoration.style.cssText = `
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        opacity: 0.3;
        animation: float 6s ease-in-out infinite;
    `

  const headerTitle = document.createElement("h2")
  headerTitle.style.cssText = `
        margin: 0;
        font-size: 1.8rem;
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        position: relative;
        z-index: 2;
    `
  headerTitle.innerHTML = "🎻 ¡INSCRIPCIONES PRÓXIMAMENTE!"

  const headerSubtitle = document.createElement("p")
  headerSubtitle.style.cssText = `
        margin: 8px 0 0 0;
        font-size: 1.1rem;
        opacity: 0.95;
        font-weight: 500;
        position: relative;
        z-index: 2;
    `
  headerSubtitle.textContent = "Únete a El Sistema Núcleo Ciudad Guayana"

  // Crear el contenido del popup
  const content = document.createElement("div")
  content.style.cssText = `
    padding: 20px;
    color: #333;
    line-height: 1.6;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
`

  // Crear la información principal
  const mainInfo = document.createElement("div")
  mainInfo.style.cssText = `
        background: rgb(255, 255, 255);
        padding: 20px;
        border-radius: 15px;
        margin-bottom: 25px;
        border-left: 4px solid #8c189b;
    `

  const freeProcess = document.createElement("div")
  freeProcess.style.cssText = `
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #8c189b;
    background: white;
    padding: 12px 16px;
    border-radius: 8px;
`
  freeProcess.innerHTML = "📢 <span>Proceso completamente GRATUITO</span>"

  // Crear las opciones de inscripción
  const optionsContainer = document.createElement("div")
  optionsContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 25px;
    `

  const option1 = document.createElement("div")
  option1.style.cssText = `
        background: white;
        padding: 18px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border-left: 4px solid #8c189b;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    `
  option1.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 12px;">
            <span style="font-size: 1.5rem;">👧🧑</span>
            <div>
                <strong style="color: #8c189b; font-size: 1rem;">Sin experiencia musical (hasta 16 años)</strong>
                <p style="margin: 5px 0 0 0; color: #666; font-size: 0.95rem;">
                    Puedes inscribirte durante los períodos habilitados
                </p>
            </div>
        </div>
    `

  const option2 = document.createElement("div")
  option2.style.cssText = `
        background: white;
        padding: 18px;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        border-left: 4px solid #e70095;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    `
  option2.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 12px;">
            <span style="font-size: 1.5rem;">🎼</span>
            <div>
                <strong style="color: #e70095; font-size: 1rem;">Con conocimientos previos</strong>
                <p style="margin: 5px 0 0 0; color: #666; font-size: 0.95rem;">
                    Acércate a nuestras instalaciones para realizar una audición
                </p>
            </div>
        </div>
    `

  // Crear la información de contacto
  const contactInfo = document.createElement("div")
  contactInfo.style.cssText = `
        background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        margin-bottom: 0;
        border: 2px dashed #8c189b;
    `
  contactInfo.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 10px;">
            <span style="font-size: 1.3rem;">📍</span>
            <strong style="color: #8c189b; font-size: 1.1rem;">¿Necesitas más información?</strong>
        </div>
        <p style="margin: 0; color: #555; font-size: 0.95rem;">
            Visita nuestra sede o contáctanos<br>
            <strong style="color: #e70095;">¡Te esperamos para hacer música juntos!</strong>
        </p>
    `

  // Crear el botón de cerrar (X)
  const closeX = document.createElement("button")
  closeX.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 1.5rem;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 3;
    `
  closeX.innerHTML = "×"
  closeX.onmouseover = () => {
    closeX.style.background = "rgba(255, 255, 255, 0.3)"
    closeX.style.transform = "scale(1.1)"
  }
  closeX.onmouseout = () => {
    closeX.style.background = "rgba(255, 255, 255, 0.2)"
    closeX.style.transform = "scale(1)"
  }

  // Agregar efectos hover a las opciones
  ;[option1, option2].forEach((option) => {
    option.onmouseover = () => {
      option.style.transform = "translateY(-3px)"
      option.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)"
    }
    option.onmouseout = () => {
      option.style.transform = "translateY(0)"
      option.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)"
    }
  })

  // Guardar el estado original del scroll antes de modificarlo
  const originalBodyOverflow = document.body.style.overflow
  const originalHtmlOverflow = document.documentElement.style.overflow
  const originalBodyPosition = document.body.style.position
  const originalBodyTop = document.body.style.top
  const scrollY = window.scrollY

  // Función para cerrar el popup
  function closePopup() {
    overlay.style.opacity = "0"
    popup.style.transform = "scale(0.8) translateY(50px)"

    setTimeout(() => {
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay)
      }

      // Restaurar completamente el scroll original
      document.body.style.overflow = originalBodyOverflow
      document.documentElement.style.overflow = originalHtmlOverflow
      document.body.style.position = originalBodyPosition
      document.body.style.top = originalBodyTop

      // Restaurar la posición de scroll
      window.scrollTo(0, scrollY)

      // Remover los estilos del popup si existen
      const popupStyles = document.getElementById("popup-inscripciones-styles")
      if (popupStyles) {
        popupStyles.remove()
      }
    }, 300)

    localStorage.setItem("popupShownToday", "true")
    localStorage.setItem("popupLastShown", new Date().toDateString())
  }

  // Event listeners
  closeX.onclick = closePopup

  // Cerrar al hacer clic en el overlay
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      closePopup()
    }
  }

  // Cerrar con tecla Escape
  const escapeHandler = (e) => {
    if (e.key === "Escape" && document.getElementById("inscription-popup-overlay")) {
      closePopup()
      document.removeEventListener("keydown", escapeHandler)
    }
  }
  document.addEventListener("keydown", escapeHandler)

  // Ensamblar el popup
  header.appendChild(headerDecoration)
  header.appendChild(headerTitle)
  header.appendChild(headerSubtitle)
  header.appendChild(closeX)

  mainInfo.appendChild(freeProcess)

  optionsContainer.appendChild(option1)
  optionsContainer.appendChild(option2)

  content.appendChild(mainInfo)
  content.appendChild(optionsContainer)
  content.appendChild(contactInfo)

  popup.appendChild(gradientBorder)
  popup.appendChild(header)
  popup.appendChild(content)

  overlay.appendChild(popup)

  // Agregar estilos de animación como un elemento style independiente
  const popupStyles = document.createElement("style")
  popupStyles.id = "popup-inscripciones-styles"
  popupStyles.textContent = `
    @keyframes borderGlow {
        0% { opacity: 0.8; }
        100% { opacity: 1; }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(180deg); }
    }
    
    @media (max-width: 768px) {
        #inscription-popup {
            max-width: 95vw !important;
            max-height: 95vh !important;
            margin: 0;
        }
        
        #inscription-popup-overlay {
            padding: 2.5vh 2.5vw;
        }
    }
    
    @media (max-width: 480px) {
        #inscription-popup {
            max-width: 98vw !important;
            max-height: 98vh !important;
        }
        
        #inscription-popup-overlay {
            padding: 1vh 1vw;
        }
    }
    
    @media (max-height: 600px) {
        #inscription-popup {
            max-height: 95vh !important;
        }
    }
  `

  // Solo agregar los estilos si no existen ya
  if (!document.getElementById("popup-inscripciones-styles")) {
    document.head.appendChild(popupStyles)
  }

  // Agregar al DOM
  document.body.appendChild(overlay)

  // Prevenir scroll del body de manera más segura
  document.body.style.overflow = "hidden"
  document.documentElement.style.overflow = "hidden"

  // Animar entrada
  setTimeout(() => {
    overlay.style.opacity = "1"
    popup.style.transform = "scale(1) translateY(0)"
  }, 100)
}

// Función para mostrar el popup manualmente (opcional)
window.showInscriptionPopup = () => {
  if (!document.getElementById("inscription-popup-overlay")) {
    createInscriptionPopup()
  }
}
