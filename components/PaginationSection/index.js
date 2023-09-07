import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
function PaginationSection() {
  return (
    <div>
      <Box>
        <Stack spacing={0} sx={{ color: "#16629C" }}>
          <Pagination
            count={3}           
            variant="outlined"
            shape="rounded"
            sx={{
              borderColor: "#DFE3E8",
              "& .Mui-selected": {
                backgroundColor: "transparent",
                border: "1px solid #16629C",
              },
              borderRadius: "4px",
              color:"#16629C"
            }}
          />
        </Stack>
      </Box>
    </div>
  );
}

export default PaginationSection;
