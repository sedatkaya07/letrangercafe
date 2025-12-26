// ===== MENÜ VERİLERİ =====
const menuData = {
    kahveler: [
        { id: 1, name: "Americano", price: 90, desc: "Özel çekirdeklerden double shot espresso ile hazırlanır", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 2, name: "Espresso", price: 70, desc: "Tek shot, yoğun aromalı klasik espresso", img: "https://images.unsplash.com/photo-1510707577719-ae7c9b788690?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 3, name: "Latte", price: 110, desc: "Bol sütlü, yumuşak içimli latte", img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 4, name: "Cappuccino", price: 100, desc: "Köpüklü, İtalyan usulü cappuccino", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 5, name: "Mocha", price: 120, desc: "Çikolata ve espresso karışımı", img: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 6, name: "Türk Kahvesi", price: 60, desc: "Geleneksel usulde pişirilmiş", img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 7, name: "Filtre Kahve", price: 85, desc: "Özel blend filtre kahve", img: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 8, name: "French Press", price: 95, desc: "Tam çekirdek French press", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],
    
    kahvaltilar: [
        { id: 9, name: "Van Kahvaltısı", price: 250, desc: "Özel Van peynirleri, otlu peynir, bal, kaymak", img: "https://images.unsplash.com/photo-1551216223-4b7d2c5e3541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 10, name: "Serpme Kahvaltı", price: 180, desc: "Zengin serpme kahvaltı tabağı", img: "https://images.unsplash.com/photo-1559661175-b0c0a8b5e4de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 11, name: "Menemen", price: 100, desc: "Özel baharatlı, köy yumurtalı", img: "https://images.unsplash.com/photo-1592415479493-75df1c6d7532?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 12, name: "Omlet", price: 90, desc: "Peynirli, mantarlı, sebzeli", img: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 13, name: "Sahanda Yumurta", price: 70, desc: "Sucuklu veya pastırmalı", img: "https://images.unsplash.com/photo-1588347818038-9d6c1dfd8e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 14, name: "Pankek", price: 110, desc: "Akçaağaç şurubu ve meyvelerle", img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],
    
    tatlilar: [
        { id: 15, name: "Cheesecake", price: 120, desc: "Çilek soslu New York usulü", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 16, name: "Tiramisu", price: 110, desc: "İtalyan usulü klasik tiramisu", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 17, name: "Brownie", price: 85, desc: "Bol çikolatalı, cevizli", img: "https://images.unsplash.com/photo-1606313564200-75fae8f0ad3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 18, name: "Profiterol", price: 95, desc: "Bol çikolata soslu", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 19, name: "Baklava", price: 100, desc: "Antep fıstıklı özel baklava", img: "https://images.unsplash.com/photo-1519689680058-324335c24eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 20, name: "Sufle", price: 130, desc: "Sıcak çikolatalı sufle", img: "https://images.unsplash.com/photo-1624353365286-3f8d62dadadf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],
    
    nargileler: [
        { id: 21, name: "Elma Nargile", price: 150, desc: "Klasik elma aromalı", img: "https://images.unsplash.com/photo-1595515119566-d2eaff6c7b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 22, name: "Çilek Nargile", price: 160, desc: "Taze çilek aromalı", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 23, name: "Karpuz Nargile", price: 155, desc: "Yaz mevsimine özel", img: "https://images.unsplash.com/photo-1519689373023-dd07c7987656?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 24, name: "Mint Nargile", price: 145, desc: "Ferahlatıcı nane aromalı", img: "https://images.unsplash.com/photo-1523293836414-f04e712e1f3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 25, name: "Karışık Meyve", price: 170, desc: "4 farklı meyve aroması", img: "https://images.unsplash.com/photo-1531168556467-80c61c7cf4f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],
    
    caylar: [
        { id: 26, name: "Earl Grey", price: 50, desc: "Bergamot aromalı siyah çay", img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 27, name: "Yeşil Çay", price: 45, desc: "Japon usulü yeşil çay", img: "https://images.unsplash.com/photo-1593246149226-2af20f0f8c80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 28, name: "Ihlamur", price: 40, desc: "Doğal ıhlamur çiçeği", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 29, name: "Kuşburnu", price: 42, desc: "C vitamini deposu", img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 30, name: "Adaçayı", price: 44, desc: "Rahatlatıcı adaçayı", img: "https://images.unsplash.com/photo-1597481499753-6e3a6d69d2c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ],
    
    "soguk-icecekler": [
        { id: 31, name: "Limonata", price: 55, desc: "Taze sıkılmış limon", img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 32, name: "Mojito", price: 65, desc: "Alkolsüz taze nane mojito", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 33, name: "Soğuk Kahve", price: 85, desc: "Buzlu soğuk kahve", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 34, name: "Milkshake", price: 90, desc: "Çikolatalı veya çilekli", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: 35, name: "Meyve Suyu", price: 60, desc: "Portakal, elma, havuç", img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
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