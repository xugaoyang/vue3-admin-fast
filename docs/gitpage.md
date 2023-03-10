
#### gitpage + workflow

**参考资料**：
[使用github的pages配合action自动部署vue项目](https://blog.csdn.net/weixin_44786530/article/details/128307715)

[github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)

1. 创建PAT,`Settings/Developer settings/personal access tokens`
2. 在项目仓库`setting/Secrets and variables/actions`点击`new repository secret`,创建`ACCESS_TOKEN`,value为PAT的值
3. 创建工作流配置文件`.github/workflow/xx.yml`,自动构建更新静态资源包到`gh-pages`分支
4. 然后在`Settings/Pages/`配置静态目录生成站点