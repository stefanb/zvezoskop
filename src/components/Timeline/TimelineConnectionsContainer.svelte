<script>
 import TimelineConnectionRowExpanded from './TimelineConnectionRowExpanded.svelte';

 export let id;
 export let connection;
 export let refX;

</script>

 <div class="connections-expanded">
    <TimelineConnectionRowExpanded {id} items={connection} {refX} />
 </div>

<style lang="scss">
 .connections-expanded {
  background-color: white;
  height: 20px;
  z-index: 6;
 }
 .background {
  position: absolute;
  background-color: white;
  z-index: 5;

 }
</style>