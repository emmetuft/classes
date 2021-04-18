<template>
  <div>
    <div class="image-container">
      <img class="image" src="/cover-3.jpg" alt="">
    </div>
    <div class="fixed-header">
      <div class="heading">Gradify</div>
      <div class="subheading">Take courses from people in your local community and graduate with newfound skills.</div>
    </div>
    <div class="message wrapper-c">
      <div class="message-text">
        <p>Choose from over 2,000 different courses</p>
      </div>
      <div class="message-subtext">
        <p>There's something for everyone</p>
      </div>
    </div>
    <div class="footer">
      <a href="https://github.com/emmetuft/classes">GitHub</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.wrapper-c {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.fixed-header {
  position: fixed;
  top: 240px;
  left: 120px;
  width: 400px;
  text-align: left;
}
.heading {
  color: white;
  font-size: 50px;
}
.subheading {
  color: white;
  font-size: 18px;
}
.message {
  height: 230px;
}
.message-text {
  color: #b95300;
  font-size: 36px;
}
.message-subtext {
  color: rgb(44, 44, 44);
  font-size: 20px;
}
.footer {
  width: 100%;
  height: 50px;
  background-color: #f3f3f3;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: rgb(95, 95, 95);
}
a:hover {
  color: black;
}
.image-container {
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.image {
  width: 100%;
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 40px;
  }
  .footer {
    position: relative;
  }
}
</style>
