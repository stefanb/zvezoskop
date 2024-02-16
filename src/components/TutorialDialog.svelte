<script>
 import Dialog, { Title, Content, Actions } from '@smui/dialog';
 import Button, { Label } from '@smui/button';
 import { locale, translate } from '$lib/translations';


 export let open = false;

</script>

<Dialog
  bind:open
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
  <Title id="simple-title">
   {#if $locale === 'si'}
    Napotki za brskanje
   {:else}
    How to explore the data
   {/if}
  </Title>
  <Content id="simple-content">
   {#if $locale === 'si'}
    <p>Naslovna stran Zvezoskopa prikazuje celotno omrežje aktualnih članov vlade, državnih sekretarjev in poslancev.</p>
    <p>Velikost ikon je odvisna od števila povezav, barve pa označujejo politične funkcije (vijolična za predsednika vlade, modra za ministre in ministrice, turkizna za državne sekretarje in sekretarke ter zelena za poslance).</p>
    <p>Ko se s kurzorjem premakneš na funkcionarja ali funkcionarko, se odpre njegovo ali njeno osebno omrežje. S klikom na ikono se odpre le omrežje posamezne osebe.</p>
    <p>Omogočena je tudi primerjava presečišč dveh oseb, za kar je treba s klikom izbrati še eno osebo. Iz izbora jo odstraniš z vnovičnim klikom.</p>
    <p>Nazaj na naslovno stran Zvezoskopa se vrneš s klikom na simbol projekta v levem kotu zgoraj. </p>
    <p>V osnovnem pogledu (omrežje 1 osebe) je s klikom na ‘življenjepis’ mogoče prebrati vse zbrane informacije o izobraževalni in poklicni poti funkcionarja ali funkcionarke, pa tudi o strankarskem udejstvovanju in prostočasnih dejavnostih. In s kom si jih morda delijo.</p>
    <p>V življenjepisnem pogledu klik na institucijo omogoča vpogled v vse funkcionarje in funkcionarke, povezane z njo skozi čas. Klik na politično stranko pa omogoča prikaz profilov posamezne stranke. </p>
    <p>Piktogram ‘i’ označuje dostop do dodatnih informacij.</p>
    <p>Prijetno brskanje želimo!</p>
    <p>P. S. Če odkrijete kaj zanimivega, se nam lahko kadarkoli oglasite na e-naslov contact@ostro.si.</p>
   {:else}
    <p>The title page of Zvezoskop shows the entire network formed by the individual networks of government members, ministerial secretaries, and MPs.</p>
    <p>Icon sizes depend on the number of their connections, and the colors denote their individual political functions (purple for the Prime Minister, blue for government ministers, turquoise for their secretaries, and light green for MPs).</p>
    <p>Hovering over a person of interest reveals their personal network. By clicking on the icon, you will see only that individual’s network.</p>
    <p>It is also possible to compare the networks of two officials by selecting the second person. To remove them, simply click on their icon.</p>
    <p>You can reach the title page again by clicking on the project symbol in the top left corner.</p>
    <p>In the main view (network of 1 person), you can click the "CV" button to access information about the person's education, career, party affiliation, and leisure activities. And who they may have shared them with.</p>
    <p>In the CV view, you can see an overview of all officials whose paths converged at an institution by clicking on it. If you select a political party, you will see the occupational profiles of its members.</p>
    <p>The "i" sign denotes more information available.</p>
    <p>Have a nice exploration!</p>
    <p>PS: If you discover something interesting, you can always write to us at contact@ostro.si.</p>
   {/if}
  </Content>
  <Actions>
    <Button on:click={() => (open = false)}>
      <Label>{$translate("Got it!")}</Label>
    </Button>
  </Actions>
</Dialog>

<style lang="scss">
 :global(.mdc-dialog) {
  z-index: 1000 !important;
 }

 :global(.mdc-dialog__container) {
  z-index: 10000 !important;
 }

 :global(.mdc-dialog__container .mdc-button) {
  width: 80px;
  background: #00001E;
  border-radius: 10px;
  height: 22px !important;

  &:hover {
   opacity: 0.75;
  }
 }

 :global(.mdc-dialog__container .mdc-button__label) {
  text-align: center;
  font-family: IBM Plex Sans !important;
  font-size: 12px !important;
  font-style: normal;
  font-weight: 600;
 }
</style>