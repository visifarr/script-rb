// Имитация системных настроек
const config = {
    version: "1.0.4-stable",
    author: "TFFest",
    isPremium: false
};

// Пасхалка в консоли при загрузке
console.log("%c [SYSTEM]: Доступ ограничен. ", "background: red; color: white; font-size: 20px;");
console.log("Попробуй ввести коды дат в поиск на сайте.");

// Скрытая функция: если зажать клавишу "S" (Secret) на 3 секунды
let secretTimer;
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 's') {
        secretTimer = setTimeout(() => {
            alert("Вы нашли скрытый архив подарков!");
            const gifts = [
                "https://t.me/+qVKhgIN0GdhjODlh",
                "https://t.me/+CmHn1LTurKk4OTlh",
                "https://t.me/+6Mz_3GPqsKE2MTBh",
                "https://t.me/+zRFNaY-a4EMwODA5"
            ];
            window.open(gifts[Math.floor(Math.random() * gifts.length)], '_blank');
        }, 3000);
    }
});

document.addEventListener('keyup', () => clearTimeout(secretTimer));
