import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col, Progress } from "antd";
import { CoffeeOutlined, SettingFilled, SmileFilled } from "@ant-design/icons";
import { db } from "../firebase_config";
import dayjs from "dayjs";

import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";

const MyCard = styled(Col)`
  background-color: #393d42;
  border-radius: 10px;
  color: white;
`;

const MyCardTitle = styled(Row)`
  display: flex;
  background-color: #febc2c;
  justify-content: space-between;
`;

const Mezzanino = () => {
  const barRef = collection(db, "mezzanino");
  const [last, setLast] = useState({});
  const dateFormat = "DD/MM/YYYY";

  useEffect(() => {
    // getCaff();
    getLast();
  }, []);

  // async function getCaff() {
  //   const data = await getDocs(docRef);
  //   console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   setPositions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // }

  async function getLast() {
    const q = query(barRef, orderBy("timestamp", "desc"), limit(1));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const res = doc.data();
      setLast(res);
    });
  }

  const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
              <CoffeeOutlined
                style={{
                  margin: 10,
                }}
              />
              <p>Mezzanino</p>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 18,
                margin: 10,
              }}
            >
              <SettingFilled />
            </Col>
          </MyCardTitle>
          <Row
            gutter={48}
            style={{
              padding: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {last?.product?.map((e) => {
              const w = dayjs();
              const now = dayjs(w, dateFormat);
              const open = dayjs(e.open, dateFormat);
              const rub = dayjs(e.rub, dateFormat);
              const rubNow = rub.diff(now, "day");
              const rubOpen = rub.diff(open, "day");
              const dif = rubOpen - rubNow - 1;

              const percent = (100 * dif) / rubOpen;

              console.log("prox", now, rubNow, rubOpen, percent);
              return (
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 8 }}
                  style={{
                    marginBottom: 40,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ fontSize: 20, fontWeight: "bold" }}>
                      {e.prodotto}
                    </p>
                    <span> {rubNow + 1} giorni</span>
                  </div>
                  <Progress
                    style={{ width: "100%" }}
                    percent={percent}
                    status="exception"
                    showInfo={false}
                    trailColor="#999999"
                    strokeColor="#FEBC2C"
                  />
                  <Col
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "center",
                      marginTop: 10,
                      padding: 0,
                    }}
                  >
                    <span>aperto il: {e.open}</span>
                    <span>scade il: {e.exp}</span>
                    <span>lotto N.: {e.lotto}</span>
                    <span>da buttare: {e.rub}</span>
                  </Col>
                </Col>
              );
            })}
          </Row>
          <h1
            style={{
              margin: 10,
            }}
          >
            Ultime 10 tracciabilità
          </h1>
          <Row
            gutter={16}
            style={{
              padding: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {ar.map((e) => {
              return (
                <Col xs={{ span: 24 }} lg={{ span: 8 }} style={{}}>
                  <div
                    style={{
                      backgroundColor: "#999999",
                      padding: 10,
                      marginBottom: 10,
                      borderRadius: 5,
                      fontSize: 18,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>1029</p>
                    <p>06/12/2022</p>
                    <SmileFilled />
                  </div>
                </Col>
              );
            })}
          </Row>
        </MyCard>
      </Row>
    </>
  );
};

export default Mezzanino;
