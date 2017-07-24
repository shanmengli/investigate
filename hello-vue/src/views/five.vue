<template>
<div>
     <div class="main">
              <h3>{{$store.state.list[4].name}}</h3>
               <img src="../assets/five_03.png" alt="" class="pei">
               <ul>
                  <li v-for="(x,index) in $store.state.list[4].list" v-text="x" v-bind:class='{cbg:index==ind}' @click="btn(index)" ></li>
               </ul>
           </div>
            
             <div class="botm">
                  <div>
                       <img src="../assets/11.png" alt="" class="cat">
                      <img src="../assets/13.png" alt="" class="meme">
                      <img src="../assets/7.png" alt="" class="next" @click="dian">
                  </div>
            </div>
            </div>

  </template>


<script>
    export default { 
     data:function(){
            return {
                ind:-1
            }
        },
  
    methods:{
      btn:function(index){
         this.ind=index
      },
      dian(){
        if(this.ind!=-1){
            this.$router.push({path:"/end"})
        }else{
            alert('请选择！')
        }
      }
    }
}
</script>

  <style>
    .main{
    height: auto;
  }
  .main h3{
           font-weight: bold;
          font-size: 18px;
          font-family:DFPHaiBaoW12;
          padding: 15px 0 0 10px;
      }

      .main .pei{
        width: 250px;
        height: auto;
        display: block;
        margin:30px auto;
      }

      .main ul{
        display: flex;
      }

      .main ul li{
      margin:0 5px 0 0;
        flex:1;
        text-align: center;
        font-family:DFPShaoNvW5;
        font-size: 16px;
      }

      .cbg{
        color: #ff4856;
        background:url(../assets/hear_03.png) no-repeat;
         background-size:18px auto;
         background-position: right;
      }


     .botm{
        position: absolute;
        bottom: 20px;
        height: auto;
        left: 50%;
        margin-left: -150px;
      }


      .botm div{
        width: 300px;
        height: 200px;
        margin:0 auto;
        position: relative;
      }
      .botm img{
        width: 100px;
        height:auto;
      }
      .botm .next{
        width: 200px;
        height:auto;
        position: absolute;
        bottom: 48px;
        left: 50%;
        right: 50%;
        margin-left: -100px;
      }
      .botm .cat{
        position: absolute;
        left: 50%;
        right: 50%;
        margin-left:-32%;
        margin-top: 3px;
      }
      .botm .meme{
        position: absolute;
        right: 15px;
        top: 25px;
      }

  </style>