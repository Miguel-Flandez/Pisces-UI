
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
                <BulletinCard :img="placeholder" title="Update on Philippine Drug Enforcement Agency (PDEA) Compliance Service Process" description="Through PEZA Memorandum Circular (MC) # 2021-048, the implementation of the..."/>
                <BulletinCard :img="placeholder" title="Update on Philippine Drug Enforcement Agency (PDEA) Compliance Service Process" description="Through PEZA Memorandum Circular (MC) # 2021-048, the implementation of the..."/>
                <BulletinCard :img="placeholder" title="Update on Philippine Drug Enforcement Agency (PDEA) Compliance Service Process" description="Through PEZA Memorandum Circular (MC) # 2021-048, the implementation of the..."/>
                <BulletinCard :img="placeholder" title="Update on Philippine Drug Enforcement Agency (PDEA) Compliance Service Process" description="Through PEZA Memorandum Circular (MC) # 2021-048, the implementation of the..."/>
                <BulletinCard :img="placeholder" title="Update on Philippine Drug Enforcement Agency (PDEA) Compliance Service Process" description="Through PEZA Memorandum Circular (MC) # 2021-048, the implementation of the..."/>
                <BulletinCard :img="placeholder" title="Update on Philippine Drug Enforcement Agency (PDEA) Compliance Service Process" description="Through PEZA Memorandum Circular (MC) # 2021-048, the implementation of the..."/>
            </div>
            
        </div>
    </div>

    <WebFooter/>
</template>

<style scoped>
#container {
    height: 100vh;
    width: 100vw;
    background-image: url(@/assets/Gradient.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}

/* Breadcrumb */
#breadcrumb {
    display: flex;
    position: absolute;
    top: 13vh;
    left: 5vw;
    gap: 1vw;
    cursor: pointer;
}

#home, #splitter, #bulletin {
    font-family: 'Helvetica', sans-serif;
    font-weight: 300;
    font-size: 1.6vh;
    line-height: 1.6vh;
}

#home, #splitter {
    color: #9ca3af;
}

#home:hover {
    color: #0044c7;
}

#bulletin {
    color: #25578f;
}

#bulletin-container {
    position: absolute;
    top: 18vh;
    left: 3vw;

    width: 94vw;
    height: 82vh;
    border-radius: 2vh;
    background-color: #ffffff;

    padding: 5vh;
    overflow-y: auto;
}

#bulletin-board {
    font-family: 'Helvetica', sans-serif;
    background: linear-gradient(to right, #002161, #0044c7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-weight: 700;
    font-size: 3.6vh;
    line-height: 3.6vh;
    margin-bottom: 30px;
}

#card-container {
    display: flex;
    gap: 1.5vw;
    flex-wrap: wrap;
    margin: 2vh auto;
}
</style>
