<template>
    <div>
        <a class="dropdown-item" href="#">
           <span v-on:click.prevent='markAsRead(notification.id)'>Lida</span>
           
           {{ comment.user.name }} comentou {{ comment.content }}
        </a>
    </div>
</template>

<script>
export default {
    props: ['notification'],

    computed: {
        comment() {
            return this.notification.data.comment
        }
    },

    methods: {
        markAsRead(idNotification) {
            this.$store.dispatch('markAsRead', {id: idNotification})
        }
    }
}
</script>