// Configuración
const config = {
    romantic_phrase: "Te diría que lo más bonito fue haberte conocido, pero en realidad lo más bonito ha sido todo lo que construimos desde entonces",
    music_enabled: true
};

// DOM Elements
const romanticPhraseElement = document.getElementById('romanticPhrase');
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');

/**
 * Inicializa la página romántica
 */
function initializeRomanticPage() {
    // Obtener la frase de configuración
    const phrase = config.romantic_phrase || "Te amo más cada día ❤️";
    
    // Animar el texto letra por letra
    animateTextLetter(romanticPhraseElement, phrase);
    
    // Inicializar controles de música
    setupMusicControls();
    
    // Auto-play de música si está habilitada
    if (config.music_enabled) {
        setTimeout(() => {
            playMusic();
        }, 1500);
    }
}

/**
 * Anima el texto letra por letra
 * @param {Element} element - Elemento donde aparecerá el texto
 * @param {string} text - Texto a animar
 */
function animateTextLetter(element, text) {
    element.innerHTML = '';
    element.classList.add('letter-animation');
    
    // Dividir el texto en caracteres
    const letters = text.split('');
    
    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter; // No-break space para espacios
        span.style.animationDelay = `${index * 0.05}s`;
        element.appendChild(span);
    });
}

/**
 * Configura los controles de música
 */
function setupMusicControls() {
    musicToggle.addEventListener('click', toggleMusic);
    
    // Detectar cuando termina la música para resetear el estado
    backgroundMusic.addEventListener('ended', () => {
        musicToggle.classList.remove('active');
    });
}

/**
 * Toggle de reproducción de música
 */
function toggleMusic() {
    if (backgroundMusic.paused) {
        playMusic();
    } else {
        pauseMusic();
    }
}

/**
 * Reproduce la música
 */
function playMusic() {
    backgroundMusic.play().catch(error => {
        console.log('No se pudo reproducir la música:', error);
    });
    musicToggle.classList.add('active');
}

/**
 * Pausa la música
 */
function pauseMusic() {
    backgroundMusic.pause();
    musicToggle.classList.remove('active');
}

/**
 * Actualiza la frase romántica dinámicamente
 * @param {string} newPhrase - Nueva frase a mostrar
 */
function updateRomanticPhrase(newPhrase) {
    config.romantic_phrase = newPhrase;
    animateTextLetter(romanticPhraseElement, newPhrase);
}

/**
 * Habilita/deshabilita la música de fondo
 * @param {boolean} enabled - True para habilitar
 */
function setMusicEnabled(enabled) {
    config.music_enabled = enabled;
}

/**
 * Obtiene la URL actual para convertir a QR
 * @returns {string} - URL completa
 */
function getQRUrl() {
    return window.location.href;
}

// Iniciar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', initializeRomanticPage);

// Exportar funciones para uso externo
window.romanticPage = {
    updatePhrase: updateRomanticPhrase,
    setMusicEnabled: setMusicEnabled,
    getQRUrl: getQRUrl,
    toggleMusic: toggleMusic,
    config: config
};
