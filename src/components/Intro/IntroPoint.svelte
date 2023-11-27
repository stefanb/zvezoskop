<script>

  export let color;
  export let r;


</script>

<div class="point" style:background={color} style:width={`${r}px`} style:height={`${r}px`}>

</div>



<style lang="scss">
  .point {
    border-radius: 50px;
  }
</style>