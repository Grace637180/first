<template>
  <div>
    <h2>axios的入门</h2>
    <button @click="getReq()">请求</button>
    <button @click="getAll()">并发请求</button>
    <button @click="getReq2()">封装请求</button>
  </div>
</template>

<script>
//import axios from 'axios'
import ajax from "./http/index.js";
//export default {
// setup(props) {
//onst getReq = () => {
//axios.get('http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001').then((res)=>{
//console.log(res.data);/*res结果是axios封装后的 .data才是原始的json数据 */
//}).catch((err)=>{
// console.log(err);
//});
// };
//return {
//getReq,
// };
// },
//};
</script>
//axios.get('http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001',{
        //params:{
        //  id:'lk001'
      //  }
//  });

//const getAll = ()=>{
      // axios.all([
         /*get请求method参数可以忽略*/
        // axios({url: "http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk002"}),
       //]).then((res)=>{
       //  console.log(res);//返回的是数组，可以使用索引
       //}).catch((error)=>{
          //console.log(error);
       //});
    //}
    export default {
  setup(props) {    


    const getReq2 = ()=>{
       Promise.all([ /*因为不显式使用axios.all()，所以必须使用Promise替换*/
         /*get请求method参数可以忽略*/        
         ajax("http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk001"),
         ajax("http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail/lk002")
       ]).then((res)=>{
         console.log(res);//返回的是数组，可以使用索引
       }).catch((error)=>{
          console.log(error);
       });
    }
    return {
      getAll
    };
  },
}


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
