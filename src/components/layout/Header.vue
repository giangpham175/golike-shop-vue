<template>
  <header class="container">
    <nav class="navbar navbar-expand-md">
      <router-link class="navbar-brand" tag="a" to="/">
        <img src="@/assets/img/logo.svg" class="logo" />
        <img src="@/assets/img/logo-name.svg" class="logo-name" />
      </router-link>
      <!-- <a class="navbar-brand" href="#">
        <img src="@/assets/img/logo.svg" class="logo" />
        <img src="@/assets/img/logo-name.svg" class="logo-name" />
      </a>-->
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <img src="@/assets/img/toggle.svg" alt />
        </span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
        <ul class="navbar-nav mt-2 mt-lg-0 text-center">
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link class="nav-link" tag="a" to="/policy">Chính sách bảo mật</router-link>
            <!-- <a class="nav-link" href>Chính sách bảo mật</a> -->
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link class="nav-link" tag="a" to="/pay">Thanh toán</router-link>
            <!-- <a class="nav-link" href>Thanh toán</a> -->
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link class="nav-link" tag="a" to="/regulation">Quy định</router-link>
            <!-- <a class="nav-link" href>Quy định</a> -->
          </li>
          <li class="nav-item buy" data-toggle="collapse" data-target=".navbar-collapse.show">
            <router-link
              class="nav-link buy"
              tag="a"
              to="/"
              v-scroll-to="{ el: '#info-order' }"
            >Mua ngay</router-link>
            <!-- <a class="nav-link buy" href>Mua ngay</a> -->
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header"
};
</script>