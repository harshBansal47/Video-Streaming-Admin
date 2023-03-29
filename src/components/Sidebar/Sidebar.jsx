import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PersonIcon from "@mui/icons-material/Person";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Netflix Admin</span>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardRoundedIcon className="icon" />
            <span>Dasboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <PersonIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <Inventory2RoundedIcon className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <ViewStreamOutlinedIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningOutlinedIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">Usefull</p>
          <li>
            <BarChartRoundedIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <MonitorHeartOutlinedIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;