localStorage = window.localStorage;

function displayBookDetail() {

  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");

  const bookList = JSON.parse(localStorage.getItem('bookList'));

  bookList.forEach(book => {

              if (book.id == id) {

                             const bookImg = document.getElementById('book-img');

                             bookImg.innerHTML = `

                    <img class="book-detail-img" src="images/${book.img}" alt="${book.title}">

                `;

                             const bookDetail = document.getElementById('book-detail');

                             bookDetail.innerHTML = `

                    <h2>${book.title}</h2>

                    <p>${book.description}</p>

                    <p><strong>Price:</strong> Rs.${book.price.toFixed(2)}</p>

                                 <button onclick="addToCart(${book.id})">Add To Cart</button>

                `;

              }

  });

}

 

displayBookDetail();

 

function addToCart(id) {

              const cartItems = JSON.parse(localStorage.getItem('cartItems'));

              if (cartItems.findIndex(i => i.id === id) === -1) {

                             const bookList = JSON.parse(localStorage.getItem('bookList'));

                             const bookToAdd = bookList.find(i => i.id === id);

                             if (bookToAdd) {

                                           cartItems.push(bookToAdd);

                                           bookList.forEach(book => {

                                                          if (book.id == id) {

                                                                        book.qty -= 1;

                                                          }

                                           });

                                           localStorage.setItem('cartItems', JSON.stringify(cartItems));

                                           localStorage.setItem('bookList', JSON.stringify(bookList));

                                           alert("Book added in cart.");

                             } else {

                                           alert("Unable to add this, please select other book.");

                             }            

              } else {

                             alert("Book already added in cart.");

              }

}