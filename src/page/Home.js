import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Card, Col, Progress } from "antd";
import { CoffeeOutlined, SettingFilled } from "@ant-design/icons";
import { red, green } from "@ant-design/colors";
import { NavLink } from "react-router-dom";
import { useNavigate, createSearchParams } from "react-router-dom";

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
import { db } from "../firebase_config";

const CardRow = styled(Row)`
  padding: 15px;
  min-height: 100vh;
  width: 100%;
  display: flex;
  color: black;
  @media only screen and (max-width: 768px) {
    /* For everything bigger than 768px */
    width: 100%;
  }
`;
const MyCard = styled(Row)`
  height: fit-content;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  -webkit-box-shadow: 5px 5px 10px 0px #949494;
  -moz-box-shadow: 5px 5px 10px 0px #949494;
  -o-box-shadow: 5px 5px 10px 0px #949494;
  box-shadow: 5px 5px 10px 0px #949494;
`;

const RowShadow = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 5px 0px #949494;
  -moz-box-shadow: 2px 2px 5px 0px #949494;
  -o-box-shadow: 2px 2px 5px 0px #949494;
  box-shadow: 2px 2px 5px 0px #949494;
`;

const MyCardTitle = styled(Row)`
  display: flex;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  justify-content: space-between;
  color: white;
`;

const Home = () => {
  const navigate = useNavigate();
  const docRef = collection(db, "caffetteria");
  const [bar, setBar] = useState([]);

  useEffect(() => {
    // getCaff();
  }, []);

  console.log("bar", bar);
  const a = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    ,
    1,
    1,
    1,
    ,
    1,
    1,
    1,
    ,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
  ];

  async function getCaff() {
    const data = await getDocs(docRef);
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setBar(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  return (
    <>
      <Row
        type="flex"
        style={{ backgroundColor: "#F1F5F9", paddingBottom: 150 }}
      >
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Row style={{ padding: 15 }}>
            <Col xs={{ span: 24 }}>
              <MyCard>
                <MyCardTitle
                  style={{ backgroundColor: "#01579b" }}
                  onClick={() => {
                    navigate("/caffetteria");
                  }}
                >
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 18,
                      marginLeft: 10,
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>Ultime tracciabilità</p>
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
                  style={{
                    width: "100%",
                    marginBottom: 10,
                  }}
                >
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 12 }}
                    style={{ padding: 10, width: "100%" }}
                  >
                    <p style={{ fontWeight: "bold" }}>Caffetteria</p>
                    <Col>
                      <RowShadow>
                        <span>Marco</span>
                        <span> 08/12/2022</span>
                      </RowShadow>
                    </Col>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 12 }}
                    style={{ padding: 10, width: "100%" }}
                  >
                    <p style={{ fontWeight: "bold" }}>Concession</p>
                    <Col>
                      <RowShadow>
                        <span>Marco</span>
                        <span> 08/12/2022</span>
                      </RowShadow>
                    </Col>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 12 }}
                    style={{ padding: 10, width: "100%" }}
                  >
                    <p style={{ fontWeight: "bold" }}>Mezzanino</p>
                    <Col>
                      <RowShadow>
                        <span>Marco</span>
                        <span> 08/12/2022</span>
                      </RowShadow>
                    </Col>
                  </Col>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 12 }}
                    style={{ padding: 10, width: "100%" }}
                  >
                    <p style={{ fontWeight: "bold" }}>Grom</p>
                    <Col>
                      <RowShadow>
                        <span>Marco</span>
                        <span> 08/12/2022</span>
                      </RowShadow>
                    </Col>
                  </Col>
                </Row>
              </MyCard>
            </Col>
            <Col xs={{ span: 24 }}>
              <MyCard>
                <MyCardTitle
                  style={{ backgroundColor: "#01579b" }}
                  onClick={() => {
                    navigate("/caffetteria");
                  }}
                >
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 18,
                      marginLeft: 10,
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>Ultime tracciabilità</p>
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
                <Row style={{ width: "100%", marginBottom: 10 }}>
                  {a.map((a) => {
                    return (
                      <>
                        {" "}
                        <Col
                          xs={{ span: 24 }}
                          lg={{ span: 12 }}
                          style={{ padding: 10, width: "100%" }}
                        >
                          <RowShadow style={{}}>
                            <span>Nachos</span>
                            <span> Lotto: NT67654</span>
                            <span> scadenza: 08/12/2022</span>
                          </RowShadow>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </MyCard>
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <CardRow gutter={{ xs: 0, lg: 16 }} justify="space-around">
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <MyCard>
                <MyCardTitle
                  style={{ backgroundColor: "#01579b" }}
                  onClick={() => {
                    navigate("/caffetteria");
                  }}
                >
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 18,
                      marginLeft: 10,
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>Ultime tracciabilità</p>
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

                <Row style={{ padding: 10 }}>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Popcorn salato</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={70}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Pane big</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={60}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Nachos</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={80}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Chips</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={30}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Popcorn dolce</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={90}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                </Row>
              </MyCard>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <MyCard>
                <MyCardTitle
                  style={{ backgroundColor: "#01579b" }}
                  onClick={() => {
                    navigate("/caffetteria");
                  }}
                >
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 18,
                      marginLeft: 10,
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>Ultime tracciabilità</p>
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

                <Row style={{ padding: 10 }}>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Popcorn salato</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={70}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Pane big</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={60}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Nachos</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={80}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Chips</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={30}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Popcorn dolce</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={90}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                </Row>
              </MyCard>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <MyCard>
                <MyCardTitle
                  style={{ backgroundColor: "#01579b" }}
                  onClick={() => {
                    navigate("/caffetteria");
                  }}
                >
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 18,
                      marginLeft: 10,
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>Ultime tracciabilità</p>
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

                <Row style={{ padding: 10 }}>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Popcorn salato</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={70}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Pane big</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={60}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Nachos</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={80}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Chips</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={30}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Popcorn dolce</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={90}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                </Row>
              </MyCard>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <MyCard>
                <MyCardTitle
                  style={{ backgroundColor: "#01579b" }}
                  onClick={() => {
                    navigate("/caffetteria");
                  }}
                >
                  <Col
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: 18,
                      marginLeft: 10,
                    }}
                  >
                    <p style={{ fontWeight: "bold" }}>Ultime tracciabilità</p>
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

                <Row style={{ padding: 10 }}>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Popcorn salato</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={70}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Pane big</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={60}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Nachos</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={80}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Chips</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={30}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: 20 }}>Popcorn dolce</p>
                      <span> 11/12/2022</span>
                    </div>
                    <Progress
                      style={{ width: "100%" }}
                      percent={90}
                      status="exception"
                      showInfo={false}
                      trailColor="#a0d6ff"
                      strokeColor="#004982"
                    />
                  </Col>
                </Row>
              </MyCard>
            </Col>
          </CardRow>
        </Col>

        <h1
          onClick={() => {
            navigate({
              pathname: "/tracciabilità",
              search: createSearchParams({
                position: "caffetteria",
              }).toString(),
            });
          }}
        >
          trac
        </h1>
      </Row>
    </>
  );
};

export default Home;
