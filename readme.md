# 乐淘项目

注：本项目仅用于学习，距离商业项目还有差距。

### 开发模式

- **前后分离模式**，即**接口化开发**。


### 项目架构

|  系统分层 | 使用技术                                     |
| ----: | :--------------------------------------- |
|  数据层： | MYSQL                                    |
|  服务层： | NodeJs(express)                          |
| 前端展示： | mobile web application,pc management system |

### 项目搭建

- 安装nodejs wamp(phpstudy) 

### 项目启动

- 开启wamp 主要用里面的mysql数据库
- 在项目的根目录下 开启命令行窗口 输入 npm start
- localhost:3000/项目文件夹
- 前台登录 http://localhost:3000/mobile/index.html
  - 用户名 itcast
  - 密码 111111
- 后台登录 http://localhost:3000/admin/login.html
  - 用户名 root
  - 密码 123456

### 关于node安装失败的解决办法

- 在安装程序出现2502、2503错误的解决方法
  - 以管理员身份运行cmd
  - 输入 msiexec /package node安装包位置
- 在命令行中输入node -v时 出现 node不是内部或外部命令，也不是可运行的程序或批处理文件
  - 将node.exe所在文件夹配置到环境变量中

