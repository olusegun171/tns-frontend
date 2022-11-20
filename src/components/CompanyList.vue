<template>
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            {{title}}
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400" v-if="desc">{{desc}}</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                   Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Email
                </th>
                <th scope="col" class="py-3 px-6">
                    Phone
                </th>

                <th scope="col" class="py-3 px-6">
                    Address
                </th>
                <th scope="col" class="py-3 px-6">
                    Contacts
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="company  in data" v-bind:key="company.id">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{company.name}}
                </th>
                <td class="py-4 px-6">
                    {{company.email}}
                </td>
                <td class="py-4 px-6">
                    {{company.phone}}
                </td>
                <td class="py-4 px-6">
                    {{ `${company.address} ${company.town_city} ${company.region_county}, ${company.post_code} ${company.country_code}` }}
                </td>
                <td class="py-4 px-6 text-right">
                    <router-link class="font-medium text-blue-600 dark:text-blue-500 hover:underline" :to="{ name: 'companyContacts', params: {id: company.id} }">
                        View contacts
                    </router-link>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
</template>
<script>
export default {
    name: "ContactList",
    props: ['title', 'desc', 'data'],
    data() {
        return {
            contacts: this.data.length >  0  ? this.data: []
        }
    },

    mounted(){
        console.log(this.data)
    }
}
</script>