<template>
  <div id="app">
      <div class="header">
         <h2>填问卷，送话费</h2>
      </div>
      <div class="section">
          
            <router-view></router-view>

      </div>
  </div>
</template>



<style>


  #app{
    position: absolute;
    left:0;
    top:0;
    bottom: 0;
    right:0;
    display: flex;
    flex-direction:column;
    font-size: 14px;
  }

  .header{
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .section{
    flex:1;
    overflow-y:scroll;
    background:url(./assets/back.jpg) no-repeat;
    background-size:100% 100%;
  }

  
  
</style>
