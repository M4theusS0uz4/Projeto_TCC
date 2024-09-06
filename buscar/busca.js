let currentPage = 1;
const itemsPerPage = 6; // Defina quantos produtos por página
let totalItems = 0;
let allProducts = []; // Lista completa de produtos

async function loadProducts() {
    try {
        const response = await fetch('/api/products'); // Substitua com o endpoint da sua API
        if (!response.ok) throw new Error('Falha ao carregar produtos');

        allProducts = await response.json();
        totalItems = allProducts.length;
        displayProducts();
    } catch (error) {
        console.error('Erro:', error);
    }
}

function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    // Calcular quais produtos serão exibidos na página atual
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToShow = allProducts.slice(start, end);

    // Gerar HTML para os produtos
    productsToShow.forEach(product => {
        const productCard = `
      <div class="product-card">
        <img src="${product.imagem}" alt="${product.nome}">
        <p class="product-name">${product.nome}</p>
        <button class="product-btn">Ver Mais</button>
      </div>
    `;
        productGrid.innerHTML += productCard;
    });

    // Atualizar o número da página atual
    document.getElementById('current-page').textContent = currentPage;
}

function changePage(direction) {
    const maxPage = Math.ceil(totalItems / itemsPerPage);
    if ((direction === -1 && currentPage > 1) || (direction === 1 && currentPage < maxPage)) {
        currentPage += direction;
        displayProducts();
    }
}

async function handleSearch() {
    const searchBar = document.getElementById('search-bar');
    const query = searchBar.value.trim().toLowerCase();

    try {
        const response = await fetch(`/api/products?search=${encodeURIComponent(query)}`); // Substitua com o endpoint da sua API de busca
        if (!response.ok) throw new Error('Falha ao realizar busca');

        allProducts = await response.json();
        totalItems = allProducts.length;
        currentPage = 1; // Voltar para a primeira página nos resultados filtrados
        displayProducts();
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Carregar os produtos inicialmente
window.onload = loadProducts;