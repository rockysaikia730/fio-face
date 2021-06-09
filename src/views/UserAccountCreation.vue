<template>
  <div style="margin-top: 25px" class="brand_container">
    <BrandTitle style="font-size: 1.5rem"></BrandTitle>
  </div>
  <div class="root">
      
    <div>
      <h1>Create user account</h1>
      <div class="email_container">
        <input
          placeholder="Email address"
          type="email"
          name="email"
          id="id_email"
        />
      </div>
      <div class="phone_container">
        <input
          placeholder="Phone number"
          type="text"
          name="phone"
          id="id_phone"
        />
      </div>

      <div class="name_container">
        <div class="first_name_container">
          <input
            placeholder="First name"
            type="text"
            name="full_name"
            id="id_full_name"
          />
        </div>

        <div class="last_name_container">
          <input
            placeholder="Last name"
            type="text"
            name="last_name"
            id="id_last_name"
          />
        </div>
      </div>
      <div class="password_container">
        <input
          placeholder="Password"
          type="password"
          name="password"
          id="id_password"
        />
      </div>
      <div style="margin-top: 5%; margin-bottom: 2%">
        Already with us? <router-link to="/accounts/user/access">Get to you account</router-link>
      </div>
      <button type="button">Create account</button>
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

<style scoped lang="scss">
* {
  font-family: "Hind Siliguri", sans-serif;
}

a{
    text-decoration: none;
    color: #000;
    font-weight: 500;
}
h1 {
  margin-bottom: 5%;
  font-size: 2rem;
  font-weight: 800;
}

.email_container {
  margin-bottom: 3.5%;
  display: flex;
}

.phone_container {
  display: flex;
}

.password_container {
  display: flex;
}

.name_container {
  margin-top: 7%;
  margin-bottom: 25%;

  .last_name_container {
    width: 48%;
    float: right;
    display: flex;
  }
  .first_name_container {
    width: 48%;
    float: left;
    display: flex;
  }
}

.root {
  max-width: 410px;
  margin: 3% auto;
  padding: 0 6% 0 6%;
  text-align: left;
}

#id_email,
#id_phone,
#id_password {
  padding: 2% 4% 2% 4%;
}

#id_full_name,
#id_last_name {
  padding: 3.5% 9% 3.5% 9%;
}

input {
  width: 100%;
  border: 1px solid rgb(212, 212, 212);
  border-radius: 5px;
  font-size: 1.1rem;
  outline: none;

  &:focus {
    border: 1px solid rgb(139, 139, 139);
  }
}

button {
  border: none;
  border-radius: 5px;
  padding: 2% 7% 2% 7%;
  margin-top: 2%;
  font-size: 1.4rem;
  color: white;
  background-color: rgb(250, 213, 4);
}
</style>