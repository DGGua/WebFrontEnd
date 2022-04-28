import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Table from "../components/table";
import { UserService } from "../services/userService";
import "./MainPage.scss";

export default function MainPage() {
  const [theme, setTheme] = useState<"yellow" | "blue">("yellow");
  const blueDark = "blue";
  const yellowDark = "orange";
  const blueLight = "cornflowerblue";
  const yellowLight = "yellow";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header>
        <h1
          style={{
            padding: "20px",
            margin: 0,
            backgroundColor: theme == "yellow" ? yellowDark : blueDark,
          }}
        >
          WEB技术课程演示系统
        </h1>
      </header>
      <div style={{ display: "flex", flexGrow: 1 }}>
        <aside
          style={{
            backgroundColor: theme == "yellow" ? yellowLight : blueLight,
            width: "300px",
          }}
        >
          <ul>
            <li>首页</li>
            <hr />
            <li onClick={() => setTheme("blue")}>深蓝</li>
            <li onClick={() => setTheme("yellow")}>橘黄</li>
            <hr />
            <li>修改密码</li>
            <hr />
            <li>用户管理</li>
            <li>文章管理</li>
          </ul>
        </aside>
        <main style={{ width: "100%" }}>
          <Table />
        </main>
      </div>
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: theme == "yellow" ? yellowDark : blueDark,
        }}
      >
        武汉理工大学 李东哲
      </footer>
    </div>
  );
}
