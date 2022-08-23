import { Box, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./Story.scss";
import { useContext } from "react";
import { AppContenxt } from "../../ContextApi/AppContext";
import imgDoanh from "../../Assets/images/avt.jpg";
import imgHoa from "../../Assets/images/imgHoa.jpg";
import imgChien from "../../Assets/images/profile.jpeg";
import imgHieu from "../../Assets/images/imgHieu.jpg";
import imgHung from "../../Assets/images/imgHung.jpg";
const Story = () => {
  const { UserGState } = useContext(AppContenxt);
  return (
    <Box className="Stories" display="flex" justifyContent="center">
      <Box className="story noStory">
        <img
          src={UserGState.info.profile_pic}
          alt="profile"
          className="storyImg"
        />
        <Box
          className="Add"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <AddIcon />
        </Box>
        <p className="title ">Tạo tin</p>
      </Box>
      <StoryItem
        srcImgAvt={imgDoanh}
        userName="Trần Văn Doanh"
        srcImgStory={imgDoanh}
      ></StoryItem>
      <StoryItem
        srcImgAvt={imgHoa}
        userName="Nguyễn Danh Hòa"
        srcImgStory={imgHoa}
      ></StoryItem>
      <StoryItem
        srcImgAvt={imgHieu}
        userName="Nguyễn Quang Hiếu"
        srcImgStory={imgHieu}
      ></StoryItem>
      <StoryItem
        srcImgAvt={imgChien}
        userName="Phạm Duy Chiến"
        srcImgStory={imgChien}
      ></StoryItem>
      <StoryItem
        srcImgAvt={imgHung}
        userName="Mai Ngọc Hưng"
        srcImgStory={imgHung}
      ></StoryItem>
    </Box>
  );
};
const StoryItem = (props) => {
  return (
    <Box className="story">
      <img className="storyImg" src={props.srcImgStory} width="100%" alt="" />
      <Typography className="title" variant="body1">
        {props.userName}
      </Typography>
      <img
        src={props.srcImgAvt}
        alt="username"
        width="30px"
        height="30px"
        className="userImg"
      />
    </Box>
  );
};
export default Story;
