
<template>
  <div>
    <form @submit.prevent="submitForm" class="mt-4">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" required>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="formData.email" type="email" class="form-control" id="email" required>
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea v-model="formData.message" class="form-control" id="message" rows="4" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData);
      this.formData = {
        name: '',
        email: '',
        message: '',
      };
    },
  },
};
</script>

<style scoped>
</style>