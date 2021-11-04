<template>
  <footer>
    <p>Copyright © 2021. All rights reserved. Web designed by WeiChiao.</p>
  </footer>
</template>

<script></script>

<style scoped>
footer {
  position: relative;
  background-color: rgb(163, 163, 163);
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}

footer p {
  color: white;
  text-align: center;
  font-size: 14px;
  margin: 10px 5px;
}

@media (min-width: 992px) {
  footer {
    position: absolute;
  }
}
</style>
