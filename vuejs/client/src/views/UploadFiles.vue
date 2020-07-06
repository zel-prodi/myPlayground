<template>
    <v-container fluid class="pa-1">
      <h1>{{PageTitle}}</h1>

      <v-col cols="6">
        <v-file-input 
          v-model="file" 
          label="Select File..." 
          multiple 
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
        // imageUrl1: null,
        // file: null,
        // response: ''
        file:[],
        myData: [],
      }
    },
    methods:{
      onFileChange(){
        console.log(this.file)

        for(let i = 0; i<this.file.length; i++){
          this.myData[i] = {}
          this.myData[i].filename = Date.now() + "-" + this.file[i].name;
          this.myData[i].path = `./uploads/uploaded_files/${this.myData[i].filename}`
        }
      },
      onUpload(){
        let formData = new FormData()
        for( var j = 0; j < this.file.length; j++ ){
          let file = this.file[j];
          formData.append('file', file);
        }
        let url = `http://localhost:3000/uploadFile`;
        axios.post(url, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        ).then(res =>  {
          this.response = res.data
          this.file = []
          console.log(this.response)

          this.test();

        } ).catch(err => console.log(err.message))
      },
      test(){
        alert('test')
        console.log(this.myData)
      }
      //   let formData = new FormData();
      //   formData.append('file', this.file);
      //     let url = `http://localhost:3000/uploadFile`;
      //     axios.post(url, formData,
      //     {
      //       headers: {
      //       'Content-Type': 'multipart/form-data'
      //       }
      //     }
      //   ).then(res =>  {
      //     this.response = res.data
      //     console.log(this.response)
      //   }).catch(err => console.log(err.message))
      //   this.file = null;
      // }
    },
    mounted(){
      this.PageTitle = this.$router.currentRoute.name;
    }
  }
</script>