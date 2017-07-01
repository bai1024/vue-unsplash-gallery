# Vue Unsplash Gallery

[Online Demo](https://dingdingbai.github.io/vue-unsplash-gallery/)

<p align="center">
  <img src="http://ww1.sinaimg.cn/large/9b85365dgy1fh4fp8zxunj210x0qze7c" alt="images">
</p>  

## Setup

```bash
git clone https://github.com/dingdingbai/vue-unsplash-gallery.git
yarn
yarn run dev # open localhost:8080
```

## Features

- 列表与栅格布局

- 惰性加载

  使用[vue-waypoint](https://github.com/scaccogatto/vue-waypoint)实现惰性加载，每次加载一批10张图，用户滚动到倒数第二张时，加载下一批。

- 点击放大

  点击图片全屏显示。

- 显示图片信息

   鼠标Hover时，显示图片作者等信息。

