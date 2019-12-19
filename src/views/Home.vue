<template>
  <div class="container main">
    <Banner />
    <Size />
    <Order />
    <Info />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Size from "@/components/Choose-size.vue";
import Order from "@/components/Choose-order.vue";
import Info from "@/components/Info.vue";

export default {
  name: "home",
  components: {
    Banner,
    Size,
    Order,
    Info
  }
};
</script>
