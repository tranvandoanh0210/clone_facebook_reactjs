import { Box, Typography } from "@material-ui/core";
import imgDoanh from "../../Assets/images/avt.jpg";
import imgHoa from "../../Assets/images/imgHoa.jpg";
import imgChien from "../../Assets/images/profile.jpeg";
import imgHieu from "../../Assets/images/imgHieu.jpg";
import imgHung from "../../Assets/images/imgHung.jpg";
import "./Friends.scss";
const Friends = () => {
  return (
    <Box className="Friends">
      <Box
        className="title"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        paddingY="10px"
      >
        <Box>
          <Typography variant="h6">Bạn bè</Typography>
          <Typography variant="caption">5 người bạn</Typography>
        </Box>
        <Typography variant="subtitle2" color="primary">
          Xem tất cả bạn bè
        </Typography>
      </Box>
      <Box
        className="Content"
        sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        <Box display="flex" flexDirection="column">
          <img src={imgDoanh} alt="friendName" />
          <Typography variant="caption">Trần Văn Doanh</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <img src={imgHoa} alt="friendName" />
          <Typography variant="caption">Nguyễn Danh Hòa</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <img src={imgHieu} alt="friendName" />
          <Typography variant="caption">Nguyễn Quang Hiếu</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <img src={imgChien} alt="friendName" />
          <Typography variant="caption">Phạm Duy Chiến</Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <img src={imgHung} alt="friendName" />
          <Typography variant="caption">Mai Ngọc Hưng</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Friends;
