import React from "react";
import "./style.css";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Paper,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "@fontsource/roboto/400.css";
import SearchIcon from "@mui/icons-material/Search";
import Person3Icon from "@mui/icons-material/Person3";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Navbar = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ position: "fixed" }}
        >
          <Grid item xs={12}>
            <Item>
              <AppBar>
                <Container maxWidth="xl">
                  <Toolbar disableGutters>
                    <RestaurantIcon
                      sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      ABC Restaurant
                    </Typography>
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: {
                          xs: "none",
                          md: "flex",
                          justifyContent: "end",
                        },
                      }}
                    >
                      <Search>
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search…"
                          inputProps={{ "aria-label": "search" }}
                        />
                      </Search>

                      <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0 }}>
                          <Avatar alt="Remy Sharp" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Toolbar>
                </Container>
              </AppBar>
            </Item>
          </Grid>
        </Grid>
        <div className="container">
          <div class="meal-item" data-id="">
            <div class="meal-image">
              <img src="" alt="Image Will loaded" />
            </div>
            <div class="meal-name">
              <h3></h3>
              <a href="#" class="meal-recipe-btn">
                Meal Recipe
              </a>
            </div>
          </div>
          <div class="meal-details-content">
            <h2 className="meal-details-title">Meals Name Here</h2>
            <p className="meal-details-category">Category Name</p>
            <div className="meal-details-instruction">
              <h3>Meal Instructions</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                maxime exercitationem, voluptates qui corrupti sed ipsum ex.
                Amet quo nemo labore deleniti voluptatem nostrum eum expedita,
                facere iure numquam exercitationem!Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ipsam quod quaerat, magnam culpa,
                quam dolores doloremque molestiae est sint a enim commodi
                officiis voluptatum! Omnis nam libero voluptatem atque totam.
              </p>
            </div>
            <div className="meal-details-img">
              <img src="images/sandwitch.jpg" alt="Image Loaded" />
            </div>
            <div className="meal-details-link">
              <a href="#" target="_blank">
                Click Here
              </a>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;

// api password=cKAYMmZqS8M9cxD
