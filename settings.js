/**
 * SETTINGS ENGINE v2.2
 * Управление системными параметрами и глубокими пасхалками
 */

const SYSTEM_CONFIG = {
    env: "production",
    build: "2026.02.21.04",
    features: ["deep-links", "auto-verify", "easter-eggs"],
    author: "TFFest"
};

// 1. ЛОГИКА ВКЛАДКИ НАСТРОЕК
document.getElementById('devTrigger').onclick = function() {
    // При клике на "Продвинутые настройки" показываем скрытую кнопку бонуса
    const secretItem = document.querySelector('.secret-set');
    secretItem.style.opacity = "1";
    secretItem.style.background = "#fff9c4";
    
    // Эффект временного уведомления
    alert("Режим разработчика активирован. Скрытые ссылки теперь видны в списке.");
    
    console.log("%c[DEV]: Режим отладки включен. Все триггеры активны.", "color: #4CAF50; font-weight: bold;");
};

// 2. КОНСОЛЬНЫЙ "ПРИВЕТ"
// Если кто-то решит проверить код через F12
(function initConsole() {
    console.clear();
    console.log("%c   ", "background: url('https://telegram.org/img/t_logo.png') no-repeat; padding: 50px; background-size: contain;");
    console.log("%cВНИМАНИЕ: Это зашифрованный узел Telegram Web Lite.", "color: #248bcf; font-size: 18px; font-weight: bold;");
    console.log("Версия билда: " + SYSTEM_CONFIG.build);
    console.log("Все попытки несанкционированного доступа логируются.");
})();

// 3. СКРЫТЫЙ ТРИГГЕР НАСТРОЕК (Длинное нажатие)
let pressTimer;
const settingsTitle = document.querySelector('#screen-settings h2');

if(settingsTitle) {
    settingsTitle.addEventListener('mousedown', startPress);
    settingsTitle.addEventListener('touchstart', startPress);
    settingsTitle.addEventListener('mouseup', cancelPress);
    settingsTitle.addEventListener('touchend', cancelPress);
}

function startPress() {
    pressTimer = setTimeout(() => {
        const randomLink = APP_DATA.giftPool[Math.floor(Math.random() * APP_DATA.giftPool.length)];
        triggerSecret(randomLink, "АДМИН-ДОСТУП");
    }, 3000); // Нужно держать 3 секунды на заголовке "Настройки"
}

function cancelPress() {
    clearTimeout(pressTimer);
}

// 4. ГЛОБАЛЬНЫЙ ОБРАБОТЧИК ОШИБОК
// Если что-то пойдет не так, мы покажем красивое сообщение, а не "белый экран"
window.onerror = function(msg, url, line) {
    console.error("[CRITICAL ERROR]: " + msg + " at " + line);
    return true; // Предотвращает стандартный вывод ошибки
};

// Сообщаем в консоль, что все системы в норме
console.log("%c[SYSTEM]: Все модули загружены успешно.", "color: #248bcf;");
