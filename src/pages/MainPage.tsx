import { Button, Table } from "antd";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./MainPage.scss";

export default function MainPage() {
  const [theme, setTheme] = useState<"yellow" | "blue">("yellow");
  const blueDark = "blue";
  const yellowDark = "orange";
  const blueLight = "cornflowerblue";
  const yellowLight = "yellow";

  const columns = [
    {
      title: "",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "学生姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "学生邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "学生生日",
      dataIndex: "birth",
      key: "birth",
    },

    {
      title: "学生余额",
      dataIndex: "money",
      key: "money",
    },
    {
      title: "操作",
      dataIndex: "cao",
      key: "cao",
      render: () => (
        <>
          <Button>编辑</Button>
          <Button>删除</Button>
        </>
      ),
    },
  ];

  const data = [
    {
      index: "1",
      name: "John Brown",
      money: 32,
      birthday:"2021-12-12",
      email: "dg_gua@foxmail.com",
      cao: "",
    },
    {
      index: "2",
      name: "Jim Green",
      money: 42,
      birthday:"2021-12-12",
      email: "dg_gua@foxmail.com",
      cao: "",
    },
    {
      index: "3",
      name: "Joe Black",
      money: 32,
      birthday:"2021-12-12",
      email: "dg_gua@foxmail.com",
      cao: "",
    },
  ];
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
        <main>
          <Table columns={columns} dataSource={data}></Table>
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
