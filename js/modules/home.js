var alicanSalorHome = angular.module('alicanSalorHomeModule', []);



alicanSalorHome.controller('HomeController', function($scope, $state,$stateParams) {



    $scope.aboutMe = {

        titles : {
            bio : 'Who I am',
            eng : 'Engineering Background',
            dsg : 'Design Background',
            bus : 'Business Background'
        },

        contents : {
            bio : "Born on 24th of December 1990, I have spent most of my life in Ankara, Turkey. Having blessed with generous and loving parents I was able to get a good education and pursue my dreams to become an Electrical Engineer and soon (hopefully by September 2016) a business manager focused on digital innovation and management of technology. Truly, I've been always amazed with technology and how fast it has settled in every essence of our social life through the past years, thus choosing a career path in communications, design and management of these systems, I wanted dedicate my life to creating useful tech. But I have to admit although I always had the passion to take the next step and tackle every challenge coming my way regarding my educational and professional life, music and skateboarding have been an important (really important!) part of my life  which kept me motivated, inspired and most likely sane.",

            eng : "Throughout my undergraduate and graduate studies in Bilkent University and UCLA I have focused on different areas of communications and signal processing. Communications industry has been a significant part of human life and has facilitated multiple technological advancements. Its prominence has increased further with the extensive utility of mobile and wireless technologies in today’s world. Communications and signal processing promise a future with many research areas and technological development.It is a continuously developing industry that will shape the daily lives of every individual human being. \n Both Bilkent University and UCLA accommodates many competent and skillful professors who have contributed to the field of communications and signal processing with their publications and research projects. I believe that these scholars’ presence created the ideal environment for me and fellow peers, in which creativity thrives; an environment that inspires them to pursue what they are passionate about. Especially after studying at UCLA, being almost at the heart of the ever growing tech industry, having lectures from professors who are working on the next big advancement in their field, showed me how much I’m interested in the creativity and dedication that goes into the creation of new technologies. Other than my studies at Bilkent University and UCLA, I was lucky enough to have work experience (internships and a part-time job). 2 summer internships, one in Turkey at ASELSAN, a company developing technology for military use, and one in Germany at Astrium, a subsidiary of EADS creating feasible solutions for scientific experiments done on the International Space Station (ISS). Also while the first two quarters at UCLA, a part-time as a programmer analyst in the IT group, under the International Institute of UCLA.",

            dsg : "I've never taken proper courses on design in university other than an elective course on video production where I have learnt some basics of design and photography as well as cinematography. Although these provided me with some understading of aesthetics, I have to admit, I'm more interested in the human interaction with technology and how different designs improve the usability and utility of these technologies. Last year however, I've had the priviledge of working with designers while I was working as an IT at UCLA. Although I was mainly working on the back-end, I tried to grab and understand every bit of knowledge I could get from the designers about modern, flexible, functional but at the same time easy to use structures of design. Furthermore, as a freelance project I had the opportunity to work with a designer friend of mine on a startup project where we tried to find smart solutions to offering cheap and social trips around Europe and Turkey tailored for different segments of consumers.",

            bus : "After having a MSc degree in Electrical Engineering and having been exposed to the startup culture of the Silicon Valley of California, I have come to the conclusion that, I am more interested in the management of companies that design and develop new technologies or provide SaaS solutions, to the ever growing tech markets. Therefore, pursuing this aim, by following the wise words of my professors\' saying \“there is no better time for a graduate student to be involved in a start-up company\”, I applied London School of Economic and got accepted. Hopefully I will have earned my Master of Management in Digital Innovation and Management of Technology by September 2016. I will then have the opportunity to combine my knowledge on engineering with management to formulate effective strategies useful for small start-up companies. After all, it is the people, skillful in multiple disciplines, who can take a small company to the next level in terms of both creating and marketing a new technology."
        }
        
    };

    $scope.aboutmeTitle =  $scope.aboutMe.titles.bio;
    $scope.aboutmeContent =  $scope.aboutMe.contents.bio;

    $scope.toBio = function(){
        $scope.aboutmeTitle = $scope.aboutMe.titles.bio;
        $scope.aboutmeContent = $scope.aboutMe.contents.bio;
    };

    $scope.toEng = function(){
         $scope.aboutmeTitle = $scope.aboutMe.titles.eng;
        $scope.aboutmeContent = $scope.aboutMe.contents.eng;

    };

    $scope.toDsg = function(){
         $scope.aboutmeTitle = $scope.aboutMe.titles.dsg;
    $scope.aboutmeContent = $scope.aboutMe.contents.dsg;

    };

    $scope.toBus = function(){
         $scope.aboutmeTitle = $scope.aboutMe.titles.bus;
    $scope.aboutmeContent = $scope.aboutMe.contents.bus;

    };


});





