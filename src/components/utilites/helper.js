 export const updateState = (key, value, setForm) => {
    setForm((prev) => {
      return { ...prev, [key]: value };
    });
  };