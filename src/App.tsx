import React, { useState } from "react";
import { FormLogin } from "./components/FormLogin/FormLogin";
import { Title } from "./components/Title/Title";
import { Box } from "./components/Box/Box";
import { serverMock } from "./services/serverMock";
import "./App.css";

function App() {
  const initState = [
    {
      name: "name",
      label: "Name",
      value: "",
      type: "text",
      errors: [],
      disabled: false,
    },
    {
      name: "email",
      label: "Email",
      value: "",
      type: "email",
      errors: [],
      disabled: false,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      value: "",
      errors: [],
      disabled: false,
    },
  ];


  const [isLoading, setLoading] = useState(false);
  const [form, setForm] = useState(initState);

  const handleDisableForm = () => {
    const newFormState = form.map((field) => ({ ...field, disable: true }));
    setForm(newFormState);
  }
  
  const handleReset = () => {
    setForm(initState);
  };

  const handleResetErrors = () => {
    const newFormState = form.map((field) => ({ ...field, errors: [] }));
    setForm(newFormState);
  }

  const handleInput = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    const newFormState = form.map((field) => {
      if (field.name === name) {
        return { ...field, value };
      }
      return field;
    });
    setForm(newFormState);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    handleResetErrors()

    setLoading(true);
  
    serverMock().then((res: any) => {
      const newFormState = form.map((field) => {
        const fieldResponse = res[field.name];
        if (fieldResponse) {
          return { ...field, errors: fieldResponse.errors, disable: false };
        }
        return { ...field, disable: false };
      });
      setForm(newFormState);
      setLoading(false)
    });
  };

  return (
    <div className='App'>
      <Box>
        <Title>INVESTMENT FORUM</Title>
        <FormLogin
          isLoading={isLoading}
          formState={form}
          onInputChange={handleInput}
          onSubmit={handleSubmit}
        />
      </Box>
    </div>
  );
}

export default App;
