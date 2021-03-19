<template>
  <div>
    <div class="color-block wrapper">
      <div class="half">
        <h1>learn from the comfort of your own home</h1>
      </div>
      <div class="half">
        <img class="image" src="/color-stream.png" alt="">
      </div>
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
      <a href="">GitHub</a>
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
.color-block {
  background-color: #008f95;
  height: 500px;
}
.half {
  width: 50%;
  padding: 20px;
}
h1 {
  font-size: 60px;
  color: white;
}
.message {
  height: 230px;
}
.message-text {
  color: #008f95;
  font-size: 36px;
}
.message-subtext {
  color: #cea21e;
  font-size: 20px;
}
.footer {
  width: 100%;
  height: 50px;
  background-color: #e24e42;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: white;
}
a:hover {
  color: #008f95;
}

@media only screen and (max-width: 600px) {
  .color-block {
    height: 400px;
  }
  .half {
    width: 100%;
    padding: 5px;
  }
  h1 {
    font-size: 40px;
  }
  .image {
    width: 90%;
  }
  .footer {
    position: relative;
  }
}
</style>
