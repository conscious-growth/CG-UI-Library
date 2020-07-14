import * as React from "react";
import {
  Layout,
  Button,
  PageHeader,
  Tabs,
  InputNumber,
  Input,
  DatePicker,
  Row,
  Col,
  Table,
  Form,
  Select,
} from "antd";
import { UploadOutlined, FilterOutlined } from "@ant-design/icons";

import "./style.css";

const { Content } = Layout;
const { TabPane } = Tabs;
const { Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    sorter: true,
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

export default () => {
  const [formValues] = Form.useForm();
  const pendingTransactions = 2;
  const [filtersExpanded, setFiltersExpanded] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pagination, setPagination] = React.useState({
    current: 1,
    pageSize: 7,
  });

  const getRandomuserParams = (params) => {
    return `?page=${params.pagination.current}&results=${params.pagination.pageSize}`;
  };

  const fetchData = (params = {}) => {
    setLoading(true);
    const url = "https://randomuser.me/api" + getRandomuserParams(params);
    fetch(url, {
      method: "get",
      type: "json",
    }).then((resp) => {
      resp.json().then((data) => {
        setData(data.results);
        setLoading(false);
        setPagination({
          ...pagination,
          total: 50,
        });
      });
    });
  };

  const handleTableChange = (pagination, filters, sorter) => {
    fetchData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
    setPagination(pagination);
  };

  const handleFilterChange = (event) => {};

  React.useEffect(() => {
    fetchData({ pagination });
  }, []);

  return (
    <section className="example">
      <Layout>
        <Content>
          <PageHeader title={"Transactions"} />
          <main style={{ padding: "0 30px" }}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Past" key="1">
                <div className="filters">
                  <Form
                    form={formValues}
                    style={{ margin: "10px 0" }}
                    onChange={handleFilterChange}
                    layout="vertical"
                  >
                    <Row gutter={[16, 16]}>
                      <Col flex={3}>
                        <Search
                          enterButton={false}
                          placeholder="Search by IBAN, reference, Beneficiary..."
                          name="search"
                        />
                      </Col>
                      <Col flex={2} style={{ textAlign: "right" }}>
                        <Button type="primary">
                          <UploadOutlined /> Export
                        </Button>
                      </Col>
                    </Row>
                    <div className="filter-wrapper">
                      <Form.Item
                        label={filtersExpanded ? "Date range" : ""}
                        name="dates"
                      >
                        <RangePicker />
                      </Form.Item>
                      {filtersExpanded && (
                        <>
                          <Form.Item label="Users" name="users">
                            <Select
                              defaultValue="all"
                              style={{ minWidth: "240px" }}
                            >
                              <Option value="all">All users</Option>
                              <Option value="Lucy">Lucy</Option>
                              <Option value="Jack">Jack</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="Method" name="method">
                            <Select
                              defaultValue="all"
                              style={{ minWidth: "210px" }}
                            >
                              <Option value="all">All</Option>
                              <Option value="transaction">Transaction</Option>
                              <Option value="card">Card</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="Min. amount" name="min">
                            <InputNumber
                              style={{ minWidth: "120px" }}
                              placeholder="0,0"
                              step="1000"
                              min="0"
                              formatter={(value) => {
                                return value
                                  ? parseFloat(value).toLocaleString("DE", {
                                      minimumFractionDigits: 1,
                                      maximumFractionDigits: 1,
                                    })
                                  : undefined;
                              }}
                              parser={(value) =>
                                parseFloat(
                                  value
                                    .replace(/(\.)/g, "")
                                    .replace(/(\,)/g, ".")
                                )
                              }
                            />{" "}
                            €
                          </Form.Item>
                          <Form.Item label="Max. amount" name="max">
                            <InputNumber
                              style={{ minWidth: "120px" }}
                              placeholder="0,0"
                              step="1000"
                              min="0"
                              formatter={(value) => {
                                return value
                                  ? parseFloat(value).toLocaleString("DE", {
                                      minimumFractionDigits: 1,
                                      maximumFractionDigits: 1,
                                    })
                                  : undefined;
                              }}
                              parser={(value) =>
                                parseFloat(
                                  value
                                    .replace(/(\.)/g, "")
                                    .replace(/(\,)/g, ".")
                                )
                              }
                            />{" "}
                            €
                          </Form.Item>
                          <Form.Item label="Category" name="category">
                            <Select
                              defaultValue="all"
                              style={{ minWidth: "210px" }}
                            >
                              <Option value="all">All</Option>
                              <Option value="food">Food</Option>
                              <Option value="office">Office Supplies</Option>
                              <Option value="Travel">Travel</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="Status" name="status">
                            <Select
                              defaultValue="all"
                              style={{ minWidth: "210px" }}
                            >
                              <Option value="all">All</Option>
                              <Option value="success">Success</Option>
                              <Option value="failed">Failed</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item
                            label="With/ without attachment"
                            name="attachment"
                          >
                            <Select
                              defaultValue="all"
                              style={{ minWidth: "210px" }}
                            >
                              <Option value="all">All</Option>
                              <Option value="with">With</Option>
                              <Option value="without">Without</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item label="With/ without notes" name="notes">
                            <Select
                              defaultValue="all"
                              style={{ minWidth: "210px" }}
                            >
                              <Option value="all">All</Option>
                              <Option value="with">With</Option>
                              <Option value="without">Without</Option>
                            </Select>
                          </Form.Item>
                        </>
                      )}
                      <Form.Item>
                        <Button
                          type={filtersExpanded ? "primary" : ""}
                          onClick={() => setFiltersExpanded(!filtersExpanded)}
                        >
                          <FilterOutlined /> Filter
                        </Button>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
                <div className="transactions-table"></div>
                <Row>
                  <Col span={24}>
                    <Table
                      rowSelection={{
                        type: "checkbox",
                        // ...rowSelection,
                      }}
                      columns={columns}
                      rowKey={(record) => record.login.uuid}
                      dataSource={data}
                      pagination={pagination}
                      loading={loading}
                      onChange={handleTableChange}
                    />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab={`Scheduled (${pendingTransactions})`} key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </main>
        </Content>
      </Layout>
    </section>
  );
};
