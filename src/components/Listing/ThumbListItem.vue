<template>
<b-card @click.prevent="toggleItem($event,data.asin)" :class="{'d-flex flex-row':true,'active' : selectedItems.includes(data.asin)}" no-body>
    <router-link :to="`?p=${data.asin}`" class="d-flex">
        <img :src="data.image.url" class="list-thumbnail responsive border-0" :alt="data.title" />
    </router-link>
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
        <div class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
            <router-link :to="`?p=${data.asin}`" class="w-40 w-sm-100">
                <p class="list-item-heading mb-0 truncate">{{data.title}}</p>
            </router-link>
            <p class="mb-0 text-muted text-small w-15 w-sm-100">{{data.category}}</p>
            <p class="mb-0 text-muted text-small w-15 w-sm-100">{{data.created}}</p>
        </div>
        <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
            <b-form-checkbox :checked="selectedItems.includes(data.asin)" class="itemCheck mb-0" />
        </div>
    </div>
</b-card>
</template>

<script>
export default {
    props: ['data', 'selectedItems'],
    methods: {
        toggleItem(event, itemId) {
            this.$emit('toggle-item', event, itemId)
        }
    }
}
</script>
