<template>
  <div>
    <el-link  v-for="file in files" :href="file.url" target="_blank">{{file.name}}</el-link>
  </div>
</template>

<script>

export default {
  name: "VideoPreview",
  props: {
    value: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      files:[],
    }
  },
  created() {
    this.files = this.value.split(',').map(item => {
      return {url: item, name: item.slice(item.lastIndexOf('/') + 1)};
    });
  },
};
</script>
