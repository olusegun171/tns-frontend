<template>
            
    <div class="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="popup-modal" >
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
         
                <div class="p-6 text-center">
                <svg aria-hidden="true" :class=" options?.type == 'success'  ? 'text-green-700 dark:text-green-80':'text-grey-700 dark:text-grey-80' " class="mx-auto mb-4 w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{{options.msg}}</h3>
                <button data-modal-toggle="popup-modal" @click="closeModal('ok')" type="button" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    {{options.okButton}}
                </button>
                <button v-if="options.cancelButton" @click="closeModal('cancel')" data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                    {{options.cancelButton}}</button>
               </div>
            </div>
        </div>
    </div>
    </template>
<script>

export default {
  name: 'AlertModal',
  props:['options'],
  data() {
        return {
          page: 1,
          companies:[]
        }
  },
  mounted(){
    console.log(this.options)
  },

    methods:{

        closeModal(action){
            let modal = document.getElementById("popup-modal");
            this.fadeOut(modal);
            this.$emit('okAction', action);
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
        }
    
    }
}

</script>