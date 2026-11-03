const allowedCategories = new Set(['Shoes', 'Boots', 'Bat', 'Football', 'Badminton', 'T-shirt', 'Jersey', 'Technosport', 'Trophy']);
const products = [
  { id: 1, name: 'Velocity Running Shoes', category: 'Shoes', price: 3200, condition: 'Like new', brand: 'Velocity', variant: 'UK 8', description: 'Lightweight everyday trainer with a cushioned sole. Good for walking and road running.', includes: 'One pair of shoes', seller: 'Aarav S.', location: 'Bengaluru', badge: 'JUST LISTED', avatar: 'AS', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=850&q=85' },
  { id: 2, name: 'Matchday Football', category: 'Football', price: 950, condition: 'Great', brand: 'PlayMatch', variant: 'Size 5', description: 'Standard size 5 football for training and casual matches.', includes: 'One football', seller: 'Mira K.', location: 'Mumbai', badge: 'PLAYER FAVOURITE', avatar: 'MK', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=850&q=85' },
  { id: 3, name: 'Kashmir Willow Cricket Bat', category: 'Bat', price: 2400, condition: 'Good', brand: 'WillowPro', variant: 'Full size · SH', description: 'Full-size Kashmir willow cricket bat with a balanced pickup, suitable for practice and club matches.', includes: 'Bat only', seller: 'Dev R.', location: 'Pune', badge: 'GREAT VALUE', avatar: 'DR', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=850&q=85' },
  { id: 4, name: 'Pro Football Boots', category: 'Boots', price: 2800, condition: 'Like new', brand: 'FieldPro', variant: 'UK 9', description: 'Studded football boots for firm-ground play with a secure lace-up fit.', includes: 'One pair of boots', seller: 'Neha P.', location: 'Delhi', badge: 'JUST LISTED', avatar: 'NP', image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=850&q=85' },
  { id: 5, name: 'Carbon Badminton Racket', category: 'Badminton', price: 2750, condition: 'Great', brand: 'CourtPro', variant: '4U · G4 grip', description: 'Lightweight graphite racket for casual games and club practice.', includes: 'Racket cover', seller: 'Ishaan M.', location: 'Hyderabad', badge: 'PLAYER FAVOURITE', avatar: 'IM', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=850&q=85' },
  { id: 6, name: 'Blue Cricket Jersey', category: 'Jersey', price: 1250, condition: 'Like new', brand: 'Teamwear', variant: 'Size M', description: 'Blue short-sleeve cricket jersey in breathable sports fabric.', includes: 'One jersey', seller: 'Riya D.', location: 'Chennai', badge: 'GREAT VALUE', avatar: 'RD', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=850&q=85' },
  { id: 7, name: 'Everyday Sports T-shirt', category: 'T-shirt', price: 650, condition: 'Great', brand: 'ActiveDay', variant: 'Size L', description: 'Lightweight short-sleeve T-shirt for workouts and everyday wear.', includes: 'One T-shirt', seller: 'Kabir T.', location: 'Jaipur', badge: 'JUST LISTED', avatar: 'KT', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=850&q=85' },
  { id: 8, name: 'Champions Cup Trophy', category: 'Trophy', price: 1100, condition: 'Good', brand: 'PlayTrade Select', variant: '12-inch trophy', description: 'Gold-tone cup with a stable base for school, club, and local tournament awards.', includes: 'Trophy and base', seller: 'Anaya B.', location: 'Kolkata', badge: 'GREAT VALUE', avatar: 'AB', image: 'https://images.unsplash.com/photo-1569517282132-25d22f4573e6?auto=format&fit=crop&w=850&q=85' },
  { id: 9, name: 'Technosport Active Tee', category: 'Technosport', price: 899, condition: 'Like new', brand: 'Technosport', variant: 'Size XL', description: 'Technosport activewear T-shirt for training and everyday sports use.', includes: 'One T-shirt', seller: 'Rohan G.', location: 'Bengaluru', badge: 'PLAYER FAVOURITE', avatar: 'RG', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=850&q=85' },
  { id: 10, name: 'Court Classic Sports Shoes', category: 'Shoes', price: 1950, condition: 'Like new', brand: 'CourtStep', variant: 'UK 7', description: 'Low-profile sports shoes with a grippy sole for indoor court use.', includes: 'One pair of shoes', seller: 'Tara J.', location: 'Mumbai', badge: 'JUST LISTED', avatar: 'TJ', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=850&q=85' },
  { id: 11, name: 'Club Football', category: 'Football', price: 1250, condition: 'Good', brand: 'PlayMatch', variant: 'Size 5', description: 'Durable training football for outdoor practice and friendly matches.', includes: 'One football', seller: 'Sameer N.', location: 'Delhi', badge: 'GREAT VALUE', avatar: 'SN', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=850&q=85' },
  { id: 12, name: 'Club Badminton Set', category: 'Badminton', price: 1800, condition: 'Great', brand: 'CourtPro', variant: '2-racket set', description: 'A starter set for friendly games at the club, park, or home court.', includes: '2 rackets and 3 shuttlecocks', seller: 'Zoya A.', location: 'Pune', badge: 'PLAYER FAVOURITE', avatar: 'ZA', image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=850&q=85' }
];

const categoryFallbacks = {
  Shoes: products[0].image,
  Boots: products[3].image,
  Bat: products[2].image,
  Football: products[1].image,
  Badminton: products[4].image,
  'T-shirt': products[6].image,
  Jersey: products[5].image,
  Technosport: products[8].image,
  Trophy: products[7].image
};

const readSaved = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const customListings = readSaved('playtrade-listings', []).filter((item) => allowedCategories.has(item.category));
let cart = readSaved('playtrade-cart', []).filter((line) => allowedCategories.has(line?.product?.category));
let activeCategory = 'All';
let query = '';
let sortMode = 'featured';
let showAll = false;
let toastTimer;
const analytics = readSaved('playtrade-analytics', { visits: 0, productViews: {}, bagAdds: 0, activity: [] });
function recordActivity(type, label) {
  analytics.activity.unshift({ type, label, at: new Date().toISOString() });
  analytics.activity = analytics.activity.slice(0, 40);
  try { localStorage.setItem('playtrade-analytics', JSON.stringify(analytics)); } catch { /* Analytics remain available for this visit. */ }
}
if (!sessionStorage.getItem('playtrade-visit')) {
  analytics.visits += 1;
  sessionStorage.setItem('playtrade-visit', '1');
  recordActivity('Visit', 'Store opened');
}

const productGrid = document.querySelector('#product-grid');
const filterRow = document.querySelector('#filter-row');
const searchInput = document.querySelector('#search-input');
const sortSelect = document.querySelector('#sort-select');
const emptyState = document.querySelector('#empty-state');
const overlay = document.querySelector('#overlay');
const cartDrawer = document.querySelector('#cart-drawer');
const sellDialog = document.querySelector('#sell-dialog');
const productDialog = document.querySelector('#product-dialog');
const loginDialog = document.querySelector('#login-dialog');
const productDetailContent = document.querySelector('#product-detail-content');
const toast = document.querySelector('#toast');

function allProducts() {
  return [...customListings].reverse().concat(products);
}

function money(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

function matchingProducts() {
  let results = allProducts().filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const searchable = `${item.name} ${item.category} ${item.condition} ${item.location}`.toLowerCase();
    return matchesCategory && searchable.includes(query.trim().toLowerCase());
  });
  if (sortMode === 'low') results.sort((a, b) => a.price - b.price);
  if (sortMode === 'high') results.sort((a, b) => b.price - a.price);
  return results;
}

function productCard(item) {
  const imageUrl = item.image || categoryFallbacks[item.category] || products[0].image;
  const card = document.createElement('article');
  card.className = 'product-card';
  card.dataset.productId = item.id;
  card.innerHTML = `
    <div class="product-image-wrap">
      <a class="product-media-link" href="#product-details" data-details="${escapeAttribute(item.id)}" aria-label="View details for ${escapeAttribute(item.name)}">
        <img class="product-image" src="${escapeAttribute(imageUrl)}" alt="${escapeAttribute(item.name)}" loading="lazy">
        <span class="product-badge">${escapeHtml(item.badge || 'COMMUNITY LISTING')}</span>
        <span class="condition-mark" title="${escapeAttribute(item.condition)}">✓</span>
      </a>
      <button class="quick-add" data-add="${escapeAttribute(item.id)}" aria-label="Add ${escapeAttribute(item.name)} to bag">Add to bag <span>＋</span></button>
    </div>
    <div class="product-info">
      <div class="product-topline"><h3 class="product-name"><a href="#product-details" data-details="${escapeAttribute(item.id)}">${escapeHtml(item.name)}</a></h3><span class="product-price">${money(item.price)}</span></div>
      <div class="product-meta"><span class="product-condition"><span class="condition-dot"></span>${escapeHtml(item.condition)} · ${escapeHtml(item.category)}</span><span class="product-location">${escapeHtml(item.location || 'India')}</span></div>
      <div class="product-seller"><span class="seller-avatar">${escapeHtml(item.avatar || 'PT')}</span> Listed by ${escapeHtml(item.seller || 'PlayTrade player')}</div>
      <a class="details-text-link" href="#product-details" data-details="${escapeAttribute(item.id)}">See all details <span>↗</span></a>
    </div>`;
  const image = card.querySelector('img');
  image.addEventListener('error', () => {
    image.removeAttribute('src');
    image.alt = `${item.name} photo unavailable`;
    image.parentElement.style.background = 'linear-gradient(135deg,#e5ebde,#d6e0cb)';
  }, { once: true });
  return card;
}

function openProductDetails(id) {
  const item = allProducts().find((product) => String(product.id) === String(id));
  if (!item) return;
  analytics.productViews[item.id] = (analytics.productViews[item.id] || 0) + 1;
  recordActivity('Product view', item.name);
  const imageUrl = item.image || categoryFallbacks[item.category] || products[0].image;
  const description = item.description || `${item.name} is listed in ${item.category}. Contact the seller for any extra product details.`;
  const specs = [
    ['Product type', item.category],
    ['Condition', item.condition],
    ['Brand', item.brand || 'Not specified'],
    ['Size / model', item.variant || 'Not specified'],
    ['Includes', item.includes || 'As shown in the listing'],
    ['Location', item.location || 'India']
  ];
  productDetailContent.innerHTML = `
    <div class="product-detail-layout">
      <div class="product-detail-photo"><img src="${escapeAttribute(imageUrl)}" alt="${escapeAttribute(item.name)}"><span class="product-badge">${escapeHtml(item.badge || 'COMMUNITY LISTING')}</span></div>
      <div class="product-detail-copy">
        <div class="product-detail-top"><span class="eyebrow">${escapeHtml(item.category)} · PRODUCT DETAILS</span><button class="icon-button" type="button" data-close aria-label="Close product details">×</button></div>
        <h2 id="product-detail-title">${escapeHtml(item.name)}</h2>
        <div class="detail-price">${money(item.price)}</div>
        <span class="detail-condition"><span class="condition-dot"></span>${escapeHtml(item.condition)} condition</span>
        <p class="detail-description">${escapeHtml(description)}</p>
        <div class="detail-spec-grid">${specs.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join('')}</div>
        <div class="detail-seller"><span class="seller-avatar">${escapeHtml(item.avatar || 'PT')}</span><span><strong>${escapeHtml(item.seller || 'PlayTrade player')}</strong><small>Seller · ${escapeHtml(item.location || 'India')}</small></span></div>
        <div class="purchase-options"><label>Size / model<select class="detail-size"><option>${escapeHtml(item.variant || 'Standard')}</option>${(item.sizes || []).map(size => `<option>${escapeHtml(size)}</option>`).join('')}</select></label><label>Quantity<input class="detail-quantity" type="number" min="1" max="99" value="1"></label></div>
        <button class="button button-dark detail-add-button" data-add="${escapeAttribute(item.id)}">Add to bag <span>＋</span></button>
      </div>
    </div>`;
  const image = productDetailContent.querySelector('.product-detail-photo img');
  image.addEventListener('error', () => {
    image.removeAttribute('src');
    image.parentElement.style.background = 'linear-gradient(135deg,#e5ebde,#d6e0cb)';
  }, { once: true });
  productDialog.showModal();
}

function renderProducts() {
  const results = matchingProducts();
  const visible = showAll ? results : results.slice(0, 6);
  productGrid.replaceChildren(...visible.map(productCard));
  emptyState.hidden = results.length !== 0;
  productGrid.hidden = results.length === 0;
  document.querySelector('#all-count').textContent = allProducts().length;
  document.querySelector('#showing-count').textContent = visible.length;
  document.querySelector('#total-count').textContent = results.length;
  const loadMore = document.querySelector('#load-more');
  loadMore.parentElement.hidden = results.length <= 6;
  loadMore.innerHTML = showAll ? 'Show fewer <span>↑</span>' : 'See all gear <span>↓</span>';
}

function setCategory(category) {
  activeCategory = category;
  showAll = false;
  document.querySelectorAll('.filter-chip').forEach((chip) => chip.classList.toggle('selected', chip.dataset.filter === category));
  renderProducts();
}

function persistCart() {
  try { localStorage.setItem('playtrade-cart', JSON.stringify(cart)); } catch { /* The bag still works for this visit. */ }
  renderCart();
}

function addToCart(id, quantity = 1) {
  const item = allProducts().find((product) => String(product.id) === String(id));
  if (!item) return;
  analytics.bagAdds += 1;
  recordActivity('Bag add', `${item.name} · Qty ${Math.max(1, quantity)}`);
  const existing = cart.find((line) => String(line.product.id) === String(item.id));
  if (existing) existing.quantity += Math.max(1, quantity);
  else cart.push({ product: item, quantity: Math.max(1, quantity), size: item.variant || 'Standard' });
  persistCart();
  showToast(`${item.name} added to your bag`);
}

function renderCart() {
  const quantity = cart.reduce((sum, line) => sum + line.quantity, 0);
  const count = document.querySelector('#cart-count');
  count.textContent = quantity;
  count.setAttribute('aria-label', `${quantity} items`);
  document.querySelector('#drawer-count').textContent = `(${quantity})`;
  document.querySelector('#cart-empty').hidden = cart.length > 0;
  document.querySelector('#cart-footer').hidden = cart.length === 0;
  document.querySelector('#cart-subtotal').textContent = money(cart.reduce((sum, line) => sum + line.product.price * line.quantity, 0));
  const items = document.querySelector('#cart-items');
  items.replaceChildren(...cart.map((line) => {
    const row = document.createElement('div');
    row.className = 'cart-line';
    const image = line.product.image || categoryFallbacks[line.product.category] || products[0].image;
    row.innerHTML = `<img src="${escapeAttribute(image)}" alt="" onerror="this.removeAttribute('src')"><div><h3>${escapeHtml(line.product.name)}</h3><p>${escapeHtml(line.product.condition)} · Qty ${line.quantity}</p><button class="remove-item" data-remove="${escapeAttribute(line.product.id)}">Remove</button></div><strong>${money(line.product.price * line.quantity)}</strong>`;
    return row;
  }));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function openCart() {
  overlay.hidden = false;
  requestAnimationFrame(() => cartDrawer.classList.add('open'));
  cartDrawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden', 'true');
  overlay.hidden = true;
  document.body.style.overflow = '';
}

function openSellForm() {
  if (typeof sellDialog.showModal === 'function') sellDialog.showModal();
  else showToast('Please open this page in a modern browser to list gear.');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

filterRow.addEventListener('click', (event) => {
  const chip = event.target.closest('[data-filter]');
  if (chip) setCategory(chip.dataset.filter);
});

document.querySelector('.category-grid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  setCategory(button.dataset.category);
  document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
});

productGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-add]');
  if (button) {
    addToCart(button.dataset.add);
    return;
  }
  const detailsLink = event.target.closest('[data-details]');
  if (detailsLink) {
    event.preventDefault();
    openProductDetails(detailsLink.dataset.details);
  }
});

productDetailContent.addEventListener('click', (event) => {
  if (event.target.closest('[data-close]')) {
    productDialog.close();
    return;
  }
  const button = event.target.closest('[data-add]');
  if (button) {
    addToCart(button.dataset.add, Number(productDetailContent.querySelector('.detail-quantity')?.value || 1));
    productDialog.close();
  }
});

document.querySelector('#cart-items').addEventListener('click', (event) => {
  const button = event.target.closest('[data-remove]');
  if (!button) return;
  cart = cart.filter((line) => String(line.product.id) !== button.dataset.remove);
  persistCart();
});

searchInput.addEventListener('input', () => { query = searchInput.value; showAll = false; renderProducts(); });
sortSelect.addEventListener('change', () => { sortMode = sortSelect.value; renderProducts(); });
document.querySelector('#load-more').addEventListener('click', () => { showAll = !showAll; renderProducts(); });
document.querySelector('#clear-filters').addEventListener('click', () => {
  searchInput.value = '';
  sortSelect.value = 'featured';
  query = '';
  sortMode = 'featured';
  setCategory('All');
});

document.querySelector('#open-cart').addEventListener('click', openCart);
overlay.addEventListener('click', closeCart);
document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => {
  if (sellDialog.open) sellDialog.close();
  if (productDialog.open) productDialog.close();
  if (loginDialog.open) loginDialog.close();
  if (cartDrawer.classList.contains('open')) closeCart();
}));
document.querySelectorAll('#open-sell,#hero-sell,#banner-sell').forEach((button) => button.addEventListener('click', openSellForm));
document.querySelector('#open-login').addEventListener('click', () => loginDialog.showModal());
document.querySelector('#login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  loginDialog.close();
  sessionStorage.setItem('playtrade-demo-owner', '1');
  document.querySelector('#open-login').hidden = true;
  document.querySelector('#open-dashboard').hidden = false;
  showToast('Demo owner view enabled on this browser.');
});

function renderOwnerDashboard() {
  const views = Object.values(analytics.productViews).reduce((sum, value) => sum + value, 0);
  const revenue = customListings.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const stats = [
    ['Store visits', analytics.visits, 'This browser only'],
    ['Product views', views, 'Detail page opens'],
    ['Bag adds', analytics.bagAdds, 'Add-to-bag clicks'],
    ['Your listings', customListings.length, `Listed value ${money(revenue)}`]
  ];
  document.querySelector('#owner-stats').innerHTML = stats.map(([label, value, note]) => `<article class="owner-stat"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(note)}</small></article>`).join('');
  const popular = allProducts().map(item => ({ item, views: analytics.productViews[item.id] || 0 })).sort((a, b) => b.views - a.views).slice(0, 5);
  document.querySelector('#owner-products').innerHTML = popular.map(({ item, views: count }) => `<div class="owner-row"><span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.category)} · ${money(item.price)}</small></span><b>${count} views</b></div>`).join('');
  document.querySelector('#owner-activity').innerHTML = analytics.activity.length ? analytics.activity.slice(0, 10).map(entry => `<div class="owner-row"><span><strong>${escapeHtml(entry.label)}</strong><small>${escapeHtml(entry.type)}</small></span><time>${new Date(entry.at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</time></div>`).join('') : '<p class="owner-empty">No activity yet.</p>';
}
document.querySelector('#open-dashboard').addEventListener('click', () => {
  if (sessionStorage.getItem('playtrade-demo-owner') !== '1') return;
  renderOwnerDashboard();
  document.querySelector('#owner-dialog').showModal();
});
document.querySelector('#owner-logout').addEventListener('click', () => {
  sessionStorage.removeItem('playtrade-demo-owner');
  document.querySelector('#owner-dialog').close();
  document.querySelector('#open-login').hidden = false;
  document.querySelector('#open-dashboard').hidden = true;
});

document.querySelector('#sell-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get('name')).trim();
  const category = String(formData.get('category'));
  const price = Number(formData.get('price'));
  const brand = String(formData.get('brand') || '').trim();
  const variant = String(formData.get('variant') || '').trim();
  const condition = String(formData.get('condition'));
  const description = String(formData.get('description') || '').trim();
  const image = String(formData.get('image') || '').trim();
  const listing = {
    id: `custom-${Date.now()}`,
    name,
    category,
    price,
    condition,
    brand,
    variant,
    description,
    seller: 'You',
    location: 'India',
    badge: 'YOUR LISTING',
    avatar: 'YOU',
    image: image || categoryFallbacks[category]
  };
  customListings.push(listing);
  try { localStorage.setItem('playtrade-listings', JSON.stringify(customListings)); } catch { /* Listing remains visible for this visit. */ }
  event.currentTarget.reset();
  sellDialog.close();
  searchInput.value = '';
  query = '';
  setCategory(category);
  showAll = true;
  renderProducts();
  document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
  showToast('Your gear is listed. Let the next game begin!');
});

document.querySelector('#checkout').addEventListener('click', () => showToast('Checkout is a preview. Payment is not connected yet.'));

renderProducts();
renderCart();
