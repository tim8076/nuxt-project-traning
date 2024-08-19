<template>
  <div>

    <Head>
      <Title>{{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
})
const { productId } = useRoute().params;
const url = 'https://fakestoreapi.com/products/' + productId;

const { data: product } = await useFetch(url);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true,
  })
}
</script>

<style lang="scss" scoped></style>