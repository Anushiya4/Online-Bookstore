localStorage = window.localStorage;

function listBookDetails() {

  const bookList = JSON.parse(localStorage.getItem('bookList'));

  const bookListDiv = document.getElementById('book-list');

  bookList.forEach(book => {

              if (book.qty > 0) {

                             const card = document.createElement('div');

                             card.className = 'book-item';

                             card.innerHTML = `

                                 <img src="images/${book.img}" alt="${book.title}">

                     <h2>${book.title}</h2>

                     <p><strong>Price:</strong> Rs.${book.price.toFixed(2)}</p>

                                  <a href="bookDetailPage.html?id=${book.id}">View Details</a>

                `;

                             bookListDiv.appendChild(card);

              }

  })

}

 

listBookDetails();