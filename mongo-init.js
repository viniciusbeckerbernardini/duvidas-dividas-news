//catalogs
db.catalogs.drop();
db.catalogs.insertMany([
  {
     isbn: "978-0262033848",
     title: "Introduction to Algorithms",
     authors: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
     description: "A comprehensive guide to algorithms, combining rigor and accessibility.",
     categories: ["Algorithms", "Computer Science"],
     pageNumbers: "1312",
     publishDate: "2009-07-31",
     publisher: "The MIT Press",
     price: 150,
     bookImage: "https://images-na.ssl-images-amazon.com/images/I/91I3x-UhmSL.jpg"
   },
   {
     isbn: "978-0262510874",
     title: "Structure and Interpretation of Computer Programs",
     authors: "Harold Abelson, Gerald Jay Sussman, Julie Sussman",
     description: "Explores computational models with emphasis on programming approaches.",
     categories: ["Programming", "Computer Science"],
     pageNumbers: "657",
     publishDate: "1996-07-25",
     publisher: "The MIT Press",
     price: 120,
     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81R6zWdrN5L.jpg"
   },
   {
     isbn: "978-0132350884",
     title: "Clean Code: A Handbook of Agile Software Craftsmanship",
     authors: "Robert C. Martin",
     description: "Teaches principles for writing clean, maintainable, and scalable code.",
     categories: ["Software Development"],
     pageNumbers: "464",
     publishDate: "2008-08-01",
     publisher: "Prentice Hall",
     price: 90,
     bookImage: "https://images-na.ssl-images-amazon.com/images/I/51oXZWCoFNL._SX376_BO1,204,203,200_.jpg"
   },
   {
     isbn: "978-0201616224",
     title: "The Pragmatic Programmer",
     authors: "Andrew Hunt, David Thomas",
     description: "A practical guide to software development best practices.",
     categories: ["Programming", "Software Engineering"],
     pageNumbers: "352",
     publishDate: "1999-10-20",
     publisher: "Addison-Wesley Professional",
     price: 95,
     bookImage: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg"
   },
   {
     isbn: "978-0137081073",
     title: "The Clean Coder: A Code of Conduct for Professional Programmers",
     authors: "Robert C. Martin",
     description: "Guidelines for professionalism and ethical behavior in software development.",
     categories: ["Software Development", "Ethics"],
     pageNumbers: "256",
     publishDate: "2011-05-23",
     publisher: "Prentice Hall",
     price: 85,
     bookImage: "https://images-na.ssl-images-amazon.com/images/I/41bWcNdTGzL._SX396_BO1,204,203,200_.jpg"
   },
   {
       isbn: "978-0321125217",
       title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
       authors: "Eric Evans",
       description: "Explores strategic design for handling complex software domains.",
       categories: ["Software Architecture", "Design"],
       pageNumbers: "560",
       publishDate: "2003-08-30",
       publisher: "Addison-Wesley",
       price: 110,
       bookImage: "https://images-na.ssl-images-amazon.com/images/I/41Hs-Mm5qhL._SX403_BO1,204,203,200_.jpg"
     },
     {
       isbn: "978-0596007126",
       title: "Head First Design Patterns",
       authors: "Eric Freeman, Elisabeth Robson",
       description: "A visually rich book that simplifies complex design patterns.",
       categories: ["Software Design"],
       pageNumbers: "694",
       publishDate: "2004-10-25",
       publisher: "O'Reilly Media",
       price: 100,
       bookImage: "https://images-na.ssl-images-amazon.com/images/I/51hz8cRlj9L._SX402_BO1,204,203,200_.jpg"
     },
     {
       isbn: "978-0131177055",
       title: "Refactoring: Improving the Design of Existing Code",
       authors: "Martin Fowler",
       description: "Focuses on techniques for improving existing codebases.",
       categories: ["Software Development", "Code Quality"],
       pageNumbers: "448",
       publishDate: "1999-07-08",
       publisher: "Addison-Wesley",
       price: 105,
       bookImage: "https://images-na.ssl-images-amazon.com/images/I/51kYs9TGTyL._SX403_BO1,204,203,200_.jpg"
     },
     {
       isbn: "978-0137081073",
       title: "Effective Java",
       authors: "Joshua Bloch",
       description: "Offers best practices for Java programming.",
       categories: ["Programming", "Java"],
       pageNumbers: "416",
       publishDate: "2018-01-06",
       publisher: "Addison-Wesley",
       price: 90,
       bookImage: "https://images-na.ssl-images-amazon.com/images/I/51ofyz4qSQL._SX403_BO1,204,203,200_.jpg"
     },
     {
       isbn: "978-0201485677",
       title: "The Mythical Man-Month: Essays on Software Engineering",
       authors: "Frederick P. Brooks Jr.",
       description: "Classic essays on managing software development projects.",
       categories: ["Software Engineering", "Management"],
       pageNumbers: "322",
       publishDate: "1995-08-12",
       publisher: "Addison-Wesley",
       price: 75,
       bookImage: "https://images-na.ssl-images-amazon.com/images/I/51Xgslk4beL._SX403_BO1,204,203,200_.jpg"
     },
     {
       isbn: "978-1491950357",
       title: "Designing Data-Intensive Applications",
       authors: "Martin Kleppmann",
       description: "Covers building scalable and maintainable data systems.",
       categories: ["Data Engineering", "Architecture"],
       pageNumbers: "616",
       publishDate: "2017-04-18",
       publisher: "O'Reilly Media",
       price: 120,
       bookImage: "https://images-na.ssl-images-amazon.com/images/I/51Mt1vcb4eL._SX379_BO1,204,203,200_.jpg"
     },
     {
       isbn: "978-0134757599",
       title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
       authors: "Robert C. Martin",
       description: "Guidelines for building robust and maintainable software architectures.",
       categories: ["Software Design", "Architecture"],
       pageNumbers: "432",
       publishDate: "2017-09-20",
       publisher: "Pearson",
       price: 115,
       bookImage: "https://images-na.ssl-images-amazon.com/images/I/51b7XbfMIIL._SX384_BO1,204,203,200_.jpg"
     },
     {
       isbn: "978-1491954249",
       title: "You Don't Know JS: Scope & Closures",
       authors: "Kyle Simpson",
       description: "Deep dive into JavaScript concepts like closures and scope.",
       categories: ["Programming", "JavaScript"],
       pageNumbers: "98",
       publishDate: "2014-03-28",
       publisher: "O'Reilly Media",
       price: 40,
       bookImage: "https://images-na.ssl-images-amazon.com/images/I/41IdwWEI1qL._SX404_BO1,204,203,200_.jpg"
     },
     {
       isbn: "978-0131103627",
       title: "The C Programming Language",
       authors: "Brian W. Kernighan, Dennis M. Ritchie",
       description: "Classic text on the C programming language by its creators.",
       categories: ["Programming", "C"],
       pageNumbers: "288",
       publishDate: "1988-03-22",
       publisher: "Prentice Hall",
       price: 70,
       bookImage: "https://images-na.ssl-images-amazon.com/images/I/51ezDRyFfDL._SX377_BO1,204,203,200_.jpg"
     },
     {
       isbn: "978-1491929483",
       title: "Eloquent JavaScript: A Modern Introduction to Programming",
       authors: "Marijn Haverbeke",
       description: "Modern introduction to programming using JavaScript.",
       categories: ["Programming", "JavaScript"],
       pageNumbers: "472",
       publishDate: "2018-12-04",
       publisher: "No Starch Press",
       price: 80,
       bookImage: "https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg"
     }
]);

