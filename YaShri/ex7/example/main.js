import { getObserverCallback } from './solution.js';

function updateBreadcrumbs(idList) {
    // некое превращение string[] в список ссылок и обновление header
    document.querySelector('header').innerHTML = idList
        .map(id => {
            const header = document.getElementById(id);
            return `<a href="#${header.id}">${header.textContent.replace(/^-+ /, '')}</a>`;
        })
        .join(' / ');
}

document.addEventListener('DOMContentLoaded', () => {
    // ваша функция вызывается
    const callback = getObserverCallback(updateBreadcrumbs);

    // создаётся обсервер
    const intersectionObserver = new IntersectionObserver(callback);

    // он следит за "заголовками"
    document.querySelectorAll('div[data-header]').forEach(el => intersectionObserver.observe(el));
});
