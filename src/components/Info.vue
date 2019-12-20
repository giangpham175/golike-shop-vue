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
              <v-select
                multiple
                v-model="girlSize"
                :options="['S','M','L','XL','XXL']"
                class="select"
              />
              <!-- <select class="form-control" id="size" v-model="girlSize">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>-->
            </div>
            <div class="form-group">
              <label for="qty">Số lượng</label>
              <v-select v-model="girlQty" :options="['1','2','3']" class="select" />
              <!-- <select class="form-control" id="qty" v-model="girlQty">
                <option>1</option>
                <option>2</option>
              </select>-->
            </div>
          </div>
          <div class="col-md-6">
            <input type="checkbox" v-model="boyCheck" /> &nbsp;&nbsp; Mẫu 2 (Nam)
            <div class="form-group">
              <label for="size">Size</label>
              <v-select multiple v-model="boySize" :options="['S','M','L','XL']" class="select" />
            </div>
            <div class="form-group">
              <label for="qty">Số lượng</label>
              <v-select v-model="boyQty" :options="['1','2','3']" class="select" />
            </div>
          </div>
        </div>
        <p class="info">Tổng tiền</p>
        <form action class="oder-info">
          <h1>tổng</h1>
        </form>
        <br />
        <button
          type="button"
          class="btn info"
          data-toggle="modal"
          data-target="#orderConfirm"
          @click="order"
        >ĐẶT HÀNG NGAY</button>
      </div>
    </div>
    <div
      class="modal fade"
      id="orderConfirm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="confirmModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header d-block" style="border:none;">
            <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h5 class="modal-title text-center" id="confirmModal">XÁC NHẬN ĐẶT HÀNG</h5>
          </div>

          <div class="modal-body">
            <div class="row confirm">
              <div class="col-12 col-md-6 reciver">
                <h4 class="confirm">THÔNG TIN NGƯỜI NHẬN</h4>
                <form class="info" action>
                  <p>Tên: Nguyễn Văn A</p>
                  <p>Số điện thoại: 0123456789</p>
                  <p>Địa chỉ: Đường a, P B, Q. C, TP.D</p>
                </form>
              </div>
              <div class="col-12 col-md-6 info">
                <h4 class="confirm">THÔNG TIN SẢN PHẨM</h4>
                <form class="info" action>
                  <p>Mẫu 1</p>
                  <p>Size áo M</p>
                  <p>Số lượng 1 áo</p>
                </form>
              </div>
            </div>

            <div class="total">
              <h4 class="confirm">TỔNG TIỀN</h4>
              <form class="info" action>
                <p style="font-size: 20px;margin: 0px;">8000000</p>
              </form>
            </div>
          </div>

          <div class="modal-footer" style="text-align:center;border:none;">
            <button
              type="button"
              class="btn btn-primary"
              style="margin:auto;display:block;"
              data-dismiss="modal"
            >XÁC NHẬN</button>
          </div>
        </div>
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
      girlSize: [],
      girlQty: "",

      boyCheck: false,
      boySize: [],
      boyQty: ""
    };
  },
  methods: {
    order() {}
  }
};
</script>

<style scoped>
.select {
  background-color: white;
  border-radius: 10px;
}
</style>>
