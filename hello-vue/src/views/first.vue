<template>
<div>
      <div class="main">
                <h3>{{$store.state.list[0].name}}</h3>
                <ol>
                    <li v-for="(x,index) in $store.state.list[0].list" :class='{"cbg":index==ind}' @click="btn(index)" >{{x}}</li>
                </ol>
            </div>

            <div class="botm">
                  <div>
                       <img src="../assets/2.png" alt="" class="cat1">
                      <img src="../assets/4.png" alt="" class="meme">
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
        console.log(this.$store.state.list)
      },
      dian(){
        if(this.ind!=-1){
            this.$router.push({path:"/two"})
        }else{
            alert('请选择！')
        }
      }
    }
}
</script>



<style>
    main{
    height: auto;
  }
   .main h3{
           font-weight: bold;
          font-size: 18px;
          font-family:DFPHaiBaoW12;
          padding: 15px 0 0 10px;
   }

   .main ol{
         font-family:DFPShaoNvW5;
         padding: 10px 0 0 10px;
         font-size: 16px;
         text-align: center;
         display: flex;
         flex-wrap:wrap;
         margin-top: 15px;

      }

    .main ol li{
        line-height: 45px;
        width: 145px;
        position: relative;
    }

      ol .cbg{
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
      .botm .cat1{
        position: absolute;
        left: 50%;
        right: 50%;
        margin-left:-35%;
        margin-top: 58px;
      }
      .botm .meme{
        position: absolute;
        right: 15px;
        top: 25px;
      }

</style>