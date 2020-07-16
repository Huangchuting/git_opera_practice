<template>
<div class="video-wrap">
    <div class="video-demo1">
        <video-player  class="video-player vjs-custom-skin"
        ref="videoPlayer" 
        :playsinline="true" 
        :options="playerOptions"
        ></video-player>
    </div>
    <div class="video-demo2">
        <video controls>
            <source src="../../../assets/videos/movie.mp4" type="video/mp4">
            <source src="../../../assets/videos/movie.ogg" type="video/ogg">
        </video>
    </div>
</div>
  
</template>
<script>
/**
 * 相关文档
 * https://www.jb51.net/article/173816.htm
 * https://github.com/surmon-china/vue-video-player
 */
import {videoPlayer} from "vue-video-player";
import "vue-video-player/node_modules/video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
export default {
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            /*
                type："video/webm" // 可以播放，用ogg也可打开
                type："video/ogg" // 可以播放，用webm也可打开
                type："video/3gp" // 可以播放
                type："video/mp4" // 可以播放
                type："video/avi" // 打不开
                type："video/flv" // 打不开
                type："video/mkv" // 打不开
                type："video/mov" // 打不开
                type："video/mpg" // 打不开
                type："video/swf" // 打不开
                type："video/ts"  // 打不开
                type："video/wmv" // 打不开
                type："video/vob" // 没转化
                type："video/mxf" // 转化出错
                type: "video/rm"  // 转化出错
            */
            type: "video/webm", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: "../../../assets/videos/ocean-small.webm" //url地址
          }
        ],
        poster: "../../../assets/images/m.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true //全屏按钮
        }
      }
    }
  },
  components: {
    videoPlayer
  }
};
</script>
<style lang="scss" scoped>
</style>