import { IBook } from "../types";

const convertBooks = (data: any): IBook[] => {
  return data.books.jsonapi.data.map((book: any) => ({
    id: book.id,
    title: book.attributes.title,
    author: book.relationships.author.data.attributes.name,
    photo:
      book.relationships.photos.data[0]?.attributes.uri ??
      "https://picsum.photos/id/230/400/300.jpg",
  }));
};

export default convertBooks;
