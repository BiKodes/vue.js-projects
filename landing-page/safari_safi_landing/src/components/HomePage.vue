<template>
    <div class="container-fluid m-0 p-0">

        <div id="home-page" class="full-height p-4">
           <div class="caontainer pt-3">
               
               <div class="row pd-5">
                   <div class="col-lg-6 pt-4 my-auto">
                       <div class="text-center mb-3 d-block d-lg-none">
                           <h1 class="display">{{ title }}</h1>
                           <h3>Zingua Mwili</h3>
                       </div>
                       <img id="zumba-img" src="../assets/inspired-horizons-digital-marketing-kufLAiPoIlI-unsplash.jpg" alt="">
                   </div>

                   <div class="col-lg-6 my-auto pt-4">
                       <div class="text-center mb-3 d-none d-lg-block">
                           <h1 class="display">{{ title }}</h1>
                           <h3>Zingua Mwili</h3>
                       </div>
                       
                        <div class="border p-3 p-md-5 bg-white rounded shadow">
                            <h2>Coming Soon!</h2>
                            <form>
                                <div class="form-group">
                                    <label for="emailSignup">Reserve Your Account Now.We will Contanct You When It's Live.</label>
                                    <input id="emailSingup" placeholder="Enter Email" >
                                    <small id="emailHelp" class="form-text text-muted">We'll Never Share Your Email Address.</small>
                                    <button type="submit" class="btn btn-success mt-3">Join Waiting List</button>
                                </div>
                            </form>
                        </div>

                        <div id="available" class="p-2">
                            <h4 class="text-center mb-2 mt-3 text-light">
                                Available On
                            </h4>
                            <div class="row">
                                <div class="col my-auto">
                                    <img src="../assets/apple.png" class="float-right img-fluid app_store_img">
                                </div>
                                <div class="col my-auto">
                                    <img src="../assets/google.png" class="float-left img-fluid app_store_img">
                                </div>
                            </div>

                        </div>

                   </div>
               </div>
            </div> 
        </div>

        <div id="about" class="bg-light p-3 p-md-5">
            <div class="row">
                <div class="col-lg">
                    <img src="../assets/yoga.png" height="120" class="m-4">
                    <h5 class="ml-md-4 mr-md-4"> 
                        We provide yoga and fitness classes seven days a week that assist our members in 
                        the pursuit of a healthy and active lifestyle.

                        Our Studio Team has developed a multi-directional approach for a successful 
                        Yoga and Fitness Program, including: group classes, one on one instruction, 
                        workshops, and community events.

                        It is our hope that we can empower each student to find their own limits and 
                        the style of practice that will fit their individual needs and lifestyle. 
                        Our classes are specifically designed to motivate and encourage all who enter 
                        our studio. We strive for our personal best in each practice and workout.
                    </h5>
                </div>

                <div class="col-lg">
                    <img src="../assets/aqua.png" height="120" class="m-4">
                    <h5 class="ml-md-4 mr-md-4">
                        Water is an extremely versatile element that allows for different levels of 
                        intensity, so literally everybody can benefit from an aquatic training routine. 
                        And no, you don't necessarily have to know how to swim: the pool is 4ft deep and 
                        your head can always stay above water.

                        Whether you are looking for a powerful workout to build muscle strength and 
                        endurance or a more relaxing and restorative workout focused on breathing and 
                        flexibility, we have the right class for you. Make sure you check the class level 
                        when you book your spot!
                    </h5>
                </div>
                <div class="col-lg">
                    <img src="../assets/zumba.png" height="120" class="m-4">
                    <h5 class="ml-md-4 mr-md-4">
                        Zumba is a fun aerobic workout that mixes in dance moves. Find out what to expect from 
                        Zumba classes.Classes can be geared for just about any fitness level. Though most Zumba 
                        involves high .

                        Zumba fitness is an effective interval-style, full-body workout with built-in 
                        variety because every class and every instructor is slightly different. Equally 
                        important is the notion that Zumba classes are entertaining, which means exercisers 
                        are busy burning calories and getting fit while enjoying the fun of Latin dancing.
                    </h5>

                </div>
            </div>
        </div>

         <div id="contact" class="p-4">
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-lg-4">
                    <h2>Have Any Questions?.</h2>
                    <p>Contact us by filling out the information below</p>

                    <form>
                        <div class="form-group text-left">
                            <input type="email" class="form-control" placeholder="Enter Your Email">
                            <textarea class="form-control mt-3" placeholder="Enter Your Message" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>

        <div id="footer" class="p-4">
            <footer class="text-light p-4">
                <a href="https://youtu.be/y6ufUVz3LJ8" target="_blank" class="text_warning">
                    Enjoy Zumba Music
                </a>
                <br>
                <small>&copy; 2021, Fan Fit Kenya</small>
            </footer>
            
        </div>

    </div>
     
</template>

<script>
export default {
    data(){
        return {
            title: 'Mazoezi Ya Mwili'
        }
    }
}
</script>

<style scoped>
#home-page {
    background-color: #92D2F2;
    background: url('../assets/istockphoto-1208437693-2048x2048.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

#about {
    min-height: 40vh;
}

#zumba-img {
    max-height: 80vh;   
}

.app_store_img {
    max-height: 80px;
}

#contact {
    background-color: #57aeaf;
}

#footer {
    background-color: #252223;
}
</style>
    