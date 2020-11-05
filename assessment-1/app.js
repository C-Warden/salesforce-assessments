class Product {
    constructor(imageUrl, itemName, priceTag, desc) {
        this.image = imageUrl;
        this.name = itemName;
        this.price = priceTag;
        this.description = desc;
    }
}
class ShoppingCart {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: GH¢ ${this.totalAmount}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((sumValue, curValue) => sumValue + curValue.price, 0);
        return sum;
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
        //this.items.push(product);
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
          <h2>Total: GH¢ ${0}</h2>
          <button>Order Now!</button>
          <button>Check Out</button>
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const li = document.createElement('li');
        li.className = 'product-item';
        li.innerHTML = `
          <div>
            <img src="${this.product.image}" alt="${this.product.name}">
            <div>
              <h2>${this.product.name}</h2>
              <h3>GH¢ ${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>                
        `;
        const addToCartBtn = li.querySelector('button');
        addToCartBtn.addEventListener('click', this.addToCart.bind(this));
        return li;
    }
}

class ProductList {
    products = [
        new Product(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqEyDvoZplqJjCZY5Pij8dpPU05qfBXs0Wkg&usqp=CAU',
            'Pillow',
            19.99,
            'Soft pillows for a good night sleep'
        ),
        new Product(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6b15JYjI2kX7oeuTRDB44yyiZap5mZ1SK9g&usqp=CAU',
            'Mattress',
            499.99,
            'A mattress that makes you sleep comfortably'
        ),
        new Product(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6B5xbc9cIQ1TL7t58yF7jFaZ3FdHwS-uYNQ&usqp=CAU',
            'Derbyshire Sofa',
            999.99,
            'This is something you would like to have      '
        )
    ];

    constructor() {}

    render() {
        const ul = document.createElement('ul');
        ul.className = 'product-list';
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const li = productItem.render();
            ul.append(li);
        }
        return ul;
    }
}

class Shop {
    render() {
        const selectApp = document.getElementById('app');
        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();
        selectApp.append(cartEl);
        selectApp.append(prodListEl);
    }
}

class App {
    static cart;
    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();