import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

const FileUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle file upload
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '2px dashed #ccc',
        borderRadius: '4px',
        padding: '16px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography>Drop the files here...</Typography>
      ) : (
        <Typography>Drag & drop some files here, or click to select files</Typography>
      )}
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Click to Upload
      </Button>
    </Box>
  );
};

export default FileUpload;
