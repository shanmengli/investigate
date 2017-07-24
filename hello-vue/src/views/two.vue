<template>
  
     
           <div>
                <div class="main">
                  <h3>{{$store.state.list[1].name}}</h3>
                   <img src="../assets/1.png" alt="" class="pei">
                   <div>
                      <p v-for="(x,index) in $store.state.list[1].list" :class='{"cbg":index==ind}' @click="btn(index)" >{{x}}</p>
                   </div>
                </div>
            
                 <div class="botm">
                      <div>
                          <img src="../assets/5.png" alt="" class="meme">
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
        console.log('haha')
        if(this.ind!=-1){
            this.$router.push({path:"/three"})
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

      .main div{
        display: flex;
      }

      .main p{
        flex:1;
        text-align: center;
        font-family:DFPShaoNvW5;
        font-size: 16px;
        margin:0 5px 0 0;
      }



      .cbg{
        color: #ff4856;
        background:url(../assets/hear_03.png) no-repeat;
         background-size:18px auto;
         background-position: right;
      }


      .botm{
        position: absolute;
        bottom: 0px;
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
        margin-left:-35%;
        margin-top: 10px;
      }
      .botm .meme{
        position: absolute;
        right: 15px;
        top: 25px;
      }

  
  
</style>
