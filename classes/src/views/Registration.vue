<template>
    <div>
        <div class="heading">
            <h1>My courses</h1>
        </div>
        <div v-show="!hasCourses">
            You haven't registered for any courses yet.
        </div>
        <div class="wrapper">
            <RegisteredList :registeredCourses="registeredCourses"/>
        </div>
    </div>
</template>

<script>
import RegisteredList from '@/components/RegisteredList.vue'

export default {
  name: 'Registration',
  components: {
    RegisteredList
  },
  data() {
    return {

    }
  },
  computed: {
    registeredCourses() {
        return this.$root.$data.registeredCourses;
    },
    hasCourses() {
      return this.$root.$data.registeredCourses.length > 0;
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.heading {
  color: #008f95;
  padding-top: 50px;
}
</style>