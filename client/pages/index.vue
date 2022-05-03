<template>
  <v-card class="wrapper" outlined>
    <header class="header">
      <h4 class="header-title"> BOT_PI.. </h4>
    </header>
    <section>
      <!--      Ответ от бота -->
      <v-card outlined class="answer">
        {{ botAnswer || 'Ответ от бота' }}
      </v-card>
      <!--      Запрос к боту -->
      <v-form>

      </v-form>
    </section>
    <!--      Вспомотагельные кнопаки -->
    <section @click="controller">
      <div class="d-flex flex-wrap justify-center" style="max-width: 95%; margin: 15px auto">
        <button class="custom-button" value="о боте">
          О боте
        </button>
        <button class="custom-button" value="информация">
          Информация
        </button>
        <button class="custom-button" value="вопросы">
          Вопросы
        </button>
        <button class="custom-button" value="добавить">
          Добавить
        </button>
        <button class="custom-button" value="история">
          История
        </button>
      </div>
    </section>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class IndexPage extends Vue {
  private botAnswer:string = ''
  private botQuest:string = ''
  async requestAnswer () {

  }
  async controller ($event:any) {
    let val = ($event.target.value);
    if (val != undefined) {
      try {
        const response = await this.$axios.get(`http://localhost:3030/quest/${val.toLowerCase()}`);
        this.botAnswer = response.data[0].answer
      } catch (error) {
        this.botAnswer = 'Леее, такого нема вопроса'
      } finally {
        this.botQuest = '';
      }
    }
  }
}
</script>
<style>
* {
  font-family: "Roboto";
}
.wrapper {
  max-width: 500px; margin: 0 auto;
}
.header-title {
  text-align: center;
}
.answer {
  margin: 20px; padding: 15px;
}
.custom-button {
  margin: 10px; padding: 10px; border-radius: 10px; outline: 1px solid #333; transition: all ease-in 50ms;
}
.custom-button:active {
  text-shadow: #fff 1px 0 4px; color: #fff; background: #333; transition: all ease-in 50ms; box-shadow: 0 0 10px 5px #334;
}
</style>
