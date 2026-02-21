// База данных твоих секретов
const secrets = {
    codes: {
        "21.02.2005": "https://t.me/ammmmrar", // Твое ДР
        "22.04.2008": "http://t.me/+Y_rvZZtvbLY4ZmZi" // ДР создателя
    },
    links: [
        "https://t.me/+qVKhgIN0GdhjODlh",
        "https://t.me/+CmHn1LTurKk4OTlh",
        "https://t.me/+6Mz_3GPqsKE2MTBh",
        "https://t.me/+zRFNaY-a4EMwODA5"
    ]
};

// 1. Логика Поиска (Вводим коды сюда)
const searchInput = document.getElementById('chatSearch');
searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (secrets.codes[val]) {
        alert("Доступ разрешен. Перенаправление...");
        window.open(secrets.codes[val], '_blank');
        e.target.value = ""; // Очистка
    }
});

// 2. Пасхалка "Фуллы в комментариях" (Текст-триггер)
// Если пользователь выделит текст в чате или нажмет на "Settings"
document.addEventListener('copy', () => {
    console.log("%cСекретное сообщение:", "color: #0088cc; font-weight: bold;");
    console.log("Если вам интересен наш контент, киньте заявку в наш будущий второй канал: https://t.me/+q52xoWSoe8o0YzQ6");
});

// 3. Пасхалка с картинками (Hentavr)
// Спрячем её в иконку профиля (клик 5 раз по аватарке в углу)
let avatarClicks = 0;
const avatar = document.querySelector('.avatar.blue');
avatar.style.cursor = "pointer";
avatar.onclick = () => {
    avatarClicks++;
    if (avatarClicks === 5) {
        if(confirm("https://t.me/Hentavr - это картинки, к сожалению, но пойдет тебе?")) {
            window.open("https://t.me/Hentavr", "_blank");
        }
        avatarClicks = 0;
    }
};

// 4. Финальный подарок (Рандомное место)
// Появляется если нажать правую кнопку мыши в пустом месте чата
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const gift = document.createElement('div');
    gift.innerHTML = "🎁 Финальный подарок";
    gift.style.position = "absolute";
    gift.style.left = e.pageX + "px";
    gift.style.top = e.pageY + "px";
    gift.style.background = "#fff";
    gift.style.padding = "10px";
    gift.style.border = "1px solid #333";
    gift.style.cursor = "pointer";
    gift.style.zIndex = "1000";
    
    gift.onclick = () => {
        const giftLinks = [
            "https://t.me/fasddygfu",
            ...secrets.links
        ];
        // Открывает рандомную ссылку из финального набора
        const randomLink = giftLinks[Math.floor(Math.random() * giftLinks.length)];
        window.open(randomLink, '_blank');
        gift.remove();
    };
    
    document.body.appendChild(gift);
    setTimeout(() => gift.remove(), 3000); // Исчезает через 3 сек
});
                          
