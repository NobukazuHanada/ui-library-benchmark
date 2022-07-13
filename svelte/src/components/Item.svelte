<script lang="ts">
import { matched } from "../NameMarked";

  import type { Item } from "../data/items";

  /**
   * ID of item
   */
  export let id: string;
  export let item: Item | undefined;
  /**
   * Search query, in lowercase
   */ 

   let nameMarked = matched(item);

</script>

{#if item}
  <div class="wrapper">
    <div class="id">{id}</div>
    <div>
      <span class="name" class:unmatchedName={$nameMarked === "no match"}>
        {#if $nameMarked === "no match"}
          {item.en}
        {:else}
        {$nameMarked.prefix}<mark>{$nameMarked.marked}</mark
          >{$nameMarked.suffix}
        {/if}
      </span>
    </div>
    <div>{item.ja}</div>
  </div>
{/if}

<style>
  .wrapper {
    background-color: var(--bg-sub-color);
  }

  .id {
    color: var(--text-sub-color);
  }

  .name > mark {
    font-weight: bold;
  }

  .unmatchedName {
    color: var(--text-sub-color);
  }
</style>
