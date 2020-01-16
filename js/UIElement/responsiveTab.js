//Responsive tabs
(function(){

    var ResTabs = document.getElementsByClassName("ResTabs")[0];
    var ul = document.createElement("ul");//Created ul 
    ResTabs.appendChild(ul);//Append ul inside ResTabs 
    ul.setAttribute("id", "list");//Set Attribute on ul

    var ulList = document.getElementById('list');

    var tabCont = ['Google', 'Facebook', 'Twitter', 'Infosys', 'Microsoft', 'Apple'];
    var text1 = "";
    var i, j, k, l, m, n, o, p, q;   
    for (i = 0; i < tabCont.length; i++) {        
        text1 +=  "<li><a href='javascript:void();' class='tablinks' data-tab='tab-"+ (i+1) +"\'>" + tabCont[i] +
            "</a></li>";
    }

    ul.innerHTML = text1;


   function insertAfter(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    }

    // insert After sibling element
    var tabKent = document.createElement('div');
    tabKent.setAttribute("class", "tab-Kent"); //Set Attribute on ul    
   
    insertAfter(tabKent, ResTabs);


    //Insert div side tabwrapper
    var liCount = document.querySelectorAll('.tablinks');
    var liCountText = document.querySelectorAll('.tablinks').innerHTML;
    var dynH2 = ['Behind the scenes at Google', 'Facebook gradually added support', 'Getting started with Twitter', 'Infosys Speak', 'Microsoft Corporation', 'The history of Apple'];

    var dyText = ['We are delighted to announce a Search Conference for Indian language publishers. This will be a five-day five-city event in July dedicated to publishers who publish websites in Indian languages. If you are such a publisher, this is the opportunity you may not want to miss.',
        'Facebook is an American for-profit corporation and an online social media and social networking service based in Menlo Park, California. The Facebook website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.',
        'Twitter is the place to find out about what’s happening in the world right now. Whether you’re interested in music, sports, politics, news, celebrities, or everyday moments—come to Twitter to see and join in on what’s happening now. While everyone experiences Twitter differently, here are a few areas that might interest you to help you get started.',
        'We seek to innovate in a way that minimizes the gap between our offerings and client needs, until both are at zero distance from one another. For us, innovation is a quest for a client problem that is as yet unarticulated, or finding that surprisingly innovative way to execute a solution to a known problem. Infosys Nia is a knowledge-based AI platform. It brings machine learning together with the deep knowledge of an organization to drive automation and innovation.',
        'Microsoft Corporation is an American multinational technology company headquartered in Redmond, Washington. It develops, manufactures, licenses, supports and sells computer software, consumer electronics, personal computers, and services.',
        'n this feature we tell the story of Apple. We start with the early days, the tale of how Apple was founded, moving on through the Apple I, to the Apple II, the launch of the Macintosh and the revolution in the DTP industry... To the tech-industry behemoth that we know and love today.'];

    var text2 = "";   
    for (j = 0; j < liCount.length; j++) {        
        text2 +=  "<a href='javascript:void();' class='tabAcc'></a>" +
        "<div class='tabKent' id='tab-" + (j+1) + "\'>" +
        "<h2>"+ dynH2[j] + "</h2>" + 
        "<p>" + dyText[j] + "</p>" +
        "</div>";
        
    }

    tabKent.innerHTML = text2;

    var tabKent2 = document.getElementsByClassName('tabKent');

    liCount[0].classList.add("active");

    if (window.innerWidth > 992) {
        tabKent2[0].classList.add("active");
    }
    

    function openMyTab(){        
        for (l = 0; l < liCount.length; l++) { 
           liCount[l].classList.remove("active");
        }
        for (m = 0; m < tabKent2.length; m++) {
            tabKent2[m].classList.remove("active");
        }

        this.classList.add("active");
        var tabAttr = this.getAttribute("data-tab");        
        var x = document.getElementById(tabAttr);       
        x.classList.add("active"); 
    }

    for (k = 0; k < liCount.length; k++) { 
        liCount[k].addEventListener("click", openMyTab);            
    }

    //Start Accordion
    var tabAcc = document.getElementsByClassName('tabAcc');

    function openMyAcc(){
        var  collapseLevel = this.nextElementSibling;

        if(this.classList.contains('active')){
            this.classList.remove('active');
            collapseLevel.classList.remove('active');           
          }
          else{
            this.classList.add('active');
            collapseLevel.classList.add('active');      
          }        
    }

    for (n = 0; n < tabAcc.length; n++) {
        tabAcc[n].innerHTML = tabCont[n];
        tabAcc[n].addEventListener("click", openMyAcc);            
    }

}());