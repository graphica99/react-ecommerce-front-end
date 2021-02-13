import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import NavBarMakeStyle from "./NavbarMakeStyle";
import Hidden from "@material-ui/core/Hidden";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import Drawer from "@material-ui/core/Drawer";
import InputAdornment from "@material-ui/core/InputAdornment";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Link from "next/link";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = NavBarMakeStyle();
  const [value, setValue] = useState(0);
  const [drawer, setDrawer] = useState(false);
  const handleChange = (e, value) => {
    setValue(value);
  };
  const tabs = [
    { label: "Home", path: "/" },
    { label: "Categories", path: "/categories" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const NavigationTabs = (
    <Hidden smDown>
      <Box className={classes.tabContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          indicatorColor="transparent"
        >
          {tabs.map((tabItems) => (
            <Link href={tabItems.path}>
              <Tab
                key={tabItems.label}
                className={classes.tabItems}
                label={tabItems.label}
                disableRipple={true}
                to={tabItems.path}
              />
            </Link>
          ))}
          <Tooltip title="dark mode" arrow>
            <Tab
              icon={<Brightness4Icon />}
              className={classes.tabItems}
              disableRipple={true}
            />
          </Tooltip>
          <Tooltip title="Search" arrow>
            <Tab
              disableRipple={true}
              icon={<SearchIcon />}
              className={classes.tabItems}
            />
          </Tooltip>
          <Tooltip title="Cart" arrow>
            <IconButton aria-label="cart" disableRipple={true}>
              <StyledBadge badgeContent={4} color="secondary" invisible={false}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Favorite" arrow>
            <IconButton aria-label="favorite" disableRipple={true}>
              <StyledBadge badgeContent={4} color="secondary" invisible={false}>
                <FavoriteIcon />
              </StyledBadge>
            </IconButton>
          </Tooltip>
          {/* <Button
            variant="contained"
            className={classes.signButton}
            disableRipple={true}
          >
            SignUp/SignIn
          </Button> */}
          <Link href="/admin/admin">
            <Tab
              key="Admin"
              className={classes.tabItems}
              label="Admin"
              disableRipple={true}
            />
          </Link>
          <Avatar
            style={{ marginLeft: 20 }}
            width="80"
            height="80"
            alt="user"
            src={`https://gravatar.com/avatar/292029ba878ad7319fbc9aa0acbec17e?s=400&d=robohash&r=x`}
          />
        </Tabs>
      </Box>
    </Hidden>
  );

  const DrawerTabs = (
    <React.Fragment>
      <Input
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        className={classes.input}
        disableUnderline={true}
        endAdornment={
          <InputAdornment position="end">
            <IconButton disableRipple={true}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      ></Input>

      <IconButton
        onClick={() => setDrawer(!drawer)}
        disableRipple={true}
        className={classes.iconButton}
      >
        <MenuIcon className={classes.menuBar} />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawer}
        onClose={() => setDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        {/*listItems */}
        <List
          style={{
            marginTop: "10px",
            color: "#fff",
            textTransform: "none",
          }}
        >
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                width="80"
                height="80"
                alt="user"
                src={`https://gravatar.com/avatar/292029ba878ad7319fbc9aa0acbec17e?s=400&d=robohash&r=x`}
              />
            </ListItemAvatar>
            <ListItemText primary="Mends Albert" />
          </ListItem>
          <Divider className={classes.divider} />
          <ListItem>
            {/* <ListItemIcon> */}
            <IconButton
              aria-label="favorite"
              disableRipple={true}
              className={{ margin: 0 }}
            >
              <Brightness4Icon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton aria-label="favorite" disableRipple={true}>
              <StyledBadge badgeContent={4} color="secondary" invisible={false}>
                <ShoppingCartIcon style={{ color: "#fff" }} />
              </StyledBadge>
            </IconButton>
            <IconButton aria-label="favorite" disableRipple={true}>
              <StyledBadge badgeContent={4} color="secondary" invisible={false}>
                <FavoriteIcon style={{ color: "#fff" }} />
              </StyledBadge>
            </IconButton>
            {/* </ListItemIcon> */}
          </ListItem>
          <Divider className={classes.divider} />
          <Link href="/">
            <ListItem button onClick={() => setDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>

          <Link href="/categories">
            <ListItem button onClick={() => setDrawer(false)}>
              <ListItemText primary="Categories" />
            </ListItem>
          </Link>
          <Link href="/about">
            <ListItem button to="/blog" onClick={() => setDrawer(false)}>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link href="/contact">
            <ListItem button to="/contact" onClick={() => setDrawer(false)}>
              <ListItemText primary="Contact" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <Container>
          <AppBar className={classes.AppBar}>
            <Toolbar>
              <img src="/logo.png" alt="logo" className={classes.logo} />
              {matchesMD ? DrawerTabs : NavigationTabs}
            </Toolbar>
          </AppBar>
        </Container>
      </ElevationScroll>
      <Toolbar />

      <Container>
        <Box my={2}></Box>
      </Container>
    </React.Fragment>
  );
}
