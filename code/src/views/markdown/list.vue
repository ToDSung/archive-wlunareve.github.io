<template>
  <div class="markdown">
    <article v-for="(markdown) in markdownList"
      :key="markdown.title"
      class="article"
    >
      <div
        class="article__left-side"
      >
        <router-link 
          :to="{
            path: `/markdown/${markdown.path}`,
          }"
        >
          <span class="article__title">
            {{ markdown.title }}
          </span>
          <p class="article__introduction">
            {{ markdown.introduction }}
          </p>
        </router-link>

        <div class="label">
          <span v-for="(label) in markdown.labels"
            :key="label"
            class="label__item"
          >
            {{ label }}
          </span>
        </div>
      </div>
      <span class="article__time">
        最後修改時間：{{ markdown.time }}
      </span>
    </article>
  </div>
</template>

<script>
  import markdownList from '@md/list.json'
  export default {
    name: "MarkdownList",

    setup() {
      return {
        markdownList
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../css/RWD_mixin';
  @import '../../css/color';

  .markdown {
    margin: 0 auto;
    max-width: 1280px;
  }

  .article {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 1rem 1rem 2rem;

    @include laptop {
      display: flex;
      flex-direction: column;
    }

    &__left-side {
      grid-column-start: 1;
      grid-column-end: 4;
    }

    &__title {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2rem;
      color: $article-title;
    }

    &__introduction {
      display: -webkit-box;
      overflow: hidden;
      margin: .5rem 0;
      height: 3rem;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: $grey-darken1;
    }

    &__time {
      align-self: flex-end;
      font-size: .8rem;
    }
  }

  .label {
    &__item {
      padding: .125rem .5rem;
      background-color: $grey-lighten3;
      border-radius: 100px;
      cursor: pointer;
    }
  }
</style>