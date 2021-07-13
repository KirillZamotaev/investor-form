export const serverMock = async () => {
  const DELAY = 2000;
  const response = {
    name: { value: "", errors: ["unknown name"] },
    email: { value: "", errors: ["wrong format"] },
    password: { value: "", errors: ["too short", "too long"] },
  };

  await new Promise((res) => setTimeout(() => res(null), DELAY));

  return response;
};
