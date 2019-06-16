import React from 'react';
import {
    Create,
    Datagrid,
    DisabledInput,
    Edit,
    Filter,
    List,
    NumberField,
    NumberInput,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
} from 'react-admin';

const PlayerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Team" source="teamId" reference="teams" allowEmpty>
            <SelectInput optionText="title" />
        </ReferenceInput>
    </Filter>
);

export const PlayerList = props => (
    <List filters={<PlayerFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <NumberField source="number" />
            <TextField source="name" />
            <ReferenceField source="teamId" reference="teams">
                <TextField source="title" />
            </ReferenceField>
        </Datagrid>
    </List>
);

export const PlayerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="number" />
            <TextInput source="name" />
            <ReferenceInput label="Team" source="teamId" reference="teams">
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

const PlayerTitle = ({ record }) => {
    return <span>Player {record ? `"#${record.number} ${record.name}"` : ''}</span>;
};

export const PlayerEdit = (props) => (
    <Edit title={<PlayerTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <NumberInput source="number" />
            <TextInput source="name" />
            <ReferenceInput label="Team" source="teamId" reference="teams">
                <SelectInput optionText="title" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
