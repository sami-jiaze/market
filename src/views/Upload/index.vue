<template>
  <div class="container">
    <h2 class="title">上架我的商品</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name" class="info"></el-input>
      </el-form-item>
      <el-form-item label="商品简介">
        <el-input v-model="form.brief" class="info"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.price"  onkeyup="value=value.replace(/[^\d]/g,'')" class="price" placeholder="请输入数字(单位默认元)"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <el-select v-model="form.type" placeholder="请选择商品分类">
          <el-option label="数码产品" value="1"></el-option>
          <el-option label="生活用品" value="2"></el-option>
          <el-option label="食物零食" value="3"></el-option>
          <el-option label="图书文具" value="4"></el-option>
          <el-option label="护理美妆" value="5"></el-option>
          <el-option label="交通工具" value="6"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="新旧程度">
        <el-radio-group v-model="form.resource">
          <el-radio label="99新"></el-radio>
          <el-radio label="9成新"></el-radio>
          <el-radio label="8成新"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <p>拍照上传商品图片让其他顾客更了解您的商品</p>
      <el-upload action="" :on-change="handleelchange"  :auto-upload="false" list-type="picture-card">
        <i class="el-icon-plus"></i>
      </el-upload>
      <!-- <form action="" method="post"></form> -->

      <el-form-item class="sub">
        <el-button type="primary" @click="onSubmit" >立即创建</el-button>
        <el-button type="info"><router-link to="/userInfo" style="color:white">返回个人中心</router-link></el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import qs from 'querystring'
import axios from 'axios'
export default {
  data () {
    return {
      form: {
        name: '',
        brief: '',
        price: '',
        type: '',
        resource: ''
      }
    }
  },
  methods: {
    handleelchange (file, fileList) {
      console.log(file, fileList)
      // eslint-disable-next-line prefer-const
      let formdata = new FormData()
      fileList.map(item => {
        formdata.append('file', item.raw)
      })
      axios.post('http://43.138.43.158:8082/api/uploadImg', formdata).then(res => { console.log(res.data.message) })
    },
    async onSubmit () {
      console.log(this.form)
      await this.$store.dispatch('userUpload', qs.stringify(this.form))
    }
  }
}
</script>

<style lang='less' scoped>
.container {
  margin-left: 161px;
  margin-top: 30px;
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .sub{
    margin-left: -82px;
  }
  .price{
    width: 260px;
  }
  .info{
    width: 600px;
  }
}
</style>
