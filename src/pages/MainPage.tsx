import { useEffect, useState, useSyncExternalStore } from "react";
import Pages from "../components/pages";
import Table from "../components/table";
import "./MainPage.scss";

export default function MainPage() {
  const [theme, setTheme] = useState<"yellow" | "blue">("yellow");
  const [comp, setComp] = useState<"main" | "table" | "pages">("main");
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
            <li onClick={() => setComp("main")}>首页</li>
            <hr />
            <li onClick={() => setTheme("blue")}>深蓝</li>
            <li onClick={() => setTheme("yellow")}>橘黄</li>
            <hr />
            <li>修改密码</li>
            <hr />
            <li onClick={() => setComp("table")}>用户管理</li>
            <li onClick={() => setComp("pages")}>文章管理</li>
          </ul>
        </aside>
        <main style={{ width: "100%" }}>
          {(() => {
            switch (comp) {
              case "main":
                return <p>欢迎光临~</p>;
              case "table":
                return <Table />;
              case "pages":
                return <Pages />;
            }
          })()}
        </main>
      </div>
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: theme == "yellow" ? yellowDark : blueDark,
        }}
      >
        武汉理工大学
      </footer>
    </div>
  );
}
