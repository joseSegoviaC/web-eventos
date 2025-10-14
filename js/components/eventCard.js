export function createEventCard(event) {
    return `
        <div class="group flex flex-col overflow-hidden rounded-lg bg-white/5 dark:bg-white/5 shadow-lg hover:shadow-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <img 
                alt="${event.title}" 
                class="w-full h-48 object-cover"
                src="${event.image}" 
                loading="lazy"
            />
            <div class="p-4 flex flex-col flex-grow bg-background-light dark:bg-background-dark">
                <h3 class="text-lg font-bold text-black dark:text-white mb-2">
                    ${event.title}
                </h3>
                <p class="text-sm text-black/60 dark:text-white/60 flex items-center gap-2 mb-4">
                    <span class="material-symbols-outlined text-base">calendar_today</span>
                    ${event.date}
                </p>
                <p class="text-sm text-black/60 dark:text-white/60 flex items-center gap-2 mb-4">
                    <span class="material-symbols-outlined text-base">location_on</span>
                    ${event.location}
                </p>
                <button 
                    class="mt-auto w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-primary/90 transition-colors"
                    data-event-id="${event.id}"
                >
                    <span class="truncate">Ver Detalles</span>
                </button>
            </div>
        </div>
    `;
}

export function renderEvents(events, containerId) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }
    
    container.innerHTML = '';

    events.forEach(event => {
        container.innerHTML += createEventCard(event);
    });
    
    attachEventListeners(container);
}

function attachEventListeners(container) {
    const buttons = container.querySelectorAll('button[data-event-id]');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const eventId = e.currentTarget.dataset.eventId;
            handleEventClick(eventId);
        });
    });
}

function handleEventClick(eventId) {
    console.log(`Evento seleccionado: ${eventId}`);
    // Aquí puedes agregar lógica para mostrar detalles del evento
    // Por ejemplo: abrir un modal, redirigir a otra página, etc.
    alert(`Ver detalles del evento #${eventId}`);
}