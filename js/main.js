import { events } from './data/events.js';
import { testimonials } from './data/testimonials.js';
import { renderEvents } from './components/eventCard.js';
import { renderTestimonials } from './components/testimonialCard.js';

function initApp() {
    console.log('🎫 Web-Eventos - Inicializando aplicación...');
    
    renderEvents(events, 'events-grid');
    console.log(`✅ ${events.length} eventos cargados`);
    
    renderTestimonials(testimonials, 'testimonials-grid');
    console.log(`✅ ${testimonials.length} testimonios cargados`);
    
    initHeaderInteractions();
    
    console.log('🎉 Aplicación lista!');
}

function initHeaderInteractions() {
    const searchBtn = document.querySelector('button .material-symbols-outlined:has-text("search")');
    if (searchBtn) {
        searchBtn.closest('button').addEventListener('click', () => {
            console.log('🔍 Búsqueda activada');
            // Aquí puedes implementar la lógica de búsqueda
        });
    }
    
    const favoriteBtn = document.querySelector('button .material-symbols-outlined:has-text("favorite_border")');
    if (favoriteBtn) {
        favoriteBtn.closest('button').addEventListener('click', () => {
            console.log('❤️ Favoritos activados');
        });
    }
    
    const accountBtn = document.querySelector('button .material-symbols-outlined:has-text("account_circle")');
    if (accountBtn) {
        accountBtn.closest('button').addEventListener('click', () => {
            console.log('👤 Cuenta activada');
            // Aquí puedes implementar la lógica de cuenta de usuario
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

export { events, testimonials };