mainModule
	.controller("pageController", pCtrl); 

	function pageController() {
		var pCtrl = this;

		pCtrl.things = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31, 32, 33, 34, 35, 36, 37, 38, 39,40,41,42,43,44,45,46,47,48,49,50
    ]

    pCtrl.currentPage = 1;
    pCtrl.pageSize = 50;
    pCtrl.makePages = function(){
        var pages = Math.ceil( pCtrl.things.length / pCtrl.pageSize )
        var pageArray = []
        for(var i = 0; i < pages; i++){
            pageArray.push(i)
        }

        return pageArray
    }

    pCtrl.pageIndex = function(){
        return (pCtrl.currentPage - 1) * pCtrl.pageSize
    }
    pCtrl.setPage = function(page){
        pCtrl.currentPage = page;
    }
}