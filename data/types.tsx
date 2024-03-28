interface IBook {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  image: string;
  liked: boolean;
}

interface IAdmin {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
}

export type { IBook, IAdmin };
