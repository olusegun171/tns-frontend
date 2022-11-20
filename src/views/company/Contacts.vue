<template>
  <BaseLayout>
    <template v-slot:main-content>
    <ContactList 
        :title="`All contact list of ${company?.name}`"
        :desc="`${company.address} ${company.town_city} ${company.region_county}, ${company.post_code} ${company.country_code}`"
        :data="contacts" />
    </template>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/Layout.vue';
import ContactList from  '@/components/ContactList.vue'
import TNSAPI from '@/services/TnsApi'
export default {
  name: 'HomeView',
  props: ['id'],
  components: {
    BaseLayout,
    ContactList
  },

  data() {
        return {
          page: 1,
          company: Object,
          contacts:[],
          companyID: this.id
        }
  },

  mounted() {

      this.getContactList();
    },

    methods:{
      getContactList(){
        console.log(this.companyID)
        if(this.companyID){
          TNSAPI.companyContacts(this.companyID)
                  .then(response=>{
                    console.log(response.data)
                      this.contacts = response.data.data.contacts,
                      this.company = response.data.data

                })
                .catch(error=>{
                  console.log(error);
                });
        }else{
          //redirect
        }
          
      },

      onPageChange(page){
        this.page = page
        this.getContactList()
      }
    
    }
}
</script>
