<!-- https://stackoverflow.com/questions/68060723/glob-import-of-image-urls-in-sveltekit -->
<!-- https://stackoverflow.com/questions/71789244/where-to-put-images-with-sveltekit -->

<script>
 import { getContext } from "svelte";
  
 export let imageLink;

let imageSrc;

$: {
  if (imageLink) {
    if (imageLink.includes("https://")) {
      imageSrc = imageLink
    } else {
      const images = getContext('images');
      imageSrc = images?.[`/src/lib/img/${imageLink}`]?.default
    }
  } else {
    imageSrc = undefined
  }
}

</script>

 <slot imageSrc={imageSrc} />