//Ratings
db.ratings.drop();
db.ratings.insertMany([
  {
    "rating": 4,
    "isbn": "978-3-16-148410-0",
    "userId": "671e741fcb79a1ef91e9d292",
    "comment": "Excelente leitura para iniciantes!",
    "dateCreated": "2023-10-15T10:00:00.000Z"
  },
  {
    "rating": 5,
    "isbn": "978-1-78-138210-1",
    "userId": "a47e741fcb79a1ef91e9d293",
    "comment": "Profundo e bem estruturado.",
    "dateCreated": "2023-10-16T11:00:00.000Z"
  },
  {
    "rating": 3,
    "isbn": "978-1-00-121350-2",
    "userId": "b38e741fcb79a1ef91e9d294",
    "comment": "Informações úteis, mas poderia ser mais conciso.",
    "dateCreated": "2023-10-17T12:00:00.000Z"
  },
  {
    "rating": 4,
    "isbn": "978-1-23-456789-3",
    "userId": "c29e741fcb79a1ef91e9d295",
    "comment": "Recomendo para quem quer aprender o básico!",
    "dateCreated": "2023-10-18T13:00:00.000Z"
  },
  {
    "rating": 2,
    "isbn": "978-4-17-158920-4",
    "userId": "d10e741fcb79a1ef91e9d296",
    "comment": "Esperava mais detalhes avançados.",
    "dateCreated": "2023-10-19T14:00:00.000Z"
  }
]);

