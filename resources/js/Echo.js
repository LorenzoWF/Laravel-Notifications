import store from './vuex/store'
import swal from 'sweetalert'

const typesNotifications = {
    postCommented: 'App\\Notifications\\PostCommented',
}

if (Laravel.user) {
    Echo.private(`App.Models.User.${Laravel.user}`)
    .notification(notification => {
        if (Laravel.user == notification.data.comment.post.user.id) {
            if (notification.type == typesNotifications.postCommented) {
                
                swal('Novo comentário', `O Post ${notification.data.comment.post.title} foi comentado por: ${notification.data.comment.user.name}`)

                store.commit('ADD_NOTIFICATION', notification)
            }
        }
    })
}
