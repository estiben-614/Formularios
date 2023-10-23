import { Button, Col, Form, InputNumber, Row, Space, Tabs, Typography } from "antd";
// import './App.css'

const onFinish = (values) => {
  values.recheckTime *= 5;
  values.vpdRanges.range0.offDuration *= 60;
  values.vpdRanges.range1.offDuration *= 60;
  values.vpdRanges.range2.offDuration *= 60;
  values.vpdRanges.range3.offDuration *= 60;
  values.vpdRanges.range4.offDuration *= 60;
  console.log(values);
};
const { useForm, Item } = Form;
const formLayout = {
  labelCol: { span: 16 },
  wrapperCol: { span: 8 },
};
const { Title } = Typography;

const formStyle = {
  width: "40%",
  margin: "0 auto",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const items = [
  {
    key: "1",
    label: "VPD Range 0",
    children: (
      <Row gutter={10}>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range0", "min"]}
            label="vpd Range 0 min "
            rules={[
              {
                required: true,
                type: "number",
                min: 0.7,
                max: 1,
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range0", "max"]}
            label="vpd Range 0 max "
            rules={[
              {
                required: true,
                type: "number",
                min: 0.7,
                max: 1,
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range0", "offDuration"]}
            label="offDuration"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range0", "mistingDuration"]}
            label="mistingDuration"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
      </Row>
    ),
  },
  {
    key: "2",
    label: "VPD Range 1",
    children: (
      <Row gutter={10}>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range1", "min"]}
            label="vpd Range 1 min "
            rules={[
              {
                required: true,
                type: "number",
                min: 0.7,
                max: 1,
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range1", "max"]}
            label="vpd Range 1 max "
            rules={[
              {
                required: true,
                type: "number",
                min: 0.7,
                max: 1,
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range1", "offDuration"]}
            label="offDuration"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range1", "mistingDuration"]}
            label="mistingDuration"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
      </Row>
    ),
  },
  {
    key: "3",
    label: "VPD Range 2",
    children: (
      <Row gutter={10}>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range2", "min"]}
            label="vpd Range 2 min "
            rules={[
              {
                required: true,
                type: "number",
                min: 0.7,
                max: 1,
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range2", "max"]}
            label="vpd Range 2 max "
            rules={[
              {
                required: true,
                type: "number",
                min: 0.7,
                max: 1,
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range2", "offDuration"]}
            label="offDuration"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range2", "mistingDuration"]}
            label="mistingDuration"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
      </Row>
    ),
  },
  {
    key: "4",
    label: "VPD Range 3",
    children: (
      <Row gutter={10}>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range3", "min"]}
            label="vpd Range 3 min "
            rules={[
              {
                required: true,
                type: "number",
                min: 0.7,
                max: 1,
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range3", "max"]}
            label="vpd Range 3 max "
            rules={[
              {
                required: true,
                type: "number",
                min: 0.7,
                max: 1,
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range3", "offDuration"]}
            label="offDuration"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range3", "mistingDuration"]}
            label="mistingDuration"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
      </Row>
    ),
  },
  {
    key: "5",
    label: "VPD Range 4",
    children: (
      <Row gutter={10}>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range4", "min"]}
            label="vpd Range 4 min "
            rules={[
              {
                required: true,
                type: "number",
                min: 0.7,
                max: 1,
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range4", "max"]}
            label="vpd Range 4 max "
            rules={[
              {
                required: true,
                type: "number",
                min: 0.7,
                max: 1,
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range4", "offDuration"]}
            label="offDuration"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
        <Col span={6}>
          <Item
            name={["vpdRanges", "range4", "mistingDuration"]}
            label="mistingDuration"
            rules={[
              {
                required: true,
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Item>
        </Col>
      </Row>
    ),
  },
];
const App = () => {
  const [form] = useForm();

  return (
    <div style={formStyle}>
      <Form form={form} onFinish={onFinish} layout="vertical" {...formLayout} validateMessages={validateMessages}>
        <Row justify="start">
          <Title level={4}>Threshold Parameters</Title>
        </Row>
        <Row>
          <Col span={12}>
            <Item
              name={["thresholdParameters", "temperatures", "min"]}
              label="Minimum temperature"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 22,
                  max: 33,
                },
              ]}
            >
              <InputNumber />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name={["thresholdParameters", "temperatures", "max"]}
              label="Maximum temperature"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 22,
                  max: 33,
                },
              ]}
            >
              <InputNumber />
            </Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Item
              name={["thresholdParameters", "humidities", "min"]}
              label="Humidities min"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 50,
                  max: 80,
                },
              ]}
            >
              <InputNumber />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name={["thresholdParameters", "humidities", "max"]}
              label="Humidities max"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 50,
                  max: 80,
                },
              ]}
            >
              <InputNumber />
            </Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Item
              name={["thresholdParameters", "light"]}
              label="Light"
              rules={[
                {
                  required: true,
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Item>
          </Col>
          <Col span={12}>
            <Item
              name={["thresholdParameters", "dissolvedOxygen"]}
              label="Dissolved Oxygen"
              rules={[
                {
                  required: true,
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Item>
          </Col>
        </Row>

        <Row justify="start">
          <Title level={4}>VPD Range</Title>
        </Row>
        <Row>
          <Col span={24}>
            <Tabs defaultActiveKey="1" items={items} tabBarGutter={80} />
          </Col>
        </Row>

        <Row justify="start">
          <Title level={4}>Additional settings</Title>
        </Row>

        <Row gutter={10}>
          <Col span={8}>
            <Item
              name={["recheckTime"]}
              label="Recheck Time"
              rules={[
                {
                  required: true,
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Item>
          </Col>
          <Col span={8}>
            <Item
              name={["valvesNumber"]}
              label="valvesNumber"
              rules={[
                {
                  required: true,
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Item>
          </Col>
          <Col span={8}>
            <Item
              name={["delayTime"]}
              label="delayTime"
              rules={[
                {
                  required: true,
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Item>
          </Col>
        </Row>

        <Row justify="center">
          <Space size={20}>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
          <Button type="primary" danger onClick={()=>form.resetFields()}>
            Reset values
          </Button>
          </Space>
        </Row>
      </Form>
    </div>
  );
};

export default App;
