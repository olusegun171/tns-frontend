import axios from 'axios';


let TnsApi = axios.create({
   baseURL: 'https://ui-test.tshirtandsons.com/api/'
});


export default {

   async allContacts(page) {
       
       return TnsApi.get('contacts/collection?page='+ page);
   },

   async createContact(formData) {
      return TnsApi.post('contacts', formData);
   },
   async allCompanies() {
      return TnsApi.get('companies');
  },
  
  async companyContacts(id) {
   return TnsApi.get('companies/'+id+'/contacts');
  }

}