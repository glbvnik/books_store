import { IBook } from "./../types";

const convertBook = (data: any): IBook => {
  return {
    id: data.book.jsonapi.data.id,
    title: data.book.jsonapi.data.attributes.title,
    datePublished: data.book.jsonapi.data.attributes.datePublished,
    isbn: data.book.jsonapi.data.attributes.isbn,
    author: data.book.jsonapi.data.relationships.author.data.attributes.name,
    chapters: data.book.jsonapi.data.relationships.chapters.data.map(
      (c: any) => ({
        title: c.attributes.title,
      })
    ),
    series: data.book.jsonapi.data.relationships.series.data.attributes.title,
    stores: data.book.jsonapi.data.relationships.stores.data.map((c: any) => ({
      name: c.attributes.name,
      address: c.attributes.address,
    })),
    photo:
      data.book.jsonapi.data.relationships.photos.data[0]?.attributes.uri ??
      "https://picsum.photos/id/230/400/300.jpg",
  };
};

export default convertBook;
