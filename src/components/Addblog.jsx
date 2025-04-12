import React from 'react'
import { Button, TextField } from '@mui/material';

const AddBlog = () => {
  return (
    <div>
      <h2>Add New Blog</h2>
      <form>
        <TextField
          label="Blog Name"
          name="blogName"
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Description"
          name="description"
          required
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />

        <TextField
          label="Author Name"
          name="authorName"
          required
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="outlined">Submit</Button>
      </form>
    </div>
  );
};

export default AddBlog;
