### 关于

此项目是插件`[cordova-plugin-wechat]`(https://github.com/xu-li/cordova-plugin-wechat)的Ionic3示例工程

[英文文档](README.md)

![demo](demo.jpeg)

### 如何使用

1. 下载工程

```shell
git clone https://github.com/jasonz1987/ionic3-wechat-sdk-demo
```

2. 安装依赖

```shell
npm install
```

3. 修改`config.xml`里的包名，

4. 安装插件，微信的`appid` 需要与包名一致

```shell
ionic cordova plugin add cordova-plugin-wechat --variable wechatappid=wxxxxxxx
```

5. 添加平台

```shell
ionic cordova platform add android
```

```shell
ionic cordova platform add ios
```

6. 运行调试

```shell
ionic cordova run android
```

```shell
ionic cordova run ios
```

### 教程

这是我录制的关于ionic3内如何接入微信开发的教程，希望可以帮助到你。

https://www.jason-z.com/course/3

### 捐赠

如果我的项目对你有帮助，欢迎赞赏。

[![paypal](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/jasonz1987/6.66)

![donate.png](donate.png)