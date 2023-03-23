import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius: 20,
      border: "#e3e3e3",
      boxShadow: "none",
      pl: 2,
      mr: { sm: 5 },
    }}
  >
    <input
      className="search-bar"
      placeholder="Search....."
      value=""
      onChange={() => {}}
      style={{ outline: "none", border: "none" }}
    />
    <IconButton type="submit" sx={{ color: "red", p: "10px" }}>
      <Search />
    </IconButton>
  </Paper>
);

export default SearchBar;
