<template>
  <div>
    <p>用户: {{ name }}</p>
    <p>账号: {{ email }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: mapState({
    email: (state) => state.userInfo.email,
    name: (state) => state.userInfo.userName,
  }),
};
</script>