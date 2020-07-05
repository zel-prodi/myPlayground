<template>
    <v-container fluid class="pa-1">
      <h1>{{PageTitle}}</h1>

      <v-col cols="6">
        <v-file-input 
          v-model="file" 
          label="Select File..." 
        ></v-file-input>

        <v-btn @click="onUpload()" color="success">Upload</v-btn>
      </v-col>
    </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return{
        PageTitle: '',
        imageUrl1: null,
        file: null,
        response: ''
      }
    },
    methods:{
      //preview ng image
      // onFileChange(){
      //   console.log(this.file)
      // },
      onUpload(){
        let formData = new FormData();
        formData.append('file', this.file);
          let url = `http://localhost:3000/uploadFile`;
          axios.post(url, formData,
          {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
          }
        ).then(res =>  {
          this.response = res.data
          console.log(this.response)
        }).catch(err => console.log(err.message))
        this.file = null;
      }
    },
    mounted(){
      this.PageTitle = this.$router.currentRoute.name;
    }
  }
</script>