let tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("connect-wallet").addEventListener("click", function() {
    alert("🔗 Connecting TON Wallet...");
});

async function loadGifts() {
    let response = await fetch("https://giftsnft.github.io/gifts/gifts.json");
    let gifts = await response.json();

    let container = document.getElementById("marketplace");
    container.innerHTML = "";

    gifts.forEach(gift => {
        let div = document.createElement("div");
        div.classList.add("gift-card");
        div.innerHTML = `
            <img src="${gift.image_url}" alt="${gift.name}">
            <h3>${gift.name}</h3>
            <p><strong>${gift.price} TON</strong></p>
            <button class="buy-button" onclick="buyGift(${gift.id})">🛒 Купить</button>
        `;
        container.appendChild(div);
    });
}

async function buyGift(giftId) {
    alert("Покупка ID: " + giftId);
}

document.getElementById("refresh").addEventListener("click", loadGifts);

loadGifts();
