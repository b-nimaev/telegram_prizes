<template>
    <div>
        <div class="component-wrapper">
            <div class="container">
                <h2>Home</h2>
                <div v-if="user">
                    <p>Username: {{ user.username }}</p>
                    <p>First Name: {{ user.first_name }}</p>
                    <p>Last Name: {{ user.last_name }}</p>
                </div>
                <div v-else>
                    <p>Loading user data...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const user = ref(null);

onBeforeMount(() => {
    const tg = window.Telegram.WebApp;

    tg.ready(); // Инициализация WebApp

    user.value = tg.initDataUnsafe?.user || null; // Получение данных пользователя
    tg.themeParams.bg_color = '#eee'
});
</script>

<style scoped>
/* Минималистичные стили */
h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
    margin: 5px 0;
}
</style>
