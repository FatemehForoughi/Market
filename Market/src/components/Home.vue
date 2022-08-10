<template>
  <div class="container">
    <div class="Header">
      <div class="search">
    <input type="text"  v-model="search" placeholder="search" />
  </div>
      <div class="alarm">
        <button><img id="alarm" src="../assets/icons/alarm.svg" /></button>
      </div>
      <div id="login">
        <button>Login</button> |
        <button>Sign in</button>
      </div>
    </div>
    <div class="Home">
      <div class="seller" v-for="Seller in filteredList">
        <div class="img">
          <img id="seller" :src="Seller.img" />
        </div>
        <div class="caption">
          <div class="title">
            <div class="name">
              {{ Seller.name }}
            </div>
            <div class="star">
              <Stars />
            </div>
          </div>
          <div class="price">
            Current Bid:
            <span style="color: #d40191"> {{ Seller.price }}</span>
          </div>
          <div id="sellbut">
            <button @click="()=>{Seller.clicked=!Seller.clicked}" :class="Seller.clicked ? 'checked': 'unchecked'">Subscribe</button>
            <router-link to="/market"><button class="checked">History</button></router-link>
          </div>
        </div>
      </div>
      <div class="not-found" v-if="filteredList.length===0">not found!</div>
    </div>
    <div>
      <TopSeller/>
    </div>
  </div>
</template>
<script>
import { Sellers } from "../assets/data/Sellers";
import Stars from "./Stars.vue";
import TopSeller from "./TopSeller.vue";
export default {
  data() {
    return {
      Sellers,
      search: '',
      clicked:false,
    };
  },
  components: {
    Stars,
    TopSeller
  },
   methods: {
  },
   computed: {
    filteredList() {
      return this.Sellers.filter(seller => {
        return seller.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  
  }
};
</script>
<style scoped>
.container{
 display: flex;
  flex-flow: row wrap;
}
#sellbut {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.checked {
  border: 2px solid;
  border-color: #646464;
  border-radius: 10px;
  font-size: small;
  font-weight: bold;
  color: #646464;
  padding: 5px;
  margin: 20px 10px;
  width: 120px;
}
.unchecked {
  border: 2px solid;
  border-color: #dd0198;
  background-color: #dd0198;
  border-radius: 10px;
  font-size: small;
  font-weight: bold;
  color: #d1d1d1;
  padding: 5px;
  margin: 20px 10px;
  width: 120px;
}
.Header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  position: relative;
}
.alarm {
  background: #1a162c;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin: 25px 20px 25px 1250px;
}
#alarm {
  width: 30px;
  filter: invert(55%) sepia(6%) saturate(651%) hue-rotate(210deg)
    brightness(96%) contrast(91%);
  padding: 5px;
}
#login {
  margin: 25px ;
  font-size: small;
  color: rgb(150, 150, 150);
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  background-color: #1a162c;
}
.Home {
margin: 0px 30px;
  border-radius: 10px;
  background: #1a162c;
  width: 1400px;
  height: auto;
  top: 0;
  /* position: fixed; */
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  height: 850px;
}
.title {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
}
.seller {
  width: 300px;
  height: 380px;
  background: #302952;
  border-radius: 10px;
  margin: 20px;
}
#seller {
  width: 100%;
  height: 200px;
  /* height: auto; */
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
}
.name {
  color: #f0edf8;
  font-weight: bold;
  font-size: larger;
  padding: 5px;
}

.price {
  background-color: #1a162c;
  margin: 20px 20px 10px 20px;
  padding: 10px;
  color: #888888;
  font-weight: bold;
  font-size: small;
  width: 190px;
  border-radius: 10px;
}
.img {
  width: 300px;
  min-height: 120px;
  max-height: auto;
  border-radius: 40px;
}
.star {
  margin-top: 5px;
}
.search {
  margin: 25px;
  width: 300px;
  border-radius: 10px;
  background: #1a162c;
  height: 40px;
}
input:focus {
  outline: none;
  border: none;
  color: rgb(235, 235, 235);
}
input {
  background: none;
  border: none;
  padding: 10px;
  padding-left: 15px;
  font-size: large;
}
.not-found{
  font-size: large;
    color: aliceblue;
    font-weight: bold;
  padding: 10px;
}
</style>
