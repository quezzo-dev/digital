<template lang="pug">
    button.button 
        p.button__text {{ buttonText }}
        img(src="~/assets/images/arrow.svg").button__img
</template>

<script>
export default {
  props: ["buttonText"],
};
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
  padding: 0.833vw 1.875vw;
  background: #b21414;
  border-radius: 100px;
  display: flex;
  align-items: center;
  transition: opacity ease 0.3s;

  &__text {
    margin: 0 0.521vw 0 0;
    color: #ffffff;
    font-size: 0.938vw;
    font-weight: 500;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  &:hover {
    opacity: 0.7;
  }
}
</style>
