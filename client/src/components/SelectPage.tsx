import { Pagination } from "@mui/material";

const SelectPage = ({
  page,
  setPage,
  totalDevices,
}: {
  page: number;
  setPage: any;
  totalDevices: number;
}) => {
  const onPageChange = (_: any, value: number) => {
    setPage(value - 1);
  };

  return (
    <>
      <Pagination
        onChange={onPageChange}
        count={Math.ceil(totalDevices / 10)}
      ></Pagination>
    </>
  );
};

export default SelectPage;
