import whoIam from '../data/whoIam.js';

const whoIamContent = whoIam[0];

function createWhoIamSection() {
    const container = document.getElementById('who-iam-content');
    if (!container) return;

    Object.keys(whoIamContent).forEach(key => {
        const card = document.createElement('div');
        card.classList.add(
            'bg-white',
            'dark:bg-gray-800',
            'rounded-lg',
            'shadow-lg',
            'p-6',
            'transform',
            'hover:scale-105',
            'transition-all',
            'duration-300',
            'ease-in-out'
        );

        const title = document.createElement('h3');
        title.classList.add(
            'text-2xl',
            'font-bold',
            'text-primary',
            'mb-4',
            'capitalize'
        );
        title.textContent = key.replace('-', ' ');

        const paragraph = document.createElement('p');
        paragraph.classList.add(
            'text-lg',
            'text-gray-700',
            'dark:text-gray-300',
            'leading-relaxed'
        );
        paragraph.textContent = whoIamContent[key];

        card.appendChild(title);
        card.appendChild(paragraph);
        container.appendChild(card);
    });
}

export default createWhoIamSection;
