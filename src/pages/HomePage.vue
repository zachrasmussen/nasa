<template>
  <div class="home-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12" v-for="d in dates" :key="d.id">
          <div class="date">
            <img class="img-fluid" :src="date.img" />
            <div>
              <h4>{{ date.title }}</h4>
              <p>
                <b>{{ date.explanation }}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-info" @click="getDates()">Get Dates</button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState.js";
import { datesService } from "../services/DatesService.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {
    async function getDates(date) {
      try {
        await datesService.getDates();
      } catch (error) {
        logger.error("[Getting Dates]", error);
        Pop.error(error);
      }
    }

    return {
      dates: computed(() => AppState.date),
      getDates,
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
