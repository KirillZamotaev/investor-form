import React, { FC } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Box } from '../Box/Box'

interface FormSubmitProps {
  formState: any;
  isLoading?: boolean;
  onInputChange: (e: any) => void;
  onSubmit: (e: any) => void;
}

export const FormLogin: FC<FormSubmitProps> = ({
  formState = [],
  isLoading,
  onSubmit,
  onInputChange,
}) => {
  const fields = formState;

  return (
    <Box>
      <form className='FormLogin' onSubmit={onSubmit}>
        {fields.map((field: any) => (
          <Input key={field.name} onChange={onInputChange} {...field} />
        ))}

        <Button disabled={isLoading} type='submit'>Run</Button>
        {isLoading && <Box className="formStatus">Loading</Box>}
      </form>
    </Box>
  );
};
