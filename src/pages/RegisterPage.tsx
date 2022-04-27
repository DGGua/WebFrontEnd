import { Button, DatePicker, Input } from "antd";
import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.scss";
export default function RegisterPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(moment());
  const navigate = useNavigate();
  const CheckRegister = () => {
    if (id.length == 0) {
      alert("id 不能为空");
    } else if (password.length < 8) {
      alert("password is too short");
    } else if (email.indexOf("@") == -1) {
      alert("email is not valid");
    } else {
      alert("register completed");
      navigate("/");
    }
  };

  return (
    <div>
      <h1>注册</h1>
      <div className="main-body-form">
        <Input
          placeholder="用户名"
          size="large"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></Input>
        <Input
          placeholder="密码"
          size="large"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input
          placeholder="电子邮箱"
          size="large"
          type="password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <DatePicker
          placeholder="请选择日期"
          value={date}
          onChange={(moment) => setDate(moment!)}
          size="large"
          style={{ width: "100%" }}
        ></DatePicker>
        <Button size="large" block type="primary" onClick={CheckRegister}>
          注册
        </Button>
      </div>
      <div className="main-footer">
        <Button block onClick={() => navigate("/")}>
          回到主界面
        </Button>
      </div>
    </div>
  );
}
