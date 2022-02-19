Vue.component("header-el", {
    data : () => {
        return {menuItem : [
            ["animal", "pawprint.png"], 
            ["history", "scroll.png"], 
            ["environment", "seeding.png"], 
            ["science", "atom.png"], 
            ["travel", "plane.png"]
        ]}
    },
    template : `
    <header>
        <div class="logo">
            <router-link to="/"><img src="./img/toplogo.png" alt=""></router-link>
        </div>
        <div class="menu">
            <ul>
                <li v-for="list in menuItem"><router-link v-bind:to="'/'+list[0]"><span class="text">{{list[0]}}</span><span class="icon"><img v-bind:src="'./img/menu_icons/'+list[1]"></span></router-link></li>
            </ul>
        </div>
        <div class="mypage">
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul>
        </div>

    </header>
    `
});





//템플레이트 등록

//메인 View
const randIndex = Math.floor(Math.random()*5);  //0 ~ 4 중에 하나만 반환

const pageMain = {
    data : () => {
        return { movieItem : [
            ["animal.mp4", "Animals"],
            ["history.mp4", "History"],
            ["environment.mp4", "Environment"],
            ["science.mp4", "Science"],
            ["travel.mp4", "Travel"],
        ]}
    },
    template : `
    <section id="main">
        <video v-bind:src="'./video/' + movieItem[${randIndex}][0]" autoplay loop muted playsinline></video>
        <div class="video_dark"></div>
        <div class="wrap">
            <div class="main_cont">
                <div class="content">
                    <img src="./img/yellowFrame.png" alt="">
                    <h2>{{ movieItem[${randIndex}][1] }}</h2>
                </div>
            </div>
        </div>
    </section>
    `
}
const pageAnimal = {
    data : () => {
        return {item : [
            "animal_news_1.jpg", "animal_news_2.jpg", "animal_news_3.jpg", "animal_news_4.jpg", "animal_news_5.jpg", "animal_news_6.jpg", "animal_news_7.jpg", "animal_news_8.jpg", "animal_news_9.jpg", "animal_news_10.jpg", "animal_news_11.jpg", "animal_news_12.jpg",        
        ]}
    },
    template : `
    <section class="sub_item">
        <div class="wrap">
            <h2>Animal Page</h2>
            <div class="content">
                <div v-for="list in item" class="box" v-bind:style="'background-image:url(./img/animals/'+list+')'"></div>
            </div>
        </div>
    </section>
    `
}
const pageHistory = {
    data : () => {
        return {item : [
            "history_news_1.jpg", "history_news_2.jpg", "history_news_3.jpg", "history_news_4.jpg", "history_news_5.jpg", "history_news_6.jpg", "history_news_7.jpg", "history_news_8.jpg", "history_news_9.jpg", "history_news_10.jpg", "history_news_11.jpg", "history_news_12.jpg"
        ]}
    },
    template : `
    <section class="sub_item">
        <div class="wrap">    
            <h2>History Page</h2>
            <div class="content">
                <div v-for="list in item" class="box" v-bind:style="'background-image:url(./img/history/'+list+')'"></div>
            </div>
        </div>
    </section>
    `
}
const pageEnvironment = {
    data : () => {
        return {item : [
            "environ_news_1.jpg", "environ_news_2.jpg", "environ_news_3.jpg", "environ_news_4.jpg", "environ_news_5.jpg", "environ_news_6.jpg", "environ_news_7.jpg", "environ_news_8.jpg", "environ_news_9.jpg", "environ_news_10.jpg", "environ_news_11.jpg", "environ_news_12.jpg"
        ]}
    },
    template : `
    <section class="sub_item">
        <div class="wrap">    
            <h2>Environment Page</h2>
            <div class="content">
                <div v-for="list in item" class="box" v-bind:style="'background-image:url(./img/environment/'+list+')'"></div>
            </div>
        </div>
    </section>
    `
}
const pageScience = {
    data : () => {
        return {item : [
            "science_news_1.jpg", "science_news_2.jpg", "science_news_3.jpg", "science_news_4.jpg", "science_news_5.jpg", "science_news_6.jpg", "science_news_7.jpg", "science_news_8.jpg", "science_news_9.jpg", "science_news_10.jpg", "science_news_11.jpg", "science_news_12.jpg"
        ]}
    },
    template : `
    <section class="sub_item">
        <div class="wrap">    
            <h2>Science Page</h2>
            <div class="content">
                <div v-for="list in item" class="box" v-bind:style="'background-image:url(./img/science/'+list+')'"></div>
            </div>
        </div>
    </section>
    `
}
const pageTravel = {
    data : () => {
        return {item : [
            "travel_news_1.jpg", "travel_news_2.jpg", "travel_news_3.jpg", "travel_news_4.jpg", "travel_news_5.jpg", "travel_news_6.jpg", "travel_news_7.jpg", "travel_news_8.jpg", "travel_news_9.jpg", "travel_news_10.jpg", "travel_news_11.jpg", "travel_news_12.jpg"
        ]}
    },
    template : `
    <section class="sub_item">
        <div class="wrap">    
            <h2>Travel Page</h2>
            <div class="content">
                <div v-for="list in item" class="box" v-bind:style="'background-image:url(./img/travel/'+list+')'"></div>
            </div>
        </div>
    </section>
    `
}

//이동할 주소명과 사용할 컴포넌트를 등록하여 라우팅을 정의
const rtRoutes = [
    {
        path : "/index.html",
        component : pageMain
    },
    {
        path : "/animal",
        component : pageAnimal
    },
    {
        path : "/history",
        component : pageHistory
    }, 
    {
        path : "/environment",
        component : pageEnvironment
    }, 
    {
        path : "/science",
        component : pageScience
    }, 
    {
        path : "/travel",
        component : pageTravel
    }, 
]

const date = new Date();
const year = date.getFullYear();

//지역 컴포넌트 활용하여 하단 영역 넣는다.
const footer = {
    template : `<footer><p>Copyrights &copy; National Geographic ${year}</p></footer>`
}

//라우터 인스턴스 등록
const router1 = new VueRouter({
    mode : "history",  //mode : "history"라고 선언하면 URL 창에 "#" 표시 제거됨
    routes: rtRoutes
})

new Vue({
    el : "#app",
    router : router1,
    components : {
        "footer-el" : footer
    }
});
