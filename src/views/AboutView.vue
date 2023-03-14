<template>
  <div class="about flex flex-col mt-12">
    <div class=" border border-sky-700">
    <h1 class="text-xl my-4 mx-2">Lets Go <span class="text-4xl text-sky-800">X!</span></h1>
    </div>
    <CounterThing/>
    <div class="flex flex-wrap justify-around">
        <div class="" v-for="player in players" :key="player.id">
        <div class="mx-8">
          <PlayerCard :player="player"/>
          <button class="border border-sky-700 rounded-lg px-4 font-bold  "  @click="incrementLikes(player)">Like</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CounterThing from "../components/CounterThing.vue"
import PlayerCard from "../components/PlayerCard.vue";
import { usePlayerStore} from '@/stores/player'
import { onMounted } from 'vue'

export default {
  components: {
    CounterThing,
    PlayerCard,
  },
  setup() {
    const playerStore = usePlayerStore()

    const players = playerStore.players
    function incrementLikes(player) {
      playerStore.incrementPlayerLikes(players, player)
    }


    return {
      players,
      incrementLikes,
    }
  },
}
</script>

<style>

</style>
