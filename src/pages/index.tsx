import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const links = [
  {to: '/docs/guide/复旦大学生成式人工智能教育教学应用指引1-0版', label: '生成式人工智能教育教学应用指引'},
  {to: '/docs/handbook/复旦大学智慧课程教学设计研修引导手册', label: '智慧课程教学设计研修引导手册'},
];

export default function Home(): ReactNode {
  return (
    <Layout title="首页">
      <main className={styles.page}>
        <h1 className={styles.title}>首页</h1>
        <nav className={styles.linkList} aria-label="文档入口">
          {links.map((item) => <Link className={styles.linkItem} to={item.to} key={item.to}>{item.label}</Link>)}
        </nav>
      </main>
    </Layout>
  );
}
