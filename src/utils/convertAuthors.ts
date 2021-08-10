import { IAuthors } from "./../types";

const convertAuthors = (data: any): IAuthors[] => {
  return data.authors.jsonapi.data.map((author: any) => ({
    id: author.id,
    name: author.attributes.name,
    photo:
      author.relationships.photos.data[0]?.attributes.uri ??
      "https://picsum.photos/id/230/400/300.jpg",
  }));
};

export default convertAuthors;
