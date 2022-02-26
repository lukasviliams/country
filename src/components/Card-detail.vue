<template>
  <div>
    <p>I am the detail page and my Isd is {{ id }}</p>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import getDocument from "../composables/getDocument";
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { data, error, isLoading, name, load } = getDocument();
    onMounted(() => {
      name.value = props.id;
      load();
    });

    return {
      data,
      error,
      isLoading,
      name,
      load,
    };
  },
};
</script>
<style></style>
