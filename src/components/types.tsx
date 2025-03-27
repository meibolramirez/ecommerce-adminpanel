export interface Product {
    id: number;
    name: string;
    category: "Moda" | "Accesorios" | "Higiene";
    size: string;
    color: string;
    price: number;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
  }

  export interface ProductListProps {
    // Here we expect an array of products
    products: Product[];
  }
  
  export interface UserListProps {
    // Here we expect an array of users
    users: User[];
  }