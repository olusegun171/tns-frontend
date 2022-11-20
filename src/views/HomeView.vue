<template>
  <BaseLayout>
    <template v-slot:main-content>
      <ContactFormModal @formSuccess="onFormSuccess"/>
      <AlertModal v-show="alertOptions.show" 
                :options="alertOptions"
                @modalClose="onModalClose" />
    <ContactList 
        title="All contact list"
        desc="Browse a list of all contacts"
        :data="contacts" />
    <PaginationVue
      :totalPages="responseData?.meta?.last_page"
      :total="responseData?.meta?.total"
      :perPage="responseData?.meta?.per_page"
      :currentPage="responseData?.meta?.current_page"
      @pagechanged="onPageChange" />
    </template>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/Layout.vue';
import ContactList from  '@/components/ContactList.vue'
import PaginationVue  from  '@/components/Pagination.vue'
import ContactFormModal from '@/components/ContactFormModal.vue'
import TNSAPI from '@/services/TnsApi'
import AlertModal from '@/components/AlertModal.vue';
export default {
  name: 'HomeView',
  components: {
    BaseLayout,
    ContactList,
    ContactFormModal,
    PaginationVue,
    AlertModal
},

  data() {
        return {
          page: 1,
          responseData: null,
          contacts:[],
          alertOptions:{
            "type": 'info',
            "show": true,
            "msg": null,
            "okButton": 'Okay',
            "cancelButton": null
          }
        }
  },

  mounted() {
      this.getContactList();
    },

    methods:{
      getContactList(){
          TNSAPI.allContacts(this.page)
                  .then(response=>{
                    console.log(response.data.data)
                      this.contacts = response.data.data
                      this.responseData = response.data

                })
                .catch(error=>{
                  console.log(error);
                });
      },

      onPageChange(page){
        this.page = page
        this.getContactList()
      },

      onModalClose(action){

        if(action ==  'ok'){
            this.page = 1
            this.getContactList()
        }else{

          //cancel
        }
      },


      onFormSuccess(response){

        if(response){
          this.alertOptions.type  = "success"
          this.alertOptions.msg = "Contacts addedd successfully"
          this.alertOptions.show  = true
        }else{
          this.alertOptions.type  = "info"
          this.alertOptions.msg = "Contacts could not be addedd"
          this.alertOptions.show  = true
        }
      }

    
    }
}
</script>
