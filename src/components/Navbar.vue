<template>
  <section>
      <b-navbar toggleable="lg" type="light" class="mb-3 nav">
          <b-navbar-brand href="#"><!-- <img src="../assets/images/logo-mcd.png" width="30px"> --></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <router-link class="nav-link" to="/">Logo</router-link>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-badge variant="warning" class="ml-2 mb-2"></b-badge>
              </b-nav-form>

              <!-- <b-nav-item-dropdown right>
                <template #button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown> -->
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
  </section>
</template>

<script>
export default {
	name : 'Navbar',
}

</script>
<style>
  
</style>
