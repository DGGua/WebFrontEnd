import { Button, Form, Input, Modal } from "antd";
import Search from "antd/lib/input/Search";
import { useEffect, useState } from "react";
import { UserService } from "../services/userService";
import { Table as AntTable } from "antd";
interface TableType {
  index: string;
  name: string;
  money: number;
  password: string;
  birthday: string;
  email: string;
  cao: "";
}
export default function Table() {
  const sendEdit = (record: TableType) => {
    UserService.update(record.name, record.password, record.email, record.birthday, record.money  )
    );
  };

  const edit = (record: TableType) => {
    Modal.info({
      title: "修改内容",
      content: (
        <Form>
          {Object.keys(record)}
          <Form.Item label="姓名" name={"name"}>
            <Input
              value={record.name}
              onChange={(event) => {
                record.name = event.target.value;
              }}
            />
          </Form.Item>
          <Form.Item label="邮箱" name={"email"}>
            <Input
              value={record.email}
              onChange={(event) => {
                record.email = event.target.value;
              }}
            />
          </Form.Item>
          <Form.Item label="密码" name={"password"}>
            <Input
              value={record.email}
              type="password"
              onChange={(event) => {
                record.password = event.target.value;
              }}
            />
          </Form.Item>
          <Form.Item label="余额" name={"money"}>
            <Input
              value={record.email}
              onChange={(event) => {
                record.money = Number.parseInt(event.target.value);
              }}
            />
          </Form.Item>
        </Form>
      ),
      onOk: () => {
        sendEdit(record);
      },
      onCancel: () => {
        setEditVisible(false);
      },
    });
  };
  const del = (record: TableType) => {};
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
      title: "学生密码",
      dataIndex: "password",
      key: "password",
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
      render: (_: any, record: TableType, index: number) => {
        return (
          <>
            <Button onClick={() => edit(record)}>编辑</Button>
            <Button onClick={() => del(record)}>删除</Button>
          </>
        );
      },
    },
  ];

  const [data, setData] = useState<TableType[]>([]);
  const [filteredData, setFilteredData] = useState<TableType[]>([]);
  const [filter, setFilter] = useState<string>("");
  useEffect(() => {
    UserService.list().then(({ data }) => {
      setData(
        data.data.map((user) => {
          return {
            index: user.userid,
            name: user.username,
            money: user.balance,
            password: user.userpwd,
            birthday: user.birthday,
            email: user.email ?? "",
            cao: "",
          };
        })
      );
    });
  }, []);
  useEffect(() => {
    setFilteredData(data.filter((val) => val.name.indexOf(filter) != -1));
  }, [data, filter]);
  return (
    <>
      <Search
        placeholder="input search text"
        value={filter}
        onChange={(val) => setFilter(val.target.value)}
        style={{ width: "200px", float: "right" }}
      />
      <AntTable columns={columns} dataSource={filteredData}></AntTable>
    </>
  );
}
