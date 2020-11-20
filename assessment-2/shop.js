class Product {
    constructor(image, name, price, desc, id) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.description = desc;
        this.id = id;
    }
}

class ShoppingCart {
    items1 = [];

    set cartItems1(value) {
        this.items1 = value;
        this.totalOutput1.innerHTML = `<h5 style="color: white;">Total: GH¢ ${this.totalAmount1.toFixed(2)}</h5>`;
        let totalPrice = document.querySelector('.total-price');
        totalPrice.append(this.totalOutput1);
    }

    get totalAmount1() {
        const sum = this.items1.reduce((sumValue, curValue) => sumValue + curValue.price, 0);
        return sum;
    }

    addProduct1(product) {
        const updatedItems1 = [...this.items1];
        updatedItems1.push(product);
        this.cartItems1 = updatedItems1;
    }

    items2 = [];

    set cartItems2(value) {
        this.items2 = value;
        this.totalOutput2.innerHTML = `<h5>Thank you for picking GH¢ ${this.totalAmount2} worth of products</h5>`;
    }

    get totalAmount2() {
        const sum = this.items2.reduce((sumValue, curValue) => sumValue + curValue.price, 0);
        return sum;
    }

    addProduct2(product) {
        const updatedItems2 = [...this.items2];
        updatedItems2.push(product);
        this.cartItems2 = updatedItems2;
    }

    items3 = [];

    set cartItems3(value) {
        this.items3 = value;
        this.totalOutput3.innerHTML = `<h5>Thank you for picking GH¢ ${this.totalAmount3} worth of products</h5>`;
    }

    get totalAmount3() {
        const sum = this.items3.reduce((sumValue, curValue) => sumValue + curValue.price, 0);
        return sum;
    }

    addProduct3(product) {
        const updatedItems3 = [...this.items3];
        updatedItems3.push(product);
        this.cartItems3 = updatedItems3;
    }

    renderClothItems() {
        const clothCartEl = document.createElement('div');
        clothCartEl.innerHTML = `
            <h5 class="shop-now">SHOP NOW!!! GH¢${0}</h5>           
            <h4 style="text-align: center">YOUR FAVORITE CLOTHING STORE PRODUCTS</h4>
        `;
        clothCartEl.className = 'cart';
        this.totalOutput1 = clothCartEl.querySelector('h5');
        return clothCartEl;
    }

    renderBeddingItems() {
        const bedCartEl = document.createElement('section');
        bedCartEl.innerHTML = `
            <h4>PRODUCTS YOU WOULD WANT TO HAVE FROM THE BEDDINGS STORE</h4>           
        `;
        bedCartEl.className = 'cart';
        this.totalOutput2 = bedCartEl.querySelector('h5');
        return bedCartEl;
    }

    renderShoeItems() {
        const shoeCartEl = document.createElement('section');
        shoeCartEl.innerHTML = `
            <h4>MUST-HAVE PRODUCTS FROM THE SHOES STORE</h4>           
        `;
        shoeCartEl.className = 'cart';
        this.totalOutput3 = shoeCartEl.querySelector('h5');
        return shoeCartEl;
    }


}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    // removeFromCart() {
    //     clothApp.removeProductFromCart1(this.product);


    addToCart() {
        ClothApp.addProductToCart1(this.product);
        // const clothPrice = parseInt(event.target.previousElementSibling.textContent.split(' ')[1]);
        // console.log(clothPrice);
        // BeddingApp.addProductToCart2(this.product);
        // ShoeApp.addProductToCart3(this.product);
    }

    renderClothing() {
        const li = document.createElement('li');
        li.className = 'product-item';
        li.innerHTML = `
            <div>
                <img src="${this.product.image}" alt="${this.product.name}">
                    <div>
                        <h3 class="product-name">${this.product.name}</h3>
                        <h6 class="product-price">GH¢ ${this.product.price}</h6>
                        <p>${this.product.description}</p>
                        <button class="add-cart">Add To Cart</button>
                        <button class="remove-cart">Remove From Cart</button>
                        <button id="clothModalBtn">View Detail & Check Out</button>
                        <div id="clothModal" class="modal">
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <p>Some text in the Modal..</p>
                            </div>
                        </div> 
                    </div>
            </div>
        `;
        const cartBtn = li.querySelector('.add-cart');
        cartBtn.addEventListener('click', this.addToCart.bind(this));

        // remCartBtn.addEventListener('click', z
        // let sumValue = totalAmount1();
        // const removeFromCartBtn = li.querySelector('.remove-cart');
        // removeFromCartBtn.addEventListener('click', this.addToCart.bind(this)-sumValue);
        return li;
    }


    renderBedding() {
        const li = document.createElement('li');
        li.className = 'product-item';
        li.innerHTML = `
            <div>
                <img src="${this.product.image}" alt="${this.product.name}">
                    <div>
                        <h3 class="product-name">${this.product.name}</h3>
                        <h6 class="product-price">GH¢ ${this.product.price}</h6>
                        <p>${this.product.description}</p>
                        <button class="add-cart">Add To Cart</button>
                        <button class="remove-cart">Remove From Cart</button>
                        <button id="beddingModalBtn">View Detail & Check Out</button>
                        <div id="beddingModal" class="modal">
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <p>Some text in the Modal..</p>
                            </div>
                        </div>                     
                    </div>
            </div>
        `;
        const cartBtn = li.querySelector('.add-cart');
        cartBtn.addEventListener('click', this.addToCart.bind(this));
        return li;
    }

    renderShoes() {
        const li = document.createElement('li');
        li.className = 'product-item';
        li.innerHTML = `
            <div>
                <img src="${this.product.image}" alt="${this.product.name}">
                    <div>
                        <h3 class="product-name">${this.product.name}</h3>
                        <h6 class="product-price">GH¢ ${this.product.price}</h6>
                        <p>${this.product.description}</p>
                        <button class="add-cart">Add To Cart</button>
                        <button class="remove-cart">Remove From Cart</button>
                        <button id="shoesModalBtn">View Detail & Check Out</button>
                        <div id="shoesModal" class="modal">
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <p>Some text in the Modal..</p>
                            </div>
                        </div> 
                    </div>
            </div>
        `;
        const cartBtn = li.querySelector('.add-cart');
        cartBtn.addEventListener('click', this.addToCart.bind(this));
        return li;
    }


}

