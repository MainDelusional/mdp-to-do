<script>
  import { fade, slide } from 'svelte/transition';
  import {stored_items} from "../storage"
  let items = $stored_items;
  let next_item = "";

  function new_item() {
    items = [...items, next_item];
    stored_items.update((_) => items);
  }

  function on_keypress(event) {
    switch (event.key) {
      case "Enter":

        event.preventDefault();
        new_item()
        break;
    }
  }

  function remove_item(item) {
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
      items = items
    }
  }

</script>
<label>
  <input id="input-field" type="text" bind:value={next_item} on:keypress={on_keypress}>
</label>

<div>
  {#each items as item}
    <button class="to-do-item" in:fade out:slide={{duration : 40}} on:click={() => remove_item(item)}>{item}</button>
  {/each}

</div>

<style>
  #input-field {
    display: flex;
    margin-inline: auto;
    width: 30%;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 7px;
  }

  .to-do-item{
    display: block;
    margin-inline: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;

  }

</style>
