<template>
  <div style="margin-top: 25px" class="brand_container">
    <BrandTitle style="font-size: 1.5rem"></BrandTitle>
  </div>
  <div class="root">
    
      <h1>Create user account</h1>
      <div class="contact_root">
        <div class="contact_inp_container">
          <input
          class="contact_inp"
            placeholder="Email address"
            type="email"
            name="email"
            id="id_email"
          />
        </div>
        <div class="contact_inp_container">
          <input
          class="contact_inp"
            placeholder="Phone number"
            type="text"
            name="phone"
            id="id_phone"
          />
        </div>
      </div>

      <div class="full_name_root">
        <div class="first_name_inp_container">
          <input
          class="full_name_inp"
            placeholder="First name"
            type="text"
            name="first_name"
            id="id_first_name"
          />
        </div>
        <div class="last_name_inp_container">
          <input
          class="full_name_inp"
            placeholder="Last name"
            type="text"
            name="last_name"
            id="id_last_name"
          />
        </div>
      </div>

      <div class="password_root">
        <div class="password_inp_container">
          <input
          class="password_inp"
            placeholder="Password"
            type="password"
            name="password"
            id="id_password"
          />
        </div>
      </div>

      <div style="margin-top:3.5%; margin-bottom:3.5%">
        Already with us? <router-link to="/accounts/user/access">Get to your account</router-link>
      </div>

      <div>
        <button type="button">Create my account</button>
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

<style>
@import "../static/UserStyle.scss";
</style>