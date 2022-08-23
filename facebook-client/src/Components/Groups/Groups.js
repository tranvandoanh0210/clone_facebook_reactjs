import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import imgHAUI from "../../Assets/images/imgHAUI.jpg";
import { Button } from "@material-ui/core";

const Groups = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar></Sidebar>
        <div
          className="container"
          style={{
            margin: "auto",
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "3fr 3fr 3fr",
            gap: "10px",
            backgroundColor: "#F0F2F5",
            color: "Black",
          }}
        >
          <GroupsItem></GroupsItem>
          <GroupsItem></GroupsItem>
          <GroupsItem></GroupsItem>
          <GroupsItem></GroupsItem>
          <GroupsItem></GroupsItem>
          <GroupsItem></GroupsItem>
        </div>
      </div>
    </div>
  );
};
function GroupsItem() {
  return (
    <div
      style={{
        border: "1px solid #F0F2F5",
        padding: "10px",
        background: "#fff",
      }}
    >
      <img src={imgHAUI} alt="" className="img" width="300px" height="" />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            margin: "10px 0",
            fontWeight: "bold",
          }}
        >
          Nhóm 1 - Open Source
        </div>
        <Button fullWidth variant="contained" color="primary">
          Tham gia nhóm
        </Button>
      </div>
    </div>
  );
}
export default Groups;
