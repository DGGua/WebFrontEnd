import { Button, Form, Input, InputNumber, Modal } from "antd";
import Search from "antd/lib/input/Search";
import { useEffect, useState } from "react";
import { UserService } from "../services/userService";
import { Table as AntTable } from "antd";
import moment from "moment";
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
    UserService.update(
      record.name,
      record.password,
      record.email,
      moment(record.birthday),
      record.money
    );
  };

  const edit = (record: TableType) => {
    Modal.info({
      title: "修改内容",
      content: (
        <Form>
          <Form.Item label="姓名">
            <Input defaultValue={record.name} />
          </Form.Item>
          <Form.Item label="邮箱">
            <Input defaultValue={record.email} />
          </Form.Item>
          <Form.Item label="密码">
            <Input defaultValue={record.password} />
          </Form.Item>
          <Form.Item label="余额">
            <InputNumber defaultValue={record.money} />
          </Form.Item>
        </Form>
      ),
      onOk: () => {
        // sendEdit(re!);
      },
    });
  };
  const del = (record: TableType) => {
    setData((data) => data.filter((item) => item.index !== record.index));
  };
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
