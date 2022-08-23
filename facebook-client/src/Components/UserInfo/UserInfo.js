import { Box, Button, Typography } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import "./UserInfo.scss";
function UserInfo() {
  return (
    <Box className="userInfo">
      <Typography variant="h6" className="title">
        Giới thiệu
      </Typography>
      <Button variant="contained" fullWidth>
        Thêm tiểu sử
      </Button>
      <Box>
        <Box display="flex" marginY="15px">
          <WorkIcon />
          <Typography variant="subtitle1">
            Works at{" "}
            <a style={{ fontWeight: "bold" }} href="#">
              Đại học công nghiệp Hà Nội (HAUI)
            </a>
          </Typography>
        </Box>
        <Box display="flex" marginY="15px">
          <WorkIcon />
          <Typography variant="subtitle1">
            Đã học tại{" "}
            <a style={{ fontWeight: "bold" }} href="#">
              THPT Việt Yên 1 - Việt Yên - Bắc Giang
            </a>
          </Typography>
        </Box>
        <Box display="flex" marginY="15px">
          <HomeWorkIcon />
          <Typography variant="subtitle1">
            Đến từ{" "}
            <a style={{ fontWeight: "bold" }} href="#">
              Bắc Giang
            </a>
          </Typography>
        </Box>
      </Box>
      <Button variant="contained" fullWidth>
        Chỉnh sửa chi tiết
      </Button>
      <Button variant="contained" fullWidth>
        Thêm sở thích
      </Button>
      <Button variant="contained" fullWidth>
        Chỉnh sửa phần đáng chú ý
      </Button>
    </Box>
  );
}

export default UserInfo;
