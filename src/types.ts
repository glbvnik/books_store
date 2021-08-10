export interface IAuthor {
  id: string;
  name: string;
  birthplace: string;
  dateOfBirth: string;
  dateOfDeath: string;
  photo: string;
  books: { id: string; title: string }[];
}

export interface IAuthors {
  id: string;
  name: string;
  photo: string;
}

export interface IBook {
  id: string;
  title: string;
  author: string;
  series: string;
  isbn: string;
  datePublished: string;
  chapters: { title: string }[];
  stores: { name: string; address: string }[];
  photo: string;
}

export interface IBooks {
  id: string;
  title: string;
  author: string;
  photo: string;
}
