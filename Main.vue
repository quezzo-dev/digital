<template lang="pug">
    section.main
        img(src="~/assets/images/mount.svg").main__background-img
        full-page(ref="fullpage" :options="options")
            section.main__section.section
                .container
                    .main__section-wrapper-first
                        h1.main__section-title DIGITAL <span class="accent main__section-title-accent">MARKETING</span>
                        p.main__section-description Раскроем потенциал вашего бизнеса, благодаря комплексному подходу в продвижении
            section.main__section.section
                .container
                    .main__section-wrapper-second
                         p.main__section-text.main__section-text-second Занимается продвижением оффлайн-брендов в цифровой среде. Основываясь на анализе аудитории, продукта и конкурентов, предлагаем комплексные услуги для вашего бизнеса: от разработки стратегии продвижения до ее реализации.
                         ul.main__section-list-second
                            li.main__section-item-second(v-for="(item, index) in items")
                                a.main__section-item-text-second {{item.text}}
            section.main__section.section
                .container
                    .main__section-wrapper-third
                        h2.main__section-subtitle Агентство <span class="accent">FOURO</span>
                        p.main__section-description – команда профессионалов-единомышленников в области digital-маркетинга, фанатеющих от своей работы. <br><br> Философия нашего агентства проста – создавать эффективные проекты по продвижению бизнеса в цифровой среде.
                        Button(:buttonText="btnText").main__section-button-third
            section.main__section.section
                .container
                    .main__section-wrapper-fourth
                        .main__section-leftside
                            h2.main__section-subtitle разработка сайтов
                            p.main__section-description Умеем не просто делать новые сайты, или производить апгрейд текущих – мы делаем инструменты для привлечения клиентов и зарабатывания денег.
                            Button(:buttonText="btnText").main__section-button-fourth
                        .main__section-rightside
            section.main__section.section
                .container
                    .main__section-wrapper-fifth
                        .main__section-leftside
                            h2.main__section-subtitle Анализ и аудит
                            p.main__section-description Сделаем полный анализ работы сайта - от получения посетителей до нужной конверсии. Проверим тепловые карты, микроконверсии и настроим нужные цели для систем аналитики яндекса, гугла и call-tracking.
                            Button(:buttonText="btnText").main__section-button-fourth
                        .main__section-rightside
            section.main__section.section
                .container
                    .main__section-wrapper-sixth
                        h2.main__section-subtitle реклама и продвижение
                        p.main__section-description Ваш бизнес может получать рекламный трафик не только из контекста и из социальных сетей. В зависимости от сферы деятельности, эффективность такой рекламы может быить даже выше традиционных платных каналов
                        Button(:buttonText="btnText").main__section-button-third
            section.main__section.section
                .container
                    .main__section-wrapper-seventh
                        ul.main__section-cases-list
                            li(v-for="(caseInfo, index) in cases").main__section-cases-item
                                h2.main__section-cases-item-subtitle {{ caseInfo.subtitle }}
                                p.main__section-cases-item-text {{ caseInfo.text }}
                        .main__section-image-wrapper
                            img(src="~/assets/images/fish.png").main__section-image-seventh
                        ul.main__section-works-list
                            li(v-for="(work, index) in works").main__section-works-item
                                h2.main__section-works-item-subtitle {{work.subtitle}}
                                img(:src="work.img").main__section-works-item-img
            section.main__section.section
                .container
                    .main__section-wrapper-eighth
                        h2.main__section-subtitle.main__section-subtitle-eighth Отзывы
                        .main__seection-swiper
                            .mySwiper(v-swiper:mySwiper="swiperOption")
                                .swiper-wrapper
                                    .main__seection-reviews-slide.swiper-slide(v-for="(review, index) in reviews" :key="index")
                                            h3.main__section-reviews-slide-name {{review.name}}
                                            p.main__section-reviews-slide-text {{review.text}}
                                            p.main__section-reviews-slide-signature {{review.signature}}
                                    .swiper-pagination.swiper-pagination-bullets
                        

</template>

