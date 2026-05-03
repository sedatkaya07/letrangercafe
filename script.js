// ===== MENÜ VERİLERİ =====
const menuData = {

    kahvaltilar: [
        { id: 1, name: "Kavurma", price: 300, desc: "Özel kavurma", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaU-pBwlD-tchFxf4C5G3togI5PX5GdTTlg&s" },
        { id: 2, name: "Köfte Ekmek", price: 300, desc: "Izgara köfte", img: "https://image.hurimg.com/i/hurriyet/90/0x0/6863a1fc086465c9660c3dba.jpg" },
        { id: 3, name: "Burger", price: 300, desc: "Özel burger", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/33/37/8c/the-real-bite-irish-beef.jpg?w=900&h=500&s=1" },
        { id: 4, name: "Kebab Dürüm", price: 200, desc: "Adana dürüm", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOlO5OgMHwCrBjcFnd6Fr7TToKvvmZgggEMQ&s" },
        { id: 5, name: "Sucuklu Kaşarlı Tost", price: 200, desc: "Bol sucuk ve kaşar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_gHy9A8imuy5il8_xIC73_fcNOU-rlgz4g&s" },
        { id: 6, name: "Makarna Çeşitleri", price: 160, desc: "Günlük makarna çeşitleri", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXr1CpNCICJpBnDeOhLWaTyXnxStnufS1sA&s" },
        { id: 7, name: "Tavuk Dürüm", price: 150, desc: "Izgara tavuk dürüm", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB34PY9hlp5Us2g7SxZ5AMPLzj3cT312M96w&s" },
        { id: 8, name: "Çiğköfte", price: 150, desc: "Acılı çiğköfte dürüm", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSmvXmiw-fQUAZaPz9CVXL1Vd-Xj6FBsHoQ&s" },
        { id: 9, name: "Gözleme", price: 150, desc: "El açması taze gözleme", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqmLAbjDInSsrFOPiQE3U2rUd3eXEdhz6wA&s" }
    ],

    tatlilar: [
        { id: 10, name: "Marlenka", price: 300, desc: "Balkabaklı çok katlı pasta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURPOeW6NqJbHXmAgqigpSPIcK8MyaHuc-3g&s" },
        { id: 11, name: "Fıstık Rüyası", price: 250, desc: "Antep fıstıklı özel pasta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZqhyUc1K5tf7kKDktaSd9VBnD91Zxu-2Pw&s" },
        { id: 12, name: "Profiterol Çikolatalı", price: 250, desc: "Kremalı ve çikolata soslu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkA_ozHrN5GLLIayI_ty_DCIEXP02eXTyrw&s" },
        { id: 13, name: "Sufle Çikolatalı", price: 250, desc: "Sıcak çikolatalı sufle", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_ICwiZlxHLgYwXl2NuMka7h1CIK2mbNy6A&s" },
        { id: 14, name: "Mozaik Pasta", price: 250, desc: "Klasik mozaik pasta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWTa-G5juXu8wSyE0AmMyon4hOWDNWWjTcg&s" },
        { id: 15, name: "Cheesecake (Frambuaz)", price: 250, desc: "Frambuaz soslu cheesecake", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxss6oUqlQpp1CkGg0PVjyBMteeIUdo87-g&s" },
        { id: 16, name: "Nutellalı Pasta", price: 250, desc: "Fındıklı Nutella pasta", img: "https://i.nefisyemektarifleri.com/2023/06/04/findikli-cikolatali-pasta-tarifi.jpg" },
        { id: 17, name: "Tiramisu", price: 250, desc: "İtalyan klasiği tiramisu", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgn-heQD-qt871TjeSc_kKIEs7rY8JSXhYg&s" },
        { id: 18, name: "Red Velvet Cake", price: 250, desc: "Kadife dokulu kırmızı kek", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dsJsOQqsYQKljkUD1ckQdXAGirK2Z3H67g&s" },
        { id: 19, name: "Pasta Latte Mono", price: 250, desc: "Özel pasta latte", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBT0B-KFM-pIW9PpsVaTCCOWvusAW0fhPSQ&s" },
        { id: 20, name: "Rella Cocostar", price: 250, desc: "Hindistan cevizli özel tatlı", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3lBi8wbjzDwShlc93tCm805SLLEHP6XWVOQ&s" },
        { id: 21, name: "Ağlayan Kek", price: 200, desc: "İçi dolu ıslak kek", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJu1bELoH993ruhdChykQHNiS7K29m4u53pQ&s" },
        { id: 22, name: "Sütlaç", price: 200, desc: "Fırında sütlaç", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbdoQuoZaBzkmYEzGWExUoO43q_G2WN3Ifg&s" },
        { id: 23, name: "Brownie", price: 150, desc: "Çikolatalı ıslak brownie", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYMiFHvlPbqzxgt0nQkvbamSkSTnG9GDj_Q&s" }
    ],

    kahveler: [
        { id: 30, name: "Cappuccino", price: 160, desc: "Köpüklü espresso ve süt", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcRmkXZVo7mnrb044gy6dMIW-JOrD1qq-Lg&s" },
        { id: 31, name: "Mocha", price: 155, desc: "Çikolatalı kahve", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPiwv-1QwvPwmZf5LKwzR8cQhMJ9WZzXm6Q&s" },
        { id: 32, name: "Cafe Latte", price: 150, desc: "Sütlü espresso", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0GyH6GlseuseKd3bz0bPVn_8SUwGvjtaPw&s" },
        { id: 33, name: "Flat White", price: 150, desc: "Yoğun sütlü espresso", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9ARfVFm9wJzmvl449guoPp9_wOr0maEZZg&s" },
        { id: 34, name: "Sahlep", price: 150, desc: "Sıcak ve kremsi sahlep", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2OmuxPQ3eR6kKelcEKUBY6oDer7DnOjNxA&s" },
        { id: 35, name: "White Chocolate Mocha", price: 145, desc: "Beyaz çikolatalı mocha", img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/IcedWhiteChocolateMocha?impolicy=1by1_wide_topcrop_630&crop=180,360,1440,1440&wid=630&hei=630&qlt=85" },
        { id: 36, name: "Caramel Macchiato", price: 145, desc: "Karamelli macchiato", img: "https://cloudassets.starbucks.com/is/image/sbuxcorp/SBX20211029_CaramelMacchiato?impolicy=1by1_wide_topcrop_630&crop=180,360,1440,1440&wid=630&hei=630&qlt=85" },
        { id: 37, name: "Gold Chocolate Mocha", price: 145, desc: "Altın çikolatalı özel mocha", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-z4rNxuQP4RUMgQdkDXrvafgrRB1vyuXufw&s" },
        { id: 38, name: "Long Black", price: 140, desc: "Sıcak su üstüne espresso", img: "https://www.starbucks.co.nz/content/menu/0080094001646123889.jpg" },
        { id: 39, name: "Spiced Mango Latte", price: 140, desc: "Baharatlı mango latte", img: "https://cdn.greatdeals.com.sg/wp-content/uploads/2019/09/05174148/lto-psl_flex-slider_840x600-628x449.jpg" },
        { id: 40, name: "Cookie Latte", price: 140, desc: "Kurabiye aromalı latte", img: "https://rosebakes.com/wp-content/uploads/2024/12/SugarCookieLatte_54.jpg" },
        { id: 41, name: "Macadamia Latte", price: 140, desc: "Macadamia sütlü latte", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZ1GW2I0no-uR1WFW2m3GX2v2uzT-UOArgw&s" },
        { id: 42, name: "Americano", price: 130, desc: "Espresso ve sıcak su", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM4xhHCl0Ya9LfxOUL372Q19vnoF42cpqg6g&s" },
        { id: 43, name: "Toffee Nut Latte", price: 130, desc: "Fındıklı toffee latte", img: "https://www.macfit.com/wp-content/uploads/2024/11/imresizer-1732621962190.jpg" },
        { id: 44, name: "Fruity Latte", price: 130, desc: "Meyveli özel latte", img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800" },
        { id: 45, name: "Türk Kahvesi", price: 120, desc: "Geleneksel Türk kahvesi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmg_lywjJZbtnYKI6TnJwLD0b5FGUYXu3smg&s" },
        { id: 46, name: "Sıcak Çikolata", price: 120, desc: "Kremsi sıcak çikolata", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgaEWe7n3yRDlUImK0wOwC2YHQQr2Rr35ZA&s" },
        { id: 47, name: "Filtre Kahve", price: 110, desc: "Günlük filtre kahve", img: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800" },
        { id: 48, name: "Double Espresso", price: 95, desc: "Çift shot espresso", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zqpDMv9yramGILe7nukcfSkO2TF60htJSg&s" },
        { id: 49, name: "Süt", price: 90, desc: "Sıcak ya da soğuk süt", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7B5NVRRPXPFNUN9cueXsxETDe08FoFAEWw&s" },
        { id: 50, name: "Espresso", price: 75, desc: "Tek shot espresso", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeDdWRvmyhaBFhZ3IcJTfInDbkMj80BxO3A&s" }
    ],

    caylar: [
        { id: 60, name: "Bitki Çayı", price: 145, desc: "Doğal bitki çayı çeşitleri", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2zFyc-Iokw861Ywqkwo-vlLD6OSOSCLkQg&s" },
        { id: 61, name: "Meyveli Çay (Salon)", price: 70, desc: "Salon meyveli çay", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRa1y7Mnci6iDe797uBTPaPeZD4WhY1OfG4w&s" },
        { id: 62, name: "Meyveli Çay (Okey)", price: 50, desc: "Okey masası meyveli çay", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1kEOaZtsx2b85eRRLIaFTFSRb7itANd6RA&s" },
        { id: 63, name: "Çay (Fincan)", price: 50, desc: "Demli çay fincan", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kmEeQo5GKPY3P0AlRJhLO9OT2NNMULIqDA&s" },
        { id: 64, name: "Çay (Salon)", price: 40, desc: "Salon çayı", img: "https://icerik.doguscay.com.tr/uploads/doguscay.com.tr/contentCategories/2026-02-26-12-31-12-156029.jpg" },
        { id: 65, name: "Çay (Okey)", price: 30, desc: "Okey masası çayı", img: "https://galeri.netfotograf.com/images/medium/A7F099C1A7E1C36E.JPG" }
    ],

    "soguk-icecekler": [
        { id: 70, name: "Caramel Cream Frappuccino", price: 150, desc: "Karamel kremalı frappuccino", img: "https://media.pickaroo.com/media/thumb/variant_photos/2022/11/1/EDPTtXMg4CEpHPwci97Eyj_watermark_400.jpg" },
        { id: 71, name: "Strawberry Cream Frappuccino", price: 150, desc: "Çilek kremalı frappuccino", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ02sYpR-Z2tys5C1tjN-bo8uDQBtib5S3FA&s" },
        { id: 72, name: "Vanilla Cream Frappuccino", price: 150, desc: "Vanilya kremalı frappuccino", img: "https://www.starbucks.com.hk/media/catalog/product/v/a/vanilla_cream_frappuccino_frap_2_1.jpg" },
        { id: 73, name: "Blueberry Boba", price: 130, desc: "Yaban mersini boba tea", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm02bSv7p3Dsff-PbhbHDTdIq__kzxntWN_A&s" },
        { id: 74, name: "Strawberry Boba", price: 130, desc: "Çilek boba tea", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGMEaBX5gDtZ4LiHuz1LGZuvtT6QmuFJptA&s" },
        { id: 75, name: "Coffee Boba", price: 130, desc: "Kahveli boba tea", img: "https://tyberrymuch.com/wp-content/uploads/2023/06/coffee-milk-bubble-tea-recipe-540x720.jpg" },
        { id: 76, name: "Honey Milk Boba", price: 130, desc: "Ballı sütlü boba tea", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshqnutanNl2I77SX95FRBlNIg_TT_-MYVeg&s" },
        { id: 77, name: "Bubblegum Jelly", price: 130, desc: "Sakız aromalı jelly içecek", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800" },
        { id: 78, name: "Çikolatalı Milkshake", price: 200, desc: "Kremalı çikolatalı milkshake", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48fwmv7w-0TXaKTe3VqVRpz07n5jbtyPENw&s" },
        { id: 79, name: "Vanilyalı Milkshake", price: 200, desc: "Kremsi vanilya milkshake", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BfyWmCWNbPvOj-1qi6UrOMly8Kdg72FRKg&s" },
        { id: 80, name: "Çilekli Milkshake", price: 200, desc: "Taze çilekli milkshake", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYt-Lux2zShJ3nblnayx5mM2WwFRbjNX95KA&s" },
        { id: 81, name: "Muzlu Milkshake", price: 200, desc: "Kremalı muzlu milkshake", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqW1N1mErKKeKJRm9VeLZrtJemDfNPFTL7A&s" }
    ],

    nargileler: [
        { id: 90, name: "Nargile (Standart)", price: 350, desc: "Premium standart nargile", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSRVbuqlmsZ5ZFI0WFsJe6bCWb9yS1CmHOw&s" },
        { id: 91, name: "Nargile (Lüle Başlığı)", price: 150, desc: "Özel lüle başlığı", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSRVbuqlmsZ5ZFI0WFsJe6bCWb9yS1CmHOw&s" },
        { id: 92, name: "Nargile Aromaları", price: 145, desc: "Çeşitli nargile aromaları", img: "https://www.odumantr.com/Data/Blog/63.jpg" },
        { id: 93, name: "Sigara", price: 130, desc: "Çeşitli sigara markaları", img: "https://ertugrulonen.com/wp-content/uploads/2018/02/Tekel.jpg" }
    ]
};

// ===== SEPET =====
let cart = JSON.parse(localStorage.getItem('letrangerCart')) || [];

// ===== DOM ELEMENTLERİ =====
const categoryCards = document.querySelectorAll('.category-card');
const menuDetailContainer = document.getElementById('menuDetail');
const closeDetailBtn = document.getElementById('closeDetail');
const detailCategoryTitle = document.getElementById('detailCategoryTitle');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-item');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const reservationForm = document.getElementById('reservationForm');
const cartButton = document.querySelector('.nav-item .fa-shopping-cart').parentElement;

// ===== MENÜ KATEGORİ TIKLAMA =====
categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        openMenuDetail(category);
    });
});

function openMenuDetail(category) {
    const categoryNames = {
        'kahveler': '☕ Sıcak İçecekler',
        'kahvaltilar': '🍔 Yemekler',
        'tatlilar': '🍰 Tatlılar',
        'nargileler': '💨 Nargile & Tütün',
        'caylar': '🍵 Çaylar',
        'soguk-icecekler': '🥤 Soğuk İçecekler & Boba'
    };
    
    detailCategoryTitle.textContent = categoryNames[category];
    
    document.querySelectorAll('.menu-items').forEach(item => {
        item.classList.remove('active');
    });
    
    const targetCategory = document.querySelector(`[data-category-content="${category}"]`);
    targetCategory.classList.add('active');
    
    fillMenuItems(category, targetCategory);
    
    menuDetailContainer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fillMenuItems(category, container) {
    container.innerHTML = '';
    
    if (menuData[category]) {
        menuData[category].forEach(item => {
            const menuItemHTML = `
                <div class="menu-item" data-id="${item.id}">
                    <div class="menu-item-image">
                        <img src="${item.img}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="menu-item-info">
                        <div class="menu-item-header">
                            <div>
                                <h3 class="menu-item-title">${item.name}</h3>
                            </div>
                            <div class="menu-item-price">₺${item.price}</div>
                        </div>
                        ${item.desc ? `<p class="menu-item-desc">${item.desc}</p>` : ''}
                        <div class="menu-item-footer">
                            <button class="add-to-cart" data-id="${item.id}">
                                <i class="fas fa-cart-plus"></i> Sepete Ekle
                            </button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += menuItemHTML;
        });
        
        container.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const itemId = parseInt(this.getAttribute('data-id'));
                addToCart(itemId);
            });
        });
    }
}

// ===== SEPETE EKLEME =====
function addToCart(itemId) {
    let itemToAdd = null;
    
    for (const category in menuData) {
        const item = menuData[category].find(item => item.id === itemId);
        if (item) {
            itemToAdd = item;
            break;
        }
    }
    
    if (!itemToAdd) return;
    
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...itemToAdd, quantity: 1 });
    }
    
    updateCart();
    showNotification(`${itemToAdd.name} sepete eklendi! 🛒`);
}

// ===== SEPETİ GÜNCELLE =====
function updateCart() {
    localStorage.setItem('letrangerCart', JSON.stringify(cart));
    updateCartDisplay();
    updateCartBadge();
    updateCartTotal();
}

function updateCartDisplay() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Sepetiniz boş</p>';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItemHTML = `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₺${item.price} x ${item.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn decrease" data-id="${item.id}">-</button>
                    <span class="qty-count">${item.quantity}</span>
                    <button class="qty-btn increase" data-id="${item.id}">+</button>
                    <button class="remove-btn" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
    });
    
    // Event listeners
    cartItemsContainer.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            changeQuantity(id, -1);
        });
    });
    
    cartItemsContainer.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            changeQuantity(id, 1);
        });
    });
    
    cartItemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    let badge = document.querySelector('.cart-badge');
    
    if (totalItems > 0) {
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'cart-badge';
            cartButton.appendChild(badge);
        }
        badge.textContent = totalItems;
    } else if (badge) {
        badge.remove();
    }
}

function changeQuantity(itemId, delta) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCart();
    }
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        const itemName = cart[itemIndex].name;
        cart.splice(itemIndex, 1);
        updateCart();
        showNotification(`${itemName} sepetten kaldırıldı`);
    }
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = `₺${total.toFixed(2)}`;
}

// ===== BİLDİRİM GÖSTER =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #8B4513;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// ===== EVENT LISTENER'LAR =====
closeDetailBtn.addEventListener('click', closeMenuDetail);

function closeMenuDetail() {
    menuDetailContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
}

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

cartButton.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
    if (e.target === menuDetailContainer) {
        closeMenuDetail();
    }
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Sepetiniz boş!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderSummary = cart.map(item => 
        `${item.name} x${item.quantity} = ₺${item.price * item.quantity}`
    ).join('\n');
    
    alert(`SİPARİŞ ÖZETİ:\n\n${orderSummary}\n\nTOPLAM: ₺${total.toFixed(2)}\n\nSiparişiniz alındı! Teşekkür ederiz.`);
    
    cart = [];
    updateCart();
    cartModal.classList.remove('active');
});

if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Rezervasyonunuz alındı! En kısa sürede sizi arayacağız.');
        reservationForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.category-card, .menu-item, .feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }

    .cart-badge {
        position: absolute;
        top: -8px;
        right: -8px;
        background: #e74c3c;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        font-size: 11px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .nav-item {
        position: relative;
    }

    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }

    .cart-item-info h4 {
        margin: 0 0 4px;
        font-size: 14px;
    }

    .cart-item-info p {
        margin: 0;
        font-size: 13px;
        color: #8B4513;
    }

    .cart-item-controls {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .qty-btn {
        width: 28px;
        height: 28px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .qty-btn:hover {
        background: #f5f5f5;
    }

    .qty-count {
        min-width: 20px;
        text-align: center;
        font-weight: 600;
    }

    .remove-btn {
        background: none;
        border: none;
        color: #e74c3c;
        cursor: pointer;
        padding: 4px;
        font-size: 14px;
    }
`;
document.head.appendChild(style);
// ===== MENÜYÜ SAĞA KAYDIRARAK KAPATMA (SWIPE RIGHT) - DAHA AZ HASSAS =====
const menuDetailForSwipe = document.getElementById('menuDetail');
let touchStartX = 0;
let touchStartY = 0;

menuDetailForSwipe.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: true });

menuDetailForSwipe.addEventListener('touchend', function(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);
    
    // Sağa kaydırma: 80px'den fazla VE dikey hareket 40px'den az ise
    if (deltaX > 130 && deltaY < 80) {
        closeMenuDetail();
    }
}, { passive: true });
// ===== SEPET BUTONLARI =====
// Navbar'daki Sepeti Görüntüle butonu
const cartBtn = document.getElementById('cartBtn');
const floatingCartBtn = document.getElementById('floatingCartBtn');

if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.classList.add('active');
    });
}

if (floatingCartBtn) {
    floatingCartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
    });
}

// Sepet badge'ini güncelleme (hem navbar hem floating için)
function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Navbar badge
    let navbarBadge = document.querySelector('.cart-btn .cart-badge');
    if (totalItems > 0) {
        if (!navbarBadge) {
            navbarBadge = document.createElement('span');
            navbarBadge.className = 'cart-badge';
            const cartLink = document.querySelector('.cart-btn');
            if (cartLink) {
                cartLink.style.position = 'relative';
                cartLink.appendChild(navbarBadge);
            }
        }
        navbarBadge.textContent = totalItems;
    } else if (navbarBadge) {
        navbarBadge.remove();
    }
    
    // Floating button badge
    let floatingBadge = document.getElementById('floatingCartBadge');
    if (floatingBadge) {
        floatingBadge.textContent = totalItems;
        floatingBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Mevcut updateCart fonksiyonunun içinde updateCartBadge çağrılıyor zaten
// Ama emin olmak için updateCart fonksiyonunu güncellemeye gerek yok
