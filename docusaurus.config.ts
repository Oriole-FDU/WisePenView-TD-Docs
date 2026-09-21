import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '复旦大学生成式人工智能教育教学应用指引',
  tagline: '面向复旦大学教师与教学管理者的 AI 教学应用参考',
  favicon: 'img/logo.svg',
  future: {v4: true},
  url: 'https://docs.wisepen.cn',
  baseUrl: '/',
  organizationName: 'Oriole-FDU',
  projectName: 'WisePenView-TD-Docs',
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'zh-Hans', locales: ['zh-Hans']},
  presets: [['classic', {docs: {sidebarPath: './sidebars.ts'}, blog: false, theme: {customCss: './src/css/custom.css'}} satisfies Preset.Options]],
  themeConfig: {
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: false, disableSwitch: true},
    navbar: {
      title: '',
      logo: {alt: '复旦大学标识（预留）', src: 'img/logo.svg'},
      items: [
        {to: '/', label: '首页', activeBaseRegex: '^/$', position: 'left'},
        {type: 'doc', docId: 'guide/复旦大学生成式人工智能教育教学应用指引1-0版', label: '复旦大学生成式人工智能教育教学应用指引', position: 'left'},
        {type: 'doc', docId: 'handbook/复旦大学智慧课程教学设计研修引导手册', label: '复旦大学智慧课程教学设计研修引导手册', position: 'left'},
      ],
    },
    footer: {style: 'light', copyright: '复旦大学教师教学发展中心 · WisePen'},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};
export default config;
