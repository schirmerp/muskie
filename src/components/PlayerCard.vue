<template>
    <div class="border border-sky-800 mt-4 font-bold">
        <h2 class="text-3xl text-sky-900 text-center">{{ player.name }}</h2>
        <img class="playerImg" :src="player.img"/>
        <div class="text-center">
            <a class="text-xl text-sky-700" :href="player.page">Player Profile</a>
            <div>Likes: {{ player.likes }}</div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
name: 'PlayerCard',
components: {
},
props:{
player: {
type: Object,
required: true,
},
},
methods: {
likeClick() {
this.incrementPlayerLikes(this.player)
}
},
})

</script>
<style scoped>
.playerImg {
    height: 250px;
    width: 250px;
    object-fit: scale-down;
}
</style>