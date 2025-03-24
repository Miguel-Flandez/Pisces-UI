<script setup>
import { PcHeader, icons } from '@/components';

</script>

<template>
    <PcHeader/>
    <div id="pc-body">
        <div id="breadcrumbs">
            <p class="unselected">Home</p>
            <p class="unselected">/</p>
            <p class="selected">Project Coverage</p>
        </div>
        <header id="pc-header">
            <h1>Project Coverage</h1>
        </header>
        <div id="options">
                <div id="applications">
                    <div id="new-application">
                        <p class="selected">New Application</p>
                        <p class="application-value">75</p>
                    </div>
                    <div id="ongoing-application">
                        <p class="unselected">Ongoing Applications</p>
                        <p class="application-value">20</p>
                    </div>
                </div>

                <div id="filter-buttons">
                    <div>
                        <img :src="icons.search" alt="search">
                    </div>
                    <div>
                        <img :src="icons.calendar" alt="">
                        <p class="date">January</p>
                    </div>
                    <div>
                        <img :src="icons.calendar" alt="">
                        <p class="date">2025</p>
                    </div>
                    <div>
                        <img :src="icons.export" alt="">
                        <p>Export</p>
                    </div>
                    <div>
                        <img :src="icons.list" alt="">
                    </div>
                    
                </div>
        </div>
    </div>
    

</template>

<style scoped> 

    #pc-body{
        background-color: #eeeeee;
        padding: 3%;
    }

    /* breadcrumbs */
    #breadcrumbs{
        display: flex;
        gap: 6px;
    }
    .unselected{
        color: #9ca3af;
        font-weight: 400;
    }
    .selected{
        color: #25578f;
        font-weight: 400;
    }

    /* header */
    #pc-header{
        width: 100%;
        background-color: white;
        border-radius: 16px;
        padding: 1% 1% 1% 3%;
        margin-top: 1%;
    }
    #pc-header h1{
        font-size: 36px;
        font-weight: 700;
        color: #002161;
    }

    /* Options */
    #options{
        margin-top: 1%;
        display: flex;
        justify-content: space-between;
    }
    #applications{
        display: flex;
        gap: 10px;
    }

    #new-application, #ongoing-application{
        display: flex;
        gap: 5px;
        align-items: center;

    }
    .application-value{
        border-radius: 55px;
        font-size: 14px;
    }
    #new-application .application-value{
        color:white;
        background-color: #002161;
        padding: 1px 10px;
        
    }
    #ongoing-application .application-value{
        color:#8e8e93;
        background-color: #d1d1d6;
        padding: 1px 10px;
        
    }

    #filter-buttons{
        color: #8e8e93;
        display: flex;
        
        gap: 10px;
    }
    #filter-buttons div{
        display: flex;
        padding: 5px;
        background-color: white;
        border-radius: 5px;
    }

</style>