import React from "react";
import image1 from "../images/hadi1.png";
import CottageIcon from "@mui/icons-material/Cottage";
import SchoolIcon from "@mui/icons-material/School";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CollectionsIcon from "@mui/icons-material/Collections";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-scroll";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "material-ui-core";
const Header = () => {
  return (
    <header>
      <Grid className="user">
        <img src={image1} alt="" srcset="" />
        <Typography variant="h3" className="name">
          Haidar Ali
        </Typography>
        <p class="post">react js developer</p>
      </Grid>

      <nav className="navbar">
        <ul>
          <li>
            <Link
              spy
              smooth
              offset={-32}
              activeClass="active"
              component={Link}
              to="home"
            >
              <CottageIcon sx={{ fontSize: 29, paddingTop: 1 }} /> home
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={-32}
              activeClass="active"
              component={Link}
              to="about"
            >
              <ManageAccountsIcon sx={{ fontSize: 29, paddingTop: 1 }} />
              about
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={-32}
              activeClass="active"
              component={Link}
              to="education"
            >
              <SchoolIcon sx={{ fontSize: 29, paddingTop: 1 }} />
              education
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={-32}
              activeClass="active"
              component={Link}
              to="portfolio"
            >
              <CollectionsIcon sx={{ fontSize: 29, paddingTop: 1 }} />
              portfolio
            </Link>
          </li>
          <li>
            <Link
              spy
              smooth
              offset={-32}
              activeClass="active"
              component={Link}
              to="contact"
            >
              <ContactsIcon sx={{ fontSize: 29, paddingTop: 1 }} />
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