class ShoppingList {
    clothing = [
        new Product(
            'https://cdn.shopclues.com/images1/thumbnails/94967/640/1/142569776-94967035-1543058436.jpg',
            'Women\'s dress',
            252.99,
            'Fashionable Women\'s Fabrange Dress',
            'c1'
        ),
        new Product(
            'https://i.pinimg.com/originals/c7/c2/90/c7c290ab242abab589819bcbdbcdb9de.jpg',
            'African Dress',
            210.99,
            'Latest African Fashion Dress',
            'c2'
        ),
        new Product(
            'https://ae01.alicdn.com/kf/HTB1NzQrcpcJL1JjSZFOq6AWlXXai/5XL-Plaid-Shirts-Men-Checkered-Shirt-Brand-2020-New-Fashion-Button-Down-Long-Sleeve-Casual-Shirts.jpg',
            'Men Checkered Shirt',
            49.99,
            'New Fashion Long Sleeve Casual Shirt',
            'c3'
        ),
        new Product(
            'https://i.etsystatic.com/18662733/r/il/dc64eb/2181368274/il_570xN.2181368274_ebbp.jpg',
            'African couple matching outfit',
            745.99,
            'Lovely Outfit For the King and Queen',
            'c4'
        ),
        new Product(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiUi_jDIBFIxdz4rF0y8YazNeXzb9q33-AkQ&usqp=CAU',
            'Baby Girl\'s Cotton Bodysuits',
            99.99,
            'Newborn clothes for babies',
            'c5'
        )
    ];
    bedding = [
        new Product(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqEyDvoZplqJjCZY5Pij8dpPU05qfBXs0Wkg&usqp=CAU',
            'Pillow',
            19.99,
            'Soft pillows for a good night sleep',
            'b1'
        ),
        new Product(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6b15JYjI2kX7oeuTRDB44yyiZap5mZ1SK9g&usqp=CAU',
            'Mattress',
            499.99,
            'A mattress you will find comfortable',
            'b2'
        ),
        new Product(
            'https://lh3.googleusercontent.com/vsPoNZaaHW-NKG5GbQrHhBJHlw1CtLoW9JhvnTtKvEWd11h9V2wjVfQ7AwBr819TkNshHZ8=s85',
            'Premium Velvet Bedsheet',
            129.99,
            'A King size bedsheet you must have',
            'b3'
        ),
        new Product(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQADiYzJki4SVYMxX-cAiydlbXOIybQiTCmw&usqp=CAU',
            'Double Bed Mattress',
            199.99,
            'High density mattress by Ashfoam',
            'b4'
        ),
        new Product('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4g54xW_gqmhUZ3Wgbs6kBKVIbmDpFrKqLjg&usqp=CAU',
            'Bed frame',
            159.99,
            'Black SVELVIK Bed frame',
            'b5'
        )
    ];
    shoes = [
        new Product(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRX1tpnvlylP00pZTdNLOtawmbtpAnfrXTOg&usqp=CAU',
            'Independent - shoe',
            399.99,
            'Best women\'s trail running shoes',
            's1'
        ),
        new Product(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcYwBd2bsvtTlKHgIF0CAVe3d1yORHn4muA&usqp=CAU',
            'low cut shoes',
            289.99,
            'classic VANS Sneakers Canvas shoe',
            's2'
        ),
        new Product(
            'https://ahwenepa.com/wp-content/uploads/2019/06/shoes.jpg',
            'Men\'s leather shoes',
            415.60,
            'African leather shoes with class and style',
            's3'
        ),
        new Product(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBBXjPmsuT8B-2lx4OgObaFvA5v45bGdr4A&usqp=CAU',
            'Formal Men\'s shoes styles',
            119.68,
            'Nice shoe styles by Windsor US',
            's4'
        ),
        new Product(
            'https://girottishoes.com/media/wysiwyg/750x427-category-top-banner-women-shoes-autumn-2019-m.jpg',
            'Boho Lady Boots 7749',
            545.99,
            'Unique handmade women\'s shoes',
            's5'
        )
    ];

