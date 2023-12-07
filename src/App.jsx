import {
  Button,
  Col,
  Form,
  InputNumber,
  Row,
  Space,
  Tabs,
  Typography,
} from "antd";
import { map } from "lodash";
import { thresholdArray } from "./utils/thresholdArray";
import { vpdArray } from "./utils/vpdArray";
import { addSettingsArray } from "./utils/addSettingsArray";
import { onFinish } from "./utils/onFinish";

const { useForm, Item } = Form;

const { Title } = Typography;

const validateMessages = {
  required: "${label} es obligatorio!",
  number: {
    range: "${label} debe ser un número entre ${min} y ${max}",
  },
};

const App = () => {
  const [form] = useForm();
  return (
    <Form
      form={form}
      onFinish={onFinish}
      validateMessages={validateMessages}
      layout="vertical"
    >
      <Row
        gutter={20}
        style={{
          maxWidth: 1300,
          margin: "auto",
        }}
      >
        <Col flex="1 1 100%">
          <Title level={4}>Threshold Parameters</Title>
        </Col>

        {map(thresholdArray, (item) => {
          const { name, label, rules } = item;
          return (
            <>
              <Col flex="1 1 50%">
                <Item name={name} label={label} rules={rules}>
                  <InputNumber
                    size="large"
                    style={{
                      width: "100%",
                    }}
                  />
                </Item>
              </Col>
            </>
          );
        })}

        <Col flex="1 1 100%">
          <Title level={4}>VPD Range</Title>
        </Col>

        {
          <Tabs
            defaultActiveKey="1"
            tabBarGutter={80}
            style={{
              margin: "auto",
            }}
            items={map(vpdArray, (item) => {
              const { key, label, min, max, offDuration, mistingDuration } =
                item;
              return {
                key,
                label,
                children: (
                  <>
                    <Row gutter={20}>
                      <Col flex="1 1 50%">
                        <Item name={min.name} label={min.label} rules={min.rules}>
                          <InputNumber
                            size="large"
                            style={{
                              width: "100%",
                            }}
                          />
                        </Item>
                      </Col>

                      <Col flex="1 1 50%">
                        <Item name={max.name} label={max.label} rules={max.rules}>
                          <InputNumber
                            size="large"
                            style={{
                              width: "100%",
                            }}
                          />
                        </Item>
                      </Col>

                      <Col flex="1 1 50%">
                        <Item name={offDuration.name} label={offDuration.label} rules={offDuration.rules}>
                          <InputNumber
                            size="large"
                            style={{
                              width: "100%",
                            }}
                          />
                        </Item>
                      </Col>

                      <Col flex="1 1 50%">
                        <Item
                          name={mistingDuration.name}
                          label={mistingDuration.label}
                          rules={mistingDuration.rules}
                        >
                          <InputNumber
                            size="large"
                            style={{
                              width: "100%",
                            }}
                          />
                        </Item>
                      </Col>
                    </Row>
                  </>
                ),
              };
            })}
          ></Tabs>
        }

        <Col flex="1 1 100%">
          <Title level={4}>Additional settings</Title>
        </Col>

        {map(addSettingsArray, (item) => {
          const { name, label, rules } = item;
          return (
            <>
              <Col flex="1 1 50%">
                <Item name={name} label={label} rules={rules}>
                  <InputNumber
                    size="large"
                    style={{
                      width: "100%",
                    }}
                  />
                </Item>
              </Col>
            </>
          );
        })}
      </Row>

      <Row justify="center">
        <Space size={20}>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
          <Button type="primary" danger onClick={() => form.resetFields()}>
            Reset values
          </Button>
        </Space>
      </Row>
    </Form>
  );
};

export default App;
