class PaginationHelper {
    collection;
    itemsPerPage;

    constructor(collection, itemsPerPage) {
        this.collection=collection;
        this.itemsPerPage=itemsPerPage
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        if (this.collection.length % this.itemsPerPage === 0)
        {
            return this.collection.length / this.itemsPerPage;
        }
        else
        {
            return Math.floor(this.collection.length / this.itemsPerPage) + 1;
        }
    }

    pageItemCount(pageIndex) {
        const pageNumber = this.pageCount();
        if(pageIndex < 0 || pageIndex >= pageNumber) 
        {
            return -1;
        }
        if (pageIndex === pageNumber-1) {
            const itemsOnLastPage = this.collection.length % this.itemsPerPage;
            if (itemsOnLastPage === 0) {
                return this.itemsPerPage;
            }
            return itemsOnLastPage;
        } else {
            return this.itemsPerPage;
        }
    }
    pageIndex(itemIndex) {

        if (itemIndex < 0 || itemIndex >= this.collection.length){
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}
