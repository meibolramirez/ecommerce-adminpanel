"use client";
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import { Admin, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { ProductList, ProductEdit, ProductCreate } from "./products";
import { UserList, UserEdit, UserCreate } from "./users";

// Set up the data provider to use the JSON Server mock API
const dataProvider = jsonServerProvider("http://localhost:3001");

export const AdminPanel = () => {
  return (
    <ThemeProvider theme={theme}>
      <Admin theme={theme} dataProvider={dataProvider}>
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
      </Admin>
    </ThemeProvider>
  );
};

export default AdminPanel;
