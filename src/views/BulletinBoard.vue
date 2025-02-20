
<script setup>
import { WebHeader, WebFooter, BulletinCard } from '@/components';
import placeholder from '@/assets/placeholder.svg'

</script>

<template>
    <WebHeader/>
    
    <div id="container">
        <div id="breadcrumb">
            <p id="home">Home</p>
            <p id="splitter">/</p>
            <p id="bulletin">Bulletin Board</p>
        </div>

        <div id="bulletin-container">
            <h2 id="bulletin-board">
                Bulletin Board
            </h2>
            <div id="card-container">
                <BulletinCard :img="placeholder" title="Update on Philippine Drug Enforcement Agency (PDEA) Compliance Service Process" description="Through PEZA Memorandum Circular (MC) # 2021-048, the implementation of the..."/>
            </div>
            
        </div>
    </div>

    <WebFooter/>
</template>

<style scoped>
#container{
    height: 100vh;
    width: 100%;
    background-image: url(@/assets/Gradient.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}
/* Breadcrumb */
#breadcrumb{
    display: flex;
    position: absolute;
    top: 134px;
    left: 64px;
    gap: 15px;
    cursor: pointer;
}
#home,#splitter,#bulletin{
    font-family: 'Helvetica', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
}
#home, #splitter{
    color: #9ca3af;
}
#home:hover{
    color: #0044c7;
}

#bulletin{
    color:#25578f;
}
#bulletin-container{
    position: absolute;
    top: 192px;
    left: 47px;

    width: 95%;
    height: 85%;
    border: 1px;
    border-radius: 20px;
    background-color: #ffffff;

    padding: 2%;

    overflow-y: auto;
}
#bulletin-board{
    font-family: 'Helvetica', sans-serif;

    background: linear-gradient(to right, #002161, #0044c7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
}

#card-container{
    display: flex;
    gap: 35px;

    flex-wrap: wrap;

    margin: 2% auto;
}
</style>