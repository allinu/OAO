<template>
  <div class="ui container">
    <CustomLogo />
  </div>
</template>

<script>
import CustomLogo from "@/components/CustomLogo";

export default {
  name: "Home",
  components: {
    CustomLogo,
  },
};
</script>

<style scoped>
.logo {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ui.header {
  margin: 50px auto;
  font-size: 40px;
}
.ui.button.primary {
  font-family: SCR, serif;
  margin-top: 20px;
  line-height: 20px;
  border-radius: 50px;
  width: 60%;
  font-size: 30px;
}
.btn_text {
  font-size: 30px;
  letter-spacing: 10px;
}
</style>
