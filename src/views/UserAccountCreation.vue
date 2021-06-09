<template>
  <div style="margin-bottom: 5%; margin-top: 1%" class="brand_container">
    <BrandTitle style="font-size: 1.5rem"></BrandTitle>
  </div>
  <div class="root">
    <div>
      <h1>Create new account</h1>
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
      <div>
          <p>Already with us? Sign In</p>
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
h1 {
  margin-bottom: 5%;
  font-size: 2rem;
  font-weight: 500;
  font-family: "Hind Siliguri", sans-serif;
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
  max-width: 450px;
  margin: 5% auto;
  padding: 0 4% 0 4%;
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
  border: 1px solid gainsboro;
  border-radius: 5px;
  font-size: 1.1rem;
  font-family: "Hind Siliguri", sans-serif;
}

button {
  border: none;
  border-radius: 5px;
  padding: 2% 7% 2% 7%;
  margin-top: 4%;
  font-size: 1.4rem;
  color: white;
  background-color: gold;
}
</style>