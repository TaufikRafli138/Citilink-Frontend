<template>
    <div>
        <div v-if="loading">Loading...</div>
            <div v-else>
                <table v-if="data && data.length > 0" class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">NIK</th>
                            <th scope="col">Role_Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.Username }}</td>
                            <td>{{ item.Password }}</td>
                            <td>
                           {{ item.NIK }}
                            </td>
                            <td>{{ item.Role_id }}</td>
                        </tr>
                    </tbody>
                </table>
            <div v-else>No data available</div>
        </div>
    </div>
</template>

<script scoped>
import axios from 'axios';

export default {
  data() {
    return {
      loading: true,
      data: null,
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/account/DataAccount') 
      .then(response => {
        console.log('Response Data:', response.data);
        this.data = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>