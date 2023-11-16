<script>
 import { translate } from '$lib/translations';
 import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
 import { groupBy, getColor, getTextColor } from '../../utils';
 import PersonLabel from '../PersonLabel.svelte';
 import Icon from '../Icon.svelte';

 export let people;

 const panels = [
  { key: 'pm', text: $translate('Prime minister'), open: true},
  { key: 'minister', text: $translate('Ministers'), open: true},
  { key: 'secretary', text: $translate('Secretaries'), open: true},
  { key: 'mp', text: $translate('MPs'), open: true},
 ]

 $: grouped = groupBy(people, 'position')
</script>


<div class="accordion-container">
 <Accordion multiple>
  {#each panels as {key, text, open}}
    <Panel bind:open>
      <Header>
        <div class="header" style="--background-color: {getColor(key)}; --text-color: {getTextColor(key)}">
          <div class="header__text">{text}</div>
          <div class="header__icon">
            {#if open}
              <Icon icon="minus" color={getTextColor(key)} />
            {:else}
              <Icon icon="plus" color={getTextColor(key)} />
            {/if}
          </div>
        </div>
      </Header>
      <Content>
      {#if key in grouped}
        {#each grouped[key] as person}
          <div class="item">
              <PersonLabel
                id={person.id}
                name={person.name}
                position={person.position}
                image_link={person.image_link}
                clickable
              />
          </div>
        {/each}
      {/if}
      </Content>
    </Panel>
  {/each}
 </Accordion>
</div>

<style lang="scss">
  // .accordion-container {
  //   // padding: 10px 0;
  // }
  :global(.smui-paper__content) {
    padding: 0 !important;
	}

  :global(.smui-accordion__header__title) {
    padding: 0 !important;
  }

  .header {
    padding: 15px;
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: Noe Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item {
    padding: 10px 15px;
    border-bottom: 1px solid #E6E6EB;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
</style>