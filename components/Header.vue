<template lang="pug">
    header.header
        .container.header__container
            a(href="#").header__logo-link
                img(src="~/assets/images/logo.svg").header__logo-img
            nav.header__nav
                ul.header__nav-list
                    li.header__nav-item
                        a.header__nav-link Услуги
                    li.header__nav-item
                        a.header__nav-link Кейсы
                    li.header__nav-item
                        a.header__nav-link О нас
                    li.header__nav-item
                        a.header__nav-link Отзывы
                    li.header__nav-item
                        a.header__nav-link Контакты
            a(href="tel:+74993754114").header__contacts-link
                p.header__contacts-text +7 (499) 375-41-14
                img(src="~/assets/images/header/phoneIcon.svg").header__contacts-img
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding: 1.563vw 0 0 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav-list {
    display: flex;
    align-items: center;
  }

  &__nav-item {
    &:not(:last-child) {
      margin: 0 2.865vw 0 0;
    }
  }

  &__nav-link {
    color: #fff;
  }

  &__contacts-link {
    display: flex;
    align-items: center;
  }

  &__contacts-text {
    color: #fff;

    margin: 0 3.385vw 0 0;
  }
}
</style>
