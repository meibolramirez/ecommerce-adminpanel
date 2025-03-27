import React from "react";
import { List, Datagrid, TextField, EditButton, TextInput, Edit, SimpleForm, Create, DeleteButton, Toolbar, SaveButton, ToolbarProps, SelectInput, NumberField, NumberInput  } from "react-admin";
import { required, minLength, maxLength, number } from "react-admin";
import { Product } from "./types";

const categoryChoices = [
  { id: "Moda", name: "Moda" },
  { id: "Accesorios", name: "Accesorios" },
  { id: "Higiene", name: "Higiene" },
];

const sizeChoices = [
  { id: "x-small", name: "XS" },
  { id: "small", name: "S" },
  { id: "medium", name: "M" },
  { id: "large", name: "L" },
  { id: "x-large", name: "XL" },
  { id: "2x-large", name: "XXL" },
];

const validateName = [required(), minLength(3), maxLength(60)];
const validateCategory = [required()];
const validatePrice = [required(), number(), (value: string | number) => {
  // If value is a string, convert it to a number for regex validation
  const price = typeof value === 'string' ? parseFloat(value) : value;

  if (value && !isNaN(price)) {
    // Ensure value has at most 2 decimal places
    if (!/^\d+(\.\d{1,2})?$/.test(price.toString())) {
      return 'Price must have up to 2 decimal places';
    }
  }
  return undefined;}];

// Product List
export const ProductList = (props: { products: Product[] }) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name"/>
      <TextField source="category" />
      <NumberField source="price" />
      <TextField source="size" />
      <TextField source="color" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Product Edit
export const ProductEdit = (props: { record?: Product }) => (
  <Edit {...props}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source="name" label="Name" validate={validateName} />
      <SelectInput
        source="category"
        label="Category"
        choices={categoryChoices}
        validate={validateCategory}
      />
      <SelectInput
        source="size"
        label="Size"
        choices={sizeChoices}
      />
      <NumberInput source="price" label="Price" validate={validatePrice}/>
      <TextInput source="color" label="Color" />
    </SimpleForm>
  </Edit>
);

const CustomToolbar: React.FC<ToolbarProps> = (props) => (
  <Toolbar {...props}>
    <SaveButton />
    <DeleteButton mutationMode="pessimistic" />
  </Toolbar>
);

// Product Create
export const ProductCreate = (props: { onSave: (data: Product) => void }) => (
  <Create {...props} redirect="list">
    <SimpleForm>
    <TextInput source="name" label="Name" validate={validateName} />
      <SelectInput
        source="category"
        label="Category"
        choices={categoryChoices}
        validate={validateCategory}
      />
      <SelectInput
        source="size"
        label="Size"
        choices={sizeChoices}
      />
      <NumberInput source="price" label="Price" validate={validatePrice}/>
      <TextInput source="color" label="Color" />
    </SimpleForm>
  </Create>
);
