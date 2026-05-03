// ===== MENÜ VERİLERİ =====
const menuData = {

    yemekler: [
        { id: 1, name: "Kavurma", price: 300, img: "https://images.unsplash.com/photo-1604908176997-431b4b2d2c24?w=800" },
        { id: 2, name: "Köfte Ekmek", price: 300, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800" },
        { id: 3, name: "Burger", price: 300, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800" },
        { id: 4, name: "Kebab Dürüm", price: 200, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800" },
        { id: 5, name: "Sucuklu Kaşarlı Tost", price: 200, img: "https://images.unsplash.com/photo-1604908554027-35c03c4a8c7f?w=800" },
        { id: 6, name: "Makarna Çeşitleri", price: 160, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800" },
        { id: 7, name: "Tavuk Dürüm", price: 150, img: "https://images.unsplash.com/photo-1605478371313-5b8f8e5b6d2d?w=800" },
        { id: 8, name: "Çiğköfte", price: 150, img: "https://images.unsplash.com/photo-1604908813190-8a8b8b8b8b8b?w=800" },
        { id: 9, name: "Gözleme", price: 150, img: "https://images.unsplash.com/photo-1604908176997-431b4b2d2c24?w=800" }
    ],

    tatlilar: [
        { id: 10, name: "Marlenka", price: 300, img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800" },
        { id: 11, name: "Fıstık Rüyası", price: 250, img: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800" },
        { id: 12, name: "Profiterol Çikolatalı", price: 250, img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800" },
        { id: 13, name: "Sufle Çikolatalı", price: 250, img: "https://images.unsplash.com/photo-1624353365286-3f8d62dadadf?w=800" },
        { id: 14, name: "Mozaik Pasta", price: 250, img: "https://images.unsplash.com/photo-1606313564200-75fae8f0ad3b?w=800" },
        { id: 15, name: "Cheesecake Frambuaz", price: 250, img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800" },
        { id: 16, name: "Nutellalı Pasta", price: 250, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800" },
        { id: 17, name: "Tiramisu", price: 250, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800" },
        { id: 18, name: "Red Velvet Cake", price: 250, img: "https://images.unsplash.com/photo-1605475122117-4d4b6f1d5d88?w=800" },
        { id: 19, name: "Pasta Latte Mono", price: 250, img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800" },
        { id: 20, name: "Rella Cocostar", price: 250, img: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=800" },
        { id: 21, name: "Ağlayan Kek", price: 200, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800" },
        { id: 22, name: "Sütlaç", price: 200, img: "https://images.unsplash.com/photo-1604908176997-431b4b2d2c24?w=800" },
        { id: 23, name: "Brownie", price: 150, img: "https://images.unsplash.com/photo-1606313564200-75fae8f0ad3b?w=800" }
    ],

    sicak: [
        { id: 30, name: "Cappuccino", price: 160, img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800" },
        { id: 31, name: "Mocha", price: 155, img: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=800" },
        { id: 32, name: "Cafe Latte", price: 150, img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800" },
        { id: 33, name: "Flat White", price: 150, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800" },
        { id: 34, name: "Americano", price: 130, img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800" },
        { id: 35, name: "Türk Kahvesi", price: 120, img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=800" },
        { id: 36, name: "Çay", price: 40, img: "https://images.unsplash.com/photo-1523920290228-4f321a939b4c?w=800" }
    ],

    soguk: [
        { id: 40, name: "Caramel Frappuccino", price: 150, img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800" },
        { id: 41, name: "Strawberry Frappuccino", price: 150, img: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800" },
        { id: 42, name: "Vanilla Frappuccino", price: 150, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800" },
        { id: 43, name: "Blueberry Boba", price: 130, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800" },
        { id: 44, name: "Strawberry Boba", price: 130, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800" }
    ],

    milkshake: [
        { id: 50, name: "Çikolatalı Milkshake", price: 200, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800" },
        { id: 51, name: "Vanilyalı Milkshake", price: 200, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800" },
        { id: 52, name: "Çilekli Milkshake", price: 200, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800" },
        { id: 53, name: "Muzlu Milkshake", price: 200, img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800" }
    ],

    nargile: [
        { id: 60, name: "Nargile Standart", price: 350, img: "https://images.unsplash.com/photo-1595515119566-d2eaff6c7b31?w=800" },
        { id: 61, name: "Nargile Lüle", price: 150, img: "https://images.unsplash.com/photo-1595515119566-d2eaff6c7b31?w=800" },
        { id: 62, name: "Nargile Aroma", price: 145, img: "https://images.unsplash.com/photo-1595515119566-d2eaff6c7b31?w=800" }
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
    'yemekler': '🍔 Yemekler',
    'tatlilar': '🍰 Tatlılar',
    'sicak': '☕ Sıcak İçecekler',
    'soguk': '🥤 Soğuk İçecekler',
    'milkshake': '🥤 Milkshake',
    'nargile': '💨 Nargile'
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
