// ===== MENÜ VERİLERİ =====
const menuData = {
    yemekler: [
        { id: 1, name: "Kavurma", price: 300, desc: "Özel baharatlarla hazırlanmış lezzetli kavurma", img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 2, name: "Köfte Ekmek", price: 300, desc: "Izgara köfte, taze ekmek ile servis edilir", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 3, name: "Burger", price: 300, desc: "El yapımı özel burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 4, name: "Kebab Dürüm", price: 200, desc: "Özel baharatlı kebab, ince lavaşta", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 5, name: "Sucuklu Kaşarlı Tost", price: 200, desc: "Sucuk ve kaşar peyniri ile hazırlanmış tost", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 6, name: "Makarna Çeşitleri", price: 160, desc: "Günün makarnası, çeşitli soslarla", img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 7, name: "Tavuk Dürüm", price: 150, desc: "Izgara tavuk, taze sebzelerle lavaşta", img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 8, name: "Çiğköfte", price: 150, desc: "Taze çiğköfte, nar ekşisi ile", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 9, name: "Gözleme", price: 150, desc: "Taze hamurdan günlük hazırlanan gözleme", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],

    tatlilar: [
        { id: 10, name: "Marlenka", price: 300, desc: "Özel Marlenka pasta", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 11, name: "Fıstık Rüyası", price: 250, desc: "Fıstıklı özel pasta", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 12, name: "Profitrol Çikolatalı", price: 250, desc: "Bol çikolata soslu profitrol", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 13, name: "Sufle Çikolatalı", price: 250, desc: "Sıcak çikolatalı sufle", img: "https://images.unsplash.com/photo-1624353365286-3f8d62dadadf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 14, name: "Mozaik Çikolata", price: 250, desc: "Geleneksel mozaik pasta", img: "https://images.unsplash.com/photo-1606313564200-75fae8f0ad3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 15, name: "Cheesecake Frambuaz", price: 250, desc: "Frambuaz soslu cheesecake", img: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 16, name: "Nutellalı Pasta", price: 250, desc: "Nutella ile hazırlanmış özel pasta", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 17, name: "Tiramisu", price: 250, desc: "İtalyan usulü klasik tiramisu", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 18, name: "Red Velvet Cake", price: 250, desc: "Krem peynirli Red Velvet pasta", img: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 19, name: "Pasta Latte Mono", price: 250, desc: "Özel latte pasta", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 20, name: "Rella Cocostar", price: 250, desc: "Hindistan cevizi aromalı özel pasta", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 21, name: "Ağlayan Kek", price: 200, desc: "İçi dolu sıcak kek", img: "https://images.unsplash.com/photo-1606313564200-75fae8f0ad3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 22, name: "Sütlaç", price: 200, desc: "Geleneksel fırın sütlaç", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 23, name: "Browni", price: 150, desc: "Bol çikolatalı ıslak brownie", img: "https://images.unsplash.com/photo-1606313564200-75fae8f0ad3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],

    sicak: [
        { id: 24, name: "Cappucino", price: 160, desc: "Köpüklü İtalyan usulü cappuccino", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 25, name: "Mocha", price: 155, desc: "Çikolata ve espresso karışımı", img: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 26, name: "Cafe Latte", price: 150, desc: "Bol sütlü, yumuşak içimli latte", img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 27, name: "Flat White", price: 150, desc: "Yoğun espresso, az sütlü", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 28, name: "Sahlep", price: 150, desc: "Geleneksel Türk sahlebi", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 29, name: "White Chocolate Mocha", price: 145, desc: "Beyaz çikolata ve espresso", img: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 30, name: "Caramel Macchiato", price: 145, desc: "Karamel soslu espresso macchiato", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 31, name: "Gold Chocolate Mocha", price: 145, desc: "Altın çikolatalı özel mocha", img: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 32, name: "Bitki Çayı", price: 145, desc: "Çeşitli doğal bitki çayları", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 33, name: "Long Black", price: 140, desc: "Uzun siyah espresso", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 34, name: "Spiced Mango Latte", price: 140, desc: "Baharatlı mango aromalı latte", img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 35, name: "Cookie Latte", price: 140, desc: "Kurabiye aromalı özel latte", img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 36, name: "Macadamia Latte", price: 140, desc: "Macadamia fındığı aromalı latte", img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 37, name: "Americano", price: 130, desc: "Double shot espresso ile hazırlanır", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 38, name: "Toffe Nut Latte", price: 130, desc: "Fındıklı toffee aromalı latte", img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 39, name: "Fruty Latte", price: 130, desc: "Meyveli özel latte", img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 40, name: "Türk Kahvesi", price: 120, desc: "Geleneksel usulde pişirilmiş", img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 41, name: "Sıcak Çikolata", price: 120, desc: "Kremsi sıcak çikolata", img: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 42, name: "Filtre Kahve", price: 110, desc: "Özel blend filtre kahve", img: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 43, name: "Double Espresso", price: 95, desc: "Çift shot yoğun espresso", img: "https://images.unsplash.com/photo-1510707577719-ae7c9b788690?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 44, name: "Süt", price: 90, desc: "Sıcak taze süt", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 45, name: "Espresso", price: 75, desc: "Tek shot yoğun aromalı espresso", img: "https://images.unsplash.com/photo-1510707577719-ae7c9b788690?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 46, name: "Meyveli Çay (Salon)", price: 70, desc: "Taze meyve aromalı çay - salon", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 47, name: "Meyveli Çay (Okey)", price: 50, desc: "Taze meyve aromalı çay - okey", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 48, name: "Salon Fincan Çay", price: 50, desc: "Sade fincan çay - salon", img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 49, name: "Salon Çay", price: 40, desc: "Klasik Türk çayı - salon", img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 50, name: "Okey Çay", price: 30, desc: "Klasik Türk çayı - okey", img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],

    "soguk-icecekler": [
        { id: 51, name: "Caramel Cream Frappuccini", price: 150, desc: "Karamel kremalı buzlu frappuccino", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 52, name: "Strawberries Cream Frappuccini", price: 150, desc: "Çilek kremalı buzlu frappuccino", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 53, name: "Vanilla Cream Frappuccini", price: 150, desc: "Vanilyalı kremalı buzlu frappuccino", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 54, name: "Blueberry Boba", price: 130, desc: "Yaban mersini aromalı boba çayı", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 55, name: "Strawberry Boba", price: 130, desc: "Çilek aromalı boba çayı", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 56, name: "Coffee Boba", price: 130, desc: "Kahveli boba çayı", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 57, name: "Honey Milk Boba", price: 130, desc: "Bal sütlü boba çayı", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 58, name: "Bubblgum Jelly", price: 130, desc: "Sakız aromalı jelly içeceği", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],

    milkshake: [
        { id: 59, name: "Çikolatalı Milkshake", price: 200, desc: "Kremsi çikolatalı milkshake", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 60, name: "Vanilyalı Milkshake", price: 200, desc: "Kremsi vanilyalı milkshake", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 61, name: "Çilekli Milkshake", price: 200, desc: "Taze çilekli milkshake", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 62, name: "Muzlu Milkshake", price: 200, desc: "Kremsi muzlu milkshake", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],

    nargileler: [
        { id: 63, name: "Nargile (Standart)", price: 350, desc: "Premium kalite standart nargile", img: "https://images.unsplash.com/photo-1595515119566-d2eaff6c7b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 64, name: "Nargile (Lüle Başlığı)", price: 150, desc: "Özel lüle başlıklı nargile", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 65, name: "Nargile Aroması", price: 145, desc: "Strawberry, Mulberry ve daha fazlası", img: "https://images.unsplash.com/photo-1531168556467-80c61c7cf4f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 66, name: "Sigara", price: 130, desc: "Çeşitli sigara markaları", img: "https://images.unsplash.com/photo-1523293836414-f04e712e1f3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],

    ekstralar: [
        { id: 67, name: "Extra Çerez", price: 150, desc: "Taze hazırlanmış özel çerez tabağı", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 68, name: "Hot Chocolate (Extra)", price: 140, desc: "Extra kremli sıcak çikolata", img: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 69, name: "Extra", price: 20, desc: "Genel extra eklentiler", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
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
    // Kategori başlığını güncelle
    const categoryNames = {
        'kahveler': 'Kahveler',
        'kahvaltilar': 'Kahvaltılar',
        'tatlilar': 'Tatlılar',
        'nargileler': 'Nargileler',
        'caylar': 'Çaylar',
        'soguk-icecekler': 'Soğuk İçecekler'
    };
    
    detailCategoryTitle.textContent = categoryNames[category];
    
    // Önce tüm menü içeriklerini gizle
    document.querySelectorAll('.menu-items').forEach(item => {
        item.classList.remove('active');
    });
    
    // İlgili kategoriyi göster
    const targetCategory = document.querySelector(`[data-category-content="${category}"]`);
    targetCategory.classList.add('active');
    
    // Menü öğelerini doldur
    fillMenuItems(category, targetCategory);
    
    // Menü detayını göster
    menuDetailContainer.classList.add('active');
    document.body.style.overflow = 'hidden'; // Sayfa kaydırmayı engelle
}

function fillMenuItems(category, container) {
    container.innerHTML = '';
    
    if (menuData[category]) {
        menuData[category].forEach(item => {
            const menuItemHTML = `
                <div class="menu-item" data-id="${item.id}">
                    <div class="menu-item-image">
                        <img src="${item.img}" alt="${item.name}">
                    </div>
                    <div class="menu-item-info">
                        <div class="menu-item-header">
                            <div>
                                <h3 class="menu-item-title">${item.name}</h3>
                            </div>
                            <div class="menu-item-price">₺${item.price}</div>
                        </div>
                        <p class="menu-item-desc">${item.desc}</p>
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
        
        // Sepete ekle butonlarına event listener ekle
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
    // Tüm kategorilerde item'ı ara
    let itemToAdd = null;
    let categoryFound = '';
    
    for (const category in menuData) {
        const item = menuData[category].find(item => item.id === itemId);
        if (item) {
            itemToAdd = { ...item, category };
            categoryFound = category;
            break;
        }
    }
    
    if (!itemToAdd) return;
    
    // Sepette var mı kontrol et
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        itemToAdd.quantity = 1;
        cart.push(itemToAdd);
    }
    
    // Sepeti güncelle
    updateCart();
    
    // Kullanıcıya bildirim göster
    showNotification(`${itemToAdd.name} sepete eklendi!`);
}

// ===== SEPETİ GÜNCELLE =====
function updateCart() {
    // Yerel depolamaya kaydet
    localStorage.setItem('letrangerCart', JSON.stringify(cart));
    
    // Sepet içeriğini güncelle
    renderCartItems();
    
    // Toplam fiyatı güncelle
    updateCartTotal();
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Sepetiniz boş</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItemHTML = `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">₺${item.price} x ${item.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn decrease">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn increase">+</button>
                    <button class="remove-item"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
    });
    
    // Buton event listener'larını ekle
    cartItemsContainer.querySelectorAll('.increase').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.closest('.cart-item').getAttribute('data-id'));
            changeQuantity(itemId, 1);
        });
    });
    
    cartItemsContainer.querySelectorAll('.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.closest('.cart-item').getAttribute('data-id'));
            changeQuantity(itemId, -1);
        });
    });
    
    cartItemsContainer.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = parseInt(this.closest('.cart-item').getAttribute('data-id'));
            removeFromCart(itemId);
        });
    });
}

function changeQuantity(itemId, change) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        
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
    // Bildirim elementini oluştur
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
    `;
    
    document.body.appendChild(notification);
    
    // 3 saniye sonra kaldır
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
// Menü detayını kapat
closeDetailBtn.addEventListener('click', closeMenuDetail);

function closeMenuDetail() {
    menuDetailContainer.classList.remove('active');
    document.body.style.overflow = 'auto'; // Sayfa kaydırmayı geri aç
}

// Mobil menü toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Navbar linklerine tıklayınca mobil menüyü kapat
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Sepet modalını aç/kapat
cartButton.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Dışarı tıklayınca modalı kapat
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
    if (e.target === menuDetailContainer) {
        closeMenuDetail();
    }
});

// Siparişi tamamla
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
    
    // Sepeti temizle
    cart = [];
    updateCart();
    cartModal.classList.remove('active');
});

// Rezervasyon formu
if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basit form validasyonu
        const formData = new FormData(reservationForm);
        const name = formData.get('name') || 'İsim yok';
        
        showNotification(`Sayın ${name}, rezervasyonunuz alındı!`);
        reservationForm.reset();
        
        // Gerçek uygulamada burada sunucuya veri gönderilir
        // fetch('api/rezervasyon', { method: 'POST', body: formData })
    });
}

// Sayfa yüklendiğinde sepete yükle
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
    
    // Scroll animasyonları için
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
    
    // Animasyonlu elementleri seç
    document.querySelectorAll('.category-card, .menu-item, .feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// CSS animasyonları için style ekle
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
`;
document.head.appendChild(style);
