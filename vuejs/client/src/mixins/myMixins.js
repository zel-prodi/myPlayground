export default {
  data(){
return{
  dialog: false,
  myformTitle: '',
  myData: {}
}  },
  methods: {
    clicked(value, formTitle, dataToAddEdit) {
      this.dialog = value
      this.myformTitle = formTitle
      this.myData = dataToAddEdit
    }
  },
  mounted(){
    // console.log(this.toAdd)

  }
}; 