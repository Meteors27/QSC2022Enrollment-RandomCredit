# Notes

## 项目进度
### 已完成
1. 写一个要素齐全的登录页（用户名、id输入框，登录），其中我将登录和问候按钮合并了，即按下登录后自动alert问候
2. 在另一路径下写绩点展示页
3. 展示页内包含重新获取数据的按钮
4. 所有数据从后端获取
5. 需要做两处弹窗提示（问候语和登录过期）
6. 登录过期后设法让用户回到登录页
7. 做一些基本的排版美化？
>tips:我的美化就像烂尾楼的建造，一期工程（登录页面）使用了开源的模板，较为美观；二期工程（查询页面）虽然具有显示成绩的功能，但是只有钢筋，家徒四壁！

### 未完成
1. 使界面更加优雅！！！
2. bonus：cookie未过期的时候自动登录

## 在最后的半小时了来写坎坷的coding过程
由于要睡觉了就简略一点吧（bushi

### Background
首先，我之前并没有真正接触过前端的开发，甚至`javascript`都是从零开始现学现卖，但是qsc的这次二面真的让我收获颇多。

### 从科普向视频了解前端的全貌
这个时长几分钟的视频向我介绍了react的基本用法以及如何美化页面。
[奇乐编程学院](https://www.bilibili.com/video/BV1ZL4y1p7Ds/?spm_id_from=333.337.search-card.all.click&vd_source=df203f281c982df7abeb5fe4838d89e8)

### 使用了一个小小的vscode插件
simple react snippets

### 跟着youtube视频进行学习
[完整的现代 React 教程](https://www.bilibili.com/video/BV1Me4y1h7bQ?p=1&vd_source=df203f281c982df7abeb5fe4838d89e8)

### 登录界面模板
[mui模板](https://github.com/mui/material-ui/tree/v5.10.6/docs/data/material/getting-started/templates/sign-in)

## 停滞不前的位置
这里是我遇到的瓶颈，花费了很多时间徘徊、试错。
1. 路由和网页跳转
2. 从后端抓取数据
3. 显示后端抓取的数据
4. 弹窗
5. cookie?

其中值得一提的是`react-router-dom@5`和`react-router-dom@6`的改动，曾经让我“步履维艰”=>
[stackoverflow question](https://stackoverflow.com/questions/70751309/export-switch-imported-as-switch-was-not-found-in-react-router-dom)

（因为网上@6版本的介绍不多，官方英文文档写的不太小白）
最后我退回了@5

`async`和`await`是我遇到的第二个问题。
虽然现在对于这一对东西以及`promise`仍然不是很透彻，但是能用起来跑起来[狗头]。

最困扰我的问题：react的fetch对cookie的操作有一点迷幻，是在`document.cookie`中。我一直在resp中寻找，却找不到cookie，导致有关cookie的认证都无法实现。过了很久才找到cookie原来存在这个巧妙的地方，然后只要增加`credentials: 'include'`就能实现带着cookie的请求。

## 后记
非常可惜，没有完全完成这个项目。也很庆幸，qsc push我在短时间内上手了js和react，不论结果如何，都很陶醉于这个过程！To be honest, 由于时间紧迫，我对js的学习理解还是太肤浅了，希望能在qsc继续go further～