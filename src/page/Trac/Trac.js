import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Row, Input, Select, Col, Tabs, DatePicker, Button } from "antd";
import dayjs from "dayjs";
import moment from "moment";
import { useSearchParams } from "react-router-dom";

import {
  FolderOpenOutlined,
  SettingFilled,
  SmileFilled,
  UserOutlined,
} from "@ant-design/icons";
import TracForm from "./TracForm";

import {
  collection,
  doc,
  query,
  orderBy,
  limit,
  where,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase_config";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

const MyCard = styled(Col)`
  background-color: #ffff;
`;

const MyCardTitle = styled(Row)`
  display: flex;
  background-color: #9999;
  justify-content: space-between;
  color: #01579b;
`;

const Trac = () => {
  const dateFormat = "DD/MM/YYYY";
  const docRef = collection(db, "bar");

  const [operator, setOperator] = useState("");
  const [date, setDate] = useState("");
  const [bar, setBar] = useState({});
  const [last, setLast] = useState({});
  const [newData, setNewData] = useState([]);
  const [searchParams] = useSearchParams();
  const post = searchParams.get("position");
  const [ref, setRef] = useState(collection(db, post));

  useEffect(() => {
    getCaff();
  }, []);

  useEffect(() => {
    getLast();
  }, [post]);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
  };

  async function save() {
    await addDoc(ref, {
      name: `${post}- ${date}`,
      timestamp: moment(date).format("MM/DD/YYYY, h:mm:ss "),
      product: newData,
      operator: operator,
    });
    console.log("save", {
      name: `${post}- ${date}`,
      timestamp: moment(date).format("MM/DD/YYYY, h:mm:ss "),
      product: newData,
      operator: operator,
    });
  }

  async function getLast() {
    const q = query(ref, orderBy("timestamp", "desc"), limit(1));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const res = doc.data();
      console.log(res);
      setLast(res);
      setNewData(res.product);
    });
  }

  async function getCaff() {
    const data = await getDocs(docRef);
    const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setBar(res.filter((e) => e.name == post));
  }

  const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Row
        type="flex"
        style={{ backgroundColor: "#202327", overflowX: "hidden" }}
      >
        <MyCard xs={{ span: 24 }}>
          <MyCardTitle>
            <Col
              style={{ display: "flex", alignItems: "center", fontSize: 34 }}
            >
              <FolderOpenOutlined
                style={{
                  margin: 10,
                }}
              />

              <p>Tracciabilità</p>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 18,
                margin: 10,
              }}
            ></Col>
          </MyCardTitle>
          <Row style={{ padding: 20 }}>
            <Tabs
              size="large"
              defaultActiveKey="1"
              style={{ fontSize: 28, width: "100%" }}
            >
              <Tabs.TabPane tab="Operatore" key="1">
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    height: 400,
                  }}
                >
                  <Col xs={{ span: 24 }} lg={{ span: 8 }}>
                    <h2>Inserisci il Nome dell'operatore</h2>
                    <Input
                      onChange={(val) => {
                        setOperator(val.target.value);
                      }}
                      size="large"
                      placeholder="Tuo Nome"
                      prefix={<UserOutlined />}
                    />
                    <h2>Inserisci la data </h2>
                    <DatePicker
                      style={{ width: "100%" }}
                      size="large"
                      format={dateFormat}
                      onChange={onChange}
                    />
                  </Col>
                </Row>
              </Tabs.TabPane>

              {last.product && (
                <Tabs.TabPane
                  tab="Tracciabilità"
                  disabled={date.length <= 3 || operator.length <= 3}
                  key="3"
                >
                  <Row
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {bar[0]?.product.map((e) => {
                      const data = last?.product?.filter(
                        (p) => p?.prodotto == e?.prodotto
                      );
                      const index = last?.product.indexOf(data[0]);
                      return (
                        <TracForm
                          product={e}
                          data={data}
                          index={index}
                          save={(d) => {
                            if (last.product) {
                              const temp = newData;

                              const ix = temp.findIndex(
                                (i) => i.prodotto === d.prodotto
                              );
                              console.log(ix, d);

                              if (ix >= 0) {
                                temp.splice(ix, 1, d);
                                setNewData(temp);
                              } else {
                                temp.push(d);
                                setNewData(temp);
                              }
                              console.log("temp", temp);
                            }
                          }}
                        ></TracForm>
                      );
                    })}
                  </Row>
                  <Row
                    style={{
                      float: "left",
                      marginTop: 40,
                      marginBottom: 40,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={() => console.log(newData)}
                      style={{ width: 100 }}
                      size="large"
                    >
                      Annulla
                    </Button>
                    <Button
                      style={{ marginLeft: 20, width: 100 }}
                      type="primary"
                      size="arge"
                      onClick={() => save()}
                    >
                      Salva
                    </Button>
                  </Row>
                </Tabs.TabPane>
              )}
            </Tabs>
          </Row>
        </MyCard>
      </Row>
    </>
  );
};

export default Trac;
