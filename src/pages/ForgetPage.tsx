import { Button, DatePicker, Input } from "antd";
import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgetPage.scss";
export default function ForgetPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [date, setDate] = useState(moment());
  const navigate = useNavigate();
  const CheckChange = () => {
    if (id.length == 0) {
      alert("id cannot be empty");
    } else if (password != passwordRepeat) {
      alert("password is not equal to passwordRepeat");
    } else {
      alert("configure completed");
      navigate("/");
    }
  };

  return (
    <div>
      <h1>忘记密码</h1>
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
          placeholder="重复密码"
          size="large"
          type="password"
          value={passwordRepeat}
          onChange={(e) => setPasswordRepeat(e.target.value)}
        ></Input>
        <Button size="large" block type="primary" onClick={CheckChange}>
          修改密码
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
