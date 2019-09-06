
function pageStyle(){
    //Add document title as main heading
    var pageTitle = document.title;
    document.getElementsByTagName('h1')[0].innerHTML = pageTitle;

    //Sidebar Aligned
    var sidePos = document.getElementsByTagName('header')[0].clientHeight;
    document.getElementsByClassName('sidebar')[0].style.top = sidePos + 'px';    
    document.getElementsByClassName('wrapper')[0].style.paddingTop = sidePos + 'px';

    //Body ClassName
    var pathname = window.location.pathname.replace('/JSFramework/', '').slice(0,-6);
    var body = document.body;
    //body.classList.add(pathname);
    body.classList.replace('index', 'home')  
}

pageStyle();

window.onresize = function() {
    pageStyle();
}



//Timer
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('headTime').innerHTML = 
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();


//SideBar Toggle
function CollapseSidbar(){
    var wrapCollapse = document.getElementsByClassName('wrapper')[0];
    function Sidebar(){         
        if(wrapCollapse.classList.contains('sidebar-collapsed')){
            wrapCollapse.classList.remove('sidebar-collapsed');
        }
        else{
            wrapCollapse.classList.add('sidebar-collapsed');
        }        
    }

    document.getElementById('sidebar-toggle').addEventListener("click", Sidebar);

    function sidebarToggle(){
        if (window.innerWidth < 992) {
            wrapCollapse.classList.add('sidebar-collapsed');       
        }
        else {
            wrapCollapse.classList.remove('sidebar-collapsed');                
        } 
    }

    sidebarToggle();
    window.onresize = function() {
        sidebarToggle();
    }
}

CollapseSidbar();


//Drop down Menu function
(function (){
    var menu = document.getElementsByClassName("hasNav");
    var dropNav = document.getElementsByClassName("dropdown");
        
    var i, j, k;

    function openMenu(){

        var dropMenu = this.children[1];        

        if(this.classList.contains('active')){
            this.classList.remove('active');
            dropMenu.classList.remove('active');           
        }
        else{
            for (j = 0; j < menu.length; j++) {
                menu[j].classList.remove("active");
            }
            for (k = 0; k < dropNav.length; k++) {
                dropNav[k].classList.remove("active");
            }
            this.classList.add('active');
            dropMenu.classList.add('active');
        }
    }    

    for (i = 0; i < menu.length; i++) { 
        menu[i].addEventListener("click", openMenu);
    }
}());

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollFunction(event)};

function scrollFunction() {
  var isScrolling;
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
  var s = document.documentElement.scrollHeight;
  var c = document.documentElement.clientHeight;
  var height = s - c;
  var scrolled = (winScroll / height) * 100;
  var n = scrolled.toFixed(0)
    console.log('height' + height);
    console.log('winScroll' + winScroll);
  document.getElementById("myBar").style.width = scrolled + "%";
  document.getElementsByClassName('scrollVal')[0].classList.add('show');
  document.getElementsByClassName('scrollVal')[0].innerHTML = n + "%";
    isScrolling = setTimeout(function() {
        // Run the callback
        document.getElementsByClassName('scrollVal')[0].classList.remove('show');
    }, 500);
}