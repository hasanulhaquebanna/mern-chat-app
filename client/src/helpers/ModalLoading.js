import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const ModalLoading = () => {
  return (
    <Stack marginTop="20px">
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
    </Stack>
  );
};

export default ModalLoading;
