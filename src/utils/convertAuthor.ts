import { IAuthor } from "./../types";

const convertAuthor = (data: any): IAuthor => {
  return {
    id: data.author.jsonapi.data.id,
    name: data.author.jsonapi.data.attributes.name,
    birthplace: data.author.jsonapi.data.attributes.birthplace,
    dateOfBirth: data.author.jsonapi.data.attributes.dateOfBirth,
    dateOfDeath: data.author.jsonapi.data.attributes.dateOfDeath,
    photo:
      data.author.jsonapi.data.relationships.photos.data[0]?.attributes.uri ??
      "https://picsum.photos/id/230/400/300.jpg",
    books:
      data.author.jsonapi.data.relationships.books.data?.map((book: any) => ({
        id: book.id,
        title: book.attributes.title,
      })) ?? [],
  };
};

export default convertAuthor;
