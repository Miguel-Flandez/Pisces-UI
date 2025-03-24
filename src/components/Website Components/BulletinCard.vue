<script setup>
const props = defineProps({
    img:String,
    title: String, 
    description: String
})
</script>

<template>
<div class="bulletin-card">
    <img :src="props.img" alt="" class="bulletin-img">
    <div class="card-info">
        <div class="date-container">    
            <img src="@/assets/calendar.svg" alt="calendar" class="calendar">
            <p class="date">Tuesday, 04 February 2025</p>
        </div>
        <div class="title">
            {{ props.title }}
        </div>
        <div class="description">
            {{ props.description }}
        </div>
        <button class="read-more">Read More</button>
    </div>
</div>
</template>

<style scoped>
.bulletin-card{
    width: 318px;
    height: 429px;
    min-width: 240px;

    border-radius:12px;
    border: 1px solid #cbd5e1;
    
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    background-color: #f4f4f4;
}
.bulletin-img{
    width: 286px;
    height: 189px;
    border-radius:10px ;
}

.card-info{
    display: flex;
    flex-direction:column ;
    gap: 12px;
}

.date-container{
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
}
.calendar{
    width: 16px;
}

.date{
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 10.56px;
    color: #8e8e93;

}

.title{
    font-family: 'Helvetica', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 19.8px;

    color: #002161;
}
.description{
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17.5px;

    color: #8e8e93;
}

.read-more{
    background-color: #0e3687;
    color: #ffffff;

    border: none;
    border-radius: 4px;

    height: 48px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 14.08px;
}
.read-more:hover{
    background-color: #0044c7;
}
</style>
