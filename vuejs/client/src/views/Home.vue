<template>
  <div class="home">
    <h1>Home Page</h1>
    <v-btn @click="clicked(true, 'Add New Record', toAdd)" color="success">Add New Record</v-btn>
    <v-btn @click="clicked(true, 'Edit Record')" color="success">Edit Record</v-btn>

    <v-dialog
      v-model="dialog"
      persistent :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card>
      <v-card-title primary-title>
        {{myformTitle}}
        <v-spacer></v-spacer>
        
        <v-btn @click="clicked(false, '', {})" color="success">Close</v-btn>
      </v-card-title>

      <v-card-text>
        {{myData.name}} <br>
        {{myData.age}} <br>
        {{myData.gender}} <br>
        {{myData.isMarried}}
      </v-card-text>
      </v-card>
      
    </v-dialog>

  </div>
</template>

<script>
import clickMixin from '../mixins/myMixins'

export default {
  name: 'Home',
  mixins:[clickMixin],
  components: {

  },
  data(){
    return{
      toAdd: {
        name: 'Zhell',
        age: 12,
        gender: 'female',
        isMarried: true
      }
    }
  },
  mounted(){
    console.log(this.myData)
  }
}
</script>
