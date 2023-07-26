/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || "prod";

const mock_domain = "https://www.fastmock.site";
const mockId = "3ee8e1568e785e63dbb1a4eca838a408";
const mockApi = `${mock_domain}/mock/${mockId}/api`;

const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi,
  },
  test: {
    baseApi: "//test.futurefe.com/api",
    mockApi,
  },
  prod: {
    baseApi: "//futurefe.com/api",
  },
};

export default {
  env,
  mock: true,
  ...EnvConfig[env],
};
