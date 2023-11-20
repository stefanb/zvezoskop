<script>
 import { showAlert } from "../stores";
 import { translate } from '$lib/translations';
 import Button, { Label } from "@smui/button";

</script>

{#if $showAlert}
 <div class="background">
  <div class="content">
   <h5 class="content__title">{$translate("select / deselect")}</h5>
   <p class="content__body">
    {$translate("You can only select a maximum of 2 people. Deselect one first.")}
   </p>
   <Button on:click={() => $showAlert = false}>
    <Label>{$translate('Got it!')}</Label>
   </Button>
  </div>
 </div>
{/if}


<style lang="scss">
 .background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.7);
  overflow: hidden;
 }

 .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #E6E6F0;
  padding: 20px;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 170px;

  &__title {
   text-transform: uppercase;
   margin: 0;
   font-size: 13px;
   font-weight: 600;
   height: 15px;
  }
 }

 :global(.content > .mdc-button) {
  width: 80px;
  background: #00001E;
  border-radius: 10px;
  height: 22px !important;

  &:hover {
   opacity: 0.75;
  }
 }

 :global(.content > .mdc-button__label) {
  text-align: center;
  font-family: IBM Plex Sans !important;
  font-size: 12px !important;
  font-style: normal;
  font-weight: 600;
 }
</style>