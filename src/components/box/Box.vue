<template>
  <div
    class="im-dark im-box-cover im-round-8 im-blur-15"
    :class="{ 'im-vertical': vertical }"
  >
    <div class="im-box">
      <div class="im-box-header">
        <pic min-width="120px" />
      </div>
      <div class="im-box-main">
        <slot v-if="$slots.default" />
        <template v-else>
          <div class="im-box-title">Carmel Frappe</div>
          <div class="im-box-description">
            Element : Syrup | Whipped Cream | Espresso Element : Syrup | Whipped
            Cream | Espresso Element : Syrup | Whipped Cream | Espresso Element
            : Syrup | Whipped Cream | Espresso Element : Syrup | Whipped Cream |
            Espresso
          </div>
          <div class="im-box-money" v-if="price">
            <span class="im-box-currency">{{ currency }}</span>
            <span class="im-box-price">{{ price }}</span>
            <span class="im-box-sale">{{ sale }}</span>
          </div>
        </template>
      </div>
      <div class="im-box-footer" v-if="ba || bb">
        <button
          v-ripple
          class="im-box-btn warning"
          v-if="ba"
          @click="$emit('ba', key)"
        >
          {{ ba }}
        </button>
        <button v-ripple class="im-box-btn" v-if="bb" @click="$emit('bb', key)">
          {{ bb }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Ripple from "@/directives/ripple/ripple"
import Pic from "@/components/box/Pic"

export default {
  props: {
    key: {},
    vertical: {
      type: Boolean,
      default: false
    },
    title: {},
    description: {},
    currency: {
      type: String,
      default: "$"
    },
    price: {},
    sale: {},
    ba: {
      type: String,
      default: ""
    },
    bb: {
      type: String,
      default: ""
    }
  },
  directives: { ripple: Ripple },
  components: { Pic },
  mounted() {
    console.log(this.$slots)
  }
}
</script>
<style lang="css" src="@/directives/ripple/ripple.css"></style>
<style lang="scss">
@import "~@/assets/scss/variables";
.im-blur-15 {
  &.im-box-cover {
    backdrop-filter: blur(15px);
  }
}

.im-round-8 {
  &.im-box-cover {
    border-radius: 8px;
    overflow: hidden;
  }
}

.im-box {
  font-size: calc(14px + 2 * ((100vw - 320px) / 1000));
  position: relative;
  display: flex;

  & > * {
    display: inline-flex;
    flex: 1 0 0;
  }

  .im-box-header {
    align-items: center;
  }
  .im-box-main {
    flex-grow: 2;
    padding: 0.5rem 0.75rem;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-around;
    .im-box-title,
    .im-box-description {
      overflow: hidden;
      margin-bottom: 0.5rem;
      max-height: 80px;
      -webkit-line-clamp: 4;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }

    .im-box-title {
      max-height: 40px;
      -webkit-line-clamp: 2;
      font-weight: bold;
    }
  }

  .im-box-money {
    .im-box-currency {
      font-weight: bold;
    }
    .im-box-price {
      display: inline-block;
      font-size: 1em;
      line-height: 1em;
      font-weight: bold;
    }
    .im-box-sale {
      display: inline-block;
      margin-left: 5px;
      font-size: 0.75em;
      line-height: 1em;
      text-decoration: line-through;
    }
  }

  .im-box-footer {
    flex-grow: 0;
    flex-basis: 64px;
    flex-direction: column;
    .im-box-btn {
      outline: 0 !important;
      height: 100%;
      border: 0;
      font-size: calc(15px + 2 * ((100vw - 320px) / 1000));
      cursor: pointer;
    }
  }
}

.im-vertical {
  .im-box {
    flex-direction: column;
    & > * {
      flex: auto;
    }
    // .im-box-header,
    // .im-box-main,
    .im-box-footer {
      flex-direction: row;
      .im-box-btn {
        width: 100%;
        min-height: 36px;
      }
    }
  }
}

/*------------------------------------*/
/* COLORS */
/*------------------------------------*/
.im-box-money {
  .im-box-currency {
    color: $danger;
  }
  .im-box-price {
    color: $danger;
  }
  .im-box-sale {
    color: $text-lighten-low;
  }
}

.im-box-cover {
  background-color: $white-2;
  color: $text-base;
  .im-box-btn {
    color: $text-base;
    background-color: transparentize($success, 0.3);
    &.warning {
      background-color: transparentize($warning, 0.3);
    }
  }
}

.im-dark {
  &.im-box-cover {
    background-color: $black-2;
    color: $white;
    .im-box-btn {
      color: $white;
      background-color: transparentize($dark-success, 0.3);
      &.warning {
        background-color: transparentize($dark-warning, 0.3);
      }
    }
  }

  .im-box-money {
    .im-box-currency {
      color: $dark-danger;
    }
    .im-box-price {
      color: $dark-danger;
    }
    .im-box-sale {
      color: $dark-text-lighten-low;
    }
  }
}
</style>
