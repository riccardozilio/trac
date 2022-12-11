import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { Row, Input, Select, Col, Tabs, DatePicker, InputNumber } from "antd";
import dayjs from "dayjs";

const TracForm = (props) => {
  const dateFormat = "DD/MM/YYYY";
  const [newData, setNewData] = useState({ ...props.data[0], quantity: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) props.save(newData);
  }, [newData]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (props.index == -1) {
      setNewData({
        prodotto: props.product.prodotto,
        open: "",
        exp: "",
        lotto: "",
        quantity: 0,
      });
    } else {
      setNewData({
        ...newData,
        quantity: 0,
      });
    }
  }, [props.index]);

  const onChangeExp = (date, dateString) => {
    setNewData({ ...newData, exp: dateString });
  };

  const onChangeOpen = (date, dateString) => {
    setNewData({
      ...newData,
      open: dateString,
      rub: dayjs(dateString, dateFormat)
        .add(props.product.exp, "day")
        .format("DD/MM/YYYY"),
    });
  };

  const onNumberChange = (value) => {
    setNewData({ ...newData, quantity: value });
    console.log("index", props.index);
  };

  return (
    <>
      <Col
        xs={{ span: 24 }}
        lg={{ span: 18 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Row gutter={16} style={{ width: "100%" }}>
          <Col xs={{ span: 24 }}>
            {" "}
            <h1 style={{ marginBottom: 0 }}>{props.product.prodotto}</h1>
          </Col>
          <Col xs={{ span: 12 }}>
            <p>Data apertura</p>
            <DatePicker
              style={{ width: "100%" }}
              size="large"
              defaultValue={
                props.data[0] ? dayjs(props.data[0]?.open, dateFormat) : ""
              }
              format={dateFormat}
              onChange={onChangeOpen}
            />
          </Col>
          <Col xs={{ span: 12 }}>
            <p>Quantità</p>

            <InputNumber
              size="large"
              style={{ width: "100%" }}
              min={0}
              max={20}
              defaultValue={0}
              onChange={onNumberChange}
            />
          </Col>
          <Col xs={{ span: 12 }}>
            <p>Lotto</p>
            <Input
              size="large"
              onChange={(val) => {
                setNewData({ ...newData, lotto: val.target.value });
              }}
              style={{ width: "100%" }}
              placeholder="Lotto"
              defaultValue={props.data[0] ? props.data[0].lotto : ""}
            />
          </Col>
          <Col xs={{ span: 12 }}>
            <p>Scadenza</p>

            <DatePicker
              style={{ width: "100%" }}
              size="large"
              defaultValue={
                props.data[0] ? dayjs(props.data[0]?.exp, dateFormat) : ""
              }
              format={dateFormat}
              onChange={onChangeExp}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default TracForm;
