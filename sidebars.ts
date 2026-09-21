import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  guideSidebar: [
    {type: 'doc', id: 'guide/复旦大学生成式人工智能教育教学应用指引1-0版', label: '复旦大学生成式人工智能教育教学应用指引1.0版'},
    {type: 'category', label: '正文', items: ['guide/指导思想', 'guide/基本原则', 'guide/重点应用领域', 'guide/规范指引', 'guide/组织与支持保障', 'guide/施行与解释']},
    {type: 'category', label: '附件', items: ['guide/附件', 'guide/附件1-ai赋能的以学为中心课程设计-研修内容', 'guide/附件2-高等教育智慧课程质量标准框架', 'guide/附件3-人工智能使用声明模板', 'guide/附件4-人工智能伦理风险自查清单', 'guide/附件5-教学评语中的-人工智能使用表现-评价维度', 'guide/附件6-课程教学大纲中人工智能使用条款参考文本', 'guide/附件7-人工智能使用记录参考案例-学生版', 'guide/附件8-人工智能共建课堂协议-参考案例', 'guide/附件9-理工科类-人工智能辅助作业说明参考案例', 'guide/附件10-复旦大学关于在本科毕业论文-设计-中使用', 'guide/附件11-常见人工智能工具分类及其教育适用性指南-建议版']},
  ],
  handbookSidebar: [
    {type: 'doc', id: 'handbook/复旦大学智慧课程教学设计研修引导手册', label: '复旦大学智慧课程教学设计研修引导手册'},
    {type: 'category', label: '研修章节', items: ['handbook/ai时代的教学愿景', 'handbook/ai时代下的教学挑战', 'handbook/学习目标', 'handbook/学习活动', 'handbook/学习测评', 'handbook/课程ai政策', 'handbook/使用ai赋能制完善课程教学大纲的总结分析-选填', 'handbook/您对我们的这一份研修手册有何意见建议-请您写在下方-选填']},
  ],
};
export default sidebars;
