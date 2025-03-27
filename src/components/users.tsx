import React from "react";
import { List, Datagrid, TextField, EditButton, TextInput, Edit, SimpleForm, Create, DeleteButton, SelectInput, Toolbar, SaveButton, ToolbarProps } from "react-admin";
import { required, minLength, maxLength, email } from "react-admin";
import { User } from "./types";

const roleChoices = [
  { id: "Admin", name: "Administrador" },
  { id: "Regular", name: "Regular" }
];

const validateName = [required(), minLength(3), maxLength(60)];
const validateEmail = [required(), email()];
const validateRole = [required()];

// User List
export const UserList = (props: { users: User[] }) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="role" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// User Edit
export const UserEdit = (props: { record?: User }) => (
  <Edit {...props}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput source="name" validate={validateName} />
      <TextInput source="email" validate={validateEmail} />
      <SelectInput
              source="role"
              label="Role"
              choices={roleChoices}
              validate={validateRole}
            />
    </SimpleForm>
  </Edit>
);

const CustomToolbar: React.FC<ToolbarProps> = (props) => (
  <Toolbar {...props}>
    <SaveButton />
    <DeleteButton mutationMode="pessimistic" />
  </Toolbar>
);

// User Create
export const UserCreate = (props: { onSave: (data: User) => void }) => (
  <Create {...props} redirect="list">
    <SimpleForm>
    <TextInput source="name" validate={validateName} />
      <TextInput source="email" validate={validateEmail} />
      <SelectInput
              source="role"
              label="Role"
              choices={roleChoices}
              validate={validateRole}
            />
    </SimpleForm>
  </Create>
);
