export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  return code;
});
