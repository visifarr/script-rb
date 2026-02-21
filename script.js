// База данных для всех взаимодействий
const APP_DATA = {
    // Коды для строки поиска
    secretCodes: {
        "21.02.2005": "https://t.me/ammmmrar",
        "22.04.2008": "http://t.me/+Y_rvZZtvbLY4ZmZi"
    },
    // Пул ссылок для "Финального подарка"
    giftPool: [
        "https://t.me/fasddygfu",
        "https://t.me/+qVKhgIN0GdhjODlh",
        "https://t.me/+CmHn1LTurKk4OTlh",
        "https://t.me/+6Mz_3GPqsKE2MTBh",
        "https://t.me/+zRFNaY-a4EMwODA5"
    ],
    // Ссылки для других чатов
    extraLinks: {
        hentavr: "https://t.me/Hentavr",
        news: "https://t.me/+qVKhgIN0GdhjODlh",
        bot: "https://t.me/+6Mz_3GPqsKE2MTBh"
    }
};

let clicks = { ava: 0, gift: 0 };

// --- 1. НАВИГАЦИЯ ПО ВКЛАДКАМ ---
function switchTab(tabName) {
    // Убираем активные классы со всех вкладок и экранов
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

    // Активируем нужные
    if(tabName === 'chats') {
        document.getElementById('tabChats').classList.add('active');
        document.getElementById('screen-chats').classList.add('active');
    } else {
        document.getElementById('tabSettings').classList.add('active');
        document.getElementById('screen-settings').classList.add('active');
    }
}

// --- 2. УПРАВЛЕНИЕ ДИАЛОГАМИ ---
function openDialogue(type) {
    const view = document.getElementById('dialogue-view');
    const content = document.getElementById('chatContent');
    const name = document.getElementById('d-name');
    
    view.classList.add('active');
    content.innerHTML = ""; // Очистка

    if(type === 'saved') {
        name.innerText = "Избранное";
        addMessage("Привет! Это твой приватный архив. Тут можно найти то, что скрыто от других.", "in");
        addMessage(`Чтобы вступить во второй канал с фуллами, жми сюда: <br><br><a href="https://t.me/+q52xoWSoe8o0YzQ6" target="_blank" style="color:#248bcf; font-weight:bold;">🔗 ПОДАТЬ ЗАЯВКУ</a>`, "in");
        addMessage(`<div id="giftBtn">А это тебе финальный подарок))) <br><b>(Тапни 5 раз)</b></div>`, "out");
        
        // Вешаем событие на подарок внутри чата
        setTimeout(() => {
            document.getElementById('giftBtn').onclick = () => {
                clicks.gift++;
                if(clicks.gift === 5) {
                    triggerSecret(APP_DATA.giftPool[Math.floor(Math.random()*5)], "ФИНАЛЬНЫЙ ПОДАРОК");
                    clicks.gift = 0;
                }
            };
        }, 100);
    } 
    else if(type === 'news') {
        name.innerText = "News Channel";
        addMessage("Обновление системы: все подарки распределены по секретным кодам.", "in");
        addMessage(`<a href="${APP_DATA.extraLinks.news}" target="_blank" style="color:#248bcf;">Перейти к новостям →</a>`, "in");
    }
    else if(type === 'bot') {
        name.innerText = "Verify Bot";
        addMessage("Нажмите на кнопку ниже, чтобы пройти верификацию и получить доступ.", "in");
        addMessage(`<button onclick="window.open('${APP_DATA.extraLinks.bot}')" style="background:#248bcf; color:#fff; border:none; padding:10px 20px; border-radius:8px; margin-top:10px;">СТАРТ</button>`, "in");
    }
}

function closeDialogue() {
    document.getElementById('dialogue-view').classList.remove('active');
}

function addMessage(text, side) {
    const msg = document.createElement('div');
    msg.className = `msg-bubble ${side === 'in' ? 'incoming' : 'outgoing'}`;
    msg.innerHTML = `<div class="msg-text">${text}</div><span class="msg-time">${new Date().getHours()}:${new Date().getMinutes()}</span>`;
    document.getElementById('chatContent').appendChild(msg);
}

// --- 3. ОБРАБОТКА КОДОВ И ПАСХАЛОК ---
document.getElementById('mainSearch').addEventListener('input', (e) => {
    let val = e.target.value.trim();
    if(APP_DATA.secretCodes[val]) {
        triggerSecret(APP_DATA.secretCodes[val], "КОД ПРИНЯТ");
        e.target.value = "";
    }
});

document.getElementById('secretAvatar').onclick = (e) => {
    e.stopPropagation();
    clicks.ava++;
    if(clicks.ava === 5) {
        triggerSecret(APP_DATA.extraLinks.hentavr, "ДОСТУП К HENTAVR");
        clicks.ava = 0;
    }
};

function triggerSecret(url, title) {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    const ov = document.getElementById('globalOverlay');
    ov.querySelector('span').innerText = title;
    ov.style.display = 'flex';
    setTimeout(() => {
        window.open(url, '_blank');
        ov.style.display = 'none';
    }, 1500);
}
