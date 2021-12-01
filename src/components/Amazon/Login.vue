<template>
  <div>
    <div v-if="name">
      <b>Hallo, {{ name }}</b
      ><br />
      <span v-on:click="logout" style="cursor: pointer">Logout</span>
    </div>
    <a
      ref="login"
      id="amazon-login"
      v-on:click="login"
      v-else
      style="cursor: pointer"
    >
      <img
        border="0"
        alt="Login with Amazon"
        src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
        width="156"
        height="32"
      />

    </a>
    &nbsp;&nbsp;<span class="status" ref="status"></span>
  </div>
</template>

<script>
import Backendless from "backendless";
import User from "../../services/user";

export default {
  created() {
    Backendless.UserService.getCurrentUser()
      .then((user) => {
        if (!user) {
          this.logout();
        }
      })
      .catch((error) => {
        console.log("user error", error);
        this.logout();
      });
  },
  computed: {
    name() {
      if (this.$store.getters.isLoggedIn) {
        return this.$store.getters.getUser.Name;
      }
      return "";
    },
  },
  methods: {
    async login() {
      this.$refs.login.classList = ["disabled"];
      try {
        console.log(`Dispatch login`);
        const user = await User.login((message) => {
          this.$refs.status.innerHTML = message;
        });

        this.$store.dispatch('login', user)
        this.$refs.login.classList = []

        this.$router.push({ name: 'pages' });
      } catch (error) {
        console.log('error', error)
        this.$store.dispatch('logout')
      }
    },

    logout() {
      User.logout();
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
@keyframes fading {
  0% {
    opacity: 0.75;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.75;
  }
}

.status {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  margin-top: 4px;
}

#amazon-login.disabled {
  /*animation: fading 2.5s infinite;*/
  opacity: 0.25;
}
</style>
