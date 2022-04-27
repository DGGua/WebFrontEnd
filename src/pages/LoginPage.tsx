import { Button, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const CheckLogin = () => {
    if (id === "123" && password === "123") {
      navigate("/main");
    } else {
      alert("用户名或密码错误");
    }
  };

  return (
    <div>
      <h1>登录</h1>
      <div className="main-body">
        <div className="main-body-buttons">
          <Button size="large" block type="ghost">
            QQ登录
          </Button>
          <Button size="large" block danger>
            微信登录
          </Button>
          <Button size="large" block type="primary">
            支付宝登录
          </Button>
        </div>
        <div className="main-body-gap">or</div>
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
          <Button size="large" block type="primary" onClick={CheckLogin}>
            登录
          </Button>
        </div>
      </div>
      <div className="main-footer">
        <Button block onClick={() => navigate("/register")}>
          注册
        </Button>
        <Button block onClick={() => navigate("/forget")}>
          忘记密码
        </Button>
      </div>
    </div>
  );
}