//Orders
db.orders.drop();
db.orders.insertMany([
  {
    "userId": "671e741fcb79a1ef91e9d292",
    "products": [
      { "isbn": "978-3-16-148410-0", "quantity": 2, "price": "15.99" },
      { "isbn": "978-1-78-138210-1", "quantity": 1, "price": "25.50" }
    ],
    "status": "pending-payment",
    "cost": "57.48",
    "sendCost": "5.00",
    "sendAddress": {
      "street": "123 Main St",
      "city": "Springfield",
      "state": "IL",
      "zip": "62701"
    },
    "paymentMethod": "credit card",
    "dateCreated": "2023-10-15T10:00:00.000Z",
    "dateUpdated": null
  },
  {
    "userId": "671e741fcb79a1ef91e9d292",
    "products": [
      { "isbn": "978-1-00-121350-2", "quantity": 3, "price": "10.00" },
      { "isbn": "978-1-23-456789-3", "quantity": 1, "price": "20.00" }
    ],
    "status": "pending-payment",
    "cost": "50.00",
    "sendCost": "7.00",
    "sendAddress": {
      "street": "456 Elm St",
      "city": "Seattle",
      "state": "WA",
      "zip": "98101"
    },
    "paymentMethod": "paypal",
    "dateCreated": "2023-10-16T11:00:00.000Z",
    "dateUpdated": null
  },
  {
    "userId": "671e741fcb79a1ef91e9d292",
    "products": [
      { "isbn": "978-4-17-158920-4", "quantity": 1, "price": "35.00" }
    ],
    "status": "pending-payment",
    "cost": "35.00",
    "sendCost": "8.50",
    "sendAddress": {
      "street": "789 Maple Ave",
      "city": "Austin",
      "state": "TX",
      "zip": "73301"
    },
    "paymentMethod": "debit card",
    "dateCreated": "2023-10-17T12:00:00.000Z",
    "dateUpdated": null
  },
  {
    "userId": "671e741fcb79a1ef91e9d292",
    "products": [
      { "isbn": "978-1-78-138210-1", "quantity": 2, "price": "25.50" },
      { "isbn": "978-3-16-148410-0", "quantity": 1, "price": "15.99" }
    ],
    "status": "pending-payment",
    "cost": "66.99",
    "sendCost": "10.00",
    "sendAddress": {
      "street": "246 Oak St",
      "city": "Denver",
      "state": "CO",
      "zip": "80201"
    },
    "paymentMethod": "bank transfer",
    "dateCreated": "2023-10-18T13:00:00.000Z",
    "dateUpdated": null
  },
  {
    "userId": "671e741fcb79a1ef91e9d292",
    "products": [
      { "isbn": "978-1-00-121350-2", "quantity": 1, "price": "10.00" },
      { "isbn": "978-4-17-158920-4", "quantity": 3, "price": "35.00" }
    ],
    "status": "pending-payment",
    "cost": "115.00",
    "sendCost": "9.00",
    "sendAddress": {
      "street": "369 Birch Blvd",
      "city": "Miami",
      "state": "FL",
      "zip": "33101"
    },
    "paymentMethod": "credit card",
    "dateCreated": "2023-10-19T14:00:00.000Z",
    "dateUpdated": null
  }
]);

//Users
db.users.drop();
db.users.insertMany([
  {
    "_id": {"$oid": "671e741fcb79a1ef91e9d292"},
    "__v": 0,
    "cpf": "4114107940",
    "dateCreated": {"$date": "2024-10-27T17:10:55.209Z"},
    "email": "vbkmma@gmail.com",
    "name": "Vini",
    "password": "$2a$10$SgfOGPNWBRHcA77wcegNG.UeY4NeMtQVCG22sVL5QM2yOy28NXoVy"
  },
  {
    "_id": {"$oid": "d10e741fcb79a1ef91e9d296"},
    "__v": 0,
    "cpf": "4114107941",
    "dateCreated": {"$date": "2024-10-27T17:10:55.209Z"},
    "email": "teste@gmail.com",
    "name": "Teste 2",
    "password": "$2a$10$SgfOGPNWBRHcA77wcegNG.UeY4NeMtQVCG22sVL5QM2yOy28NXoVy"
  }
]);