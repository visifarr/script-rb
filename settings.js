/**
 * SETTINGS & DEEP EASTER EGGS
 * Дополнительные скрытые функции для проекта
 */

const SYSTEM_INFO = {
    version: "2.1.0-stable",
    build: "2026.02.21", // Актуальная дата разработки
    author: "TFFest"
};

// 1. ПАСХАЛКА В КОНСОЛИ
// Когда любопытный пользователь нажмет F12, он увидит это:
console.clear();
console.log(
    "%c🛑 STOP! %cЭто закрытая область системы.",
    "color: red; font-size: 30px; font-weight: bold;",
    "color: white; font-size: 14px;"
);
console.log(
    "%cЕсли вам дали этот доступ, введите секретные даты в поиске приложения.",
    "color: #248bcf; font-size: 12px; font-style: italic;"
);

// 2. СКРЫТАЯ КОМБИНАЦИЯ КЛАВИШ (для ПК версии)
// Если зажать "S" (Secret) на 3 секунды — откроется рандомный подарок
let keyTimer;
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 's' || e.key.toLowerCase() === 'ы') {
        if (!keyTimer) {
            keyTimer = setTimeout(() => {
                const randomLink = CONFIG.finalGifts[Math.floor(Math.random() * CONFIG.finalGifts.length)];
                executeSecret(randomLink, "СЕКРЕТ КЛАВИАТУРЫ АКТИВИРОВАН");
            }, 3000);
        }
    }
});

document.addEventListener('keyup', () => {
    clearTimeout(keyTimer);
    keyTimer = null;
});

// 3. ПАСХАЛКА НА ВЫДЕЛЕНИЕ ТЕКСТА
// Если пользователь попытается скопировать текст "фуллы в комментариях"
document.addEventListener('copy', (e) => {
    const selectedText = window.getSelection().toString();
    if (selectedText.includes("фуллы") || selectedText.includes("второй канал")) {
        console.log("%c[ALERT]: Попытка копирования секретных данных!", "color: orange;");
        // Можно добавить кастомное действие, если нужно
    }
});

// 4. ЭФФЕКТ "ЖИВОГО" ПРИЛОЖЕНИЯ
// Каждые 30 секунд меняем статус в чате на "печатает...", а затем обратно на "в сети"
function simulateActivity() {
    const status = document.querySelector('.active-status');
    if (status) {
        setTimeout(() => {
            status.innerText = "печатает...";
            status.style.color = "#248bcf";
            
            setTimeout(() => {
                status.innerText = "в сети";
                status.style.color = "";
            }, 3000);
        }, Math.random() * 30000 + 10000);
    }
}

setInterval(simulateActivity, 40000);

// Инициализация системы
simulateActivity();
