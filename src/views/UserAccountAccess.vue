<template>
  <div style="margin-top: 25px" class="brand_container">
    <BrandTitle style="font-size: 1.5rem"></BrandTitle>
  </div>
  <div class="root">
    <div>
      <h1>Get to your account</h1>
      <div class="contact_inp_container">
        <input
        class="contact_inp"
          placeholder="Email address or Phone number"
          type="email"
          name="email"
          id="id_email"
        />
      </div>

      <div style="margin-top:3%" class="password_inp_container">
        <input
        class="password_inp"
          placeholder="Password"
          type="password"
          name="password"
          id="id_password"
        />
      </div>
      <div style="margin-top: 3.5%; margin-bottom: 3.5%">
         <router-link to="">Can't remember password</router-link>
      </div>
      <div>
        <button type="button">Get my account</button>
      </div>
    </div>
  </div>
</template>

<script>
import BrandTitle from "../components/BrandTitle.vue";
export default {
  components: {
    BrandTitle,
  },
};
</script>

<style scoped>
@import "../static/UserStyle.scss";
</style>