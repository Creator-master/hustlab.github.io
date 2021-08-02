import * as React from 'react';
import Valine from 'gatsby-plugin-valine'; // 导入
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="flex flex-col items-start md:items-center md:flex-row">
      <div className="md:mr-4 h-28 w-28 text-7xl flex justify-center items-center">📜</div>
      <h1 className="text-2xl font-extrabold text-black md:text-5xl">互联网实习秋招手册</h1>
    </div>
    <div className="mt-8 text-gray-900">
      <p className="mt-2">
        <a
          href="https://github.com/Dreamacro/clash/wiki/configuration#proxy-providers"
          className="text-yellow-700 transition hover:text-yellow-600 underline"
        >
          互联网实习秋招手册
        </a>{' '}
        最初由华科 19
        级软硕同学发起，通过分发问卷，调研了已实习同学的实习经历。主要收集房租、上下班时间、加班情况、公司福利、团队氛围、所做业务、是否受政策影响等等几个方面的信息，帮助其他同学应对接下来的秋招，也给即将实习的同学做一份参考。
      </p>
    </div>
    <div className="flex w-full gap-4 mt-4 flex-row items-center">
      <select required className="select select-bordered max-w-xs w-1/4">
        <option value="" disabled="disabled" selected="selected">
          公司
        </option>
        <option>全部</option>
        <option>阿里巴巴</option>
        <option>腾讯</option>
      </select>
      <select required className="select select-bordered max-w-xs w-1/4">
        <option value="" disabled="disabled" selected="selected">
          城市
        </option>
        <option>北京</option>
        <option>上海</option>
        <option>杭州</option>
      </select>
      <select required className="select select-bordered max-w-xs w-1/4">
        <option value="" disabled="disabled" selected="selected">
          岗位
        </option>
        <option>前端</option>
        <option>后端</option>
        <option>开发</option>
      </select>
    </div>
    {/* <Valine
      appId="HimnBF5dOWB9mpOT6nv7AF5V-gzGzoHsz"
      appKey="yqbsml92HhijF81xs7fHOxII"
    /> */}
  </Layout>
);

export default IndexPage;
