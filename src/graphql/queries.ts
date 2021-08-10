import gql from "graphql-tag";

export const getAllBooks = (page: number, size: number) => {
  return gql`
  query {
    books
      @jsonapi(path: "books?include=author,photos&page[number]=${page}&page[size]=${size}", includeJsonapi: true) {
      jsonapi {
        data {
          id
          attributes {
            title
          }
          relationships {
            author {
              data {
                attributes {
                  name
                }
              }
            }
            photos {
              data {
                attributes {
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`;
};

export const getAllAuthors = (page: number) => {
  return gql`
  query {
    authors
      @jsonapi(path: "authors?include=photos&page[number]=${page}&page[size]=9", includeJsonapi: true) {
      jsonapi {
        data {
          id
          attributes {
            name
          }
          relationships {
            photos {
              data {
                attributes {
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`;
};

export const getOneAuthor = (id: number) => {
  return gql`
  query {
    author
      @jsonapi(path: "authors/${id}?include=photos,books", includeJsonapi: true) {
      jsonapi {
        data {
          id
          attributes {
            name
            birthplace
            dateOfBirth: date_of_birth
            dateOfDeath: date_of_death
          }
          relationships {
            photos {
              data {
                attributes {
                  uri
                }
              }
            }
            books {
              data {
                id
                attributes {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;
};

export const getOneBook = (id: number) => {
  return gql`
  query {
    book
      @jsonapi(path: "books/${id}?include=author,chapters,photos,series,stores", includeJsonapi: true) {
      jsonapi {
        data {
          id
          attributes {
            title
            datePublished: date_published
            isbn
          }
          relationships {
            author {
              data {
                attributes {
                  name
                }
              }
            }
            chapters {
              data {
                attributes {
                  title
                }
              }
            }
            photos {
              data {
                attributes {
                  uri
                }
              }
            }
            series {
              data {
                attributes {
                  title
                }
              }
            }
            stores {
              data {
                attributes {
                  name
                  address
                }
              }
            }
          }
        }
      }
    }
  }
`;
};
