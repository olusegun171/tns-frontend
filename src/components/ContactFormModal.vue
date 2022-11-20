<!-- Code block starts -->
<template>
            
    <div class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal" style="display: none;">
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
         
                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">New Contact form</h1>

                    <form>
                    <div class="mb-6">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="form.first_name" placeholder="First name" required>
                    </div>
                    <div class="mb-6">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="form.last_name" placeholder="Last name" required>
                    </div>
                    <div class="mb-6">
                        <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="form.email" placeholder="Email" required>
                    </div>
                    <div class="mb-6">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="form.phone" placeholder="Phone" required>
                    </div>
                    <div class="mb-6">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="form.address" placeholder="Address" required>
                    </div>
                    <div class="mb-6">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="form.town_city" placeholder="Town/City" required>
                    </div>
                    <div class="mb-6">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="form.region_county" placeholder="Region/County" required>
                    </div>
                    <div class="mb-6">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="form.country_code" placeholder="Country" required>
                    </div>
                    <div class="mb-6">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="form.post_code" placeholder="Post code" required>
                    </div>
                 </form>
                 <DangerAlert v-if="this.errors.length > 0"
                    errorMessage="An error occured."
                    :data="errors" />
                
                <div class="flex items-center justify-start w-full">
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" @click="submitForm">Submit</button>
                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="modalHandler()">Cancel</button>
                </div>
                <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" @click="modalHandler()" aria-label="close modal" role="button">
                    
                    <CloseSVG />
                </button>
            </div>
        </div>
    </div>
    <div class="w-full flex justify-center" id="button">
        <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"  @click="modalHandler(true)">Add Contact</button>
    </div>
    </template>
<script>
import CloseSVG  from  '@/components/svg/CloseSVG.vue'
import  DangerAlert from '@/components/Alert.vue'
import TnsApi from '@/services/TnsApi'

export default {
    name: "ContactFormModal",
    components: {CloseSVG, DangerAlert},
    data() {
        return {
            errors:[],
            form:{
                first_name: null,
                last_name: null,
                email: null,
                phone: null,
                address: null,
                town_city: null,
                region_county: null,
                country_code: null,
                post_code: null
            }
        }
    },

    methods:{

        submitForm(){
            this.errors = []
           let errors = this.validateForm(this.form)
           if(errors.length > 0){
            this.errors =  errors
           }else{
            console.log(this.form)
                TnsApi.createContact(this.form)
                  .then(response=>{
                    console.log(response.data.data)
                    this.$emit('formSuccess', true);
                    this.modalHandler()
                })
                .catch(error=>{
                  console.log(error);
                  this.errors.push(error)
                });
            //submit
           }

        },
        validateForm(data){
            let errs = [];
            if(data.first_name == null){
                errs.push('First name is required')
            }
            if(data.last_name == null){
                errs.push('Last name is required')
            }
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if(data.email == null){
                errs.push('Email is required')
            }else
            if(!data.email.match(validRegex)) {
                errs.push('Invalid email address. Provide a valid email address')
            }

            if(data.phone == null){
                errs.push('Phone number is required')
            }
            if(data.address == null){
                errs.push('Address is required')
            }
            if(data.town_city == null){
                errs.push('Town/city is required')
            }
            if(data.region_county == null){
                errs.push('Region or county is required')
            }
            if(data.country_code == null){
                errs.push('Country code is required')
            }if(data.post_code == null){
                errs.push('Post code is required')
            }
            return errs;
        },

        modalHandler(val) {
            let modal = document.getElementById("modal");
            if (val) {
               this. fadeIn(modal);
            } else {
                this.fadeOut(modal);
            }
        },
        fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= 0.1) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        },
        fadeIn(el, display) {
            el.style.opacity = 0;
            el.style.display = display || "flex";
            (function fade() {
                let val = parseFloat(el.style.opacity);
                if (!((val += 0.2) > 1)) {
                    el.style.opacity = val;
                    requestAnimationFrame(fade);
                }
            })();
        }
    }
}
    </script>