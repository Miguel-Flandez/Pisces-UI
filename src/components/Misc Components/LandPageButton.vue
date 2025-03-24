<script setup>

const props = defineProps({
    icon: String, 
    name: String
})
</script>

<template>
    <div id="button">
        <img :src="props.icon" class="icon">
        <p class="name">{{ props.name }}</p>
    </div>
</template>

<style scoped>
#button{
    display: flex;
    gap: 20px;

    border-radius: 12px;
    padding: 40px;
    background-color: #f5f8ff;
    box-shadow: 0 0 15.8px -12px;

    justify-content: center;
    align-items: center;

    flex: 1;
}
.icon{
    width: 32px;
    height: 33px;
    
    flex-shrink: 0;;
}
.name{
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 700;
    font-size: 21px;
    color: #2f1947;

    overflow-x: hidden;
}

    
#button:hover .name{
    color: #f5f8ff;
} 
</style>