import React from "react";
import "./RightBar.scss";
import { Box, Typography } from "@material-ui/core";
import imgDoanh from "../../Assets/images/avt.jpg";
import imgHoa from "../../Assets/images/imgHoa.jpg";
import imgChien from "../../Assets/images/profile.jpeg";
import imgHieu from "../../Assets/images/imgHieu.jpg";
import imgHung from "../../Assets/images/imgHung.jpg";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Link } from "react-router-dom";
function RightBar() {
  return (
    <Box className="sidebarright">
      <Box style={{ border: "none", padding: "10px 0" }}>
        <Typography className="header-title">Được tài trợ</Typography>
      </Box>
      <Box style={{ borderTop: "1px solid #CED0D4", padding: "10px 0" }}>
        <Box display="flex" justifyContent="space-between">
          <Typography className="header-title">Người liên hệ</Typography>
          <Box display="flex" justifyContent="space-between">
            <SearchIcon className="menu"></SearchIcon>
            <MoreVertIcon className="menu"></MoreVertIcon>
          </Box>
        </Box>
        <ListFollow name={"Trần Văn Doanh"} img={imgDoanh} />
        <ListFollow name={"Nguyễn Danh Hòa"} img={imgHoa} />
        <ListFollow name={"Nguyễn Quang Hiếu"} img={imgHieu} />
        <ListFollow name={"Mai Ngọc Hưng"} img={imgHung} />
        <ListFollow name={"Mai Ngọc Hưng"} img={imgChien} />
        <ListFollow name={"Trần Văn Doanh"} img={imgDoanh} />
        <ListFollow name={"Nguyễn Danh Hòa"} img={imgHoa} />
        <ListFollow name={"Nguyễn Quang Hiếu"} img={imgHieu} />
        <ListFollow name={"Mai Ngọc Hưng"} img={imgHung} />
        <ListFollow name={"Mai Ngọc Hưng"} img={imgChien} />
        <ListFollow name={"Trần Văn Doanh"} img={imgDoanh} />
        <ListFollow name={"Nguyễn Danh Hòa"} img={imgHoa} />
        <ListFollow name={"Nguyễn Quang Hiếu"} img={imgHieu} />
        <ListFollow name={"Mai Ngọc Hưng"} img={imgHung} />
        <ListFollow name={"Mai Ngọc Hưng"} img={imgChien} />
      </Box>
    </Box>
  );
}

const ListFollow = (props) => {
  return (
    <Link to="/profile" style={{ textDecoration: "none" }}>
      <Box className="list">
        <Box style={{ position: "relative" }}>
          <img src={props.img} alt=""></img>
          <FiberManualRecordIcon></FiberManualRecordIcon>
        </Box>
        <Typography>{props.name}</Typography>
      </Box>
    </Link>
  );
};

export default RightBar;
