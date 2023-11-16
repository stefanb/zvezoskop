<script>
 import Menu from '@smui/menu';
 import { Anchor } from '@smui/menu-surface';
 import { translate } from '$lib/translations';
 import List, {
   Item,
   Separator,
   Text,
   PrimaryText,
   SecondaryText,
 } from '@smui/list';
 import Button, { Label } from '@smui/button';

 import LocalizedLink from './LocalizedLink.svelte';

 let menu
 let anchor
 let anchorClasses = {};
 let clicked = 'nothing yet';
</script>

<div
  class={Object.keys(anchorClasses).join(' ')}
  use:Anchor={{
    addClass: (className) => {
      if (!anchorClasses[className]) {
        anchorClasses[className] = true;
      }
    },
    removeClass: (className) => {
      if (anchorClasses[className]) {
        delete anchorClasses[className];
        anchorClasses = anchorClasses;
      }
    },
  }}
  bind:this={anchor}
>
  <Button on:click={() => menu.setOpen(true)}>
    <Label>{$translate('header.about')}</Label>
  </Button>
  <Menu
    bind:this={menu}
    anchor={false}
    bind:anchorElement={anchor}
    anchorCorner="BOTTOM_LEFT"
  >
    <List twoLine>
     <Item>
      <LocalizedLink href="/about">{$translate('header.the_project')}</LocalizedLink>
     </Item>
     <Item>
      <LocalizedLink href="/about">{$translate('header.methodology')}</LocalizedLink>
     </Item>
    </List>
  </Menu>
</div>
