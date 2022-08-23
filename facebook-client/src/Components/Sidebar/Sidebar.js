import { useContext, useState } from "react";
import { Box, Typography, ListItem } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { AppContenxt } from "../../ContextApi/AppContext";
import { useNavigate } from "react-router-dom";
import imgDoanh from "../../Assets/images/avt.jpg";
import imgHoa from "../../Assets/images/imgHoa.jpg";
import imgChien from "../../Assets/images/profile.jpeg";
import imgHieu from "../../Assets/images/imgHieu.jpg";
import imgHung from "../../Assets/images/imgHung.jpg";
import imgEvent from "../../Assets/images/event.png";
import imgMemory from "../../Assets/images/memory.png";
const Sidebar = () => {
  const { UserGState, dispatchUser } = useContext(AppContenxt);
  const [moreContent, setMoreContent] = useState(false);
  const [moreGroup, setMoreGroup] = useState(false);
  const navigate = useNavigate();
  //logout function
  const Logout = () => {
    dispatchUser({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <>
      <Box className="Sidebar">
        <Box className="sidebar-content-listmenu">
          <Link to="/profile">
            <ListItem button className="sidebar-content-item">
              <img
                src={UserGState.info.profile_pic}
                width="28px"
                height="28px"
                alt=""
              />
              <Typography variant="subtitle1">
                {UserGState.info.username + UserGState.info.surname}
              </Typography>
            </ListItem>
          </Link>
          <Link to="/friends">
            <ListItem button className="sidebar-content-item">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
                alt="groups"
                width="28px"
                height="28px"
              />
              <Typography variant="subtitle1">Bạn bè </Typography>
            </ListItem>
          </Link>
          <Link to="/groups">
            <ListItem button className="sidebar-content-item">
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
                alt="groups"
                width="28px"
                height="28px"
              />
              <Typography variant="subtitle1">Nhóm</Typography>
            </ListItem>
          </Link>
          <ListItem button className="sidebar-content-item">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
              alt="groups"
              width="28px"
              height="28px"
            />
            <Typography variant="subtitle1">Marketplace</Typography>
          </ListItem>
          <ListItem button className="sidebar-content-item">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
              alt="groups"
              width="28px"
              height="28px"
            />
            <Typography variant="subtitle1">Watch</Typography>
          </ListItem>
          <ListItem button onClick={Logout} className="sidebar-content-item">
            <ExitToAppIcon
              style={{
                width: "32px",
                height: "32px",
                marginRight: "10px",
              }}
            />
            <Typography variant="subtitle1">Logout</Typography>
          </ListItem>
          {moreContent && (
            <>
              <ListItem button className="sidebar-content-item">
                <img src={imgEvent} alt="groups" width="28px" height="28px" />
                <Typography variant="subtitle1">Sự kiện</Typography>
              </ListItem>
              <ListItem button className="sidebar-content-item">
                <img src={imgMemory} alt="groups" width="28px" height="28px" />
                <Typography variant="subtitle1">Kỷ niệm</Typography>
              </ListItem>
            </>
          )}

          {moreContent ? (
            <Box className="more" onClick={() => setMoreContent(false)}>
              <ExpandLessIcon className="btnmore" />
              <Typography>Ẩn bớt</Typography>
            </Box>
          ) : (
            <Box className="more" onClick={() => setMoreContent(true)}>
              <ExpandMoreIcon className="btnmore" />
              <Typography>Xem thêm</Typography>
            </Box>
          )}
        </Box>
        <Box className="sidebar-content-listgroup">
          <Box className="info1" style={{ padding: "0 10px" }}>
            <Typography>Lối tắt của bạn</Typography>
          </Box>
          <ListGroup img={imgDoanh} name={"Trường ĐH CNHN"} />
          <ListGroup img={imgHoa} name={"Phần mềm mã nguồn mở"} />
          <ListGroup img={imgHieu} name={"Khoa CNTT"} />
          <ListGroup img={imgHung} name={"Nghành KTPM"} />
          <ListGroup img={imgChien} name={"Group Example"} />
          {moreGroup && (
            <>
              <ListGroup img={imgDoanh} name={"Group 1"} />
              <ListGroup img={imgHoa} name={"Group 2"} />
            </>
          )}
          {moreGroup ? (
            <Box className="more" onClick={() => setMoreGroup(false)}>
              <ExpandLessIcon className="btnmore" />
              <Typography>Ẩn bớt</Typography>
            </Box>
          ) : (
            <Box className="more" onClick={() => setMoreGroup(true)}>
              <ExpandMoreIcon className="btnmore" />
              <Typography>Xem thêm</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
function ListGroup(props) {
  return (
    <ListItem button className="sidebar-content-item">
      <img src={props.img} alt="groups"></img>
      <Typography variant="subtitle1">{props.name}</Typography>
    </ListItem>
  );
}
export default Sidebar;
