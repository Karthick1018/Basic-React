import React, { useState } from "react";
import { Box, Button, Card, Table, TableBody, TableCell,TableHead, TableRow, TextField } from "@mui/material";

const DynamicForm = () => {
  const [fields, setFields] = useState([{ id: 1, value1: "", value2: "" }]);
  const [submittedData, setSubmittedData] = useState([]);

  const addField = () => {
    const newField = { id: fields.length + 1, value1: "", value2: "" };
    setFields([...fields, newField]);
    
    setSubmittedData([...submittedData, ...fields]);
    
    setFields([{ id: 1, value1: "", value2: "" }]);
  };

  const removeField = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id,);
    setFields(updatedFields);
  };

  const handleChange = (id, fieldName, fieldValue) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, [fieldName]: fieldValue } : field
    );
    setFields(updatedFields);
  };

  const handleRemoveSubmittedData = (id) => {
    const updatedSubmittedData = submittedData.filter((data) => data.id !== id);
    setSubmittedData(updatedSubmittedData);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setSubmittedData([...submittedData, ...fields]);

  //   setFields([{ id: 1, value1: "", value2: "" }]);
  // };

  return (
    <div>
      <form onSubmit={addField}>
        <Card>
          <Box>
        {fields.map((field) => (
          <div key={field.id}>
            <TextField id="outlined-basic" sx={{margin:3}}
              type="text"
              value={field.value1}
              onChange={(e) => handleChange(field.id, "value1", e.target.value)}
              placeholder="enter the value"
            />
            <TextField id="outlined-basic" sx={{margin:3}}
              type="text"
              value={field.value2}
              onChange={(e) => handleChange(field.id, "value2", e.target.value)}
              placeholder="enter the value" 
            />
            <Button  sx={{margin:4}} onClick={() => removeField(field.id)} >
              Remove
            </Button>
          </div>
        ))}
        <Button  variant="outlined" size="small" sx={{margin:3}}   onClick={addField}>
          Add Field
        </Button>
        {/* <Button type="submit" color="success" sx={{margin:3}}>Submit</Button> */}
        </Box>
        </Card>
        
      </form>
      

      <h2>Submitted Data</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Field ID</TableCell>
            <TableCell>Value 1</TableCell>
            <TableCell>Value 2</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submittedData.map((data) => (
            <TableRow key={data.id}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.value1}</TableCell>
              <TableCell>{data.value2}</TableCell>
              <TableCell>
                <Button  color="error" onClick={() => handleRemoveSubmittedData(data.id)}>Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div >
  );
};

export default DynamicForm;

