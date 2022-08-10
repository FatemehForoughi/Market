<template>
  <div class="search">
    <input type="text" v-model="input" placeholder="search" />
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
  methods: {
    filteredList: () => {
      return Sellers.filter((seller) =>
        seller.toLowerCase().includes(input.value.toLowerCase())
      );
    },
  },
};
</script>
<style>
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
</style>
