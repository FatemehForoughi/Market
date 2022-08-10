<template>
  <div class="icons">
    <div>
    <button class="button" v-for="icon in icons">
      <img class="icon" :src="icon.src" />
    </button>
    </div>
    <div>
    <button class="button" id="setting">
        <img class="icon" id="setting" src="../assets/icons/settings.svg"/>
    </button>
    </div>
  </div>
</template>
<script>
import apps from "../assets/icons/apps.svg";
import cart from "../assets/icons/cart.svg";
import comment from "../assets/icons/comment.svg";
import contact from "../assets/icons/contact.svg";

export default {
  data() {
    return {
      icons: [
        {
          src: apps,
        },
        {
          src: cart,
        },
        {
          src: comment,
        },
        {
          src: contact,
        },
      ],
    };
  },
};
</script>
<style scoped>
.icons {
  margin-top: 60px;
 
}
.icon {
  margin: 20px;
   filter: invert(55%) sepia(6%) saturate(651%) hue-rotate(210deg)
    brightness(96%) contrast(91%);
  width: 20px;
 
}
.icon:hover{
   filter: invert(15%) sepia(95%) saturate(3331%) hue-rotate(306deg) brightness(88%) contrast(97%);
    transform: scale(1.5);
}

#setting{
  margin-top: 290px;
}
</style>
