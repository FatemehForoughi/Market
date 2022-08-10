<template>
<div class="topSeller">
    <div id="title">
    Top Seller
    </div>
    <div id="tops" v-for="Seller in Sellers">
    <div id="profile">
    <img id="prof" :src="Seller.profile"/>
    </div>
    <div id="name">
    {{Seller.name}}
    </div>
    
    <router-link id="button" to="/market"><button >subscribe</button></router-link>

    </div>
</div>
</template>
<script>
import { Sellers } from "../assets/data/Sellers";
export default {
  data() {
    return {
      Sellers,
    };
  },
}
</script>
<style>
#title{
    font-size: large;
    color: #f0edf8;
    font-weight: bold;
    padding: 10px;
}
.topSeller{
background-color: #1a162c;
border-radius: 10px;
width: 330px;
margin:0px 10px 10px 0px;
padding: 5px;

}
#tops{
    background-color: #302952;
    border-radius: 10px;
    font-weight: bold;
    color: #f0edf8;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 5px;
    position: relative;
}
#profile{
    border-radius:100%;
    width: 20px;
    background-color: #494269;
    padding: 10px;
}
#name{
    padding: 5px;

}

#button{
    border: 2px solid;
  border-color: #dd0198;
  background-color: #dd0198;
  border-radius: 10px;
  font-size: small;
  font-weight: bold;
  color: #d1d1d1;
  padding: 5px;
  margin: 5px;
  position: absolute;
  right: 5px;
}
/* #prof{
  max-width:100%;
  max-height: 100%;
} */
</style>