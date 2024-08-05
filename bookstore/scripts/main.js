localStorage = window.localStorage;

 

function setInitialStorage() {

  if (localStorage.getItem('initialDataAdded') !== 'true'){

               const bookList = [

                             {id: 1, img: 'harryPotter.jpg', title: 'Harry Potter', description: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry', price: 1000, qty: 1},

                             {id: 2, img: 'akbarberbal.jpg', title: 'Akbar Berbal', description: 'The stories of Akbar and Birbal are the most cherished folklores of India that have been passed from one generation to another, enthralling both young and adult readers. This book is a beautifully illustrated compilation of several tales of wit and wisdom, built upon the themes of loyalty and friendship', price: 800, qty: 1},

                             {id: 3, img: 'theHobbit.jpg', title: 'The Hobbit', description: 'The Hobbit, or There and Back Again is a children s fantasy novel by the English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction', price: 600, qty: 1},

                             {id: 4, img: 'treasureIsland.jpg', title: 'Treasure Island', description: 'Treasure Island is both an 1883 adventure novel and a historical novel set in the 1700s by Scottish author Robert Louis Stevenson, telling a story of buccaneers and buried gold. It is considered a coming-of-age story and is noted for its atmosphere, characters, and action', price: 900, qty: 1},

                             {id: 5, img: 'huklaberryFin.jpg', title: 'Adventures of Huckleberry Finn', description: 'Adventures of Huckleberry Finn is a novel by American author Mark Twain, which was first published in the United Kingdom in December 1884 and in the United States in February 1885', price: 400, qty: 1},

               ];

               localStorage.setItem('initialDataAdded', true);

               localStorage.setItem('bookList', JSON.stringify(bookList));

              localStorage.setItem('cartItems', JSON.stringify([]));

  }

}

 

setInitialStorage();