import { Box, Typography } from "@material-ui/core";
import imgDoanh from "../../Assets/images/avt.jpg";
import imgHoa from "../../Assets/images/imgHoa.jpg";
import imgChien from "../../Assets/images/profile.jpeg";
import imgHieu from "../../Assets/images/imgHieu.jpg";
import imgHung from "../../Assets/images/imgHung.jpg";
import "./Photos.scss";
function Photos() {
  return (
    <Box className="PhotosSec">
      <Box
        className="title"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingY="10px"
      >
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Ảnh
        </Typography>
        <Typography variant="subtitle2" color="primary">
          Xem tất cả ảnh
        </Typography>
      </Box>
      <Box
        className="Photos"
        sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <img src={imgDoanh} alt="userPic" />
        <img src={imgHoa} alt="userPic" />
        <img src={imgChien} alt="userPic" />
        <img src={imgHieu} alt="userPic" />
        <img src={imgHung} alt="userPic" />
      </Box>
    </Box>
  );
}

export default Photos;
