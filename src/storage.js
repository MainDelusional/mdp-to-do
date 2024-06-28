
  import { writable } from "svelte/store"
  import { browser } from "$app/environment";


  export const stored_items = writable(browser && (JSON.parse(localStorage.getItem("items")) || ["Nothing here yet"]));
  stored_items.subscribe((new_items) => browser && localStorage.setItem("items", JSON.stringify(new_items)))
