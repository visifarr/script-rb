// Конфигурация твоих секретных данных
const CONFIG = {
    // Коды для поиска
    codes: {
        "21.02.2005": "https://t.me/ammmmrar", // Твое ДР
        "22.04.2008": "http://t.me/+Y_rvZZtvbLY4ZmZi" // ДР создателя
    },
    // Рандомный пул для финального подарка
    finalGifts: [
        "https://t.me/fasddygfu",
        "https://t.me/+qVKhgIN0GdhjODlh",
        "https://t.me/+CmHn1LTurKk4OTlh",
        "https://t.me/+6Mz_3GPqsKE2MTBh",
        "https://t.me/+zRFNaY-a4EMwODA5"
    ],
    hentavr: "https://t.me/Hentavr" // Ссылка для пасхалки с аватаром
};

// Состояние приложения
let state = {
    avatarClicks: 0,
    giftClicks: 0,
    isSearchOpen: false
};

// --- ЛОГИКА ИНТЕРФЕЙСА ---

// Переключение панели поиска
document.getElementById('searchBtn').onclick = () => {
    state.isSearchOpen = !state.isSearchOpen;
    const panel = document.getElementById('searchPanel');
    panel.classList.toggle('open', state.isSearchOpen);
    if(state.isSearchOpen) document.getElementById('codeSearch').focus();
};

// Открытие чата "Избранное"
function viewChat(id) {
    document.getElementById('messengerView').classList.add('active');
}

// Кнопка "Назад"
function goBack() {
    document.getElementById('messengerView').classList.remove('active');
}

// --- ЛОГИКА ПАСХАЛОК ---

// 1. Поиск кодов
document.getElementById('codeSearch').addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (CONFIG.codes[val]) {
        executeSecret(CONFIG.codes[val], "ДОСТУП ПО ДАТЕ РАЗРЕШЕН");
        e.target.value = "";
    }
});

// 2. Пасхалка: 5 кликов по аватару поддержки
document.getElementById('secretAvatar').onclick = (e) => {
    e.stopPropagation(); // Чтобы не сработал клик по всей строке чата
    state.avatarClicks++;
    
    if (state.avatarClicks === 5) {
        executeSecret(CONFIG.hentavr, "АРХИВ HENTAVR ОТКРЫТ");
        state.avatarClicks = 0;
    }
};

// 3. Пасхалка: 5 кликов по сообщению "Финальный подарок"
document.getElementById('giftTrigger').onclick = () => {
    state.giftClicks++;
    
    if (state.giftClicks === 5) {
        const randomLink = CONFIG.finalGifts[Math.floor(Math.random() * CONFIG.finalGifts.length)];
        executeSecret(randomLink, "ФИНАЛЬНЫЙ ПОДАРОК ПОЛУЧЕН");
        state.giftClicks = 0;
    }
};

// --- ФУНКЦИЯ АКТИВАЦИИ ---

function executeSecret(url, message) {
    // Показываем оверлей
    const overlay = document.getElementById('globalOverlay');
    const statusText = document.getElementById('overlayStatus');
    
    overlay.style.display = 'flex';
    statusText.innerText = message;

    // Праздничный эффект конфетти
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#248bcf', '#ffffff', '#00ff00']
    });

    // Переход по ссылке через небольшую паузу для эффекта
    setTimeout(() => {
        window.open(url, '_blank');
        overlay.style.display = 'none';
    }, 1500);
}

// Лог для проверки в консоли (F12)
console.log("%c[SYSTEM]: Telegram Web Clone Active", "color: #248bcf; font-weight: bold;");
