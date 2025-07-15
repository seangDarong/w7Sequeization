import sequelize from "./db/database.js"; 
import {Author,Book} from "./models/authorBook.js"

try {
    const result = await sequelize.sync();
    console.log(result);

    // //create sample data
    // const ronan = await Author.create({name: "Ronan The  Best",birthYear : 1990});
    // const kim = await Author.create({ name: "Kim Ang", birthYear: 1995 });
    // const hok = await Author.create({ name: "Hok Tim", birthYear: 2015 });

    // //create book
    // await Book.bulkCreate([
    //     { title: "Ronan's Adventure", publicationYear: 2010, page: 250, authorId: ronan.id },
    //     { title: "Ronan's Return", publicationYear: 2015, page: 300, authorId: ronan.id },
    //     { title: "Kim's Journey", publicationYear: 2020, page: 180, authorId: kim.id },
    //     { title: "Kim's Dream", publicationYear: 2022, page: 220, authorId: kim.id },
    //     { title: "Hok's World", publicationYear: 2025, page: 100, authorId: hok.id },
    //     { title: "Hok's Future", publicationYear: 2026, page: 120, authorId: hok.id }
    // ]);

    // //Fetch all book by given author 
    // const author = await Author.findOne({where: {name : "Kim Ang"}});
    // const authorBooks = await author.getBooks();
    // console.log("Book by " +author +":",JSON.stringify(authorBooks,null,2));

    // //create a new book for existing author 
    // const authorNewBook = await Author.findOne({where :{name : "Kim Ang"}});
    // const newBook = await authorNewBook.createBook({
    //     title: "Once twice",
    //     publicationYear: 2025,
    //     page: 230
    // });

    //list author with all of their books
    const authorsWithBooks = await Author.findAll({include :Book});
    console.log("All author with their books :",JSON.stringify(authorsWithBooks,null,2));

    
} catch (error) {
    console.error("Error unable to connect", error);
}