    constructor() {}

    renderClothingProducts() {
        const clothingStore = document.createElement('ul');
        clothingStore.className = 'product-items';
        // const beddingStore = document.createElement('ul');
        // const shoeStore = document.createElement('ul');
        for (const prod of this.clothing) {
            const productItem = new ProductItem(prod);
            const li = productItem.renderClothing();
            clothingStore.append(li);
        }
        return clothingStore;
    }

    renderBeddingProducts() {
        // const clothingStore = document.createElement('ul');
        const beddingStore = document.createElement('ul');
        beddingStore.className = 'product-items';
        // const shoeStore = document.createElement('ul');
        for (const prod of this.bedding) {
            const productItem = new ProductItem(prod);
            const li = productItem.renderBedding();
            beddingStore.append(li);
        }
        return beddingStore;
    }

    renderShoeProducts() {
        // const clothingStore = document.createElement('ul');
        // const beddingStore = document.createElement('ul');
        const shoeStore = document.createElement('ul');
        shoeStore.className = 'product-items';
        for (const prod of this.shoes) {
            const productItem = new ProductItem(prod);
            const li = productItem.renderShoes();
            shoeStore.append(li);
        }
        return shoeStore;
    }

}

class Shop {
    renderClothStore() {
        const clothApp = document.getElementById('clothing-app');
        this.clothCart = new ShoppingCart();
        const cartEl = this.clothCart.renderClothItems();
        const shoppingClothList = new ShoppingList();
        const clothEl = shoppingClothList.renderClothingProducts();
        clothApp.append(cartEl);
        clothApp.append(clothEl);
    }

    renderBeddingStore() {
        const beddingApp = document.getElementById('bedding-app');
        this.beddingCart = new ShoppingCart();
        const cartEl = this.beddingCart.renderBeddingItems();
        const shoppingBeddingList = new ShoppingList();
        const beddingEl = shoppingBeddingList.renderBeddingProducts();
        beddingApp.append(cartEl);
        beddingApp.append(beddingEl);
    }

    renderShoeStore() {
        const shoeApp = document.getElementById('shoes-app');
        this.shoeCart = new ShoppingCart();
        const cartEl = this.shoeCart.renderShoeItems();
        const shoppingShoeList = new ShoppingList();
        const shoeEl = shoppingShoeList.renderShoeProducts();
        shoeApp.append(cartEl);
        shoeApp.append(shoeEl);
    }
}

class ClothApp {
    static cart;
    static init() {
        const shop = new Shop();
        shop.renderClothStore();
        this.cart = shop.clothCart;
    }

    static addProductToCart1(product) {
        this.cart.addProduct1(product);
    }

}

class BeddingApp {
    static cart;
    static init() {
        const shop = new Shop();
        shop.renderBeddingStore();
        this.cart = shop.beddingCart;
    }

    static addProductToCart2(product) {
        this.cart.addProduct2(product);
    }
}

class ShoeApp {
    static cart;
    static init() {
        const shop = new Shop();
        shop.renderShoeStore();
        this.cart = shop.shoeCart;
    }

    static addProductToCart3(product) {
        this.cart.addProduct3(product);
    }
}

ClothApp.init();
BeddingApp.init();
ShoeApp.init();

// Get the modal
let clothModal = document.getElementById("clothModal");

// Get the button that opens the modal
let clothModalBtn = document.getElementById("clothModalBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

clothModalBtn.addEventListener("click", openModal);
span.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside)

// When the user clicks on the button, open the modal
function openModal() {
    clothModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    clothModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function clickOutside(event) {
    if (event.target == clothModal) {
        clothModal.style.display = "none";
    }
}