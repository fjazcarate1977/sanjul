<script lang="ts">
  import type { DividerPositionTypes, DividerColorTypes } from '$lib/types';

  export let position: DividerPositionTypes;
  export let additionalClases: string;
  export let color: DividerColorTypes;
</script>

<div
  class="{position === 'Bottom'
    ? 'top-auto bottom-0'
    : 'bottom-auto top-0'} left-0 right-0 w-full absolute pointer-events-none overflow-hidden {additionalClases}"
  style="transform: translateZ(0)"
>
  <svg
    class="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 2560 100"
    x="0"
    y="0"
  >
    <polygon class="{color} fill-current" points="2560 0 2560 100 0 100" />
  </svg>
</div>
