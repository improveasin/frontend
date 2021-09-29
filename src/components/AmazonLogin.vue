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
  </div>
</template>

<script>
import Backendless from 'backendless'
import User from '../services/user'

export default {
  created() {
    Backendless.UserService.getCurrentUser()
      .then(user => {
        if (!user) {
          this.logout()
        }
      })
      .catch(error => {
        console.log('user error', error)
        this.logout()
      })
  },
  computed: {
    name() {
      if (this.$store.getters.isLoggedIn) {
        return this.$store.getters.getUser.Name
      }
      return ''
    },
  },
  methods: {
    async login() {
      this.$refs.login.classList = ['disabled']
      try {
        console.log(`Dispatch login`)
        this.$store.dispatch('login', await User.login())
        this.$refs.login.classList = []
        console.log(`Dispatch login successful`)
      } catch (error) {
        console.log('error', error)
        this.$store.dispatch('logout')
      }
    },

    logout() {
      User.logout()
      this.$store.dispatch('logout')
    },
  },
}
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

#amazon-login {
  margin-top: 30px;
  display: block;
  margin-right: 20px;
  text-align: right;
}
#amazon-login.disabled {
  animation: fading 2.5s infinite;
}
</style>
