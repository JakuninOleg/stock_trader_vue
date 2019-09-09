<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__list-item">
          <router-link
            to="/"
            tag="a"
            activeClass="nav__list-link--active"
            class="nav__list-link"
            exact
          >Home</router-link>
        </li>
        <li class="nav__list-item">
          <router-link
            to="/portfolio"
            tag="a"
            class="nav__list-link"
            activeClass="nav__list-link--active"
          >Portfolio</router-link>
        </li>
        <li class="nav__list-item nav__list-item--right">
          <a class="nav__list-link nav__list-link--right">End Day</a>
        </li>
        <li class="nav__list-item">
          <a class="nav__list-link nav__list-link--arrow">
            Save & Load

              <ul class="tooltip" key="tooltip">
                <li class="tooltip__item">Save</li>
                <li class="tooltip__item">Load</li>
              </ul>

            <span class="arrow-link">
              <i class="arrow"></i>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  background: #3182ce;
}

.arrow {
  height: 12px;
  width: 12px;
  border-style: solid;
  border-color: #f7fafc;
  border-width: 0px 1.5px 1.5px 0px;
  transform: rotate(-45deg);
  cursor: pointer;

  &-link,
  &-link:visited {
    line-height: 0;
    border: none;
    display: flex;
    align-items: center;
    outline: none;
    padding-left: 1rem;
  }

  &-link-active {
    transform: rotate(45deg);
  }
}

.nav {
  padding: 0 15rem;
  margin: 0 auto;

  &__list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, max-content) 1fr max-content;

    &-item--right {
      justify-self: end;
    }

    &-link {
      display: flex;
      padding: 1.5rem 3rem;
      text-decoration: none;
      color: #f7fafc;
      font-size: 1.8rem;
      cursor: pointer;

      &:hover,
      &--active {
        background: #2b6cb0;
      }
    }

    &-link--arrow:hover .tooltip {
      opacity: 1;
    }
  }
}

.tooltip {
  opacity: 0;
  list-style: none;
  background: white;
  border-radius: 5px;
  width: 15rem;
  position: absolute;
  color: black;
  border: 1px solid #cbd5e0;
  top: 52px;
  transform: translateX(-8px);
  overflow: hidden;
  margin: 0 auto;
  transition: all .3s ease;

  &__item {
    padding: 2.2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;

    &:hover {
      background: #e2e8f0;
    }
  }
}
</style>