<script>
import Button from "~/components/Button.vue";
export default {
  data() {
    return {
      options: {},
      items: [
        {
          text: "#Разработка сайтов",
        },
        {
          text: "#Digital-стратегия",
        },
        {
          text: "#Аналитика",
        },
        {
          text: "#Аудит",
        },
        {
          text: "#Анализ конкурентов",
        },
        {
          text: "#SMM",
        },
        {
          text: "#Таргетированная реклама",
        },
        {
          text: "#SEO",
        },
        {
          text: "#Контекстная реклама",
        },
      ],

      cases: [
        {
          subtitle: "Салон немецких кухонь",
          text: "ROI - 1500% за 1,5 года",
        },
        {
          subtitle: "риелтор Игорь Пуштаев",
          text: "Смотреть результат",
        },
        {
          subtitle: "Latteria итальянская сыроварня",
          text: "с 1,5 % до 4,5 % увеличена конверсия и кликабельность",
        },
        {
          subtitle: "Патентное бюро",
          text: "Обновлен дизайн Повышена скорость работы сайта Улучшино юзабилити",
        },
      ],

      works: [
        {
          subtitle: "разработка сайта",
          img: require("~/assets/images/main/seventh/redArrow.svg"),
        },
        {
          subtitle: "разработка сайта",
          img: require("~/assets/images/main/seventh/whiteArrow.svg"),
        },
        {
          subtitle: "SMM Продвижение",
          img: require("~/assets/images/main/seventh/whiteArrow.svg"),
        },
        {
          subtitle: "разработка сайта",
          img: require("~/assets/images/main/seventh/whiteArrow.svg"),
        },
      ],

      reviews: [
        {
          name: "Название комапнии",
          text: "Очень крутая компания! Спасибо большое ребятам за такой сервис и высшую культуру обслуживания клиентов! Так держать! Всем советуем)",
          signature: "Руководитель компании, Крутой Петр",
        },
        {
          name: "Название комапнии",
          text: "Очень крутая компания! Спасибо большое ребятам за такой сервис и высшую культуру обслуживания клиентов! Так держать! Всем советуем)",
          signature: "Руководитель компании, Крутой Петр",
        },
        {
          name: "Название комапнии",
          text: "Очень крутая компания! Спасибо большое ребятам за такой сервис и высшую культуру обслуживания клиентов! Так держать! Всем советуем)",
          signature: "Руководитель компании, Крутой Петр",
        },
      ],

      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },

      btnText: "заказать",
    };
  },

  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: #191c27;
  width: 100vw;
  height: 100vh;

  &__background-img {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: auto;
  }

  &__section-wrapper {
    &-first {
      position: relative;
      width: 31.771vw;

      &::after {
        position: absolute;
        content: "";
        background: url("~/assets/images/main/first/play.svg");
        top: 0;
        right: -44.6vw;
        width: 22.396vw;
        height: 23.229vw;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }

    &-second {
      display: flex;
      justify-content: space-between;
    }

    &-third {
      width: 43.438vw;
    }

    &-fourth {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-fifth {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &-sixth {
      width: 30.729vw;
    }

    &-seventh {
      display: flex;
      align-items: center;
    }
  }

  &__section-title {
    font-size: 7.292vw;
    font-weight: 600;
    line-height: 0.7;
    letter-spacing: 0.01em;
    color: #e0e1e3;
  }
  &__section-title-accent {
    font-size: 4.948vw;
  }

  &__section-description {
    margin: 2.344vw 0 0 0;
    font-size: 1.563vw;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.2;
    color: #e0e1e3;
  }

  &__section-text {
    font-size: 1.563vw;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.2;
    color: #fff;

    &-second {
      width: 28.771vw;
    }
  }

  &__section-list {
    &-second {
      width: 37.625vw;
    }
  }

  &__section-item-second {
    display: inline-grid;
    margin: 0 0 0.833vw 0;
    padding: 0.521vw 0.833vw;
    border-radius: 1.563vw;
    background: rgba(178, 20, 20, 0.4);

    &:not(:last-child) {
      margin: 0 0.833vw 0.833vw 0;
    }
  }

  &__section-item-text-second {
    color: #ffffff;
    font-size: 1.563vw;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.2;
  }

  &__section-subtitle {
    color: #e0e1e3;
    text-transform: uppercase;
    font-size: 2.604vw;
    font-weight: 600;
    letter-spacing: 0.01em;
    line-height: 1.2;
    &-eighth {
      position: absolute;
      top: 6.302vw;
    }
  }

  &__section-button {
    &-third {
      margin: 2.865vw 0 0 0;
    }

    &-fourth {
      margin: 4.479vw 0 0 0;
    }
  }

  &__section-leftside {
    width: 37.24vw;
  }

  &__section-rightside {
    width: 27.188vw;
    height: 28.646vw;
    background: #c4c4c4;
  }

  &__section-cases-list {
    width: 27.083vw;
  }

  &__section-cases-list,
  &__section-works-list {
    border-top: 1px solid #b21414;
    border-bottom: 1px solid #fff;
  }

  &__section-cases-item,
  &__section-works-item {
    padding: 1.563vw 0;
    &:not(:last-child) {
      border-bottom: 1px solid #fff;
    }
    &:first-child {
      border-bottom: 1px solid #b21414;
    }
  }

  &__section-works-item {
    padding-left: 1.563vw;

    display: flex;
    align-items: center;
  }

  &__section-image-wrapper {
    width: 30.885vw;
    height: 35.417vw;
  }

  &__section-image {
    &-seventh {
      width: 100%;
      height: 100%;
    }
  }

  &__section-works-item-subtitle,
  &__section-cases-item-subtitle {
    font-weight: 600;
    margin: 0 2.083vw 0 0;
    font-size: 0.833vw;
    letter-spacing: 0.01em;
    line-height: 1.2;
    text-transform: uppercase;
    color: #ffff;
  }

  &__section-cases-item-subtitle {
    font-size: 1.146vw;
  }

  &__section-cases-item-text {
    margin: 0.833vw 0 0 0;
    font-size: 0.938vw;
    color: #fff;
    line-height: 1.2;
    letter-spacing: 0.01em;
    font-weight: 400;
  }

  &__section-works-item-img {
    width: 3.177vw;
    height: 3.333vw;
  }

  &__seection-swiper {
    width: 70.74vw;
    position: absolute;
    right: -3.646vw;
    top: 14.01vw;
    overflow: hidden;
  }

  &__seection-reviews-slide {
    padding: 1.563vw 2.083vw;
    background: #e0e1e3;
    border-radius: 1.042vw;
  }

  &__section-reviews-slide-name {
    font-size: 0.938vw;
    letter-spacing: 0.01em;
    line-height: 1.2;
    font-weight: 500;
    color: #191c27;
  }

  &__section-reviews-slide-text {
    margin: 1.198vw 0 0 0;
    font-size: 0.833vw;
    letter-spacing: 0.01em;
    line-height: 1.2;
    font-weight: 400;
    color: #191c27;
  }

  &__section-reviews-slide-signature {
    margin: 4.375vw 0 0 0;
    font-size: 0.833vw;
    letter-spacing: 0.01em;
    line-height: 1.2;
    font-weight: 400;
    color: #191c27;
  }
}
</style>
