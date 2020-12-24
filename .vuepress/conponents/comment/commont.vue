<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
export default {
  name: 'comment',
  data() {
    return {};
  },
  mounted() {
    let body = document.querySelector('.gitalk-container');
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    body.appendChild(script);
    script.onload = () => {
      const commentConfig = {
        clientID: '8de6d2b7024b12c5049f',
        clientSecret: '8f661386c19efd3fe9c9e5d8036ee637a33d189d',
        repo: 'weishidong_comment',
        owner: 'asyncins@aliyun.com',
        // 这里接受一个数组，可以添加多个管理员
        admin: ['asyncins@aliyun.com'],
        // id 用于当前页面的唯一标识，一般来讲 pathname 足够了，
       
        // 但是如果你的 pathname 超过 50 个字符，GitHub 将不会成功创建 issue，此情况可以考虑给每个页面生成 hash 值的方法.
        id: location.pathname,
        distractionFreeMode: false,
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    };
  },
};
</script>