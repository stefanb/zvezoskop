<script>
 import { page } from '$app/stores'

 $: {
   if (typeof gtag !== 'undefined') {
     gtag('config', 'G-3FQECTHCNB', {
       page_title: $page.data.title,
       page_path: $page.url.pathname,
     })
   }
 }
</script>

<svelte:head>
 <script
   async
   src="https://www.googletagmanager.com/gtag/js?id=G-3FQECTHCNB">
 </script>
 <script>
   window.dataLayer = window.dataLayer || []

   function gtag() {
     dataLayer.push(arguments)
   }

   gtag('js', new Date())
   gtag('config', 'G-3FQECTHCNB')
 </script>
</svelte:head>