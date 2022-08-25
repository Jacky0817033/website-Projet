window.onload = function() {
    //List btn function
    var listBtn = document.getElementsByClassName('listBtn');
    var subscribeBtn = document.getElementById('subscribeBtn');
    var burger = document.getElementsByClassName('burger');
    var sideNav = document.getElementById('side-nav');

 /************Add Event***************** */
    for(var i=0; i<listBtn.length; i++){
      listBtn[i].addEventListener('click', listFn)
    }

    subscribeBtn.addEventListener('click', subscribeFn);
    burger[0].addEventListener('click', sideNavFn);
    burger[1].addEventListener('click', sideNavRemoveFn);

/**********************add open class ********************** */
    function listFn(){
      removeOpen();
      this.classList.toggle('open');
    }

    function removeOpen(){
      for(var i=0; i<listBtn.length; i++){
        listBtn[i].classList.remove('open');
      }
    }

/**********************Subscribe Function ********************** */
    function subscribeFn(){
      if(subscribeBtn.innerText == '訂閱'){
        subscribeBtn.classList.add('active');
        subscribeBtn.innerText = '已訂閱'
      }else{
        subscribeBtn.classList.remove('active');
        subscribeBtn.innerText = '訂閱'
      }
    }
/**********************Side nav Function ********************** */
    function sideNavFn(){
      sideNav.classList.add('openList');
    }
    function sideNavRemoveFn(){
      sideNav.classList.remove('openList');
    }
}