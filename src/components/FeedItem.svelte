<script lang="ts">
  export let title: string;
  export let imgURL: string;
</script>

<span id="feed" class="h-4/5 aspect-[3/4] bg-white rounded-3xl relative shadow-lg group
before:w-full before:h-1/2 before:content-[''] before:bg-cover before:absolute before:rounded-t-3xl
after:w-full after:h-full after:content-[''] after:bg-indigo-900 after:opacity-0 after:group-hover:opacity-50 after:transition-opacity
after:absolute after:rounded-3xl m-2" style="--image-url: url('{imgURL}')">
  <span class="w-full h-1/2 pt-2 absolute top-1/2 px-3 items-center flex flex-col">
    <div class="text-center text-xl font-normal mb-2">{title}</div>
    <div class="text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
    <div class="w-full absolute bottom-2">
      <hr class="bg-slate-900 h-[1px] mx-3">
      <div class="text-center text-gray-500">Ler Mais</div>
    </div>
  </span>
</span>
  
<style>
  #feed::before {
    background-image: var(--image-url);
  }
</style>