<template>
  <v-card class="my-6 mx-4" max-width="370">
    <v-img height="250" :src="c.image"></v-img>

    <v-card-title>{{ c.title }}</v-card-title>
    <div class="mx-4">
      <p>
        Owner: <b>{{ c.owner.firstName }} {{ c.owner.lastName }}</b>
      </p>
      <span>
        Year: <b>{{ c.yearOfMake }}</b>
      </span>
      <br />
      <span>
        Miles: <b>{{ c.miles }}</b>
      </span>
      <p />
      <p />
      <p>
        Price: <b>{{ c.price }}</b>
      </p>
    </div>

    <v-card-actions class="mb-3 d-flex justify-end">
      <v-btn
        class="purple"
        color="white--text"
        @click="buyButton()"
        :disabled="c.title.includes('RESERVED')"
      >
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    c: {
      type: Object,
    },
  },
  methods: {
    buyButton() {
      this.$emit('buyButton', this.c);
    },
  },
};
</script>

<style lang="scss" scoped></style>
