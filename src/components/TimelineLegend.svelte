<script>
import { translate } from '$lib/translations';
 
</script>


<div class="legend">
  <div class="legend__content">
    <div class="legend__title">
      {$translate('legend')}
    </div>
    <div class="legend__item">
      <span class="legend__item__bold">{$translate('DD.MM.YYYY')} –</span>
      <span>{$translate('The function is ongoing as of 27/11/2023')}</span>
    </div>
    <div class="legend__item small-width-hide">
      <div class="legend__item__bar"></div>
      <span>{$translate('Exact start and end date')}</span>
    </div>
    <div class="legend__item medium-width-hide">
      <div class="legend__item__bar end-uncertain"></div>
      <span>{$translate('Exact start and not exact end date')}</span>
    </div>
    <div class="legend__item small-width-hide">
      <div class="legend__item__bar both-uncertain"></div>
      <span>{$translate('Not exact start and end date')}</span>
    </div>
  </div>
</div>


<style lang="scss">
 .legend {
  height: 60px;
  background: #E6E6EB;
  width: calc(100% - 40px);
  font-size: $timeline-font-size;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 20px;
  overflow: hidden;

  @media (max-width: $mobile) {
    display: none;
  }

  .collapsed & {
    height: 0;
  }

  &__content {
    max-width: $max-width;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__title {
    text-transform: uppercase;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;

    &.medium-width-hide {
      @media (min-width: 740px) and (max-width: 1000px) {
        display: none;
      }
    }

    &.small-width-hide {
      @media (min-width: $mobile) and (max-width: 740px) {
        display: none;
      }
    }

    &__bold {
      font-weight: 600;
    }

    &__bar {
      content: "";
      width: 100%;
      min-width: 35px;
      height: 10px;
      border-radius: 20px;
      background: #272728;
      // border: 0.5px solid white;

      &.end-uncertain {
        background: linear-gradient(to right, rgb(39, 39, 40), rgb(39, 39, 40) 50%, rgb(39, 39, 40) 51%, transparent);
      }

      &.both-uncertain {
        background: linear-gradient(to right, transparent, rgb(39, 39, 40) 40%, rgb(39, 39, 40) 50%, rgb(39, 39, 40) 60%, transparent);
      }
    }
  }
 }
</style>
