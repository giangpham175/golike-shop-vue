<template>
  <div id="info-order" class="order-info">
    <h1 class="main text-center">THÔNG TIN ĐẶT HÀNG</h1>
    <div class="row order-info">
      <div class="col-12 col-md-4 l">
        <h2 class="info text-center">GIẢM GIÁ NGAY 30%</h2>
        <img src="@/assets/img/order/order.png" alt style="width: 100%;" class="img-info" />
      </div>
      <div class="col-12 col-md-8 r">
        <p class="info">Tên</p>
        <input type="text" placeholder="Nhập tên" class="name info" v-model="name" />
        <p class="info">Số điện thoại</p>
        <input type="text" placeholder="Nhập số điện thoại" class="phone info" v-model="phone" />
        <p class="info">Địa chỉ nhận hàng</p>
        <input type="text" placeholder="Nhập địa chỉ nhận hàng" class="add info" v-model="address" />

        <!-- use-vue-select -->
        <p class="info">Mẫu áo</p>
        <div class="row">
          <div class="col-md-6">
            <input type="checkbox" v-model="girlCheck" /> &nbsp;&nbsp; Mẫu 1 (Nữ)
            <div class="form-group">
              <label for="size">Size</label>
              <select class="form-control" id="size" v-model="girlSize">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
            <div class="form-group">
              <label for="qty">Số lượng</label>
              <select class="form-control" id="qty" v-model="girlQty">
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <input type="checkbox" v-model="boyCheck" /> &nbsp;&nbsp; Mẫu 2 (Nam)
            <div class="form-group">
              <label for="size">Size</label>
              <select class="form-control" id="size" v-model="boySize">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div class="form-group">
              <label for="qty">Số lượng</label>
              <select class="form-control" id="qty" v-model="boyQty">
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>
        </div>
        <p class="info">Tổng tiền</p>
        <form action class="oder-info">
          <h1>tổng</h1>
        </form>
        <br />
        <button type="button" class="btn info" @click="order">ĐẶT HÀNG NGAY</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  data() {
    return {
      name: "",
      phone: "",
      address: "",
      girlCheck: false,
      girlSize: "",
      girlQty: "",
      boyCheck: false,
      boySize: "",
      boyQty: ""
    };
  },
  methods: {
    order() {}
  }
};
</script>