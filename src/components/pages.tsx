import { List, Modal } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";
import { Paper } from "../models/UserModel";
import { PaperService } from "../services/userService";

export default function Pages() {
  const [pagesList, setPagesList] = useState<Paper[]>([
    {
      paperid: "1519487668056596481",
      papername: "string",
      userid: "123",
      contentid: "1519487667595223042",
    },
    {
      paperid: "1519487698247196674",
      papername: "testupload",
      userid: "123",
      contentid: "1519487697982955522",
    },
    {
      paperid: "1519487907085787137",
      papername: "abcd",
      userid: "123",
      contentid: "1519487906817351682",
    },
  ]);
  const [paper, setPaper] = useState("");
  const [page, setPage] = useState(1);
    // useEffect(() => {
    //   PaperService.list(page).then((res) => setPagesList(res.data.data));
    // }, [page]);

  function handleClick(index: number) {
    Modal.info({
      title: "详情",
      content: (
        <TextArea
          value={paper}
          onChange={(event) => {
            setPaper(event.target.value);
          }}
        ></TextArea>
      ),
      onOk: () => {
      },
    });
  }
  return (
    <>
      <List
        dataSource={pagesList}
        renderItem={(item, index) => (
          <List.Item onClick={() => handleClick(index)}>
            <p>{item.papername}</p>
          </List.Item>
        )}
      ></List>
    </>
  );
}
