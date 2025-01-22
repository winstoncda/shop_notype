<template>
  <div class="home">
    <div class="Btn" @click="selectTheme" v-if="!theme">Choisir un theme</div>
    <div class="Btn" @click="removeTheme" v-if="theme">Retour</div>
    <div v-if="theme">
      <BtnQuestion
        :theme="index"
        v-for="index in themes"
        :key="index"
        :visibility="show"
        @showQuestion="showMe(index)"
        :questions="question"
        :responses="responce"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BtnQuestion from "@/components/BtnQuestion.vue";

const route = useRouter();
const themes = ref([]);
const theme = ref(false);
const show = ref(true);
const question = ref();
const responce = ref([]);
const url = process.env.VUE_APP_API_URL;

const showMe = async (index) => {
  try {
    const response = await fetch(
      `${url}/api/themes/question/${themes.value.indexOf(index) + 1}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      themes.value.length = 1;
      const data = await response.json();
      console.log("ici data", data);

      question.value = [];
      data.forEach((elem) => {
        question.value.push({
          question: elem.question,
          id: elem.id_question,
        });
      });
      console.log("jkdsygfiuh", question.value);
      question.value.forEach((elem) => {
        responce.value = [];
        getResponse(elem.id);
      });
    }
  } catch (err) {
    console.log(err);
  }
  show.value = !show.value;
};
const getResponse = async (id) => {
  try {
    const response = await fetch(`${url}/api/themes/response/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      const tableau = ref();
      responce.value = [];

      console.log("ici le tableau", responce.value);
      data.forEach((elem) => {
        tableau.value = elem.mauvaise.split(" , ");

        responce.value.push(
          elem.bonne,
          tableau.value.forEach((index, i) => responce.value.push(index))
        );
      });
      console.log("ici le tableau 2", responce.value);

      show.value = !show.value;
    }
  } catch (err) {
    console.log(err);
  }
};
const selectTheme = async () => {
  try {
    console.log("la", themes.value.length);

    const response = await fetch(`${url}/api/themes/theme`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      themes.value = [];
      data.forEach((elem) => {
        themes.value.push(elem.theme);
      });
      if (themes.value.length > 0) {
        theme.value = !theme.value;
      } else if ((theme.value.length = 0)) {
        theme.value = false;
      }

      console.log(themes.value.length);
    }
  } catch (err) {
    console.log(err);
  }
};
const removeTheme = () => {
  theme.value = !theme.value;
  show.value = !show.value;
};
</script>

<style lang="scss"></style>
