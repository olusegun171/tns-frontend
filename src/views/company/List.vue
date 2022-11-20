<template>
  <BaseLayout>
    <template v-slot:main-content>
    <CompanyList 
        title="All company list"
        desc="Browse a list of all contacts"
        :data="companies" />
    </template>
  </BaseLayout>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/Layout.vue';
import CompanyList from  '@/components/CompanyList.vue'
import TNSAPI from '@/services/TnsApi'
export default {
  name: 'HomeView',
  components: {
    BaseLayout,
    CompanyList,
  },

  data() {
        return {
          page: 1,
          companies:[]
        }
  },

  mounted() {
      this.getContactList();
    },

    methods:{
      getContactList(){
          TNSAPI.allCompanies()
                  .then(response=>{
                    console.log(response.data)
                      this.companies = response.data.data.slice(0, 15)

                })
                .catch(error=>{
                  console.log(error);
                });
      },

      onPageChange(page){
        this.page = page
        this.getContactList()
      }
    
    }
}
</script>
