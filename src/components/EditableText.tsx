import { Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { TypographyVariants } from '../types';

interface EditableTextProps {
  text: string;
  variant: TypographyVariants;
}

function EditableText(props: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(props.text);
  const variant = props.variant;

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      {isEditing ? (
        <TextField value={text} onChange={handleTextChange} onBlur={handleBlur} autoFocus />
      ) : (
        <Typography variant={variant} onClick={toggleEdit}>
          {text}
        </Typography>
      )}
    </Box>
  );
}

export default EditableText;
