import { TextField } from "@mui/material";

const SelectPage = ({ page, setPage }: { page: number; setPage: any }) => {
  const onPageChange = (event: React.FormEvent) => {
    const value = parseInt((event.target as any).value);
    setPage(value);
  };

  return (
    <>
      <TextField
        label="Page"
        type="number"
        defaultValue={0}
        onChange={onPageChange}
        variant="filled"
        InputProps={{ inputProps: { min: "0", step: "1" } }}
      >
        {page}
      </TextField>
    </>
  );
};

export default SelectPage;
