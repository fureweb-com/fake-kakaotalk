<template>
  <section class="peopleSearchWrap">
    type: {{type}}
  </section>
</template>

<script>
export default {
  validate({params: {type}, redirect}) {
    // Return false if an unacceptable type is used.
    return true
  },

  data() {
    return {

    }
  },
  computed: {
    type() { return this.$route.params.type }
  },

  created() {
    // After confirming that the user is searched by id or phoneNumber through type parameter, the screen is rendered using the appropriate component.
    // Now you can access this.type
  },
}
</script>
